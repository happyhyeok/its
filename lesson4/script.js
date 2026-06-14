const ASSET_ROOT = "./assets/lesson4/";

const ASSETS = {
  bgIntersection: `${ASSET_ROOT}period4_bg_emergency_intersection_16x9.png`,
  bgMap: `${ASSET_ROOT}period4_bg_route_map_16x9.png`,
  ambulanceIdle: `${ASSET_ROOT}period4_ambulance_idle.png`,
  ambulanceMove: `${ASSET_ROOT}period4_ambulance_move.png`,
  generalCar01: `${ASSET_ROOT}period4_general_car_01.png`,
  generalCar02: `${ASSET_ROOT}period4_general_car_02.png`,
  generalCarStop: `${ASSET_ROOT}period4_general_car_stop.png`,
  hospitalPin: `${ASSET_ROOT}period4_hospital_pin.png`,
  priorityWave: `${ASSET_ROOT}period4_priority_wave.png`,
  signal01Green: `${ASSET_ROOT}period4_signal_01_green.png`,
  signal01Red: `${ASSET_ROOT}period4_signal_01_red.png`,
  signal02Green: `${ASSET_ROOT}period4_signal_02_green.png`,
  signal02Red: `${ASSET_ROOT}period4_signal_02_red.png`,
  signal03Green: `${ASSET_ROOT}period4_signal_03_green.png`,
  signal03Red: `${ASSET_ROOT}period4_signal_03_red.png`,
  sirenIcon: `${ASSET_ROOT}period4_siren_icon.png`,
  startPin: `${ASSET_ROOT}period4_start_pin.png`,
  timeGaugeEmpty: `${ASSET_ROOT}period4_time_gauge_empty.png`,
  timeGaugeSuccess: `${ASSET_ROOT}period4_time_gauge_success.png`,
  helperDefault: `${ASSET_ROOT}simulation_lesson1__assets__common_character_traffic_helper_default.png`,
  helperWarning: `${ASSET_ROOT}simulation_lesson1__assets__common_character_traffic_helper_warning.png`,
  helperSuccess: `${ASSET_ROOT}simulation_lesson1__assets__common_character_traffic_helper_success.png`,
  badge04: `${ASSET_ROOT}simulation_lesson1__assets__badge_objects_svg__badge_object_04.png`,
};

const MISSION_COUNT = 6;

const routeTargets = [
  { key: "start", label: "출발", src: ASSETS.startPin, x: 300, y: 515, width: 70, height: 90, cx: 335, cy: 560 },
  {
    key: "signal1",
    label: "1번 신호등",
    shortLabel: "1",
    src: ASSETS.signal01Red,
    x: 430,
    y: 335,
    width: 70,
    height: 120,
    cx: 465,
    cy: 395,
  },
  {
    key: "signal2",
    label: "2번 신호등",
    shortLabel: "2",
    src: ASSETS.signal02Red,
    x: 575,
    y: 160,
    width: 70,
    height: 120,
    cx: 610,
    cy: 220,
  },
  {
    key: "signal3",
    label: "3번 신호등",
    shortLabel: "3",
    src: ASSETS.signal03Red,
    x: 930,
    y: 160,
    width: 70,
    height: 120,
    cx: 965,
    cy: 220,
  },
  {
    key: "hospital",
    label: "병원",
    src: ASSETS.hospitalPin,
    x: 1060,
    y: 150,
    width: 80,
    height: 100,
    cx: 1100,
    cy: 200,
  },
];

const signalTargets = [
  {
    key: "signal1",
    label: "1번 신호등",
    red: ASSETS.signal01Red,
    green: ASSETS.signal01Green,
    x: 470,
    y: 290,
    width: 80,
    height: 150,
    hitWidth: 110,
    hitHeight: 170,
    cx: 510,
    cy: 360,
  },
  {
    key: "signal2",
    label: "2번 신호등",
    red: ASSETS.signal02Red,
    green: ASSETS.signal02Green,
    x: 670,
    y: 280,
    width: 80,
    height: 150,
    hitWidth: 110,
    hitHeight: 170,
    cx: 710,
    cy: 350,
  },
  {
    key: "signal3",
    label: "3번 신호등",
    red: ASSETS.signal03Red,
    green: ASSETS.signal03Green,
    x: 870,
    y: 270,
    width: 80,
    height: 150,
    hitWidth: 110,
    hitHeight: 170,
    cx: 910,
    cy: 340,
  },
];

const vehicleVisualBounds = {
  [ASSETS.ambulanceIdle]: { naturalWidth: 1254, naturalHeight: 1254, x: 59, y: 261, width: 1153, height: 757 },
  [ASSETS.ambulanceMove]: { naturalWidth: 1254, naturalHeight: 1254, x: 60, y: 279, width: 1121, height: 662 },
  [ASSETS.generalCar01]: { naturalWidth: 1254, naturalHeight: 1254, x: 54, y: 304, width: 1145, height: 646 },
  [ASSETS.generalCar02]: { naturalWidth: 1254, naturalHeight: 1254, x: 54, y: 311, width: 1149, height: 639 },
  [ASSETS.generalCarStop]: { naturalWidth: 1254, naturalHeight: 1254, x: 58, y: 303, width: 1127, height: 637 },
};

