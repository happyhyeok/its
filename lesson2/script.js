const ASSET_DIR = "./generated_scene2_assets/";

const ASSETS = {
  bg: ASSET_DIR + "period2_bg_smart_crosswalk_16x9.png",
  bgRed: ASSET_DIR + "period2_bg_stopline_red.png",
  bgYellow: ASSET_DIR + "period2_bg_stopline_yellow.png",
  bgGreen: ASSET_DIR + "period2_bg_stopline_green.png",
  adultWalker: ASSET_DIR + "period2_adult_walker_overlay.png",
  aiCamera: ASSET_DIR + "period2_ai_camera_overlay.png",
  carDown: ASSET_DIR + "period2_car_vertical_down_overlay.png",
  carUp: ASSET_DIR + "period2_car_vertical_up_overlay.png",
  childDanger: ASSET_DIR + "period2_child_danger_phone_overlay.png",
  childNearStopline: ASSET_DIR + "period2_child_near_stopline_overlay.png",
  childSafe: ASSET_DIR + "period2_child_safe_overlay.png",
  elderlyWalker: ASSET_DIR + "period2_elderly_walker_overlay.png",
  finishBadge: "./reference_assets/scene1/simulation_lesson1__assets__badge_objects_svg__badge_object_02.png",
  helperDefault: "./reference_assets/scene1/simulation_lesson1__assets__common_character_traffic_helper_default.png",
  helperSuccess: "./reference_assets/scene1/simulation_lesson1__assets__common_character_traffic_helper_success.png",
  helperWarning: "./reference_assets/scene1/simulation_lesson1__assets__common_character_traffic_helper_warning.png",
  signalGreen: ASSET_DIR + "period2_signal_green_overlay.png",
  signalRed: ASSET_DIR + "period2_signal_red_overlay.png",
  wheelchairUser: ASSET_DIR + "period2_wheelchair_user.png"
};

const BACKGROUND_BY_SIGNAL = {
  red: ASSETS.bgRed,
  yellow: ASSETS.bgYellow,
  green: ASSETS.bgGreen
};

const SIGNAL_IMAGE_BY_STATE = {
  red: ASSETS.signalRed,
  yellow: ASSETS.signalRed,
  green: ASSETS.signalGreen
};

const HELPER_IMAGE_BY_KIND = {
  default: ASSETS.helperDefault,
  success: ASSETS.helperSuccess,
  warning: ASSETS.helperWarning
};

