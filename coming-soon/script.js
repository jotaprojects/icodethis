const links = document.querySelectorAll("a");
const form = document.querySelector("form");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