const sceneLayouts = {
  start: {
    missionCard: { x: 310, y: 24, w: 660, h: 88 },
    helper: { x: -70, y: 535, h: 155 },
    helperBubble: { x: 125, y: 505, w: 330, minH: 82 },
    messageBox: { x: 350, y: 615, w: 500, minH: 64 },
    nextButton: { x: 880, y: 612, w: 190 },
    vehicles: { ambulance: { roadX: 196, roadY: 500, width: 220 } },
    signals: {},
  },
  mission1: {
    missionCard: { x: 310, y: 24, w: 660, h: 88 },
    helper: { x: -60, y: 535, h: 150 },
    helperBubble: { x: 130, y: 505, w: 330, minH: 78 },
    messageBox: { x: 350, y: 615, w: 500, minH: 64 },
    nextButton: { x: 880, y: 612, w: 180 },
    vehicles: {
      ambulance: { roadX: 200, roadY: 500, width: 225 },
      car1: { roadX: 695, roadY: 470, width: 145 },
      car2: { roadX: 740, roadY: 545, width: 145 },
    },
    signals: {},
  },
  mission2: {
    missionCard: { x: 330, y: 24, w: 620, h: 88 },
    helper: { x: -45, y: 610, h: 140 },
    helperBubble: { x: 135, y: 625, w: 260, minH: 70 },
    messageBox: { x: 350, y: 620, w: 500, minH: 64 },
    nextButton: { x: 880, y: 612, w: 180 },
    vehicles: {},
    signals: { signal1: routeTargets[1], signal2: routeTargets[2], signal3: routeTargets[3] },
  },
  mission3: {
    missionCard: { x: 310, y: 24, w: 660, h: 88 },
    helper: { x: -60, y: 540, h: 145 },
    helperBubble: { x: 130, y: 505, w: 320, minH: 78 },
    messageBox: { x: 350, y: 615, w: 500, minH: 64 },
    nextButton: { x: 880, y: 612, w: 180 },
    vehicles: { ambulance: { roadX: 198, roadY: 505, width: 215 } },
    signals: {},
  },
  mission4: {
    missionCard: { x: 310, y: 24, w: 660, h: 88 },
    helper: { x: -60, y: 540, h: 145 },
    helperBubble: { x: 130, y: 510, w: 300, minH: 78 },
    messageBox: { x: 350, y: 615, w: 500, minH: 64 },
    nextButton: { x: 880, y: 612, w: 190 },
    vehicles: {
      ambulanceStart: { roadX: 200, roadY: 505, width: 220 },
      ambulanceEnd: { roadX: 1080, roadY: 505, width: 220 },
      car1: { roadX: 715, roadY: 470, width: 150 },
      car2: { roadX: 740, roadY: 545, width: 150 },
    },
    signals: {},
  },
  mission5: {
    missionCard: { x: 310, y: 24, w: 660, h: 88 },
    helper: { x: -60, y: 540, h: 145 },
    helperBubble: { x: 130, y: 505, w: 330, minH: 78 },
    messageBox: { x: 350, y: 615, w: 540, minH: 64 },
    nextButton: { x: 920, y: 612, w: 170 },
    vehicles: { ambulance: { roadX: 1080, roadY: 505, width: 220 } },
    signals: {},
  },
  badge: {
    missionCard: { x: 310, y: 24, w: 660, h: 88 },
    helper: { x: 870, y: 520, h: 150 },
    helperBubble: { x: 1048, y: 505, w: 215, minH: 82 },
    messageBox: { x: 350, y: 615, w: 500, minH: 64 },
    nextButton: { x: 880, y: 612, w: 180 },
    vehicles: {},
    signals: {},
  },
};

const state = {
  currentMission: 0,
  ambulanceFound: false,
  routeStep: 0,
  routeSelected: [],
  signalStep: 0,
  carsStopped: false,
  ambulancePassed: false,
  badgeEarned: false,
  missionDone: false,
  mission4StartedAt: 0,
  mission4Late: false,
  gaugePlayed: false,
};

const stage = document.querySelector("#stage");
const sceneBg = document.querySelector("#sceneBg");
const missionLabel = document.querySelector("#missionLabel");
const missionTitle = document.querySelector("#missionTitle");
const missionNumber = document.querySelector("#missionNumber");
const missionDescription = document.querySelector("#missionDescription");
const missionLayer = document.querySelector("#missionLayer");
const controls = document.querySelector("#controls");
const messageBox = document.querySelector("#messageBox");
const feedbackText = document.querySelector("#feedbackText");
const nextButton = document.querySelector("#nextButton");
const helperLine = document.querySelector("#helperLine");
const trafficHelper = document.querySelector("#trafficHelper");
const helperBubble = document.querySelector("#helperBubble");
const toast = document.querySelector("#toast");
const sparkleLayer = document.querySelector("#sparkleLayer");
const confettiLayer = document.querySelector("#confettiLayer");

const timers = {
  toast: 0,
  mission4: 0,
  gauge: 0,
  next: 0,
};

function initLesson4() {
  trafficHelper.src = ASSETS.helperDefault;
  nextButton.addEventListener("click", goNextMission);
  window.addEventListener("resize", fitStage);
  fitStage();
  renderMission();
}

