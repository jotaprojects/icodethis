/* iCodeThis is not working with localstorage cause of iframe sharing */
class PurrsonScore {
  constructor(storeKey) {
    this.storeKey = storeKey;
    this.createTooltip();
    this.setScoreAsArray();
    this.initBtns();
  }

  storeKey = "";
  scoreArr = [];
  tooltip = null;

  initBtns() {
    const btns = document.querySelectorAll(".btn--purrson");
    btns.forEach((btn) => {
      btn.appendChild(this.tooltip);
      btn.addEventListener("click", () => {
        btn.classList.add("found");
        setTimeout(() => {
          btn.classList.remove("found");
          this.setScore();
        }, 1000);
      });
    });
  }

  reset() {
    this.scoreArr = [];
    this.tooltip.innerText = "You found me!";
  }

  getScoreAsArray() {
    return this.scoreArr;
  }

  setScoreAsArray() {
    this.reset();
  }

  getScore() {
    return this.scoreArr.length;
  }

  setScore() {
    if (this.hasFound()) {
      this.tooltip.innerText = "Already found!";
      return;
    }
    this.scoreArr.push(this.storeKey);
  }

  hasFound() {
    return this.scoreArr.includes(this.storeKey);
  }

  createTooltip() {
    const found = this.hasFound();
    const tooltip = document.createElement("div");
    tooltip.classList.add("purrson-tooltip");
    tooltip.innerText = found ? "Already found!" : "You found me!";
    this.tooltip = tooltip;
  }

  getTooltip() {
    return this.tooltip;
  }
}

// const scoreKey = "purrson-countdown";
// const purrson = new PurrsonScore(scoreKey);
