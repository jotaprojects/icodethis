const progress = document.querySelector(".progress-bar");
let start = 0;
const max = 40; // How far should the interval run.

// 1. Callback 2. Delay 3. Args for callback
const counter = setInterval(count, 25);

function count() {
  start++;
  progress.dataset.progress = start; // Updates a data attribute. Can be used in css with attr()

  if (start === max) {
    clearInterval(counter); // Clean up
  }
}