function fitStage() {
  const scale = Math.min(window.innerWidth / 1280, window.innerHeight / 720);
  document.documentElement.style.setProperty("--stage-scale", String(Math.max(0.1, scale)));
}

function clearTimers() {
  window.clearTimeout(timers.mission4);
  window.clearTimeout(timers.gauge);
  window.clearTimeout(timers.next);
}

function renderMission() {
  clearScene();
  stage.dataset.scene = "intersection";
  state.missionDone = false;

  if (state.currentMission === 0) renderStartMission();
  if (state.currentMission === 1) renderFindAmbulanceMission();
  if (state.currentMission === 2) renderRouteMission();
  if (state.currentMission === 3) renderSignalMission();
  if (state.currentMission === 4) renderStopCarsMission();
  if (state.currentMission === 5) renderGaugeMission();
  if (state.currentMission === 6) showBadgeScreen();
}

function setBackground(type) {
  sceneBg.src = type === "map" ? ASSETS.bgMap : ASSETS.bgIntersection;
  stage.dataset.scene = type === "map" ? "map" : "intersection";
}

function setCssPx(name, value) {
  if (value === undefined || value === null) return;
  stage.style.setProperty(name, `${value}px`);
}

function applySceneLayout(name) {
  const layout = sceneLayouts[name] || sceneLayouts.start;
  const missionCardLayout = layout.missionCard || {};
  const helperBubbleLayout = layout.helperBubble || layout.bubble || {};
  const messageBoxLayout = layout.messageBox || layout.message || {};
  const nextButtonLayout = layout.nextButton || layout.button || {};

  setCssPx("--mission-card-x", missionCardLayout.x);
  setCssPx("--mission-card-y", missionCardLayout.y);
  setCssPx("--mission-card-w", missionCardLayout.w);
  setCssPx("--mission-card-h", missionCardLayout.h);
  setCssPx("--helper-x", layout.helper?.x);
  setCssPx("--helper-y", layout.helper?.y);
  setCssPx("--helper-h", layout.helper?.h);
  setCssPx("--bubble-x", helperBubbleLayout.x);
  setCssPx("--bubble-y", helperBubbleLayout.y);
  setCssPx("--bubble-w", helperBubbleLayout.w);
  setCssPx("--bubble-min-h", helperBubbleLayout.minH);
  setCssPx("--message-x", messageBoxLayout.x);
  setCssPx("--message-y", messageBoxLayout.y);
  setCssPx("--message-w", messageBoxLayout.w);
  setCssPx("--message-min-h", messageBoxLayout.minH);
  setCssPx("--button-x", nextButtonLayout.x);
  setCssPx("--button-y", nextButtonLayout.y);
  setCssPx("--button-w", nextButtonLayout.w);
}

function setMissionCard(titleSmall, titleMain, titleDesc, statusText) {
  missionLabel.textContent = titleSmall;
  missionTitle.textContent = titleMain;
  missionDescription.textContent = titleDesc;
  missionNumber.textContent = statusText;
}

function setHelper(text, options = {}) {
  let mode = "default";
  let message = text;

  if (typeof options === "string") {
    mode = text;
    message = options;
  } else {
    mode = options.mode || "default";
    if (options.layout) applySceneLayout(options.layout);
  }

  const src =
    mode === "success" ? ASSETS.helperSuccess : mode === "warning" ? ASSETS.helperWarning : ASSETS.helperDefault;
  trafficHelper.src = src;
  helperLine.textContent = message;
}

function setMissionTitle(title, description) {
  const status =
    state.currentMission === 0 ? "시작" : state.currentMission === 6 ? "완료" : `미션 ${state.currentMission} / ${MISSION_COUNT}`;
  setMissionCard("오늘의 미션", title, description, status);
}

function setBottomMessage(text, buttonConfig = null) {
  if (!text) {
    hideFeedback();
    return;
  }

  const type = buttonConfig?.type || "default";
  feedbackText.textContent = text;
  messageBox.className = `message-box${type === "success" ? " is-success" : ""}${type === "warning" ? " is-warning" : ""}`;
  messageBox.hidden = false;
  stage.classList.add("has-message");

  if (buttonConfig?.label) {
    controls.innerHTML = "";
    addControlButton(buttonConfig.label, buttonConfig.variant || "success", buttonConfig.onClick || goNextMission);
  }
}

function setFeedback(message, type = "default") {
  setBottomMessage(message, { type });
}

function hideFeedback() {
  feedbackText.textContent = "";
  messageBox.className = "message-box";
  messageBox.hidden = true;
  stage.classList.remove("has-message");
}

function showNextButton() {
  state.missionDone = true;
  messageBox.hidden = false;
  stage.classList.add("has-message");
  controls.innerHTML = "";
  addControlButton("다음 미션", "success", goNextMission);
}

function clearScene() {
  clearTimers();
  missionLayer.innerHTML = "";
  controls.innerHTML = "";
  sparkleLayer.innerHTML = "";
  confettiLayer.innerHTML = "";
  toast.classList.remove("is-visible");
  toast.textContent = "";
  nextButton.hidden = true;
  hideFeedback();
}

function goNextMission() {
  if (state.currentMission === 5) {
    showBadgeScreen();
    return;
  }

  if (state.currentMission < 6) {
    state.currentMission += 1;
    renderMission();
  }
}

