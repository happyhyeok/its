const assets = {
  roadBg: "./assets/lesson3/period3_bg_road_vms_16x9.png",
  mapBg: "./assets/lesson3/period3_bg_route_map_16x9.png",
  bus: "./assets/lesson3/period3_bus_side.png",
  busMove: "./assets/lesson3/period3_bus_side_move.png",
  accident: "./assets/lesson3/period3_icon_accident_car.png",
  construction: "./assets/lesson3/period3_icon_construction.png",
  jam: "./assets/lesson3/period3_icon_traffic_jam.png",
  smoothTraffic: "./assets/lesson3/period3_icon_smooth_traffic.png",
  startPin: "./assets/lesson3/period3_pin_start.png",
  goalPin: "./assets/lesson3/period3_pin_goal.png",
  routeRed: "./assets/lesson3/period3_route_choice_card_red.png",
  routeYellow: "./assets/lesson3/period3_route_choice_card_yellow.png",
  routeGreen: "./assets/lesson3/period3_route_choice_card_green.png",
  helperDefault: "./assets/common/characters/common_character_traffic_helper_default.png",
  helperWarning: "./assets/common/characters/common_character_traffic_helper_warning.png",
  helperSuccess: "./assets/common/characters/common_character_traffic_helper_success.png",
  badge: "./assets/common/badges/badge_object_03.png",
};

const missions = [
  {
    task: "버스를 출발시켜요",
    guide: "버스를 출발시켜 볼까요?",
    helper: "버스를 출발시켜 볼까요?",
  },
  {
    task: "도로 상황을 조사해요",
    guide: "아이콘을 눌러 도로 상황을 알아봐요.",
    helper: "아이콘을 눌러 도로 상황을 알아봐요.",
  },
  {
    task: "VMS 문구를 만들어요",
    guide: "앞길이 막혔을 때 필요한 안내를 골라요.",
    helper: "운전자가 볼 전광판 문구를 골라 봐요.",
  },
  {
    task: "길을 골라요",
    guide: "지도에서 안전한 길을 찾아요.",
    helper: "빨강, 노랑, 초록 길을 살펴보고 안전한 길을 골라요.",
  },
  {
    task: "내가 관제센터가 되어 보기",
    guide: "관제센터 순서를 차례대로 눌러요.",
    helper: "관제센터가 하는 일을 바른 순서로 눌러 봐요.",
  },
  {
    task: "길찾기 관제 배지를 획득해요",
    guide: "모든 미션을 완료했어요.",
    helper: "축하해요! 안전한 길을 잘 찾았어요.",
  },
];

const roadItems = [
  {
    kind: "accident",
    label: "사고",
    image: assets.accident,
    message: "사고 발생!",
  },
  {
    kind: "construction",
    label: "공사",
    image: assets.construction,
    message: "도로 공사 중!",
  },
  {
    kind: "jam",
    label: "정체",
    image: assets.jam,
    message: "차가 많아 천천히 가야 해요!",
  },
];

const vmsCards = ["앞길 막힘", "오른쪽 길로 가세요", "천천히 가세요", "다른 길로 가세요"];
const vmsAnswer = ["앞길 막힘", "오른쪽 길로 가세요"];

const orderAnswer = ["accident", "vms", "route", "arrive"];
const orderCards = [
  { key: "vms", text: "전광판에 알린다" },
  { key: "accident", text: "사고를 찾는다" },
  { key: "arrive", text: "안전하게 도착한다" },
  { key: "route", text: "다른 길을 고른다" },
];

const routeChoiceCards = [
  { route: "red", image: assets.routeRed, lines: ["빨간 길", "사고 길"] },
  { route: "yellow", image: assets.routeYellow, lines: ["노란 길", "느린 길"] },
  { route: "green", image: assets.routeGreen, lines: ["초록 길", "안전한 길"] },
];

