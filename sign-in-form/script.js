const trigger = document.querySelector(".offcanvas-trigger");
const offcanvas = trigger.closest(".offcanvas");

trigger.addEventListener("click", () => {
  offcanvas.classList.toggle("offcanvas--active");
});

const links = document.querySelectorAll("a");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
