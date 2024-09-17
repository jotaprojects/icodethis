const resetTriggers = document.querySelectorAll("[data-reset-state-trigger]");

resetTriggers.forEach((trigger) => {
  trigger.addEventListener("click", resetState);
});

function resetState() {
  document.body.setAttribute("class", "");
}

const feedbackForm = document.querySelector("#feedback-form");

feedbackForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(feedbackForm);
  const rating = parseInt(formData.get("rating"));

  if (rating === 5) {
    document.body.setAttribute("class", "state-purrson");
  } else {
    document.body.setAttribute("class", "state-feedback");
  }
});