function resetMission() {
  if (state.currentMission === 1) {
    state.ambulanceFound = false;
  }

  if (state.currentMission === 2) {
    state.routeStep = 0;
    state.routeSelected = [];
  }

  if (state.currentMission === 3) {
    state.signalStep = 0;
  }

  if (state.currentMission === 4) {
    state.carsStopped = false;
    state.ambulancePassed = false;
    state.mission4Late = false;
    state.mission4StartedAt = 0;
  }

  if (state.currentMission === 5) {
    state.gaugePlayed = false;
  }

  renderMission();
}

function renderStartMission() {
  const { vehicles } = sceneLayouts.start;
  applySceneLayout("start");
  setBackground("intersection");
  setMissionTitle("긴급차량 우선신호 체험하기", "구급차가 안전하게 지나갈 수 있도록 도와주세요!");
  setHelper("default", "사이렌 소리가 들려요. 어디에서 구급차가 오고 있는지 함께 찾아볼까요?");
  setFeedback("시작하기를 눌러 체험을 시작해요.");

  placeVehicle(
    "startAmbulance",
    ASSETS.ambulanceIdle,
    vehicles.ambulance.roadX,
    vehicles.ambulance.roadY,
    vehicles.ambulance.width,
  );
  addSprite({ src: ASSETS.sirenIcon, x: 160, y: 430, width: 64, height: 64, className: "siren-icon", alt: "" });
  addSprite({ src: ASSETS.hospitalPin, x: 1080, y: 270, width: 90, height: 110, alt: "" });
  addControlButton("시작하기", "primary", () => {
    state.currentMission = 1;
    renderMission();
  });
}

function renderFindAmbulanceMission() {
  const { vehicles } = sceneLayouts.mission1;
  applySceneLayout("mission1");
  setBackground("intersection");
  setMissionTitle("미션 1. 구급차를 찾아요", "사이렌을 켠 구급차를 눌러 보세요.");
  setHelper("default", "사이렌이 나는 차를 찾아보세요.");
  hideFeedback();
  playSirenPulse();

  addClickableVehicle({
    key: "ambulance",
    src: ASSETS.ambulanceIdle,
    roadX: vehicles.ambulance.roadX,
    roadY: vehicles.ambulance.roadY,
    width: vehicles.ambulance.width,
    label: "사이렌을 켠 구급차",
    onClick: handleAmbulanceClick,
  });
  addClickableVehicle({
    key: "car1",
    src: ASSETS.generalCar01,
    roadX: vehicles.car1.roadX,
    roadY: vehicles.car1.roadY,
    width: vehicles.car1.width,
    label: "일반 차량 1",
    onClick: handleWrongCarClick,
  });
  addClickableVehicle({
    key: "car2",
    src: ASSETS.generalCar02,
    roadX: vehicles.car2.roadX,
    roadY: vehicles.car2.roadY,
    width: vehicles.car2.width,
    label: "일반 차량 2",
    onClick: handleWrongCarClick,
  });
  addSprite({ src: ASSETS.sirenIcon, x: 160, y: 430, width: 64, height: 64, className: "siren-icon", alt: "" });
  addSprite({ src: ASSETS.hospitalPin, x: 1080, y: 270, width: 90, height: 110, alt: "" });
}

function handleAmbulanceClick(event) {
  if (state.missionDone) return;
  state.ambulanceFound = true;
  event.currentTarget.disabled = true;
  pulseElement(event.currentTarget);
  sparkleAt(200, 430);
  setHelper("success", "맞아요! 사이렌을 켠 구급차예요.");
  setFeedback("맞아요! 사이렌을 켠 구급차예요.\n구급차가 빨리 지나갈 수 있게 도와줘요.", "success");
  showToast("좋아요!");
  showNextButton();
}

function handleWrongCarClick(event) {
  if (state.missionDone) return;
  setHelper("warning", "이 차는 일반 차량이에요. 사이렌이 나는 차를 찾아보세요.");
  setFeedback("이 차는 일반 차량이에요.\n사이렌이 나는 차를 찾아보세요.", "warning");
  shakeElement(event.currentTarget);
  showToast("다시 살펴볼까요?");
}

function renderRouteMission() {
  applySceneLayout("mission2");
  setBackground("map");
  setMissionTitle("미션 2. 구급차 길을 정해요", "구급차가 지나갈 순서대로 눌러 보세요.");
  setHelper("default", "출발부터 병원까지 차례대로 눌러요.");
  hideFeedback();

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.classList.add("route-svg");
  svg.setAttribute("viewBox", "0 0 1280 720");
  svg.setAttribute("aria-hidden", "true");
  const line = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
  line.classList.add("route-line");
  line.setAttribute("points", state.routeSelected.map((point) => `${point.cx},${point.cy}`).join(" "));
  svg.append(line);
  missionLayer.append(svg);

  routeTargets.forEach((target, index) => {
    addRoutePoint(target, index);
  });
}

