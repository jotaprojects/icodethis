const links = document.querySelectorAll("a");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

const STATE_NAV = "state-nav";
const NAV_TRIGGER_SELECTOR = "[data-trigger='nav']";
const NAV_CONTAINER_SELECTOR = ".nav-container";

const trigger = document.querySelector(NAV_TRIGGER_SELECTOR);
const childTriggers = document.querySelectorAll('[data-trigger="nav-child"]');

trigger.addEventListener("click", () => {
  document.body.classList.toggle(STATE_NAV);
  if (document.body.classList.contains(STATE_NAV)) {
    trigger.setAttribute("aria-label", "Close menu");
    trigger.setAttribute("aria-expanded", true);
  } else {
    resetMenu();
  }
});

document.body.addEventListener("click", (e) => {
  if (e.target.closest(NAV_CONTAINER_SELECTOR)) return;

  if (e.target.matches(NAV_TRIGGER_SELECTOR)) return;

  if (document.body.classList.contains(STATE_NAV)) {
    document.body.classList.remove(STATE_NAV);
    resetMenu();
  }
});

childTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const isExpanded = trigger.getAttribute("aria-expanded") === "true";

    toggleExpanded(trigger, isExpanded);
  });
});

const backTriggers = document.querySelectorAll('[data-trigger="back"]');

backTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const container = trigger.closest("li");
    const childTrigger = container.querySelector(".menu-toggle");
    const isExpanded = childTrigger.getAttribute("aria-expanded") === "true";

    toggleExpanded(childTrigger, isExpanded);
  });
});

function resetMenu() {
  trigger.setAttribute("aria-label", "Open menu");
  trigger.setAttribute("aria-expanded", false);

  // Resets only the first level
  childTriggers.forEach((trigger) => {
    trigger.setAttribute("aria-expanded", false);
  });
}

function toggleExpanded(trigger, value) {
  trigger.setAttribute("aria-expanded", !value);
}
