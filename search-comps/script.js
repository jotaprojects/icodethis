const resetTriggers = document.querySelectorAll("[data-state-reset-trigger]");
const stateTriggers = document.querySelectorAll("[data-state-trigger]");

document.body.addEventListener("click", (e) => {
  if (!e.target.matches(".wrapper") && !e.target.matches(".state")) return;

  resetState();
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

// TODO: Brainstorm a way to make switching and closing states easier. Remove double code
function setActiveState(trigger, state) {
  const isActive = document.body.classList.contains(`state-${state}`);
  if (isActive) {
    resetState();
    return;
  }

  resetState();

  document.body.classList.add("state");
  document.body.classList.add(`state-${state}`);
}

function resetState() {
  document.body.setAttribute("class", "");
}

const CLASS_TYPES = {
  economy: "Economy",
  business: "Business",
  "first-class": "First Class",
};

// Destination
const fromInput = document.querySelector("#travel-from");
const toInput = document.querySelector("#travel-to");
const switchBtn = document.querySelector(".travel-change-direction");

// Passengers and Class
const increaseBtn = document.querySelector(".increase-passengers");
const decreaseBtn = document.querySelector(".decrease-passengers");
const passengersInput = document.querySelector(".input-passengers");
const selectClassType = document.querySelector(".class-type");
const detailsBtn = document.querySelector(".travel-details-btn");

// Dates / Calendar
const departureInput = document.querySelector("#date-departure");
const returnInput = document.querySelector("#date-return");
const departureEl = document.querySelector(".date-departure-visible");
const returnEl = document.querySelector(".date-return-visible");
const planDepartureInput = document.querySelector("#plan-date-departure");
const planReturnInput = document.querySelector("#plan-date-return");
const planDepartureEl = document.querySelector(".plan-date-departure-visible");
const planReturnEl = document.querySelector(".plan-date-return-visible");

// Travel Form
const travelForm = document.querySelector("#travel-form");

// Plan form
const planForm = document.querySelector("#plan-form");

// Plan
const tripsEl = document.querySelector(".trips");
const tripTmpl = document.querySelector("#trip-tmpl");

let passengers = 1;
let classType = "economy";
let calendar = null;
let calendarPlan = null;
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
      theme: "light",
    },
  },
  actions: {
    clickDay: (e, self) => {
      const id = self.HTMLElement.getAttribute("id");
      const dates = self.selectedDates;
      const invalid = dates.every((value) => value === undefined);

      if (invalid) return;

      if (id === "calendar") {
        departureInput.value = dates[0];
        departureEl.innerText = dates[0];
        returnInput.value = dates[dates.length - 1];
        returnEl.innerText = dates[dates.length - 1];
      } else {
        planDepartureInput.value = dates[0];
        planDepartureEl.innerText = dates[0];
        planReturnInput.value = dates[dates.length - 1];
        planReturnEl.innerText = dates[dates.length - 1];
      }

      self.settings.range.min = 1 === dates.length ? dates[0] : "today";
      self.update();
    },
  },
};
let removeMediaChange = null;
let trips = [
  {
    id: Date.now(),
    destination: "Amsterdam",
    departureDate: "2021-01-01",
    returnDate: "2021-01-02",
  },
];

switchBtn.addEventListener("click", () => {
  const from = fromInput.value;
  const to = toInput.value;
  fromInput.value = to;
  toInput.value = from;
});

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

travelForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let invalid = 0;

  if (!validateField(departureInput, "required", "fieldset")) {
    invalid++;
  }
  if (!validateField(returnInput, "required", "fieldset")) {
    invalid++;
  }

  if (invalid > 0) return;

  const formData = new FormData(travelForm);

  travelForm.reset();
  resetDates("travel");
});

planForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let invalid = 0;

  if (!validateField(planDepartureInput, "required", "fieldset")) {
    invalid++;
  }
  if (!validateField(planReturnInput, "required", "fieldset")) {
    invalid++;
  }

  if (invalid > 0) return;

  const formData = new FormData(planForm);
  const trip = {
    id: Date.now(),
    destination: formData.get("plan-destination"),
    departureDate: formData.get("plan-date-departure"),
    returnDate: formData.get("plan-date-return"),
  };

  trips.push(trip);
  createTrip(trip);

  planForm.reset();
  resetDates("plan");
});

tripsEl.addEventListener("click", (e) => {
  if (!e.target.closest(".trip__action")) return;

  const tripEl = e.target.closest(".trip");
  tripEl.classList.add("fade-out");
  setTimeout(() => tripEl.remove(), 500);
  trips = trips.filter((trip) => trip.id !== parseInt(tripEl.dataset.id));
});

function handleButtonDisabled() {
  increaseBtn.disabled = passengers >= 8 ? true : false;
  decreaseBtn.disabled = passengers <= 1 ? true : false;
}

function updatePassengersClass() {
  passengersInput.value = passengers;
  const text = passengers === 1 ? "passenger" : "passengers";

  const passengersEl = detailsBtn.querySelector(".passengers");
  passengersEl.innerText = `${passengers} ${text}`;
  const classTypeEl = detailsBtn.querySelector(".class");
  classTypeEl.innerText = `${CLASS_TYPES[classType]}`;

  decreaseBtn.setAttribute(
    "aria-label",
    `There are ${passengers} ${text}. Remove a passenger.`
  );
  increaseBtn.setAttribute(
    "aria-label",
    `There are ${passengers} ${text}. Add one passenger.`
  );
}

function createCalendars() {
  if (calendar) {
    calendar.destroy();
  }

  if (calendarPlan) {
    calendarPlan.destroy();
  }

  calendar = new VanillaCalendar("#calendar", options);
  calendar.init();
  calendarPlan = new VanillaCalendar("#calendar-plan", options);
  calendarPlan.init();
}

function updateMedia() {
  if (removeMediaChange !== null) {
    removeMediaChange();
  }

  const mqString = "(min-width: 55em)";
  const media = window.matchMedia(mqString);
  media.addEventListener("change", updateMedia);
  removeMediaChange = () => media.removeEventListener("change", updateMedia);

  options.type = "multiple";

  if (media.matches) {
    options.type = "default";
  }

  createCalendars();
}

function resetDates(type) {
  if (type === "travel") {
    departureInput.value = "";
    departureEl.innerText = "Departure";
    returnInput.value = "";
    returnEl.innerText = "Return";
    calendar.update({ dates: true });
  }

  if (type === "plan") {
    planDepartureInput.value = "";
    planDepartureEl.innerText = "Departure";
    planReturnInput.value = "";
    planReturnEl.innerText = "Return";
    calendarPlan.update({ dates: true });
  }
}

function validateField(field, type, parentSelector) {
  const parent = field.closest(parentSelector);

  if (!parent) return true;

  const errorEl = parent.querySelector(".error-tooltip");
  const srOnly = document.createElement("span");
  srOnly.classList.add("sr-only");

  errorEl.textContent = "";
  parent.classList.remove("error");

  if (type === "required" && field.value.length === 0) {
    parent.classList.add("error");
    srOnly.textContent = "This field is required.";
    errorEl.appendChild(srOnly);
    return false;
  }

  return true;
}

function createTrip(trip) {
  const { id, destination, departureDate, returnDate } = trip;
  const tripClone = tripTmpl.content.cloneNode(true);
  const tripEl = tripClone.querySelector(".trip");
  const tripDestinationEl = tripClone.querySelector(".trip__destination");
  const tripDateEl = tripClone.querySelector(".trip__date");

  tripEl.setAttribute("data-id", id);
  tripDestinationEl.textContent = destination;
  tripDateEl.textContent = `${departureDate} - ${returnDate}`;
  tripsEl.appendChild(tripEl);
}

function renderTrips() {
  trips.forEach((trip) => {
    createTrip(trip);
  });
}

createCalendars();
updateMedia();
renderTrips();
