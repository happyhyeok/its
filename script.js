const state = {
  mission: 0,
  signalStep: 0,
  signSlots: [null, null, null, null],
  draggedCard: null,
};

const assets = {
  helperDefault: "./assets/common_character_traffic_helper_default.svg",
  helperSuccess: "./assets/common_character_traffic_helper_success.svg",
  helperWarning: "./assets/common_character_traffic_helper_warning.svg",
  iconPin: "./assets/icon_objects_svg/icon_object_05.svg",
  iconInfo: "./assets/icon_objects_svg/icon_object_04.svg",
  iconShield: "./assets/icon_objects_svg/icon_object_02.svg",
  iconWarn: "./assets/icon_objects_svg/icon_object_03.svg",
  iconStar: "./assets/icon_objects_svg/icon_object_06.svg",
  badge: "./assets/badge_objects_svg/badge_object_01.svg",
};

const missions = [
  {
    kind: "버스 위치 정보",
    title: "내가 탈 버스를 찾아요",
    icon: assets.iconPin,
    copy: "대회장으로 가는 버스를 골라 주세요.",
    helper: "견학 버스를 찾아봐. 목적지도 확인하자.",
  },
  {
    kind: "도착 시간 예측",
    title: "버스 위치 신호를 받아요",
    icon: assets.iconInfo,
    copy: "버스에서 온 점선 신호가 관제센터를 지나 정류장 전광판으로 가는 흐름을 확인해요.",
    helper: "버스가 어디 있는지 알려 주면 관제센터가 정보를 확인하고 전광판에 보내줘.",
  },
  {
    kind: "전광판 안내",
    title: "전광판을 고쳐요",
    icon: assets.iconShield,
    copy: "버스가 가까워지는 순서대로 안내 문구를 전광판에 놓아 주세요.",
    helper: "가장 먼 안내부터 가까운 안내까지 차례대로 놓으면 기다리는 사람이 헷갈리지 않아.",
  },
  {
    kind: "안전한 선택",
    title: "기다릴까? 뛰어갈까?",
    icon: assets.iconWarn,
    copy: "버스 도착 안내는 편리함뿐 아니라 안전한 이동을 돕는 정보예요.",
    helper: "전광판을 확인했다면 정류장에서 차분히 기다리는 선택이 가장 안전해.",
  },
];

const body = document.querySelector("#missionBody");
const missionKind = document.querySelector("#missionKind");
const missionTitle = document.querySelector("#missionTitle");
const missionCopy = document.querySelector("#missionCopy");
const missionIcon = document.querySelector("#missionIcon");
const missionLabel = document.querySelector("#missionLabel");
const progressBar = document.querySelector("#progressBar");
const helperImage = document.querySelector("#helperImage");
const helperLine = document.querySelector("#helperLine");
const monitorStatus = document.querySelector("#monitorStatus");
const monitorHint = document.querySelector("#monitorHint");
const toast = document.querySelector("#toast");
const introScene = document.querySelector("#introScene");
const simulationScene = document.querySelector("#simulationScene");
const startScene = document.querySelector("#startScene");
const skipOpening = document.querySelector("#skipOpening");
const openingProgress = document.querySelector("#openingProgress");
const openingCutLabel = document.querySelector("#openingCutLabel");
const openingSpeaker = document.querySelector("#openingSpeaker");
const openingLine = document.querySelector("#openingLine");
const openingStudentImages = {
  minjun: document.querySelector(".student.minjun img"),
  seoyeon: document.querySelector(".student.seoyeon img"),
  jihun: document.querySelector(".student.jihun img"),
};

const openingCuts = [
  {
    label: "컷1. 강릉역 앞",
    speaker: "민준 · 서연 · 지훈",
    line: "드디어 ITS 체험 견학 가는 날이다! 그런데 대회장까지 어떤 버스를 타야 할까?",
  },
  {
    label: "컷2. 고민",
    speaker: "친구들",
    line: "버스는 어디 있지? 언제 도착하지? 잘못 타면 어떡하지?",
  },
  {
    label: "컷3. 교통도우미 등장",
    speaker: "교통도우미",
    line: "걱정 마! ITS가 버스 위치를 알려준단다.",
  },
  {
    label: "컷4. 버스 위치 신호",
    speaker: "교통도우미",
    line: "버스가 움직이면 위치 신호가 관제센터로 전달돼.",
  },
  {
    label: "컷5. 도착 안내판",
    speaker: "교통도우미",
    line: "관제센터가 정보를 확인한 뒤 정류장 안내판에 도착 시간이 표시돼!",
  },
  {
    label: "컷6. 미션 시작",
    speaker: "오늘의 미션",
    line: "대회장으로 가는 버스를 찾아라!",
  },
];

