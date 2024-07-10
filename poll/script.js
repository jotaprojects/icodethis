const votes = [65, 12, 23];
let pos = 0;
let tick = 0;
let progress = null;

const actionEl = document.querySelector(".actions");
const progressEls = document.querySelectorAll("progress");

actionEl.addEventListener("animationend", (e) => {
  startProgress();
});

function startProgress() {
  progress = setInterval(updateProgress, 25);
}

function updateProgress() {
  if (pos >= progressEls.length) {
    clearInterval(progress);
    return;
  }
  tick++;

  progressEls[pos].value = tick;
  const progressCount = progressEls[pos].nextElementSibling;
  progressCount.textContent = `${progressEls[pos].value}%`;

  if (tick >= votes[pos]) {
    tick = 0;
    pos++;

    clearInterval(progress);
    startProgress();
  }
}

// Future iteration to be able to save vote
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
