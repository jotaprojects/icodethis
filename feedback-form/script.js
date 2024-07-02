const form = document.querySelector("#feedback-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  form.reset();

  document.body.classList.toggle("state--success");
});

document.addEventListener("click", (e) => {
  if (!e.target.matches(".overlay")) return;

  document.body.classList.toggle("state--success");
});
