// Double Range slider
// Credits to https://codepen.io/alexpg96/pen/xxrBgbP and https://troll-winner.com/blog/one-more-dual-range-slider
/*
<div class="range-wrapper">
  <div class="range-labels sr-only">
    <label for="range-min" class="range__label" data-range-min>0</label>
    <label for="range-max" class="range__label" data-range-max
      >100</label
    >
  </div>
  <div class="range">
    <div class="range-track-double"></div>
    <input
      id="range-min"
      type="range"
      min="50"
      max="350"
      value="115"
      list="range-values"
    />
    <input
      id="range-max"
      type="range"
      min="50"
      max="350"
      value="260"
      list="range-values"
    />
  </div>
  <datalist id="range-values">
    <option value="50" label="$50"></option>
    <option value="100" label="$100"></option>
    <option value="150" label="$150"></option>
    <option value="200" label="$200"></option>
    <option value="250" label="$250"></option>
    <option value="300" label="$300"></option>
    <option value="350" label="$350"></option>
  </datalist>
</div>
*/
const range = document.querySelector(".range");
const rangeTrackDouble = document.querySelector(".range-track-double");
const rangeMin = document.querySelector("#range-min");
const rangeMax = document.querySelector("#range-max");
const rangeMinLabel = document.querySelector("[data-range-min]");
const rangeMaxLabel = document.querySelector("[data-range-max]");
const gap = 30;
const minValue = parseInt(rangeMin.min);
const maxValue = parseInt(rangeMax.max);

function formatPrice(value) {
  if (typeof value == "number") {
    value = value.toFixed(2);
  }
  return `$${value}`;
}

function fillColor() {
  const percentMin =
    ((parseInt(rangeMin.value) - minValue) / (maxValue - minValue)) * 100;
  const percentMax =
    ((parseInt(rangeMax.value) - minValue) / (maxValue - minValue)) * 100;
  range.style.setProperty("--percent-min", `${percentMin}%`);
  range.style.setProperty("--percent-max", `${percentMax}%`);
}

function updateRange() {
  rangeMinLabel.textContent = formatPrice(rangeMin.value);
  rangeMaxLabel.textContent = formatPrice(rangeMax.value);
  range.setAttribute("data-from-value", formatPrice(rangeMin.value));
  range.setAttribute("data-to-value", formatPrice(rangeMax.value));
  fillColor();
}

updateRange();

rangeMin.addEventListener("input", function () {
  if (parseInt(rangeMax.value) - parseInt(rangeMin.value) <= gap) {
    rangeMin.value = parseInt(rangeMax.value) - gap;
  }
  updateRange();
});

rangeMax.addEventListener("input", function () {
  if (parseInt(rangeMax.value) - parseInt(rangeMin.value) <= gap) {
    rangeMax.value = parseInt(rangeMin.value) + gap;
  }
  updateRange();
});