function handleRouteClick(target, button) {
  if (state.missionDone) return;
  const expected = routeTargets[state.routeStep];

  if (!expected || target.key !== expected.key) {
    showWrongRouteLine(target);
    setHelper("warning", "길이 조금 꼬였어요. 순서대로 다시 눌러볼까요?");
    setFeedback("길이 조금 꼬였어요.\n출발부터 다시 눌러 볼까요?", "warning");
    shakeElement(button);
    showToast("순서대로 눌러요.");
    timers.next = window.setTimeout(() => resetMission(), 820);
    return;
  }

  state.routeSelected.push(target);
  state.routeStep += 1;
  sparkleAt(target.cx, target.cy);

  if (state.routeStep === routeTargets.length) {
    renderRouteMission();
    setHelper("success", "좋아요! 구급차가 지나갈 길이 정해졌어요.");
    setFeedback("좋아요! 구급차가 지나갈 길이 정해졌어요.\n이제 신호등이 도와줄 차례예요.", "success");
    showToast("길을 찾았어요!");
    showNextButton();
    return;
  }

  const next = routeTargets[state.routeStep];
  renderRouteMission();
  setHelper("default", `좋아요. 다음은 ${next.label}이에요.`);
}

function showWrongRouteLine(target) {
  const last = state.routeSelected[state.routeSelected.length - 1] || routeTargets[0];
  const svg = missionLayer.querySelector(".route-svg");
  if (!svg || !last) return;
  const wrong = document.createElementNS("http://www.w3.org/2000/svg", "line");
  wrong.classList.add("route-wrong");
  wrong.setAttribute("x1", String(last.cx));
  wrong.setAttribute("y1", String(last.cy));
  wrong.setAttribute("x2", String(target.cx));
  wrong.setAttribute("y2", String(target.cy));
  svg.append(wrong);
  window.setTimeout(() => wrong.remove(), 760);
}

function renderSignalMission() {
  const { vehicles } = sceneLayouts.mission3;
  applySceneLayout("mission3");
  setBackground("intersection");
  setMissionTitle("미션 3. 신호등을 바꿔요", "구급차가 먼저 만나는 신호등부터 눌러 보세요.");
  setHelper("default", "1번, 2번, 3번 신호등 순서로 눌러요.");
  hideFeedback();

  placeVehicle(
    "signalAmbulance",
    ASSETS.ambulanceIdle,
    vehicles.ambulance.roadX,
    vehicles.ambulance.roadY,
    vehicles.ambulance.width,
  );
  addSprite({ src: ASSETS.priorityWave, x: 300, y: 300, width: 550, height: 160, className: "priority-wave", alt: "" });

  signalTargets.forEach((signal, index) => {
    addSignalTarget(signal, index);
  });
}

function handleSignalClick(index, signal, button) {
  if (state.missionDone || index < state.signalStep) return;

  if (index !== state.signalStep) {
    setHelper("warning", "구급차가 먼저 만나는 신호등부터 바꿔요.");
    setFeedback("구급차가 먼저 만나는 신호등부터 바꿔요.", "warning");
    shakeElement(button);
    showToast("순서를 살펴봐요.");
    return;
  }

  state.signalStep += 1;
  sparkleAt(signal.cx, signal.cy);
  pulseElement(button);

  if (state.signalStep === signalTargets.length) {
    renderSignalMission();
    setHelper("success", "구급차 길이 열렸어요!");
    setFeedback("구급차 길이 열렸어요!", "success");
    showToast("모두 초록불!");
    showNextButton();
    return;
  } else {
    renderSignalMission();
    setHelper("default", `${index + 1}번 신호등이 바뀌었어요! 다음 신호등을 눌러요.`);
    setFeedback(`${index + 1}번 신호등이 바뀌었어요!`, "success");
  }
}

function renderStopCarsMission() {
  const { vehicles } = sceneLayouts.mission4;
  applySceneLayout("mission4");
  setBackground("intersection");
  setMissionTitle("미션 4. 일반 차량을 멈춰요", "구급차가 지나갈 수 있도록 일반 차량을 멈춰 주세요.");
  setHelper("default", "구급차가 오기 전에 일반 차량을 멈춰요.");
  hideFeedback();

  addSprite({ src: ASSETS.signal01Green, x: 470, y: 290, width: 80, height: 150, alt: "" });
  addSprite({ src: ASSETS.signal02Green, x: 670, y: 280, width: 80, height: 150, alt: "" });
  addSprite({ src: ASSETS.signal03Green, x: 870, y: 270, width: 80, height: 150, alt: "" });
  renderMission4Cars(false);

  const ambulance = addVehicleSprite({
    src: ASSETS.ambulanceMove,
    roadX: vehicles.ambulanceStart.roadX,
    roadY: vehicles.ambulanceStart.roadY,
    width: vehicles.ambulanceStart.width,
    className: "ambulance-run is-approaching",
    alt: "움직이는 구급차",
  });
  ambulance.id = "ambulanceRun";
  state.mission4StartedAt = performance.now();
  state.mission4Late = false;
  state.carsStopped = false;
  state.ambulancePassed = false;

  addControlButton("일반 차량 멈춤", "primary", stopGeneralCars);
  timers.mission4 = window.setTimeout(handleLateStop, 4000);
}