const mission4HazardIcons = {
  accident: {
    image: assets.accident,
    className: "accident",
    label: "사고 차량",
  },
  construction: {
    image: assets.construction,
    className: "construction",
    label: "공사",
  },
  smoothTraffic: {
    image: assets.smoothTraffic,
    className: "smooth-traffic",
    label: "원활하게 운행 중인 차량",
  },
};

const mission4RoutePaths = {
  red: "M170 586 C260 574 330 516 382 440 C424 380 400 306 462 250 C505 212 570 220 606 178 C660 114 750 100 890 99 C982 99 1086 94 1136 92",
  yellow:
    "M170 586 C260 566 326 514 392 438 C486 386 568 380 676 382 C748 382 800 358 823 314 C846 270 910 248 1004 250 C1080 250 1122 224 1138 176 C1148 142 1158 112 1170 96",
  green:
    "M170 586 C250 590 318 552 392 518 C520 470 690 474 866 474 C1012 474 1126 476 1198 444 C1234 428 1238 382 1214 346 C1188 308 1180 250 1188 196 C1192 160 1184 132 1152 118",
};

const baseVmsLayout = {
  x: 430,
  y: 10,
  width: 690,
  height: 440,
  imageX: -66,
  imageY: -38,
  imageWidth: 820,
  textX: 145,
  textY: 75,
  textWidth: 475,
  textHeight: 112,
};

const sceneLayouts = {
  mission1: {
    missionPanel: { x: 32, y: 24, width: 380, maxHeight: 164 },
    helper: { x: 1010, y: 420, height: 230 },
    bubble: { x: 640, y: 320, width: 350, minHeight: 95 },
    controls: { right: 320, bottom: 42 },
    vms: baseVmsLayout,
  },
  mission2: {
    missionPanel: { x: 32, y: 24, width: 380, maxHeight: 164 },
    roadCards: { x: 748, y: 282, width: 112, gap: 22 },
    helper: { x: 1110, y: 472, height: 210 },
    bubble: { x: 770, y: 540, width: 320, minHeight: 88 },
    controls: { right: 320, bottom: 30 },
    vms: baseVmsLayout,
  },
  mission3: {
    missionPanel: { x: 32, y: 24, width: 380, maxHeight: 164 },
    vmsChoice: { x: 32, y: 270, width: 360 },
    helper: { x: 1040, y: 330, height: 220 },
    bubble: { x: 650, y: 330, width: 350, minHeight: 90 },
    controls: { right: 320, bottom: 30 },
    vms: baseVmsLayout,
  },
  mission4: {
    missionPanel: { x: 32, y: 24, width: 360, maxHeight: 150 },
    routeCards: { x: 42, y: 176, width: 250, height: 102, gap: 12 },
    startPin: { x: 74, y: 512, width: 104 },
    goalPin: { x: 1128, y: 14, width: 100 },
    hazardIcons: {
      accident: { x: 518, y: 158, width: 82 },
      construction: { x: 800, y: 292, width: 82 },
    },
    smoothTrafficIcon: { x: 914, y: 450, width: 160 },
    helper: { x: 1046, y: 506, height: 198 },
    bubble: { x: 650, y: 548, width: 350, minHeight: 78, tailBottom: 14 },
    controls: { right: 345, bottom: 24 },
  },
  mission5: {
    missionPanel: { x: 32, y: 24, width: 380, maxHeight: 164 },
    sequence: { x: 36, y: 260, width: 560 },
    helper: { x: 1010, y: 450, height: 220 },
    bubble: { x: 646, y: 518, width: 350, minHeight: 88 },
    controls: { right: 320, bottom: 30 },
  },
  mission6: {
    missionPanel: { x: 32, y: 24, width: 380, maxHeight: 164 },
    helper: { x: 1062, y: 478, height: 205 },
    bubble: { x: 920, y: 382, width: 295, minHeight: 80 },
    controls: { right: 320, bottom: 30 },
  },
};

const state = {
  mission: 0,
  busStarted: false,
  explored: new Set(),
  selectedVms: [],
  selectedRoute: "",
  orderStep: [],
  completed: new Set(),
  badgeShown: false,
};

