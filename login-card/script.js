const loginBtn = document.querySelector("[data-login]");
const closeBtn = document.querySelector("[data-close]");

loginBtn.addEventListener("click", () => {
  document.body.classList.add("state-login");
});

closeBtn.addEventListener("click", () => {
  document.body.classList.remove("state-login");
});

const links = document.querySelectorAll("a");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
