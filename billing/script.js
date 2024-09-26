const links = document.querySelectorAll("a");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

const resetTriggers = document.querySelectorAll("[data-drawer-reset-trigger]");
const drawerTriggers = document.querySelectorAll("[data-drawer-trigger]");

document.body.addEventListener("click", (e) => {
  if (!e.target.matches(".wrapper") && !e.target.matches(".drawer")) return;

  resetDrawer();
});

resetTriggers.forEach((trigger) => {
  trigger.addEventListener("click", resetDrawer);
});

drawerTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (e) => {
    const drawer = trigger.getAttribute("data-drawer-trigger");
    setActiveDrawer(trigger, drawer);
  });
});

// TODO: Brainstorm a way to make switching and closing states easier. Remove double code
function setActiveDrawer(trigger, drawer) {
  const isActive = document.body.classList.contains(`drawer-${drawer}`);
  if (isActive) {
    resetDrawer();
    return;
  }

  resetDrawer();

  document.body.classList.add("drawer");
  document.body.classList.add(`drawer-${drawer}`);
}

function resetDrawer() {
  document.body.setAttribute("class", "");
}