const stage = document.querySelector("#stage");
const sceneBg = document.querySelector("#sceneBg");
const missionTitle = document.querySelector("#missionTitle");
const missionNumber = document.querySelector("#missionNumber");
const missionTask = document.querySelector("#missionTask");
const missionGuide = document.querySelector("#missionGuide");
const vmsText = document.querySelector("#vmsText");
const bus = document.querySelector("#bus");
const roadIcons = document.querySelector("#roadIcons");
const mapLayer = document.querySelector("#mapLayer");
const activityLayer = document.querySelector("#activityLayer");
const controls = document.querySelector("#controls");
const helperLine = document.querySelector("#helperLine");
const helperBubble = document.querySelector("#helperBubble");
const trafficHelper = document.querySelector("#trafficHelper");
const toast = document.querySelector("#toast");
const sparkleLayer = document.querySelector("#sparkleLayer");
const confettiLayer = document.querySelector("#confettiLayer");

function setLayoutValue(name, value) {
  if (value === undefined || value === null) return;
  stage.style.setProperty(name, `${value}px`);
}

function setBoxLayout(prefix, box) {
  if (!box) return;
  setLayoutValue(`--${prefix}-x`, box.x);
  setLayoutValue(`--${prefix}-y`, box.y);
  setLayoutValue(`--${prefix}-width`, box.width);
  setLayoutValue(`--${prefix}-height`, box.height);
  setLayoutValue(`--${prefix}-max-height`, box.maxHeight);
  setLayoutValue(`--${prefix}-min-height`, box.minHeight);
}

function applySceneLayout(index) {
  const key = `mission${index + 1}`;
  const layout = sceneLayouts[key] || sceneLayouts.mission1;
  stage.dataset.layout = key;

  setBoxLayout("mission-panel", layout.missionPanel);
  setBoxLayout("helper", layout.helper);
  setBoxLayout("bubble", layout.bubble);
  setBoxLayout("vms-choice", layout.vmsChoice);
  setBoxLayout("route-card", layout.routeCards);
  setBoxLayout("start-pin", layout.startPin);
  setBoxLayout("goal-pin", layout.goalPin);
  setBoxLayout("map-icon-accident", layout.hazardIcons?.accident);
  setBoxLayout("map-icon-construction", layout.hazardIcons?.construction);
  setBoxLayout("map-icon-smooth-traffic", layout.smoothTrafficIcon);
  setBoxLayout("sequence", layout.sequence);
  setLayoutValue("--route-card-gap", layout.routeCards?.gap);
  setLayoutValue("--bubble-tail-bottom", layout.bubble?.tailBottom ?? 12);
  setLayoutValue("--controls-right", layout.controls?.right);
  setLayoutValue("--controls-bottom", layout.controls?.bottom);

  if (layout.roadCards) {
    const { x, y, width, gap } = layout.roadCards;
    setLayoutValue("--road-card-width", width);
    setLayoutValue("--road-card-accident-x", x);
    setLayoutValue("--road-card-accident-y", y);
    setLayoutValue("--road-card-construction-x", x + width + gap);
    setLayoutValue("--road-card-construction-y", y);
    setLayoutValue("--road-card-jam-x", x + (width + gap) * 2);
    setLayoutValue("--road-card-jam-y", y);
  }

  if (layout.vms) {
    setBoxLayout("vms", layout.vms);
    setLayoutValue("--vms-image-x", layout.vms.imageX);
    setLayoutValue("--vms-image-y", layout.vms.imageY);
    setLayoutValue("--vms-image-width", layout.vms.imageWidth);
    setLayoutValue("--vms-text-x", layout.vms.textX);
    setLayoutValue("--vms-text-y", layout.vms.textY);
    setLayoutValue("--vms-text-width", layout.vms.textWidth);
    setLayoutValue("--vms-text-height", layout.vms.textHeight);
  }
}

