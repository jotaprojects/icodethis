const data = [
  {
    region: "America",
    cities: ["New York", "Los Angeles", "Chicago", "Houston"],
  },
  {
    region: "Europe",
    cities: ["London", "Paris", "Berlin", "Madrid"],
  },
  {
    region: "Asia",
    cities: ["Tokyo", "Shanghai", "Delhi", "Beijing"],
  },
  {
    region: "Africa",
    cities: ["Lagos", "Cairo", "Kinshasa", "Johannesburg"],
  },
  {
    region: "Oceania",
    cities: ["Sydney", "Melbourne", "Auckland", "Brisbane"],
  },
];

const form = document.querySelector("#filter-form");
const regionEl = form.querySelector("#selectRegion");
const cityEl = form.querySelector("#selectCity");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const region = regionEl.value;
  const city = cityEl.value;

  alert(`You selected ${region} and ${city}`);
});

regionEl.addEventListener("change", (e) => {
  const region = e.target.value;
  cityEl.innerHTML = "";
  createOption("Select City", "", cityEl);
  cityEl.disabled = true;
  cityEl.value = "";

  if (region === "") {
    return;
  }

  const cities = data.find((r) => r.region.toLowerCase() === region).cities;

  cities.forEach((city) => {
    createOption(city, city.toLowerCase(), cityEl);
  });
  cityEl.disabled = false;
  cityEl.required = true;
  cityEl.focus();
});

data.forEach((item) => {
  createOption(item.region, item.region.toLowerCase(), regionEl);
});

function createOption(text, value, parentEl) {
  const option = document.createElement("option");
  option.value = value.toLowerCase();
  option.innerText = text;
  parentEl.appendChild(option);
}
