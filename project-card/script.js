const progress = document.querySelector(".progress-bar");
let start = 0;
const max = 40;

const counter = setInterval(count, 25);

function count() {
  start++;
  progress.dataset.progress = start;

  if (start === 40) {
    clearInterval(counter);
  }
}