const TEXT = {
  buttons: {
    start: "시작하기",
    next: "다음",
    retry: "처음부터 다시",
    signal: "신호 바꾸기",
    cross: "건너기",
    detectCar: "자동차 감지하기"
  },
  intro: {
    title: "스마트 횡단보도 체험하기",
    number: "시작",
    task: "친구들이 횡단보도 앞에 서 있어요.",
    guide: "누가 위험한 위치에 있는지 찾아볼까요?",
    feedback: "시작하기를 눌러 체험을 시작해요."
  },
  mission1: {
    title: "위험한 친구를 찾아요",
    number: "미션 1",
    task: "차도와 가장 가까운 친구를 눌러요.",
    guide: "스마트폰을 보며 걷는 친구를 살펴보세요.",
    success: "맞았어요! 스마트폰을 보며 차도 가까이 있으면 위험해요.",
    wrong: "다시 살펴볼까요? 차도와 가장 가까운 친구를 찾아보세요."
  },
  mission2: {
    title: "안전한 곳으로 옮겨요",
    number: "미션 2",
    task: "위험한 친구를 인도 안쪽으로 옮겨요.",
    guide: "초록 안전 구역 안으로 드래그해요.",
    success: "좋아요! 차도에서 멀리 떨어진 곳에서 기다리면 더 안전해요.",
    wrong: "조금 더 안쪽으로 옮겨 볼까요?"
  },
  mission3: {
    title: "신호등 약속 지키기",
    number: "미션 3",
    task: "보행 신호등과 LED 정지선을 확인해요.",
    guideRed: "빨간불일 때는 멈춰서 기다려요.",
    guideGreen: "초록불이에요. 좌우를 살피고 천천히 건너요.",
    redCross: "아직 빨간불이에요. 멈춰서 기다려요.",
    success: "신호를 잘 지키며 건넜어요!"
  },
  mission4: {
    title: "천천히 걷는 사람 도와주기",
    number: "미션 4",
    task: "더 긴 시간이 필요한 사람을 골라요.",
    guide: "천천히 걷는 사람도 안전하게 건널 수 있어요.",
    success: "맞아요! 천천히 걷는 사람은 시간이 더 필요해요.",
    wrong: "다시 생각해 볼까요? 더 천천히 걷는 사람을 골라 보세요."
  },
  mission4Wheelchair: {
    title: "휠체어 친구도 생각해요",
    number: "미션 4-2",
    task: "휠체어를 탄 친구도 더 긴 시간이 필요할까요?",
    guide: "충분히 건널 수 있도록 시간을 더 줄 수 있어요.",
    success: "맞아요. 다리가 불편한 사람은 더 긴 시간이 필요해요.",
    wrong: "다시 생각해 볼까요? 천천히 이동하는 친구도 시간이 더 필요해요."
  },
  mission5: {
    title: "자동차 감지 확인",
    number: "미션 5",
    task: "자동차가 멈췄는지 확인해요.",
    guide: "AI 카메라가 자동차를 살펴봐요.",
    detect: "자동차가 멈췄어요. 이제 안전하게 건널 수 있어요.",
    tooSoon: "자동차가 가까워요. 먼저 멈췄는지 확인해요.",
    success: "자동차가 멈춘 것을 확인하고 안전하게 건넜어요!"
  },
  finish: {
    title: "축하해요!",
    number: "완료",
    task: "스마트 횡단보도 탐정 배지를 획득했어요.",
    guide: "버스 안내 탐정에 이어 안전 탐정이 되었어요.",
    badgeEarned: "배지 획득!",
    badgeName: "스마트 횡단보도 탐정",
    summary: "신호를 확인하고, 천천히 걷는 사람과 자동차를 살피며 안전하게 건넜어요."
  }
};

const CONFIG = {
  stage: { width: 1280, height: 720 },
  placements: {
    signal: { x: 912, y: 178, w: 92, h: 188 },
    camera: { x: 1042, y: 50, w: 150, h: 105 },
    childSafe: { x: 1110, y: 300, h: 150 },
    childNear: { x: 1010, y: 325, h: 150 },
    childDanger: { x: 875, y: 372, h: 150 },
    childMoved: { x: 1120, y: 350, h: 150 },
    walker: { x: 930, y: 350, h: 150, targetX: 50 },
    elderly: { x: 930, y: 345, h: 155, targetX: 50 },
    adult: { x: 930, y: 350, h: 165, targetX: 50 },
    wheelchair: { x: 930, y: 370, w: 150, h: 140, targetX: 50 },
    carDown: { x: 570, y: 240, w: 110, h: 180, targetY: 760, stopY: 270 },
    carUp: { x: 707, y: 650, w: 110, h: 180, targetY: -120, stopY: 470 }
  },
  safeZone: { x1: 1030, x2: 1190, y1: 260, y2: 430 },
  crossing: { startX: 930, targetX: 50, duration: 4300, elderlyDuration: 6200, wheelchairDuration: 6800 }
};

const state = {
  currentMission: 0,
  signalState: "red",
  carStopped: false,
  dangerChildMoved: false,
  missionComplete: false,
  crossing: false
};

const dom = {
  wrap: document.querySelector(".stage-wrap"),
  stage: document.getElementById("stage"),
  bg: document.getElementById("sceneBg"),
  layer: document.getElementById("objectLayer"),
  missionCard: document.querySelector(".mission-card"),
  helper: document.getElementById("trafficHelper"),
  missionTitle: document.getElementById("missionTitle"),
  missionNumber: document.getElementById("missionNumber"),
  missionTask: document.getElementById("missionTask"),
  missionGuide: document.getElementById("missionGuide"),
  feedbackCard: document.getElementById("feedbackCard"),
  feedbackText: document.getElementById("feedbackText"),
  controls: document.getElementById("controls"),
  assetError: document.getElementById("assetError")
};

const timers = new Set();

