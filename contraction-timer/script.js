const STATE_START = "start";
const STATE_STOP = "stop";

const timerBtn = document.querySelector("#timerBtn");
const timerEl = document.querySelector("#timer");

let timerAnimation = null;
let timerState = STATE_STOP;
let startTime = null;
let elapsedTime = 0;

function updateTime() {
  timerAnimation = requestAnimationFrame(updateTime);
  elapsedTime = new Date(Date.now() - startTime);

  let hours = elapsedTime.getUTCHours();
  let mins = elapsedTime.getUTCMinutes();
  let secs = elapsedTime.getUTCSeconds();

  hours = hours < 10 ? `0${hours}` : hours;
  mins = mins < 10 ? `0${mins}` : mins;
  secs = secs < 10 ? `0${secs}` : secs;

  timerEl.textContent = `${hours}:${mins}:${secs}`;
}

// start and stop click event
timerBtn.addEventListener("click", () => {
  if (timerState === STATE_STOP) {
    timerState = STATE_START;
    startTime = Date.now();
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
