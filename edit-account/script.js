const formEl = document.querySelector("#edit-form");
const submitBtn = formEl.querySelector("button[type=submit]");

document.body.classList.add("state--open");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  submitBtn.disabled = true;

  setTimeout(() => {
    submitBtn.disabled = false;
  }, 1000);
});

const stateTriggers = document.querySelectorAll(".state-trigger");

stateTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    document.body.classList.remove("state--open");
    setTimeout(() => {
      document.body.classList.add("state--open");
    }, 1500);
  });
});