function init() {
  dom.bg.src = ASSETS.bgRed;
  dom.bg.alt = "스마트 횡단보도 배경";
  validateAssets();
  resizeStage();
  window.addEventListener("resize", resizeStage);
  resetSimulation();
}

function validateAssets() {
  Object.entries(ASSETS).forEach(([key, path]) => {
    const image = new Image();
    image.onerror = () => {
      console.error(`이미지 파일 없음: ${key} -> ${path}`);
      dom.assetError.hidden = false;
    };
    image.src = path;
  });
}

function resizeStage() {
  const margin = 24;
  const availableWidth = Math.max(320, window.innerWidth - margin);
  const availableHeight = Math.max(180, window.innerHeight - margin);
  const scale = Math.min(
    availableWidth / CONFIG.stage.width,
    availableHeight / CONFIG.stage.height
  );

  dom.wrap.style.width = `${CONFIG.stage.width * scale}px`;
  dom.wrap.style.height = `${CONFIG.stage.height * scale}px`;
  dom.stage.style.transform = `scale(${scale})`;
}

function schedule(callback, delay) {
  const timer = window.setTimeout(() => {
    timers.delete(timer);
    callback();
  }, delay);
  timers.add(timer);
  return timer;
}

function clearTimers() {
  timers.forEach((timer) => window.clearTimeout(timer));
  timers.clear();
}

function setMission(text, feedback) {
  dom.missionTitle.textContent = text.title;
  dom.missionNumber.textContent = text.number;
  dom.missionTask.textContent = text.task;
  dom.missionGuide.textContent = text.guide || text.guideRed || "";
  setFeedback(feedback || text.feedback || "");
}

function setFeedback(message, attention = false) {
  dom.feedbackText.textContent = message;
  if (!attention) return;

  dom.feedbackCard.classList.remove("attention");
  void dom.feedbackCard.offsetWidth;
  dom.feedbackCard.classList.add("attention");
}

function setButtons(buttons) {
  dom.controls.replaceChildren();
  buttons.forEach((buttonConfig) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `sim-button ${buttonConfig.kind || ""}`;
    button.textContent = buttonConfig.label;
    button.disabled = Boolean(buttonConfig.disabled);
    button.addEventListener("click", buttonConfig.onClick);
    dom.controls.appendChild(button);
  });
}

function resetSimulation() {
  clearTimers();
  state.currentMission = 0;
  state.signalState = "red";
  state.carStopped = false;
  state.dangerChildMoved = false;
  state.missionComplete = false;
  state.crossing = false;
  showIntro();
}

function clearScene() {
  dom.layer.replaceChildren();
  state.crossing = false;
}

function renderBase(options = {}) {
  clearScene();
  addCameraMask();
  addImage("signal", ASSETS.signalRed, CONFIG.placements.signal, "signal");
  addImage("camera", ASSETS.aiCamera, CONFIG.placements.camera, "ai-camera");
  addHelper(options.helper || "default");
  setSignalState(options.signal || "red");
}

function addCameraMask() {
  const mask = document.createElement("div");
  mask.className = "camera-mask";
  dom.layer.appendChild(mask);
}

function addHelper(kind = "default") {
  const helperKind = HELPER_IMAGE_BY_KIND[kind] ? kind : "default";
  let helper = dom.helper || document.getElementById("trafficHelper");
  if (!helper) {
    helper = document.createElement("img");
    helper.id = "trafficHelper";
    helper.alt = "교통 안전 안내 도우미";
    helper.draggable = false;
    dom.missionCard.prepend(helper);
    dom.helper = helper;
  }
  helper.className = `traffic-helper is-${helperKind}`;
  helper.src = HELPER_IMAGE_BY_KIND[helperKind];
  helper.alt = "교통 안전 안내 도우미";
  return helper;
}

function setHelper(kind = "default") {
  const helperKind = HELPER_IMAGE_BY_KIND[kind] ? kind : "default";
  const helper = addHelper(helperKind);
  helper.src = HELPER_IMAGE_BY_KIND[helperKind];
  helper.classList.remove("is-default", "is-success", "is-warning", "helper-pop");
  void helper.offsetWidth;
  helper.classList.add(`is-${helperKind}`, "helper-pop");
}