function renderMission4Cars(stopped) {
  const { vehicles } = sceneLayouts.mission4;
  placeVehicle(
    "mission4Car1",
    stopped ? ASSETS.generalCarStop : ASSETS.generalCar01,
    vehicles.car1.roadX,
    vehicles.car1.roadY,
    vehicles.car1.width,
  );
  placeVehicle(
    "mission4Car2",
    stopped ? ASSETS.generalCarStop : ASSETS.generalCar02,
    vehicles.car2.roadX,
    vehicles.car2.roadY,
    vehicles.car2.width,
  );
}

function stopGeneralCars() {
  const { vehicles } = sceneLayouts.mission4;
  if (state.carsStopped || state.ambulancePassed) return;
  const runningAmbulance = document.querySelector("#ambulanceRun");
  const passStart = runningAmbulance ? window.getComputedStyle(runningAmbulance).left : "80px";
  const ambulanceX = Number.parseFloat(passStart) || 80;

  if (state.mission4Late || ambulanceX >= 580) {
    handleLateStop();
    return;
  }

  state.carsStopped = true;
  window.clearTimeout(timers.mission4);
  controls.innerHTML = "";
  missionLayer.innerHTML = "";
  addSprite({ src: ASSETS.signal01Green, x: 470, y: 290, width: 80, height: 150, alt: "" });
  addSprite({ src: ASSETS.signal02Green, x: 670, y: 280, width: 80, height: 150, alt: "" });
  addSprite({ src: ASSETS.signal03Green, x: 870, y: 270, width: 80, height: 150, alt: "" });
  renderMission4Cars(true);

  const ambulance = addVehicleSprite({
    src: ASSETS.ambulanceMove,
    roadX: vehicles.ambulanceStart.roadX,
    roadY: vehicles.ambulanceStart.roadY,
    width: vehicles.ambulanceStart.width,
    className: "ambulance-run is-passing",
    alt: "지나가는 구급차",
  });
  ambulance.style.setProperty("--pass-start", passStart);
  ambulance.style.setProperty(
    "--pass-end",
    `${getVehicleRoadPlacement(
      ASSETS.ambulanceMove,
      vehicles.ambulanceEnd.roadX,
      vehicles.ambulanceEnd.roadY,
      vehicles.ambulanceEnd.width,
    ).x}px`,
  );

  setHelper("success", "좋아요! 구급차가 안전하게 지나가요.");
  setFeedback("일반 차량이 멈췄어요.\n구급차가 안전하게 지나갈 수 있어요.", "success");
  sparkleAt(700, 460);
  showToast("안전하게 지나가요!");

  timers.next = window.setTimeout(() => {
    state.ambulancePassed = true;
    showNextButton();
  }, 1700);
}

function handleLateStop() {
  if (state.carsStopped || state.ambulancePassed || state.mission4Late) return;
  state.mission4Late = true;
  window.clearTimeout(timers.mission4);
  const ambulance = document.querySelector("#ambulanceRun");
  if (ambulance) {
    ambulance.classList.remove("is-approaching");
    ambulance.classList.add("is-paused");
    ambulance.style.left = "580px";
  }
  controls.innerHTML = "";
  addControlButton("다시 해보기", "warning", resetMission);
  setHelper("warning", "조금 늦었어요. 먼저 멈춰야 해요.");
  setFeedback("조금 늦었어요.\n구급차가 오기 전에 먼저 멈춰야 해요.", "warning");
  shakeElement(helperBubble);
  showToast("다시 해 볼까요?");
}

function renderGaugeMission() {
  const { vehicles } = sceneLayouts.mission5;
  applySceneLayout("mission5");
  setBackground("intersection");
  setMissionTitle("미션 5. 골든타임을 확인해요", "긴급차량 우선신호는 구급차가 더 빠르고 안전하게 이동하도록 도와줘요.");
  setHelper("success", "골든타임을 지켰어요! 구급차가 안전하게 지나갔어요.");
  setFeedback("골든타임을 확인해요.");

  placeVehicle(
    "gaugeAmbulance",
    ASSETS.ambulanceMove,
    vehicles.ambulance.roadX,
    vehicles.ambulance.roadY,
    vehicles.ambulance.width,
  );
  addSprite({ src: ASSETS.hospitalPin, x: 1080, y: 270, width: 90, height: 110, alt: "" });

  const gauge = document.createElement("div");
  gauge.className = "gauge-shell";
  gauge.innerHTML = `
    <img src="${ASSETS.timeGaugeEmpty}" alt="" draggable="false" />
    <img class="gauge-success" src="${ASSETS.timeGaugeSuccess}" alt="골든타임 성공 게이지" draggable="false" />
  `;
  missionLayer.append(gauge);

  timers.gauge = window.setTimeout(() => {
    gauge.classList.add("is-filled");
    sparkleAt(640, 220);
    setFeedback("골든타임을 지켰어요!\n구급차가 안전하게 지나갔어요.", "success");
    showToast("성공!");
  }, 260);

  timers.next = window.setTimeout(() => {
    state.gaugePlayed = true;
    showNextButton();
  }, 1550);
}

