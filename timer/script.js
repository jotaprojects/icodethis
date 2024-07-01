const tablist = document.querySelector("[role=tablist]");
const tabTriggers = tablist.querySelectorAll("[role=tab]");
const tabPanels = [];

tabTriggers.forEach((tabTrigger) => {
  const panelId = tabTrigger.getAttribute("aria-controls");
  const panel = document.getElementById(panelId);
  tabPanels.push(panel);

  tabTrigger.addEventListener("click", () => {
    setActivePanel(tabTrigger);
  });
});

setActivePanel(tabTriggers[1]);

function setActivePanel(tabTrigger) {
  tabTriggers.forEach((tabTrigger) => {
    tabTrigger.setAttribute("aria-selected", "false");
    tabTrigger.setAttribute("tabindex", "-1");
  });

  tabTrigger.setAttribute("aria-selected", "true");
  tabTrigger.setAttribute("tabindex", "0");

  tabPanels.forEach((tabPanel) => {
    tabPanel.classList.remove("panel--active");
  });

  const panelId = tabTrigger.getAttribute("aria-controls");
  const panel = document.getElementById(panelId);
  panel.classList.add("panel--active");
}

const STATE_START = "start";
const STATE_PAUSE = "pause";
const STATE_STOP = "stop";

// Timer

const hourEl = document.querySelector("#hour");
const minEl = document.querySelector("#min");
const secEl = document.querySelector("#sec");

const timerBtn = document.querySelector("[data-timer-trigger");
let timerState = STATE_PAUSE;
let timerAnimation = null;
let endTime = null;

timerBtn.addEventListener("click", () => {
  if (timerState === STATE_STOP) {
    timerState = STATE_START;
    let hour = hourEl.value;
    let min = minEl.value;
    let sec = secEl.value;

    // Convert everything to seconds and then count down from there
    // https://icodethis.com/modes/design-to-code/54/submissions/242136

    endTime = new Date().setHours(hour, min, sec);

    let startTime = Date.now();
    timerAnimation = requestAnimationFrame(updateTime);

    timerBtn.dataset.state = STATE_STOP;
    timerBtn.setAttribute("aria-label", "Stop");
  } else {
    timerState = STATE_STOP;
    cancelAnimationFrame(timerAnimation);

    timerBtn.dataset.state = STATE_START;
    timerBtn.setAttribute("aria-label", "Start");
  }
});

// const timerBtn = document.querySelector("#timerBtn");
// const timerEl = document.querySelector("#timer");

// let timerAnimation = null;
// let timerState = STATE_STOP;
// let startTime = null;
// let elapsedTime = 0;

function updateTime() {
  timerAnimation = requestAnimationFrame(updateTime);
  elapsedTime = new Date(Date.now() - endTime);

  let hours = elapsedTime.getUTCHours();
  let mins = elapsedTime.getUTCMinutes();
  let secs = elapsedTime.getUTCSeconds();

  hours = hours < 10 ? `0${hours}` : hours;
  mins = mins < 10 ? `0${mins}` : mins;
  secs = secs < 10 ? `0${secs}` : secs;

  console.log(hours, mins, secs);

  timerEl.textContent = `${hours}:${mins}:${secs}`;
}

// // start and stop click event
// timerBtn.addEventListener("click", () => {
//   if (timerState === STATE_STOP) {
//     timerState = STATE_START;
//     startTime = Date.now();
//     timerAnimation = requestAnimationFrame(updateTime);

//     timerBtn.dataset.state = STATE_STOP;
//     timerBtn.setAttribute("aria-label", "Stop");
//   } else {
//     timerState = STATE_STOP;
//     cancelAnimationFrame(timerAnimation);

//     timerBtn.dataset.state = STATE_START;
//     timerBtn.setAttribute("aria-label", "Start");
//   }
// });