function fitStage() {
  const scale = Math.min(window.innerWidth / 1280, window.innerHeight / 720);
  document.documentElement.style.setProperty("--stage-scale", String(Math.max(0.1, scale)));
}

function setHelper(type, message) {
  const image =
    type === "success" ? assets.helperSuccess : type === "warning" ? assets.helperWarning : assets.helperDefault;
  trafficHelper.src = image;
  helperLine.textContent = message;
}

function setVms(lines) {
  const list = Array.isArray(lines) ? lines : [lines];
  vmsText.innerHTML = list.map((line) => `<span>${line}</span>`).join("");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 1500);
}

function shakeElement(element) {
  if (!element) return;
  element.classList.remove("is-shaking");
  window.requestAnimationFrame(() => element.classList.add("is-shaking"));
  window.setTimeout(() => element.classList.remove("is-shaking"), 420);
}

function pulseElement(element) {
  if (!element) return;
  element.classList.remove("success-pulse");
  window.requestAnimationFrame(() => element.classList.add("success-pulse"));
  window.setTimeout(() => element.classList.remove("success-pulse"), 620);
}

function sparkleAt(x, y) {
  for (let index = 0; index < 10; index += 1) {
    const sparkle = document.createElement("span");
    const angle = (Math.PI * 2 * index) / 10;
    const distance = 26 + Math.random() * 28;
    sparkle.className = "sparkle";
    sparkle.style.left = `${x + Math.cos(angle) * distance}px`;
    sparkle.style.top = `${y + Math.sin(angle) * distance}px`;
    sparkleLayer.append(sparkle);
    window.setTimeout(() => sparkle.remove(), 680);
  }
}

function completeMission(message, sparkleX = 630, sparkleY = 330) {
  state.completed.add(state.mission);
  setHelper("success", message);
  showToast("미션 성공");
  sparkleAt(sparkleX, sparkleY);
  renderControls();
}

function warn(message, element) {
  setHelper("warning", message);
  showToast("다시 해 볼까요?");
  shakeElement(element || helperBubble);
}

function nextMission() {
  if (state.mission < missions.length - 1) {
    state.mission += 1;
    render();
  }
}

function render() {
  const mission = missions[state.mission];
  stage.dataset.mission = String(state.mission + 1);
  applySceneLayout(state.mission);
  missionTitle.textContent =
    state.mission === 3 ? "길을 골라요" : state.mission === 4 ? "관제센터 순서" : "VMS 경로 변경 체험하기";
  missionNumber.textContent = `미션 ${state.mission + 1} / ${missions.length}`;
  missionTask.textContent = state.mission === 3 ? "지도에서 안전한 길을 찾아요." : mission.task;
  missionGuide.textContent = state.mission === 3 ? "" : mission.guide;
  setHelper("default", mission.helper);
  activityLayer.innerHTML = "";
  mapLayer.innerHTML = "";
  roadIcons.innerHTML = "";
  controls.innerHTML = "";

  if (state.mission <= 2) {
    renderRoadScene();
  } else if (state.mission === 3) {
    renderRouteScene();
  } else if (state.mission === 4) {
    renderOrderScene();
  } else {
    renderBadgeScene();
  }

  renderControls();
}

function renderControls() {
  controls.innerHTML = "";
  if (state.mission === 0 && !state.completed.has(0)) {
    controls.innerHTML = '<button class="mission-button primary" type="button" id="startBus">버스 출발</button>';
    controls.querySelector("#startBus").addEventListener("click", startBus);
    return;
  }

  if (state.completed.has(state.mission) && state.mission < missions.length - 1) {
    controls.innerHTML = '<button class="mission-button success" type="button" id="nextMission">다음 미션</button>';
    controls.querySelector("#nextMission").addEventListener("click", nextMission);
  }
}

