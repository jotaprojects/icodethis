const box = document.querySelector(".box");
const closeBtn = document.querySelector(".btn-close");
const form = document.querySelector("#submit-form");
const passwordField = document.querySelector("#testpassword");
const revealCheckbox = document.querySelector("#reveal");

revealCheckbox.addEventListener("change", (e) => {
  const checked = e.target.checked;

  if (checked) {
    passwordField.classList.add("reveal-on-blur");
    passwordField.type = "text";
  } else {
    passwordField.classList.remove("reveal-on-blur");
    passwordField.type = "password";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  box.classList.remove("state-welcome", "box--error");

  const value = passwordField.value;
  if (value === "password") {
    passwordField.type = "password";
    revealCheckbox.checked = false;
    box.classList.add("state-welcome");
  } else {
    box.classList.add("box--error");
  }
});

closeBtn.addEventListener("click", (e) => {
  box.classList.remove("state-welcome");
});