function showIntro() {
  state.currentMission = 0;
  renderBase({ signal: "red", helper: "default" });
  setMission(TEXT.intro, TEXT.intro.feedback);
  setButtons([{ label: TEXT.buttons.start, kind: "success", onClick: startMission1 }]);
  addChildren(false);
}

function startMission1() {
  state.currentMission = 1;
  state.missionComplete = false;
  renderBase({ signal: "red", helper: "warning" });
  setMission(TEXT.mission1, "위험한 위치에 있는 친구를 눌러요.");
  setButtons([]);
  addChildren(true);
}

function startMission2() {
  state.currentMission = 2;
  state.missionComplete = false;
  state.dangerChildMoved = false;
  renderBase({ signal: "yellow", helper: "warning" });
  setMission(TEXT.mission2, "위험한 친구를 초록 안전 구역으로 옮겨요.");
  setButtons([]);
  addSafeZone();
  addChildren(false, { hideDanger: true });
  const danger = addActor("dangerDrag", ASSETS.childDanger, CONFIG.placements.childDanger, {
    className: "actor clickable",
    ariaLabel: "위험한 친구 드래그하기"
  });
  setupDrag(danger);
}

function startMission3() {
  state.currentMission = 3;
  state.missionComplete = false;
  renderBase({ signal: "red", helper: "warning" });
  setMission(TEXT.mission3, TEXT.mission3.guideRed);
  setButtons([
    { label: TEXT.buttons.signal, kind: "warning", onClick: changeSignal },
    { label: TEXT.buttons.cross, kind: "success", onClick: crossOnSignal }
  ]);
  addWalkPath();
  addActor("signalWalker", ASSETS.childSafe, { x: CONFIG.crossing.startX, y: 350, h: 150 }, {
    className: "actor",
    ariaLabel: "건널 어린이"
  });
}

function startMission4() {
  state.currentMission = 4;
  state.missionComplete = false;
  renderBase({ signal: "green", helper: "default" });
  setMission(TEXT.mission4, "누가 더 긴 시간이 필요할까요?");
  setButtons([]);
  renderChoicePanel();
}

function startMission5() {
  state.currentMission = 5;
  state.carStopped = false;
  state.missionComplete = false;
  renderBase({ signal: "yellow", helper: "warning" });
  setMission(TEXT.mission5, "자동차가 가까이 오고 있어요.");
  setButtons([
    { label: TEXT.buttons.detectCar, kind: "warning", onClick: detectCar },
    { label: TEXT.buttons.cross, kind: "success", onClick: crossAfterCarStop }
  ]);

  const car = addImage("approachingCar", ASSETS.carDown, CONFIG.placements.carDown, "vehicle");
  addActor("finalWalker", ASSETS.childSafe, { x: CONFIG.crossing.startX, y: 350, h: 150 }, {
    className: "actor",
    ariaLabel: "건널 준비를 하는 어린이"
  });
  schedule(() => {
    car.style.transition = "top 2600ms linear";
    car.style.top = `${CONFIG.placements.carDown.stopY - 30}px`;
  }, 80);
}

function showFinish() {
  state.currentMission = 6;
  state.missionComplete = true;
  renderBase({ signal: "green", helper: "success" });
  setMission(TEXT.finish, TEXT.finish.guide);
  setButtons([{ label: TEXT.buttons.retry, kind: "success", onClick: resetSimulation }]);

  const panel = document.createElement("div");
  panel.className = "finish-panel";
  const badge = document.createElement("img");
  badge.className = "finish-badge";
  badge.src = ASSETS.finishBadge;
  badge.alt = `${TEXT.finish.badgeName} 배지`;

  const copy = document.createElement("div");
  copy.className = "finish-copy";
  const title = document.createElement("h2");
  title.textContent = TEXT.finish.title;
  const earned = document.createElement("strong");
  earned.className = "badge-earned";
  earned.textContent = TEXT.finish.badgeEarned;
  const badgeName = document.createElement("p");
  badgeName.className = "badge-name";
  badgeName.textContent = TEXT.finish.badgeName;
  const summary = document.createElement("p");
  summary.textContent = TEXT.finish.summary;
  copy.append(title, earned, badgeName, summary);
  panel.append(badge, copy);
  dom.layer.appendChild(panel);
}