function renderRoadScene() {
  stage.dataset.scene = "road";
  sceneBg.src = assets.roadBg;
  bus.src = assets.bus;
  bus.className = state.busStarted || state.mission > 0 ? "bus is-at-stop" : "bus";

  if (state.mission === 0) {
    setVms(state.busStarted ? "앞길 확인" : "출발 준비");
    renderRoadIcons(false);
  }

  if (state.mission === 1) {
    setVms("도로 상황 확인");
    renderRoadIcons(true);
  }

  if (state.mission === 2) {
    setVms(state.selectedVms.length ? state.selectedVms : "문구를 골라요");
    renderRoadIcons(false);
    renderVmsMission();
  }
}

function renderRoadIcons(isActive) {
  const shouldShow = state.mission === 1;
  if (!shouldShow) {
    roadIcons.innerHTML = "";
    return;
  }

  roadIcons.innerHTML = roadItems
    .map(
      (item) => `
        <button
          class="road-icon ${state.explored.has(item.kind) ? "is-done" : ""}"
          type="button"
          data-kind="${item.kind}"
          aria-label="${item.label} 상황 확인"
          ${isActive && !state.explored.has(item.kind) ? "" : "disabled"}
        >
          <img src="${item.image}" alt="" />
          <span>${item.label}</span>
        </button>
      `,
    )
    .join("");

  roadIcons.querySelectorAll(".road-icon").forEach((button) => {
    if (!isActive || state.explored.has(button.dataset.kind)) return;
    button.addEventListener("click", () => {
      const item = roadItems.find((candidate) => candidate.kind === button.dataset.kind);
      state.explored.add(item.kind);
      button.classList.add("is-done");
      button.disabled = true;
      setHelper("default", item.message);
      sparkleAt(button.offsetLeft + 56, button.offsetTop + 45);
      showToast(item.message);

      if (state.explored.size === roadItems.length) {
        window.setTimeout(() => {
          completeMission("좋아요! 도로 상황을 모두 확인했어요.", 970, 318);
        }, 380);
      }
    });
  });
}

function startBus() {
  const button = controls.querySelector("#startBus");
  if (button) button.disabled = true;
  setHelper("default", "버스가 길을 따라 움직여요.");
  setVms("주행 중");
  bus.src = assets.busMove;
  bus.classList.remove("is-at-stop");
  bus.classList.add("is-driving");

  window.setTimeout(() => {
    state.busStarted = true;
    bus.src = assets.bus;
    bus.classList.remove("is-driving");
    bus.classList.add("is-at-stop");
    renderRoadIcons(false);
    setVms("앞길 확인");
    completeMission("앞길에 문제가 생겼어요. 도로 상황을 확인해 볼까요?", 574, 482);
  }, 2240);
}

function renderVmsMission() {
  activityLayer.innerHTML = `
    <section class="vms-choice-panel" aria-label="VMS 문구 선택">
      <div class="hint-card">앞길이 막혔어요.<br />운전자에게 무엇을 알려 줄까요?</div>
      <div class="vms-choice-grid">
        ${vmsCards
          .map(
            (card) => `
              <button class="word-card ${state.selectedVms.includes(card) ? "is-selected" : ""}" type="button" data-card="${card}">
                ${card}
              </button>
            `,
          )
          .join("")}
      </div>
      <button class="mission-button primary" type="button" id="checkVms">문구 확인</button>
    </section>
  `;

  activityLayer.querySelectorAll(".word-card").forEach((button) => {
    button.addEventListener("click", () => toggleVmsCard(button.dataset.card));
  });
  activityLayer.querySelector("#checkVms").addEventListener("click", checkVms);
}

function toggleVmsCard(card) {
  if (state.completed.has(2)) return;
  if (state.selectedVms.includes(card)) {
    state.selectedVms = state.selectedVms.filter((selected) => selected !== card);
  } else if (state.selectedVms.length < 2) {
    state.selectedVms.push(card);
  } else {
    state.selectedVms.shift();
    state.selectedVms.push(card);
  }

  setVms(state.selectedVms.length ? state.selectedVms : "문구를 골라요");
  renderVmsMission();
}

