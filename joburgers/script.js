const STATE_NAV = "state-nav";
const NAV_TRIGGER_SELECTOR = "[data-trigger='nav']";
const NAV_CONTAINER_SELECTOR = ".nav-container";

const links = document.querySelectorAll("a");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    if (link.classList.contains("menu__link")) {
      document.body.classList.remove(STATE_NAV);
      trigger.setAttribute("aria-label", "Open menu");
    }

    // Credits to Blackwolf and clevermissfox
    const linkTarget = link.getAttribute("href");

    if (linkTarget === "#") return;

    const target = document.querySelector(linkTarget);

    if (target) {
      target.scrollIntoView();
    }
  });
});

const trigger = document.querySelector(NAV_TRIGGER_SELECTOR);

trigger.addEventListener("click", () => {
  document.body.classList.toggle(STATE_NAV);
  if (document.body.classList.contains(STATE_NAV)) {
    trigger.setAttribute("aria-label", "Close menu");
  } else {
    trigger.setAttribute("aria-label", "Open menu");
  }
});

document.body.addEventListener("click", (e) => {
  if (e.target.closest(NAV_CONTAINER_SELECTOR)) return;

  if (e.target.matches(NAV_TRIGGER_SELECTOR)) return;

  if (document.body.classList.contains(STATE_NAV)) {
    document.body.classList.remove(STATE_NAV);
    trigger.setAttribute("aria-label", "Open menu");
  }
});