function addChildren(clickable, options = {}) {
  addActor("childSafe", ASSETS.childSafe, CONFIG.placements.childSafe, {
    className: clickable ? "actor clickable" : "actor",
    ariaLabel: "안전한 위치의 어린이",
    onClick: clickable ? wrongFriend : null
  });
  addActor("childNear", ASSETS.childNearStopline, CONFIG.placements.childNear, {
    className: clickable ? "actor clickable" : "actor",
    ariaLabel: "정지선 가까이 있는 어린이",
    onClick: clickable ? wrongFriend : null
  });
  if (options.hideDanger) return;

  const dangerRect = state.dangerChildMoved ? CONFIG.placements.childMoved : CONFIG.placements.childDanger;
  addActor("childDanger", ASSETS.childDanger, dangerRect, {
    className: clickable ? "actor clickable" : "actor",
    ariaLabel: "스마트폰을 보며 차도 가까이 있는 어린이",
    onClick: clickable ? correctDangerFriend : null
  });
}

function correctDangerFriend(event) {
  if (state.missionComplete) return;
  state.missionComplete = true;
  setHelper("success");
  const actor = event.currentTarget;
  actor.classList.remove("clickable");
  actor.classList.add("success-pop");
  addCheck(CONFIG.placements.childDanger);
  addSparkle(CONFIG.placements.childDanger, 152);
  setFeedback(TEXT.mission1.success);
  setButtons([{ label: TEXT.buttons.next, kind: "success", onClick: startMission2 }]);
}

function wrongFriend(event) {
  setHelper("warning");
  shakeElement(event.currentTarget);
  setFeedback(TEXT.mission1.wrong, true);
}

function addSafeZone() {
  const zone = document.createElement("div");
  zone.className = "safe-zone";
  zone.textContent = "안전한 곳";
  dom.layer.appendChild(zone);
}

function setupDrag(actor) {
  let dragging = false;
  let offset = { x: 0, y: 0 };
  let current = { ...CONFIG.placements.childDanger };

  const onMove = (event) => {
    if (!dragging) return;
    event.preventDefault();
    const point = getStagePoint(event);
    current.x = clamp(point.x - offset.x, 0, CONFIG.stage.width - current.w);
    current.y = clamp(point.y - offset.y, 0, CONFIG.stage.height - current.h);
    setRect(actor, current);
  };

  const removeDragListeners = () => {
    document.removeEventListener("pointermove", onMove);
    document.removeEventListener("pointerup", onUp);
    document.removeEventListener("pointercancel", onCancel);
  };

  const onCancel = () => {
    dragging = false;
    actor.classList.remove("dragging");
    removeDragListeners();
  };

  const onUp = (event) => {
    if (!dragging) return;
    dragging = false;
    if (actor.hasPointerCapture && actor.hasPointerCapture(event.pointerId)) {
      actor.releasePointerCapture(event.pointerId);
    }
    actor.classList.remove("dragging");
    removeDragListeners();

    if (isInSafeZone(current)) {
      state.missionComplete = true;
      state.dangerChildMoved = true;
      current = normalizeRect(CONFIG.placements.childMoved);
      setRect(actor, current);
      actor.classList.remove("clickable");
      actor.classList.add("success-pop");
      setHelper("success");
      setSignalState("green");
      addCheck(current);
      addSparkle(current, 152);
      setFeedback(TEXT.mission2.success);
      setButtons([{ label: TEXT.buttons.next, kind: "success", onClick: startMission3 }]);
      return;
    }

    current = normalizeRect(CONFIG.placements.childDanger);
    setRect(actor, current);
    setHelper("warning");
    setSignalState("yellow");
    shakeElement(actor);
    setFeedback(TEXT.mission2.wrong, true);
  };

  actor.addEventListener("pointerdown", (event) => {
    if (state.missionComplete) return;
    event.preventDefault();
    dragging = true;
    const point = getStagePoint(event);
    offset = { x: point.x - current.x, y: point.y - current.y };
    current = normalizeRect(current);
    if (actor.setPointerCapture) {
      actor.setPointerCapture(event.pointerId);
    }
    actor.classList.add("dragging");
    document.addEventListener("pointermove", onMove);
    document.addEventListener("pointerup", onUp);
    document.addEventListener("pointercancel", onCancel);
  });
}