function checkVms() {
  const isCorrect =
    state.selectedVms.length === vmsAnswer.length &&
    vmsAnswer.every((answer) => state.selectedVms.includes(answer));

  if (!isCorrect) {
    warn("다시 생각해 볼까요? 앞길이 막혔을 때 필요한 안내를 골라 보세요.", activityLayer.querySelector(".vms-choice-panel"));
    return;
  }

  setVms(vmsAnswer);
  completeMission("좋아요! 운전자가 다른 길을 선택할 수 있도록 알려줬어요.", 650, 128);
}

function renderRouteScene() {
  stage.dataset.scene = "map";
  sceneBg.src = assets.mapBg;
  renderRouteMap(true);
}

function renderRouteMap(interactive) {
  mapLayer.innerHTML = `
    <svg class="route-svg" viewBox="0 0 1280 720" aria-label="빨강 노랑 초록 경로">
      <path class="route-path red" data-route="red" d="${mission4RoutePaths.red}" />
      <path class="route-path yellow" data-route="yellow" d="${mission4RoutePaths.yellow}" />
      <path class="route-path green" data-route="green" d="${mission4RoutePaths.green}" />
    </svg>
    <img class="route-pin start" src="${assets.startPin}" alt="" />
    <img class="route-pin goal" src="${assets.goalPin}" alt="" />
    <img class="map-issue ${mission4HazardIcons.accident.className}" src="${mission4HazardIcons.accident.image}" alt="" />
    <img class="map-issue ${mission4HazardIcons.construction.className}" src="${mission4HazardIcons.construction.image}" alt="" />
    <img class="map-issue ${mission4HazardIcons.smoothTraffic.className}" src="${mission4HazardIcons.smoothTraffic.image}" alt="" />
    <section class="route-choice-panel" aria-label="경로 카드">
      ${routeChoiceCards
        .map(
          (card) => `
            <button class="route-choice-card" type="button" data-route="${card.route}">
              <img class="route-card-art" src="${card.image}" alt="" />
              <span class="route-card-label">${card.lines.join("<br />")}</span>
            </button>
          `,
        )
        .join("")}
    </section>
  `;

  mapLayer.querySelectorAll("[data-route]").forEach((target) => {
    if (!interactive) return;
    target.addEventListener("click", () => chooseRoute(target.dataset.route, target));
  });

  if (state.selectedRoute) {
    markSelectedRoute(state.selectedRoute);
  }
}

function chooseRoute(route, target) {
  state.selectedRoute = route;
  markSelectedRoute(route);

  if (route === "red") {
    warn("사고 때문에 막혀 있어요.", target);
    return;
  }

  if (route === "yellow") {
    warn("공사와 정체가 있어 조금 늦어요.", target);
    return;
  }

  pulseElement(target);
  completeMission("안전한 길을 잘 찾았어요!", 936, 334);
}

function markSelectedRoute(route) {
  mapLayer.querySelectorAll(".route-path").forEach((path) => {
    path.classList.toggle("is-selected", path.dataset.route === route);
    path.classList.toggle("is-dimmed", path.dataset.route !== route);
  });
  mapLayer.querySelectorAll(".route-choice-card").forEach((card) => {
    card.classList.toggle("is-selected", card.dataset.route === route);
  });
}

function renderOrderScene() {
  stage.dataset.scene = "order";
  sceneBg.src = assets.mapBg;
  renderRouteMap(false);
  mapLayer.querySelectorAll(".route-path").forEach((path) => {
    path.classList.toggle("is-selected", path.dataset.route === "green");
    path.classList.toggle("is-dimmed", path.dataset.route !== "green");
  });
  mapLayer.querySelector(".route-choice-panel")?.remove();

  activityLayer.innerHTML = `
    <section class="order-panel" aria-label="관제센터 순서 맞추기">
      <h2>관제센터 순서</h2>
      <div class="sequence-slots" aria-label="선택한 순서">
        ${orderAnswer
          .map((_, index) => `<div class="sequence-slot" data-slot="${index}">${index + 1}번</div>`)
          .join("")}
      </div>
      <div class="order-options">
        ${orderCards
          .map(
            (card) => `
              <button class="order-card ${state.orderStep.includes(card.key) ? "is-done" : ""}" type="button" data-key="${card.key}">
                ${card.text}
              </button>
            `,
          )
          .join("")}
      </div>
    </section>
  `;

  paintOrderSlots();
  activityLayer.querySelectorAll(".order-card").forEach((button) => {
    if (state.orderStep.includes(button.dataset.key)) return;
    button.addEventListener("click", () => chooseOrder(button.dataset.key, button));
  });
}

