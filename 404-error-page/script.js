const lightSwitch = document.querySelector(".switch");

lightSwitch.addEventListener("click", (e) => {
  let dataSwitch = document.body.dataset.switch;
  document.body.dataset.switch = dataSwitch === "on" ? "off" : "on";
  lightSwitch.classList.toggle("switch--on");
});

const mql = window.matchMedia("(min-width: 35em)");

switchClass();

mql.addEventListener("change", switchClass);

function switchClass() {
  if (mql.matches) {
    document.body.classList.remove("screen-size-small");
  } else {
    document.body.classList.add("screen-size-small");
  }
}
