// const departure = document.querySelector("#date-departure");
// const returnDate = document.querySelector("#date-return");

// const today = new Date();

// departure.setAttribute("min", formatDate(today));

// function formatDate(date) {
//   const dateArr = [date.getFullYear(), date.getMonth() + 1, date.getDate()];

//   if (dateArr[1] < 10) {
//     dateArr[1] = `0${dateArr[1]}`;
//   }

//   if (dateArr[2] < 10) {
//     dateArr[2] = `0${dateArr[2]}`;
//   }

//   return dateArr.join("-");
// }

const resetTriggers = document.querySelectorAll(".reset-state-trigger");
const stateTriggers = document.querySelectorAll("[data-state-trigger]");

document.body.addEventListener("click", (e) => {
  console.log(e.target.closest(".state-wrapper"));
  console.log(e.target);

  if (!e.target.matches(".state")) return;

  resetState();

  // if (e.target.closest(".state-wrapper")) return;

  // if (e.target.closest("[data-state-trigger]")) return;

  // console.log(e);

  // resetState();
});

resetTriggers.forEach((trigger) => {
  trigger.addEventListener("click", resetState);
});

stateTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (e) => {
    const state = trigger.getAttribute("data-state-trigger");
    setActiveState(trigger, state);
  });
});

function setActiveState(trigger, state) {
  const isOpen = document.body.classList.contains(state);
  if (isOpen) {
    document.body.classList.remove("state");
    document.body.classList.remove(`state-${state}`);
    return;
  }

  document.body.classList.add("state");
  document.body.classList.add(`state-${state}`);
}

function resetState() {
  document.body.setAttribute("class", "");
}

/* Destination */
const fromInput = document.querySelector("#travel-from");
const toInput = document.querySelector("#travel-to");
const switchBtn = document.querySelector(".travel-change-direction");

switchBtn.addEventListener("click", () => {
  fromInput.value = toInput.value;
  toInput.value = fromInput.value;
});

/* Passengers and Class */
const CLASS_TYPES = {
  economy: "Economy",
  business: "Business",
  "first-class": "First Class",
};
const increaseBtn = document.querySelector(".increase-passengers");
const decreaseBtn = document.querySelector(".decrease-passengers");
const passengersInput = document.querySelector(".input-passengers");
const selectClassType = document.querySelector(".class-type");
const detailsBtn = document.querySelector(".travel-details-btn");

let passengers = 1;
let classType = "economy";
decreaseBtn.disabled = true;

increaseBtn.addEventListener("click", () => {
  passengers++;
  handleButtonDisabled();
  updatePassengersClass();
});

decreaseBtn.addEventListener("click", () => {
  passengers--;
  handleButtonDisabled();
  updatePassengersClass();
});

selectClassType.addEventListener("change", () => {
  classType = selectClassType.value;
  updatePassengersClass();
});

function handleButtonDisabled() {
  increaseBtn.disabled = passengers >= 8 ? true : false;
  decreaseBtn.disabled = passengers <= 1 ? true : false;
}

function updatePassengersClass() {
  passengersInput.value = passengers;

  const passengersEl = detailsBtn.querySelector(".passengers");
  passengersEl.innerText = `${passengers} passenger(s)`;
  const classTypeEl = detailsBtn.querySelector(".class");
  classTypeEl.innerText = `${CLASS_TYPES[classType]}`;

  decreaseBtn.setAttribute(
    "aria-label",
    `There are ${passengers} passenger(s). Remove a passenger.`
  );
  increaseBtn.setAttribute(
    "aria-label",
    `There are ${passengers} passenger(s). Add one passenger.`
  );
}

/* Dates */
const calenderWrapper = document.querySelector(
  "[data-state-wrapper='calendar']"
);
const departureInput = document.querySelector("#date-departure");
const returnInput = document.querySelector("#date-return");
const options = {
  type: "multiple",
  settings: {
    range: {
      min: "today",
      disabledPast: true,
      edgesOnly: true,
    },
    selection: {
      day: "multiple-ranged",
      year: "only-arrows",
      month: "only-arrows",
    },
    visibility: {
      weekNumbers: true,
      daysOutside: false,
      theme: "light",
    },
  },
  actions: {
    clickDay: (e, self) => {
      console.log(self);
      departureInput.value = self.selectedDates[0];
      returnInput.value = self.selectedDates[self.selectedDates.length - 1];

      self.settings.range.min =
        1 === self.selectedDates.length ? self.selectedDates[0] : "today";
      self.update();
    },
  },
};

const calendar = new VanillaCalendar("#calendar", options);
calendar.init();