function chooseOrder(key, button) {
  const expected = orderAnswer[state.orderStep.length];
  if (key !== expected) {
    warn("순서를 다시 생각해 볼까요?", button);
    return;
  }

  state.orderStep.push(key);
  button.classList.add("is-done");
  paintOrderSlots();

  if (state.orderStep.length === orderAnswer.length) {
    completeMission("관제센터가 도로 상황을 알려 주면 버스가 더 안전하게 이동할 수 있어요!", 362, 308);
  } else {
    setHelper("default", "좋아요. 다음 순서를 골라요.");
    sparkleAt(button.offsetLeft + 120, button.offsetTop + 42);
  }
}

function paintOrderSlots() {
  const labels = new Map(orderCards.map((card) => [card.key, card.text]));
  activityLayer.querySelectorAll(".sequence-slot").forEach((slot) => {
    const index = Number(slot.dataset.slot);
    const key = state.orderStep[index];
    slot.textContent = key ? `${index + 1}. ${labels.get(key)}` : `${index + 1}번`;
    slot.classList.toggle("is-filled", Boolean(key));
  });
}

function renderBadgeScene() {
  stage.dataset.scene = "badge";
  sceneBg.src = assets.mapBg;
  missionNumber.textContent = "미션 완료";
  window.clearTimeout(showToast.timer);
  toast.classList.remove("is-visible");
  toast.textContent = "";
  setHelper("success", "ITS 기술은 사람들이 안전하게 이동하도록 도와줘요.");

  activityLayer.innerHTML = `
    <section class="badge-overlay" aria-label="배지 획득 완료 화면">
      <div class="badge-popup">
        <img src="${assets.badge}" alt="길찾기 관제 배지" />
        <h2>길찾기 관제 배지를 획득했어요!</h2>
        <p>VMS가 길 위의 상황을 알려 주어 안전한 길을 선택할 수 있었어요!</p>
        <div class="badge-actions">
          <button class="plain-button primary" type="button" id="restartLesson">다시 해보기</button>
          <button class="plain-button" type="button" id="goHome">처음으로</button>
        </div>
      </div>
    </section>
  `;

  activityLayer.querySelector("#restartLesson").addEventListener("click", restartLesson);
  activityLayer.querySelector("#goHome").addEventListener("click", () => {
    window.location.href = "../index.html";
  });

  if (!state.badgeShown) {
    state.badgeShown = true;
    window.setTimeout(spawnConfetti, 120);
  }
}

function spawnConfetti() {
  const colors = ["#1269d3", "#1d9d72", "#ffd24a", "#ff8b3d", "#ee5b58", "#7ec8ff"];
  confettiLayer.innerHTML = "";

  for (let index = 0; index < 30; index += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${330 + Math.random() * 620}px`;
    piece.style.top = `${72 + Math.random() * 44}px`;
    piece.style.background = colors[index % colors.length];
    piece.style.animationDelay = `${Math.random() * 120}ms`;
    confettiLayer.append(piece);
    window.setTimeout(() => piece.remove(), 1000);
  }
}

function restartLesson() {
  state.mission = 0;
  state.busStarted = false;
  state.explored = new Set();
  state.selectedVms = [];
  state.selectedRoute = "";
  state.orderStep = [];
  state.completed = new Set();
  state.badgeShown = false;
  confettiLayer.innerHTML = "";
  sparkleLayer.innerHTML = "";
  render();
}

window.addEventListener("resize", fitStage);
fitStage();
render();