let openingCut = 0;
let openingTimer;

const studentMoods = {
  idle: {
    minjun: "./assets/opening/scene1_student_boy_idle.png",
    seoyeon: "./assets/opening/scene1_student_girl_idle.png",
    jihun: "./assets/opening/scene1_student_boy_thinking.png",
  },
  thinking: {
    minjun: "./assets/opening/scene1_student_boy_thinking.png",
    seoyeon: "./assets/opening/scene1_student_girl_thinking.png",
    jihun: "./assets/opening/scene1_student_boy_thinking.png",
  },
  ready: {
    minjun: "./assets/opening/scene1_student_boy_idle.png",
    seoyeon: "./assets/opening/scene1_student_phone.png",
    jihun: "./assets/opening/scene1_student_boy_idle.png",
  },
};

function updateOpeningStudents(index) {
  const mood = index === 1 ? studentMoods.thinking : index >= 4 ? studentMoods.ready : studentMoods.idle;
  Object.entries(mood).forEach(([name, src]) => {
    openingStudentImages[name].src = src;
  });
}

function renderMission() {
  const mission = missions[state.mission];
  missionKind.textContent = mission.kind;
  missionTitle.textContent = mission.title;
  missionCopy.textContent = mission.copy;
  missionIcon.src = mission.icon;
  missionLabel.textContent = `미션 ${state.mission + 1} / ${missions.length}`;
  progressBar.style.width = `${((state.mission + 1) / missions.length) * 100}%`;
  helperImage.src = assets.helperDefault;
  helperLine.textContent = mission.helper;

  if (state.mission === 0) renderBusMission();
  if (state.mission === 1) renderSignalMission();
  if (state.mission === 2) renderSignMission();
  if (state.mission === 3) renderChoiceMission();
}

function setMonitor(status, hint) {
  monitorStatus.textContent = status;
  monitorHint.textContent = hint;
  document.querySelector(".monitor").classList.remove("pulse");
  requestAnimationFrame(() => document.querySelector(".monitor").classList.add("pulse"));
}

function setHelper(type, message) {
  helperImage.src =
    type === "success" ? assets.helperSuccess : type === "warning" ? assets.helperWarning : assets.helperDefault;
  helperLine.textContent = message;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 1700);
}

function playTone(type) {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  const ctx = new AudioContext();
  const gain = ctx.createGain();
  const osc = ctx.createOscillator();
  const now = ctx.currentTime;
  osc.type = type === "warning" ? "square" : "sine";
  osc.frequency.setValueAtTime(type === "warning" ? 220 : 540, now);
  osc.frequency.linearRampToValueAtTime(type === "warning" ? 160 : 760, now + 0.16);
  gain.gain.setValueAtTime(0.001, now);
  gain.gain.exponentialRampToValueAtTime(0.12, now + 0.03);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + 0.24);
  window.setTimeout(() => ctx.close(), 300);
}

function advance(message) {
  playTone("success");
  setHelper("success", message);
  showToast("미션 성공");
  if (state.mission < missions.length - 1) {
    window.setTimeout(() => {
      state.mission += 1;
      state.signalStep = 0;
      state.signSlots = [null, null, null, null];
      renderMission();
    }, 1100);
  } else {
    window.setTimeout(renderFinish, 850);
  }
}

function renderBusMission() {
  setMonitor("버스 선택", "목적지를 함께 확인해요.");
  body.innerHTML = `
    <div class="bus-grid">
      ${busCard("101번 버스", "시청 방향", "wrong")}
      ${busCard("202번 버스", "경포 방향", "wrong")}
      ${busCard("견학 버스", "대회장 방향", "right")}
    </div>
  `;
  body.querySelectorAll(".bus-card").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.answer === "right") {
        setMonitor("찾았어요", "대회장행 견학 버스입니다.");
        advance("맞아요! 이 버스를 타고 대회장으로 가요.");
      } else {
        playTone("warning");
        setMonitor("다시 확인", "목적지가 다른 버스예요.");
        setHelper("warning", "이 버스는 다른 곳으로 가요. 대회장으로 가는 버스를 다시 찾아볼까요?");
        showToast("목적지를 다시 살펴보세요");
      }
    });
  });
}

function busCard(title, route, answer) {
  return `
    <button class="bus-card" type="button" data-answer="${answer}">
      <span class="bus-icon"><span class="bus-window"></span></span>
      <strong>${title}</strong>
      <span>${route}</span>
    </button>
  `;
}

