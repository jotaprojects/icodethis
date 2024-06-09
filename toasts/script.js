const toasts = {
  success: {
    text: "File has been removed successfully.",
    indicator:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>',
  },
  danger: {
    text: "File could not be removed.",
    indicator:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>',
  },
  warning: {
    text: "Warning! File type is not supported.",
    indicator:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" /></svg>',
  },
  info: {
    text: "Did you know? CSS has lots of cool tricks",
    indicator:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" /></svg>',
  },
};

const CSSPREFIX = "toast--";
const toastWrapper = document.querySelector(".toast-wrapper");
const template = document.querySelector("#toast");
const theme = document.querySelector("#theme");
const rounded = document.querySelector("#rounded");
const progress = document.querySelector("#progress");
const btnToast = document.querySelector("[data-toast]");
let counter = 0;

theme.addEventListener("change", (e) => {
  document.body.dataset.theme = e.target.checked ? "light" : "dark";
});

rounded.addEventListener("change", (e) => {
  document.body.dataset.rounded = e.target.checked;
});

progress.addEventListener("change", (e) => {
  document.body.dataset.progress = e.target.checked;
});

document.addEventListener("animationend", (e) => {
  e.target.remove();
});

btnToast.addEventListener("click", (e) => {
  if (counter > 3) counter = 0;
  counter++;

  switch (counter) {
    default:
    case 0:
      buildToast("success");
      break;
    case 1:
      buildToast("danger");
      break;
    case 2:
      buildToast("warning");
      break;
    case 3:
      buildToast("info");
      break;
  }
});

document.body.addEventListener("click", (e) => {
  if (!e.target.matches("[data-close]")) return;

  const toast = e.target.closest(".toast");
  toast.remove();
});

function buildToast(type) {
  const cloneTmpl = template.content.cloneNode(true);
  const toast = cloneTmpl.querySelector(".toast");
  const text = cloneTmpl.querySelector(".toast__text");
  const icon = toast.querySelector(".toast__icon");
  text.innerText = toasts[type].text;
  icon.innerHTML = toasts[type].indicator;
  toast.classList.add(CSSPREFIX + type);

  toastWrapper.appendChild(cloneTmpl);
}
