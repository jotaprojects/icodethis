let timerAnimation = null;
let endDate = new Date("2024-12-24T12:00");

function updateTime(endDate) {
  const startDate = new Date();

  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();
  let days = endDate.getDate() - startDate.getDate();
  let hours = endDate.getHours() - startDate.getHours();
  let minutes = endDate.getMinutes() - startDate.getMinutes();
  let seconds = endDate.getSeconds() - startDate.getSeconds();

  // Adjust for negative seconds
  if (seconds < 0) {
    minutes -= 1;
    seconds += 60;
  }

  // Adjust for negative minutes
  if (minutes < 0) {
    hours -= 1;
    minutes += 60;
  }

  // Adjust for negative hours
  if (hours < 0) {
    days -= 1;
    hours += 24;
  }

  // Adjust for negative days (i.e., wrap to previous month)
  if (days < 0) {
    months -= 1;
    const lastMonthDate = new Date(
      endDate.getFullYear(),
      endDate.getMonth(),
      0
    );
    days += lastMonthDate.getDate();
  }

  // Adjust for negative months (i.e., wrap to previous year)
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return {
    years,
    months,
    days,
    hours,
    minutes,
    seconds,
  };
}

const monthsEl = document.querySelector(".countdown__item--months .value");
const daysEl = document.querySelector(".countdown__item--days .value");
const hoursEl = document.querySelector(".countdown__item--hours .value");
const minutesEl = document.querySelector(".countdown__item--minutes .value");
const secondsEl = document.querySelector(".countdown__item--seconds .value");

function updateCountdown() {
  timerAnimation = requestAnimationFrame(updateCountdown);

  const { years, months, days, hours, minutes, seconds } = updateTime(endDate);

  monthsEl.innerHTML = months < 10 ? `0${months}` : months;
  daysEl.innerHTML = days < 10 ? `0${days}` : days;
  hoursEl.innerHTML = hours < 10 ? `0${hours}` : hours;
  minutesEl.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  secondsEl.innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  // Clean up
  const values = [years, months, days, hours, minutes, seconds];
  const isFinished = values.every((value) => value <= 0);
  if (isFinished) {
    cancelAnimationFrame(timerAnimation);
  }
}

updateCountdown();
