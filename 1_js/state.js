const resetTriggers = document.querySelectorAll("[data-reset-state-trigger]");
const stateTriggers = document.querySelectorAll("[data-state-trigger]");

document.body.addEventListener("click", (e) => {
  if (!e.target.matches(".wrapper") && !e.target.matches(".state")) return;

  resetState();
});

resetTriggers.forEach((trigger) => {
  trigger.addEventListener("click", resetState);
});

stateTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (e) => {
    const state = trigger.getAttribute("data-state-trigger");
    setActiveState(trigger, state);
  });
});

/* TODO: Brainstorm a way to make switching and closing states easier. Remove double code */
function setActiveState(trigger, state) {
  const isActive = document.body.classList.contains(`state-${state}`);
  if (isActive) {
    resetState();
    return;
  }

  resetState();

  document.body.classList.add("state");
  document.body.classList.add(`state-${state}`);
}

function resetState() {
  document.body.setAttribute("class", "");
}