function showBadgeScreen() {
  clearTimers();
  state.currentMission = 6;
  state.badgeEarned = true;
  applySceneLayout("badge");
  stage.dataset.scene = "badge";
  setBackground("intersection");
  stage.dataset.scene = "badge";
  missionLayer.innerHTML = "";
  controls.innerHTML = "";
  nextButton.hidden = true;
  hideFeedback();
  setHelper("success", "축하해요! 긴급차량 우선신호를 잘 도와주었어요.");

  missionLayer.innerHTML = `
    <section class="badge-overlay" aria-label="배지 획득 완료 화면">
      <div class="badge-popup">
        <div class="badge-wrap">
          <img src="${ASSETS.badge04}" alt="4차시 배지" draggable="false" />
        </div>
        <h2>미션 완료!</h2>
        <p>긴급차량 우선신호 배지를 획득했어요.</p>
        <p>구급차가 먼저 지나갈 수 있도록 신호등과 자동차를 잘 도와주었어요.</p>
        <div class="badge-actions">
          <button class="plain-button primary" type="button" id="retryLesson">다시 해보기</button>
          <button class="plain-button" type="button" id="goHome">처음으로</button>
        </div>
      </div>
    </section>
  `;

  missionLayer.querySelector("#retryLesson").addEventListener("click", restartLesson);
  missionLayer.querySelector("#goHome").addEventListener("click", () => {
    window.location.href = "../index.html";
  });
  spawnConfetti();
}

function restartLesson() {
  state.currentMission = 0;
  state.ambulanceFound = false;
  state.routeStep = 0;
  state.routeSelected = [];
  state.signalStep = 0;
  state.carsStopped = false;
  state.ambulancePassed = false;
  state.badgeEarned = false;
  state.mission4StartedAt = 0;
  state.mission4Late = false;
  state.gaugePlayed = false;
  confettiLayer.innerHTML = "";
  renderMission();
}

function addRoutePoint(target, index) {
  const hitWidth = Math.max(90, target.width + 34);
  const hitHeight = Math.max(90, target.height + 30);
  const button = document.createElement("button");
  const isComplete = index < state.routeStep;
  const isCurrent = index === state.routeStep && !state.missionDone;
  button.className = `route-point${isComplete ? " is-complete" : ""}${isCurrent ? " is-current" : ""}`;
  button.type = "button";
  button.dataset.key = target.key;
  button.setAttribute("aria-label", target.label);
  button.style.left = `${target.x - (hitWidth - target.width) / 2}px`;
  button.style.top = `${target.y - (hitHeight - target.height) / 2}px`;
  button.style.width = `${hitWidth}px`;
  button.style.height = `${hitHeight}px`;
  button.style.setProperty("--image-width", `${target.width}px`);
  button.style.setProperty("--image-height", `${target.height}px`);
  button.innerHTML = `
    <span class="route-hit"></span>
    <img src="${target.src}" alt="" draggable="false" />
    <span class="route-label">${target.shortLabel || target.label}</span>
  `;
  button.addEventListener("click", (event) => handleRouteClick(target, event.currentTarget));
  missionLayer.append(button);
  return button;
}

function addSignalTarget(signal, index) {
  const hitWidth = signal.hitWidth || signal.width + 30;
  const hitHeight = signal.hitHeight || signal.height + 24;
  const button = document.createElement("button");
  const isComplete = index < state.signalStep;
  const isCurrent = index === state.signalStep && !state.missionDone;
  button.className = `signal-target${isComplete ? " is-complete" : ""}${isCurrent ? " is-current" : ""}`;
  button.type = "button";
  button.dataset.key = signal.key;
  button.setAttribute("aria-label", signal.label);
  button.style.left = `${signal.x - (hitWidth - signal.width) / 2}px`;
  button.style.top = `${signal.y - (hitHeight - signal.height) / 2}px`;
  button.style.width = `${hitWidth}px`;
  button.style.height = `${hitHeight}px`;
  button.style.setProperty("--image-width", `${signal.width}px`);
  button.style.setProperty("--image-height", `${signal.height}px`);
  button.innerHTML = `
    <span class="signal-hit"></span>
    <img src="${index < state.signalStep ? signal.green : signal.red}" alt="" draggable="false" />
    <span class="signal-label">${index + 1}</span>
  `;
  button.addEventListener("click", (event) => handleSignalClick(index, signal, event.currentTarget));
  missionLayer.append(button);
  return button;
}

function getVehicleRoadPlacement(src, roadX, roadY, width, height = 0) {
  const bounds = vehicleVisualBounds[src] || { naturalWidth: 1, naturalHeight: 1, x: 0, y: 0, width: 1, height: 1 };
  const renderedHeight = height || (width * bounds.naturalHeight) / bounds.naturalWidth;
  const scaleX = width / bounds.naturalWidth;
  const scaleY = renderedHeight / bounds.naturalHeight;
  const visibleCenterX = (bounds.x + bounds.width / 2) * scaleX;
  const visibleBottomY = (bounds.y + bounds.height) * scaleY;

  return {
    x: Math.round(roadX - visibleCenterX),
    y: Math.round(roadY - visibleBottomY),
    width,
    height: height || undefined,
    renderedHeight,
    scaleX,
    scaleY,
    bounds,
  };
}

function addVehicleSprite({ id = "", src, roadX, roadY, width, height = 0, className = "vehicle", alt = "" }) {
  const placement = getVehicleRoadPlacement(src, roadX, roadY, width, height);
  const image = addSprite({
    src,
    x: placement.x,
    y: placement.y,
    width,
    height: height || undefined,
    className,
    alt,
  });
  if (id) image.id = id;
  return image;
}