function changeSignal() {
  if (state.signalState === "green") return;
  setHelper("success");
  setSignalState("green");
  dom.missionGuide.textContent = TEXT.mission3.guideGreen;
  setFeedback(TEXT.mission3.guideGreen);
}

function crossOnSignal() {
  if (state.crossing || state.missionComplete) return;
  if (state.signalState !== "green") {
    setHelper("warning");
    setFeedback(TEXT.mission3.redCross, true);
    return;
  }

  const walker = document.getElementById("signalWalker");
  state.crossing = true;
  setButtons([]);
  setFeedback("천천히 건너고 있어요.");
  animateLeft(walker, CONFIG.crossing.targetX, CONFIG.crossing.duration, () => {
    state.crossing = false;
    state.missionComplete = true;
    setHelper("success");
    setFeedback(TEXT.mission3.success);
    setButtons([{ label: TEXT.buttons.next, kind: "success", onClick: startMission4 }]);
  });
}

function renderChoicePanel() {
  const panel = document.createElement("div");
  panel.className = "choice-panel";
  panel.append(
    createChoice("어린이", ASSETS.childSafe, false, "choice-child"),
    createChoice("어르신", ASSETS.elderlyWalker, true, "choice-elderly"),
    createChoice("빠른 친구", ASSETS.adultWalker, false, "choice-fast")
  );
  dom.layer.appendChild(panel);
}

function createChoice(label, src, correct, variant = "") {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `choice-card image-only ${variant}`.trim();
  button.setAttribute("aria-label", label);
  button.innerHTML = "";

  const image = document.createElement("img");
  image.src = src;
  image.alt = "";
  image.draggable = false;

  button.append(image);
  button.addEventListener("click", () => {
    if (state.missionComplete) return;
    if (!correct) {
      setHelper("warning");
      shakeElement(button);
      setFeedback(TEXT.mission4.wrong, true);
      return;
    }
    completeMission4(button);
  });
  return button;
}

function completeMission4(selectedButton) {
  state.missionComplete = true;
  setHelper("success");
  selectedButton.classList.add("selected");
  dom.layer.querySelectorAll(".choice-card").forEach((card) => {
    card.disabled = true;
  });
  const choicePanel = selectedButton.closest(".choice-panel");
  schedule(() => {
    if (choicePanel) choicePanel.classList.add("is-hidden");
  }, 500);
  setFeedback(TEXT.mission4.success);
  addTimePanel("기본 시간 10초 → 배려 시간 17초");

  const elderly = addActor("elderlyWalker", ASSETS.elderlyWalker, CONFIG.placements.elderly, {
    className: "actor",
    ariaLabel: "천천히 건너는 어르신"
  });
  addWalkPath();
  animateLeft(elderly, CONFIG.placements.elderly.targetX, CONFIG.crossing.elderlyDuration, () => {
    setFeedback("다음을 클릭하세요.");
    setButtons([{ label: TEXT.buttons.next, kind: "success", onClick: startMission4Wheelchair }]);
  });
}

function startMission4Wheelchair() {
  state.currentMission = 4;
  state.missionComplete = false;
  renderBase({ signal: "green", helper: "default" });
  setMission(TEXT.mission4Wheelchair, "누가 더 긴 시간이 필요할까요?");
  setButtons([]);
  renderWheelchairPanel();
}

function renderWheelchairPanel() {
  const panel = document.createElement("div");
  panel.className = "choice-panel two-choice";
  panel.append(
    createWheelchairChoice("시간 더 주기", ASSETS.wheelchairUser, true),
    createWheelchairChoice("그냥 건너기", ASSETS.childSafe, false)
  );
  dom.layer.appendChild(panel);
}

