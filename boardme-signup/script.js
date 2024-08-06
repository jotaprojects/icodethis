const signUpEmailBtn = document.querySelector("#signup-email");
const backBtns = document.querySelectorAll(".back-btn");
const loginLink = document.querySelector("#login-link");
const forms = document.querySelectorAll("form");

signUpEmailBtn.addEventListener("click", () => {
  document.body.classList.remove("state-start");
  document.body.classList.remove("state-login");
  document.body.classList.add("state-create");
});

loginLink.addEventListener("click", () => {
  document.body.classList.remove("state-start");
  document.body.classList.add("state-login");
  document.body.classList.remove("state-create");
});

backBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.body.classList.add("state-start");
    document.body.classList.remove("state-login");
    document.body.classList.remove("state-create");
  });
});

forms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
});

const links = document.querySelectorAll("a");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
  });
});