function placeVehicle(id, src, x, y, w, h = 0) {
  const image = addVehicleSprite({ id, src, roadX: x, roadY: y, width: w, height: h, className: "vehicle", alt: "" });
  image.id = id;
  return image;
}

function addSprite({ src, x, y, width, height, className = "", alt = "" }) {
  const image = document.createElement("img");
  image.className = `sprite ${className}`.trim();
  image.src = src;
  image.alt = alt;
  image.draggable = false;
  image.style.left = `${x}px`;
  image.style.top = `${y}px`;
  image.style.width = `${width}px`;
  if (height) image.style.height = `${height}px`;
  missionLayer.append(image);
  return image;
}

function addClickableSprite({ key, src, x, y, width, height, label, checked = false, onClick }) {
  const pad = 12;
  const imageHeight = height || width;
  const button = document.createElement("button");
  button.className = `sprite-button${checked ? " is-checked" : ""}`;
  button.type = "button";
  button.dataset.key = key;
  button.setAttribute("aria-label", label);
  button.style.left = `${x - pad}px`;
  button.style.top = `${y - pad}px`;
  button.style.width = `${Math.max(60, width + pad * 2)}px`;
  button.style.height = `${Math.max(60, imageHeight + pad * 2)}px`;
  button.style.setProperty("--image-width", `${width}px`);
  if (height) button.style.setProperty("--image-height", `${height}px`);
  button.innerHTML = `<img src="${src}" alt="" draggable="false" />`;
  button.addEventListener("click", onClick);
  missionLayer.append(button);
  return button;
}

function addClickableVehicle({ key, src, roadX, roadY, width, height = 0, label, checked = false, onClick }) {
  const pad = 12;
  const placement = getVehicleRoadPlacement(src, roadX, roadY, width, height);
  const visibleX = placement.x + placement.bounds.x * placement.scaleX;
  const visibleY = placement.y + placement.bounds.y * placement.scaleY;
  const visibleWidth = placement.bounds.width * placement.scaleX;
  const visibleHeight = placement.bounds.height * placement.scaleY;
  const button = document.createElement("button");
  button.className = `sprite-button${checked ? " is-checked" : ""}`;
  button.type = "button";
  button.dataset.key = key;
  button.setAttribute("aria-label", label);
  button.style.left = `${Math.round(visibleX - pad)}px`;
  button.style.top = `${Math.round(visibleY - pad)}px`;
  button.style.width = `${Math.round(visibleWidth + pad * 2)}px`;
  button.style.height = `${Math.round(visibleHeight + pad * 2)}px`;
  button.style.overflow = "visible";
  button.style.setProperty("--image-width", `${width}px`);
  if (height) button.style.setProperty("--image-height", `${height}px`);

  const image = document.createElement("img");
  image.src = src;
  image.alt = "";
  image.draggable = false;
  image.style.position = "absolute";
  image.style.left = `${Math.round(placement.x - (visibleX - pad))}px`;
  image.style.top = `${Math.round(placement.y - (visibleY - pad))}px`;
  button.append(image);
  button.addEventListener("click", onClick);
  missionLayer.append(button);
  return button;
}

function addControlButton(label, variant, handler) {
  const button = document.createElement("button");
  button.className = `mission-button ${variant}`;
  button.type = "button";
  button.textContent = label;
  button.addEventListener("click", handler);
  controls.append(button);
  return button;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(timers.toast);
  timers.toast = window.setTimeout(() => toast.classList.remove("is-visible"), 1400);
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
    const distance = 24 + Math.random() * 30;
    sparkle.className = "sparkle";
    sparkle.style.left = `${x + Math.cos(angle) * distance}px`;
    sparkle.style.top = `${y + Math.sin(angle) * distance}px`;
    sparkleLayer.append(sparkle);
    window.setTimeout(() => sparkle.remove(), 680);
  }
}

function spawnConfetti() {
  const colors = ["#1269d3", "#1d9d72", "#ffd24a", "#ff8b3d", "#e95151", "#7ec8ff"];
  confettiLayer.innerHTML = "";

  for (let index = 0; index < 34; index += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${310 + Math.random() * 540}px`;
    piece.style.top = `${70 + Math.random() * 48}px`;
    piece.style.background = colors[index % colors.length];
    piece.style.animationDelay = `${Math.random() * 130}ms`;
    confettiLayer.append(piece);
    window.setTimeout(() => piece.remove(), 1050);
  }
}

function playSirenPulse() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;

  try {
    const context = new AudioContext();
    const gain = context.createGain();
    gain.gain.setValueAtTime(0.0001, context.currentTime);
    gain.connect(context.destination);

    [0, 0.22, 0.44].forEach((delay, index) => {
      const oscillator = context.createOscillator();
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(index % 2 === 0 ? 620 : 840, context.currentTime + delay);
      oscillator.connect(gain);
      oscillator.start(context.currentTime + delay);
      oscillator.stop(context.currentTime + delay + 0.16);
    });

    gain.gain.exponentialRampToValueAtTime(0.05, context.currentTime + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.72);
    window.setTimeout(() => context.close(), 900);
  } catch (error) {
    // Some browsers block short generated sounds; the visual siren still gives the cue.
  }
}

initLesson4();
