const tablist = document.querySelector("[role=tablist]");
const tabTriggers = tablist.querySelectorAll("[role=tab]");
const triggersArr = Array.from(tabTriggers);
const tabPanels = [];
let firstTab = null;
let lastTab = null;
let setFocus = true;

tabTriggers.forEach((tabTrigger) => {
  const panelId = tabTrigger.getAttribute("aria-controls");
  const panel = document.getElementById(panelId);
  tabPanels.push(panel);

  tabTrigger.addEventListener("keydown", handleKeydown);
  tabTrigger.addEventListener("click", () => {
    setFocus = false;
    setActivePanel(tabTrigger);
  });

  if (!firstTab) {
    firstTab = tabTrigger;
  }
  lastTab = tabTrigger;
});

setActivePanel(tabTriggers[0]);

function setActivePanel(currentTab) {
  tabTriggers.forEach((trigger, idx) => {
    if (trigger == currentTab) {
      trigger.setAttribute("aria-selected", "true");
      trigger.removeAttribute("tabindex");
      tabPanels[idx].classList.add("panel--active");
      if (setFocus) trigger.focus();
    } else {
      trigger.setAttribute("aria-selected", "false");
      trigger.setAttribute("tabindex", "-1");
      tabPanels[idx].classList.remove("panel--active");
    }
  });
}

function setPreviousPanel(currentTab) {
  let index;
  if (currentTab == firstTab) {
    setActivePanel(lastTab);
  } else {
    index = triggersArr.indexOf(currentTab);
    setActivePanel(triggersArr[index - 1]);
  }
}

function setNextPanel(currentTab) {
  let index;
  if (currentTab == lastTab) {
    setActivePanel(firstTab);
  } else {
    index = triggersArr.indexOf(currentTab);
    setActivePanel(triggersArr[index + 1]);
  }
}

function handleKeydown(e) {
  const currentTab = e.currentTarget;
  let flag = false;

  switch (e.key) {
    case "ArrowRight":
      setNextPanel(currentTab);
      flag = true;
      break;
    case "ArrowLeft":
      setPreviousPanel(currentTab);
      flag = true;
      break;
    case "Home":
      setActivePanel(firstTab);
      flag = true;
      break;
    case "End":
      setActivePanel(lastTab);
      flag = true;
      break;
    default:
      break;
  }

  if (flag) {
    e.stopPropagation();
    e.preventDefault();
  }
}

const colors = document.querySelectorAll(".color");
const colorCopied = document.createElement("div");
colorCopied.classList.add("color__copied");
colorCopied.innerText = "Copied!";

colors.forEach((color) => {
  const hex = color.getAttribute("data-hex");
  const preview = color.querySelector(".color__preview");
  preview.style.backgroundColor = `#${hex}`;

  color.addEventListener("click", () => {
    try {
      copyToClipboard(`#${hex}`);
      color.appendChild(colorCopied);
      setTimeout(() => {
        color.removeChild(colorCopied);
      }, 1500);
    } catch (err) {
      console.error("Failed to copy to clipboard", err);
    }
  });
});

async function copyToClipboard(text) {
  await navigator.clipboard.writeText(text);
}