function createWheelchairChoice(label, src, correct) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "choice-card image-only";
  button.setAttribute("aria-label", label);
  button.innerHTML = "";

  const image = document.createElement("img");
  image.src = src;
  image.alt = "";
  image.draggable = false;

  button.append(image);
  button.addEventListener("click", () => {
    if (state.missionComplete) return;
    if (!correct) {
      setHelper("warning");
      shakeElement(button);
      setFeedback(TEXT.mission4Wheelchair.wrong, true);
      return;
    }
    completeMission4Wheelchair(button);
  });
  return button;
}

function completeMission4Wheelchair(selectedButton) {
  state.missionComplete = true;
  setHelper("success");
  selectedButton.classList.add("selected");
  dom.layer.querySelectorAll(".choice-card").forEach((card) => {
    card.disabled = true;
  });
  const choicePanel = selectedButton.closest(".choice-panel");
  setFeedback(TEXT.mission4Wheelchair.success);
  updateTimePanel("기본 시간 10초 → 충분한 시간 22초");

  schedule(() => {
    if (choicePanel) choicePanel.classList.add("is-hidden");
    const wheelchair = addActor("wheelchairWalker", ASSETS.wheelchairUser, CONFIG.placements.wheelchair, {
      className: "actor wheelchair-actor",
      ariaLabel: "휠체어를 탄 친구"
    });
    addWalkPath();
    animateLeft(wheelchair, CONFIG.placements.wheelchair.targetX, CONFIG.crossing.wheelchairDuration, () => {
      setButtons([{ label: TEXT.buttons.next, kind: "success", onClick: startMission5 }]);
    });
  }, 500);
}

function addTimePanel(labelText) {
  const panel = document.createElement("div");
  panel.className = "time-panel";
  const label = document.createElement("strong");
  label.textContent = labelText;
  const track = document.createElement("div");
  track.className = "time-track";
  const fill = document.createElement("span");
  fill.className = "time-fill";
  track.appendChild(fill);
  panel.append(label, track);
  dom.layer.appendChild(panel);
}

function updateTimePanel(labelText) {
  const panel = dom.layer.querySelector(".time-panel");
  if (!panel) {
    addTimePanel(labelText);
    return;
  }
  const label = panel.querySelector("strong");
  const fill = panel.querySelector(".time-fill");
  label.textContent = labelText;
  fill.classList.remove("time-fill");
  void fill.offsetWidth;
  fill.classList.add("time-fill");
}

function detectCar() {
  if (state.carStopped) return;
  state.carStopped = true;
  setHelper("success");
  const car = document.getElementById("approachingCar");
  if (car) {
    car.style.transition = "top 500ms ease-out";
    car.style.top = `${CONFIG.placements.carDown.stopY}px`;
    car.classList.add("success-pop");
  }
  addCameraWave();
  setSignalState("green");
  setFeedback(TEXT.mission5.detect);
  setButtons([{ label: TEXT.buttons.cross, kind: "success", onClick: crossAfterCarStop }]);
}

function crossAfterCarStop() {
  if (state.crossing || state.missionComplete) return;
  if (!state.carStopped) {
    setHelper("warning");
    setFeedback(TEXT.mission5.tooSoon, true);
    const car = document.getElementById("approachingCar");
    if (car) shakeElement(car);
    return;
  }

  state.crossing = true;
  setHelper("success");
  setButtons([]);
  setFeedback(TEXT.mission5.success);
  addWalkPath();
  let walker = document.getElementById("finalWalker");
  if (!walker) {
    walker = addActor("finalWalker", ASSETS.childSafe, { x: CONFIG.crossing.startX, y: 350, h: 150 }, {
      className: "actor",
      ariaLabel: "안전하게 건너는 어린이"
    });
  }
  walker.setAttribute("aria-label", "안전하게 건너는 어린이");
  animateLeft(walker, CONFIG.crossing.targetX, CONFIG.crossing.duration, () => {
    state.crossing = false;
    showFinish();
  });
}

function addImage(id, src, rect, className = "") {
  const image = document.createElement("img");
  image.id = id;
  image.className = `scene-object ${className}`.trim();
  image.src = src;
  image.alt = "";
  image.draggable = false;
  setRect(image, rect);
  dom.layer.appendChild(image);
  return image;
}

