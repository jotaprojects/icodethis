const people = [
  {
    name: "Torr Killelea",
    job_title: "Solutions Architect",
    avatar: "https://i.pravatar.cc/100?img=68",
  },
  {
    name: "Bondie Dible",
    job_title: "Senior Analyst",
    avatar: "https://i.pravatar.cc/100?img=49",
  },
  {
    name: "Sapphira Pele",
    job_title: "Test Engineer",
    avatar: "https://i.pravatar.cc/100?img=48",
  },
  {
    name: "Carrol Thornber",
    job_title: "Backend Developer",
    avatar: "https://i.pravatar.cc/100?img=47",
  },
  {
    name: "Paxton Hellings",
    job_title: "Backend Developer",
    avatar: "https://i.pravatar.cc/100?img=67",
  },

  {
    name: "Cyrus Pinn",
    job_title: "Frontend Developer",
    avatar: "https://i.pravatar.cc/100?img=60",
  },
  {
    name: "Vladimir Hundall",
    job_title: "Graphic Designer",
    avatar: "https://i.pravatar.cc/100?img=57",
  },
  {
    name: "Lexie Barratt",
    job_title: "Marketing",
    avatar: "https://i.pravatar.cc/100?img=45",
  },
  {
    name: "Marketa Franca",
    job_title: "Social Media",
    avatar: "https://i.pravatar.cc/100?img=44",
  },
  {
    name: "Joscelin Bickley",
    job_title: "Sales",
    avatar: "https://i.pravatar.cc/100?img=43",
  },
  {
    name: "Didi Phizackerly",
    job_title: "System Manager",
    avatar: "https://i.pravatar.cc/100?img=41",
  },
  {
    name: "Norene Emblin",
    job_title: "Budget Manager",
    avatar: "https://i.pravatar.cc/100?img=42",
  },
];

const wrapper = document.querySelector(".team");
const items = document.querySelectorAll(".team__item");

items.forEach((item) => {
  item.addEventListener("click", () => {
    resetItems();
    item.classList.toggle("active");
  });
});

function resetItems() {
  items.forEach((item) => {
    item.classList.remove("active");
  });
}