function renderSignalMission() {
  const steps = ["bus", "center", "display"];
  const labels = ["버스", "관제센터", "전광판"];
  setMonitor("신호 대기", "버스를 먼저 눌러요.");
  body.innerHTML = `
    <div class="map-board">
      <div class="route-map">
        <span class="signal-line" aria-hidden="true"></span>
        <button class="signal-button" type="button" data-target="bus" aria-label="버스 위치 신호">
          <span class="bus-icon"><span class="bus-window"></span></span>
        </button>
        <button class="signal-button" type="button" data-target="center" aria-label="관제센터">
          <img src="./assets/icon_objects_svg/icon_object_04.svg" alt="" />
        </button>
        <button class="signal-button" type="button" data-target="display" aria-label="정류장 전광판">
          <img src="./assets/icon_objects_svg/icon_object_07.svg" alt="" />
        </button>
      </div>
      <div class="signal-list">
        <div data-step="0">1. 버스 신호</div>
        <div data-step="1">2. 정보 확인</div>
        <div data-step="2">3. 도착 시간 표시</div>
      </div>
    </div>
  `;

  body.querySelectorAll(".signal-button").forEach((button) => {
    button.addEventListener("click", () => {
      const expected = steps[state.signalStep];
      if (button.dataset.target !== expected) {
        playTone("warning");
        setHelper("warning", `${labels[state.signalStep]}부터 차례대로 확인해 보자.`);
        showToast("신호 흐름 순서가 달라요");
        return;
      }
      button.classList.add("is-done");
      body.querySelector(`[data-step="${state.signalStep}"]`).classList.add("is-on");
      body.querySelector(".signal-line").classList.add("is-active");
      const monitorMessages = [
        ["버스 신호", "버스 위치 신호 받는 중"],
        ["정보 확인", "정보 확인"],
        ["5분 후 도착", "정류장 전광판에 표시"],
      ];
      setMonitor(monitorMessages[state.signalStep][0], monitorMessages[state.signalStep][1]);
      playTone("success");
      state.signalStep += 1;
      if (state.signalStep === steps.length) {
        window.setTimeout(() => advance("좋아요! 버스 신호가 전광판까지 잘 도착했어요."), 650);
      }
    });
  });
}

function renderSignMission() {
  setMonitor("전광판 비어 있음", "문구 카드를 순서대로 놓아요.");
  body.innerHTML = `
    <div class="sign-panel">
      <div class="display-board" aria-label="정류장 전광판">
        <div class="slots">
          ${[0, 1, 2, 3].map((i) => `<button class="slot" type="button" data-slot="${i}">빈칸</button>`).join("")}
        </div>
      </div>
      <div class="card-tray" aria-label="문구 카드">
        ${["곧 도착", "5분 후 도착", "탑승하세요", "2분 후 도착"]
          .map((label) => `<button class="word-card" type="button" draggable="true" data-card="${label}">${label}</button>`)
          .join("")}
      </div>
      <div class="sign-actions">
        <button class="plain-button primary" type="button" id="checkSign">확인</button>
        <button class="plain-button" type="button" id="resetSign">다시 놓기</button>
      </div>
    </div>
  `;

  body.querySelectorAll(".word-card").forEach((card) => {
    card.addEventListener("click", () => placeCard(card.dataset.card));
    card.addEventListener("dragstart", () => {
      state.draggedCard = card.dataset.card;
    });
  });
  body.querySelectorAll(".slot").forEach((slot) => {
    slot.addEventListener("click", () => clearSlot(Number(slot.dataset.slot)));
    slot.addEventListener("dragover", (event) => event.preventDefault());
    slot.addEventListener("drop", () => {
      if (state.draggedCard) placeCard(state.draggedCard, Number(slot.dataset.slot));
      state.draggedCard = null;
    });
  });
  body.querySelector("#checkSign").addEventListener("click", checkSign);
  body.querySelector("#resetSign").addEventListener("click", resetSign);
  paintSlots();
}

function placeCard(value, preferredSlot) {
  if (state.signSlots.includes(value)) return;
  const index = Number.isInteger(preferredSlot) && !state.signSlots[preferredSlot] ? preferredSlot : state.signSlots.indexOf(null);
  if (index === -1) return;
  state.signSlots[index] = value;
  paintSlots();
}

function clearSlot(index) {
  state.signSlots[index] = null;
  paintSlots();
}

function paintSlots() {
  body.querySelectorAll(".slot").forEach((slot) => {
    const index = Number(slot.dataset.slot);
    const value = state.signSlots[index];
    slot.textContent = value || "빈칸";
    slot.classList.toggle("is-filled", Boolean(value));
  });
  body.querySelectorAll(".word-card").forEach((card) => {
    const used = state.signSlots.includes(card.dataset.card);
    card.setAttribute("aria-disabled", String(used));
  });
}

