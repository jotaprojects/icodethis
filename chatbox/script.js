const chatTrigger = document.querySelector("[data-chat-trigger]");

chatTrigger.addEventListener("click", () => {
  document.body.classList.toggle("state--chat");
});