function addActor(id, src, rect, options = {}) {
  const actor = document.createElement(options.onClick ? "button" : "div");
  actor.id = id;
  actor.className = `object-button ${options.className || ""}`.trim();
  if (options.onClick) {
    actor.type = "button";
    actor.addEventListener("click", options.onClick);
  }
  actor.setAttribute("aria-label", options.ariaLabel || "");
  const image = document.createElement("img");
  image.src = src;
  image.alt = "";
  image.draggable = false;
  actor.appendChild(image);
  setRect(actor, rect);
  dom.layer.appendChild(actor);
  return actor;
}

function addWalkPath() {
  if (document.querySelector(".walk-path")) return;
  const path = document.createElement("div");
  path.className = "walk-path";
  dom.layer.appendChild(path);
}

function addCheck(rect) {
  const box = normalizeRect(rect);
  const check = document.createElement("div");
  check.className = "check-badge";
  check.textContent = "✓";
  check.style.setProperty("--x", `${box.x + box.w - 30}px`);
  check.style.setProperty("--y", `${box.y - 12}px`);
  dom.layer.appendChild(check);
}

function addSparkle(rect, size) {
  const box = normalizeRect(rect);
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle-ring";
  sparkle.style.setProperty("--x", `${box.x + box.w / 2 - size / 2}px`);
  sparkle.style.setProperty("--y", `${box.y + box.h / 2 - size / 2}px`);
  sparkle.style.setProperty("--size", `${size}px`);
  dom.layer.appendChild(sparkle);
  sparkle.addEventListener("animationend", () => sparkle.remove(), { once: true });
}

function addCameraWave() {
  const wave = document.createElement("div");
  wave.className = "camera-wave";
  dom.layer.appendChild(wave);
  wave.addEventListener("animationend", () => wave.remove(), { once: true });
}

function setSignalState(signalState) {
  const nextState = BACKGROUND_BY_SIGNAL[signalState] ? signalState : "red";
  state.signalState = nextState;
  dom.bg.src = BACKGROUND_BY_SIGNAL[nextState];

  const signal = document.getElementById("signal");
  if (!signal) return;
  signal.src = SIGNAL_IMAGE_BY_STATE[nextState];
  signal.classList.remove("glow");
  void signal.offsetWidth;
  signal.classList.add("glow");
}

function animateLeft(element, targetX, duration, callback) {
  if (!element) return;
  element.style.transition = `left ${duration}ms ease-in-out`;
  element.style.zIndex = "30";
  schedule(() => {
    element.style.left = `${targetX}px`;
  }, 40);
  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    element.removeEventListener("transitionend", finish);
    element.style.transition = "";
    callback();
  };
  element.addEventListener("transitionend", finish);
  schedule(finish, duration + 220);
}

function shakeElement(element) {
  if (!element) return;
  element.classList.remove("shake");
  void element.offsetWidth;
  element.classList.add("shake");
}

function getStagePoint(event) {
  const rect = dom.stage.getBoundingClientRect();
  return {
    x: ((event.clientX - rect.left) / rect.width) * CONFIG.stage.width,
    y: ((event.clientY - rect.top) / rect.height) * CONFIG.stage.height
  };
}

function isInSafeZone(rect) {
  const box = normalizeRect(rect);
  const centerX = box.x + box.w / 2;
  const centerY = box.y + box.h / 2;
  return (
    centerX >= CONFIG.safeZone.x1 &&
    centerX <= CONFIG.safeZone.x2 &&
    centerY >= CONFIG.safeZone.y1 &&
    centerY <= CONFIG.safeZone.y2
  );
}

function setRect(element, rect) {
  const box = normalizeRect(rect);
  element.style.setProperty("--x", `${box.x}px`);
  element.style.setProperty("--y", `${box.y}px`);
  element.style.setProperty("--w", `${box.w}px`);
  element.style.setProperty("--h", `${box.h}px`);
  element.style.left = `${box.x}px`;
  element.style.top = `${box.y}px`;
  element.style.width = `${box.w}px`;
  element.style.height = `${box.h}px`;
}

function normalizeRect(rect) {
  const height = rect.h;
  const width = rect.w || Math.round(height * 0.55);
  return { x: rect.x, y: rect.y, w: width, h: height };
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

init();
