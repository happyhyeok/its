from __future__ import annotations

import argparse
import math
import shutil
from pathlib import Path

import numpy as np
from PIL import Image


SCRIPT_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = SCRIPT_DIR.parent
ASSET_DIR = PROJECT_ROOT / "lesson4" / "assets" / "lesson4"
BACKUP_DIR = ASSET_DIR / "backup_original_images"

TARGET_FILES = [
    "period4_ambulance_idle.png",
    "period4_ambulance_move.png",
    "period4_general_car_01.png",
    "period4_general_car_02.png",
    "period4_general_car_stop.png",
    "period4_signal_01_red.png",
    "period4_signal_01_green.png",
    "period4_signal_02_red.png",
    "period4_signal_02_green.png",
    "period4_signal_03_red.png",
    "period4_signal_03_green.png",
    "period4_siren_icon.png",
    "period4_start_pin.png",
    "period4_hospital_pin.png",
    "period4_priority_wave.png",
    "period4_time_gauge_empty.png",
    "period4_time_gauge_success.png",
    "simulation_lesson1__assets__common_character_traffic_helper_default.png",
    "simulation_lesson1__assets__common_character_traffic_helper_warning.png",
    "simulation_lesson1__assets__common_character_traffic_helper_success.png",
    "simulation_lesson1__assets__badge_objects_svg__badge_object_04.png",
]

PROTECTED_BACKGROUND_FILES = {
    "period4_bg_emergency_intersection_16x9.png",
    "period4_bg_route_map_16x9.png",
}


def collect_edge_colors(arr: np.ndarray) -> list[tuple[int, int, int]]:
    height, width = arr.shape[:2]
    samples: list[tuple[int, int, int]] = []
    step = max(1, min(width, height) // 80)

    for x in range(0, width, step):
        samples.append(tuple(int(v) for v in arr[0, x, :3]))
        samples.append(tuple(int(v) for v in arr[height - 1, x, :3]))

    for y in range(0, height, step):
        samples.append(tuple(int(v) for v in arr[y, 0, :3]))
        samples.append(tuple(int(v) for v in arr[y, width - 1, :3]))

    rounded: dict[tuple[int, int, int], int] = {}
    for r, g, b in samples:
        if r >= 205 and g >= 205 and b >= 205:
            key = (round(r / 8) * 8, round(g / 8) * 8, round(b / 8) * 8)
            rounded[key] = rounded.get(key, 0) + 1

    return [color for color, _ in sorted(rounded.items(), key=lambda item: item[1], reverse=True)[:10]]


def light_neutral_mask(arr: np.ndarray, relaxed: bool = False) -> np.ndarray:
    rgb = arr[:, :, :3].astype(np.int32)
    alpha = arr[:, :, 3]
    high = 214 if relaxed else 226
    spread = 42 if relaxed else 32
    min_rgb = rgb.min(axis=2)
    max_rgb = rgb.max(axis=2)
    return (alpha == 0) | ((min_rgb >= high) & ((max_rgb - min_rgb) <= spread))


def background_candidate_mask(arr: np.ndarray) -> np.ndarray:
    rgb = arr[:, :, :3].astype(np.int32)
    alpha = arr[:, :, 3]
    candidate = light_neutral_mask(arr, relaxed=False)
    bright_enough = rgb.min(axis=2) >= 206
    edge_colors = collect_edge_colors(arr)

    for color in edge_colors:
        edge = np.array(color, dtype=np.int32).reshape(1, 1, 3)
        distance = np.sqrt(((rgb - edge) ** 2).sum(axis=2))
        candidate |= (alpha == 0) | (bright_enough & (distance <= 30))

    return candidate


def connected_to_border(mask: np.ndarray) -> np.ndarray:
    reachable = np.zeros_like(mask, dtype=bool)
    reachable[0, :] = mask[0, :]
    reachable[-1, :] = mask[-1, :]
    reachable[:, 0] |= mask[:, 0]
    reachable[:, -1] |= mask[:, -1]

    while True:
        grown = reachable.copy()
        grown[1:, :] |= reachable[:-1, :]
        grown[:-1, :] |= reachable[1:, :]
        grown[:, 1:] |= reachable[:, :-1]
        grown[:, :-1] |= reachable[:, 1:]
        grown &= mask
        if np.array_equal(grown, reachable):
            return reachable
        reachable = grown


def dilate(mask: np.ndarray) -> np.ndarray:
    grown = mask.copy()
    grown[1:, :] |= mask[:-1, :]
    grown[:-1, :] |= mask[1:, :]
    grown[:, 1:] |= mask[:, :-1]
    grown[:, :-1] |= mask[:, 1:]
    return grown


def remove_checkerboard(path: Path) -> tuple[int, int]:
    with Image.open(path) as source:
        rgba = source.convert("RGBA")

    arr = np.array(rgba, dtype=np.uint8)
    initial_alpha_zero = int((arr[:, :, 3] == 0).sum())
    candidates = background_candidate_mask(arr)
    background = connected_to_border(candidates)

    # A tiny alpha feather removes the pale checkerboard fringe without touching
    # the dark outlines that protect white vehicle bodies and signal details.
    soft_candidates = light_neutral_mask(arr, relaxed=True)
    expanded = background.copy()
    for _ in range(2):
        expanded |= dilate(expanded) & soft_candidates

    feather = dilate(expanded) & soft_candidates & ~expanded
    arr[:, :, 3][expanded] = 0
    arr[:, :, 3][feather] = np.minimum(arr[:, :, 3][feather], 40)

    Image.fromarray(arr, "RGBA").save(path)
    final_alpha_zero = int((arr[:, :, 3] == 0).sum())
    return int(expanded.sum()), final_alpha_zero - initial_alpha_zero


def backup_original(path: Path, backup_dir: Path) -> Path:
    backup_dir.mkdir(parents=True, exist_ok=True)
    backup_path = backup_dir / path.name
    if not backup_path.exists():
        shutil.copy2(path, backup_path)
    return backup_path


def main() -> None:
    parser = argparse.ArgumentParser(description="Remove edge-connected checkerboard backgrounds from lesson 4 PNGs.")
    parser.add_argument("--asset-dir", type=Path, default=ASSET_DIR)
    args = parser.parse_args()

    asset_dir = args.asset_dir.resolve()
    backup_dir = asset_dir / "backup_original_images"
    processed: list[str] = []

    for filename in TARGET_FILES:
        if filename in PROTECTED_BACKGROUND_FILES:
            raise RuntimeError(f"Protected background file was included by mistake: {filename}")

        path = asset_dir / filename
        if not path.exists():
            raise FileNotFoundError(path)

        backup_path = backup_original(path, backup_dir)
        if backup_path.exists():
            shutil.copy2(backup_path, path)
        removed_pixels, newly_transparent = remove_checkerboard(path)
        processed.append(f"{filename} removed={removed_pixels} newly_transparent={newly_transparent}")

    print("Processed files:")
    for item in processed:
        print(f"- {item}")
    print(f"Backup location: {backup_dir}")


if __name__ == "__main__":
    main()
