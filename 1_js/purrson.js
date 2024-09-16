// TODO: Fixc repeating code for tooltip innertext

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
        this.setScore();
        setTimeout(() => {
          btn.classList.remove("found");
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

    const storedScore = this.getLocalStorage();
    if (storedScore) {
      this.scoreArr = storedScore.split(",");
    }
  }

  getScore() {
    return this.scoreArr.length;
  }

  setScore() {
    this.setScoreAsArray();
    if (this.hasFound()) {
      this.tooltip.innerText = "Already found!";
      return;
    }
    this.scoreArr.push(this.storeKey);
    localStorage.setItem("purrson-score", this.scoreArr);
  }

  hasFound() {
    return this.scoreArr.includes(this.storeKey);
  }

  createTooltip() {
    const tooltip = document.createElement("div");
    tooltip.classList.add("purrson-tooltip");
    tooltip.innerText = this.getTooltipText();
    this.tooltip = tooltip;
  }

  getTooltip() {
    return this.tooltip;
  }

  getTooltipText() {
    const found = this.hasFound();
    return found ? "Already found!" : "You found me!";
  }

  getLocalStorage() {
    return localStorage.getItem("purrson-score");
  }

  setLocalStorage(score) {
    localStorage.setItem("purrson-score", score);
  }
}

// const scoreKey = "purrson-countdown";
// const purrson = new PurrsonScore(scoreKey);
