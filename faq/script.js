const faq = document.querySelector("#faq");
const faqTriggers = faq.querySelectorAll(".faq__trigger");

faqTriggers.forEach((trigger) => {
  const panelId = trigger.getAttribute("aria-controls");
  const panel = document.getElementById(panelId);

  trigger.addEventListener("click", () => {
    setActivePanel(trigger, panel);
  });
});

function setActivePanel(trigger, panel) {
  const isOpen = trigger.getAttribute("aria-expanded") === "true";
  if (isOpen) {
    trigger.setAttribute("aria-expanded", "false");
    panel.classList.remove("panel--active");
    return;
  }

  trigger.setAttribute("aria-expanded", "true");
  panel.classList.add("panel--active");
}
