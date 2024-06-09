const links = document.querySelectorAll("a");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    // Credits to Blackwolf and clevermissfox
    const linkTarget = link.getAttribute("href");

    if (linkTarget === "#") return;

    const target = document.querySelector(linkTarget);

    if (target) {
      target.scrollIntoView();
    }
  });
});

const trigger = document.querySelector("[data-trigger]");

trigger.addEventListener("click", () => {
  document.body.classList.toggle("state--nav");
  if (document.body.classList.contains("state--nav")) {
    trigger.setAttribute("aria-label", "Close menu");
  } else {
    trigger.setAttribute("aria-label", "Open menu");
  }
});

document.body.addEventListener("click", (e) => {
  if (e.target.closest(".nav-container")) return;

  if (e.target.matches("[data-trigger]")) return;

  if (document.body.classList.contains("state--nav")) {
    document.body.classList.remove("state--nav");
    trigger.ariaLabel("aria-label", "Open menu");
  }
});