function resetSign() {
  state.signSlots = [null, null, null, null];
  paintSlots();
  setMonitor("다시 놓기", "먼 안내부터 차례대로 놓아요.");
}

function checkSign() {
  const answer = ["5분 후 도착", "2분 후 도착", "곧 도착", "탑승하세요"];
  if (state.signSlots.some((slot) => !slot)) {
    showToast("빈칸을 모두 채워 주세요");
    return;
  }
  if (answer.every((value, index) => state.signSlots[index] === value)) {
    setMonitor("전광판 완료", "5분 후 도착");
    advance("정확해요! 버스가 가까워지는 순서대로 안내가 바뀌어요.");
  } else {
    playTone("warning");
    setMonitor("순서 확인", "가까워지는 순서로 다시 놓아요.");
    setHelper("warning", "시간 순서가 이상해요. 버스가 가까워지는 흐름대로 다시 놓아 봐요.");
    showToast("순서를 다시 확인해요");
  }
}

function renderChoiceMission() {
  setMonitor("5분 후 도착", "정류장에서 안전하게 기다려요.");
  body.innerHTML = `
    <div class="choice-grid">
      <button class="choice-card" type="button" data-choice="safe">
        <img src="./assets/icon_objects_svg/icon_object_02.svg" alt="" />
        <strong>전광판을 보고 기다리기</strong>
        <span>정류장 안에서 차분히 탑승 준비를 해요.</span>
      </button>
      <button class="choice-card" type="button" data-choice="danger">
        <img src="./assets/icon_objects_svg/icon_object_03.svg" alt="" />
        <strong>버스를 찾으러 도로 쪽으로 가기</strong>
        <span>차도 가까이로 이동하면 위험할 수 있어요.</span>
      </button>
    </div>
  `;
  body.querySelectorAll(".choice-card").forEach((card) => {
    card.addEventListener("click", () => {
      if (card.dataset.choice === "safe") {
        setMonitor("안전 탑승", "대회장으로 출발합니다.");
        advance("좋은 선택이에요! 도착 안내는 안전하게 기다리도록 도와주는 정보예요.");
      } else {
        playTone("warning");
        setMonitor("위험해요", "정류장에서 기다려요.");
        setHelper("warning", "위험해요. 정류장에서 기다려요.");
        showToast("안전한 선택을 다시 골라요");
      }
    });
  });
}

function renderFinish() {
  missionKind.textContent = "배지 획득";
  missionTitle.textContent = "버스 안내 탐정";
  missionCopy.textContent = "버스 위치 정보, 도착 시간 예측, 전광판 안내, 안전한 선택을 모두 체험했어요.";
  missionIcon.src = assets.iconStar;
  missionLabel.textContent = "미션 완료";
  progressBar.style.width = "100%";
  helperImage.src = assets.helperSuccess;
  helperLine.textContent = "축하해요! 강릉 스마트 교통 미션을 해결했어요.";
  setMonitor("미션 완료", "버스 안내 탐정 배지 획득");
  body.innerHTML = `
    <div class="finish">
      <img src="${assets.badge}" alt="버스 안내 탐정 배지" />
      <div>
        <strong>축하해요!</strong>
        <p>강릉역에서 버스 도착 안내를 확인하고 안전하게 탑승했어요.</p>
        <button class="plain-button primary" type="button" id="restart">처음부터 다시</button>
      </div>
    </div>
  `;
  body.querySelector("#restart").addEventListener("click", () => {
    state.mission = 0;
    state.signalStep = 0;
    state.signSlots = [null, null, null, null];
    renderMission();
  });
}

function setOpeningCut(index) {
  openingCut = Math.max(0, Math.min(index, openingCuts.length - 1));
  const cut = openingCuts[openingCut];
  introScene.dataset.cut = String(openingCut);
  updateOpeningStudents(openingCut);
  openingCutLabel.textContent = cut.label;
  openingSpeaker.textContent = cut.speaker;
  openingLine.textContent = cut.line;
  openingProgress.style.width = `${((openingCut + 1) / openingCuts.length) * 100}%`;
}

function beginOpening() {
  setOpeningCut(0);
  openingTimer = window.setInterval(() => {
    if (openingCut < openingCuts.length - 1) {
      setOpeningCut(openingCut + 1);
    } else {
      window.clearInterval(openingTimer);
    }
  }, 5600);
}

function enterSimulationScene() {
  window.clearInterval(openingTimer);
  introScene.hidden = true;
  simulationScene.hidden = false;
  renderMission();
}

startScene.addEventListener("click", enterSimulationScene);
skipOpening.addEventListener("click", enterSimulationScene);

beginOpening();
renderMission();
