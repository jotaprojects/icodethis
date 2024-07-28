const data = [
  {
    id: 1,
    avatar: "https://i.pravatar.cc/150?img=1",
    first_name: "John",
    last_name: "Doe",
  },
  {
    id: 2,
    avatar: "https://i.pravatar.cc/150?img=2",
    first_name: "Jane",
    last_name: "Smith",
  },
  {
    id: 3,
    avatar: "https://i.pravatar.cc/150?img=3",
    first_name: "Alice",
    last_name: "Johnson",
  },
  {
    id: 4,
    avatar: "https://i.pravatar.cc/150?img=4",
    first_name: "Bob",
    last_name: "Brown",
  },
  {
    id: 5,
    avatar: "https://i.pravatar.cc/150?img=5",
    first_name: "Charlie",
    last_name: "Davis",
  },
  {
    id: 6,
    avatar: "https://i.pravatar.cc/150?img=6",
    first_name: "Dana",
    last_name: "Miller",
  },
  {
    id: 7,
    avatar: "https://i.pravatar.cc/150?img=7",
    first_name: "Eve",
    last_name: "Wilson",
  },
  {
    id: 8,
    avatar: "https://i.pravatar.cc/150?img=8",
    first_name: "Frank",
    last_name: "Moore",
  },
  {
    id: 9,
    avatar: "https://i.pravatar.cc/150?img=9",
    first_name: "Grace",
    last_name: "Taylor",
  },
  {
    id: 10,
    avatar: "https://i.pravatar.cc/150?img=10",
    first_name: "Henry",
    last_name: "Anderson",
  },
  {
    id: 11,
    avatar: "https://i.pravatar.cc/150?img=11",
    first_name: "Ivy",
    last_name: "Thomas",
  },
  {
    id: 12,
    avatar: "https://i.pravatar.cc/150?img=12",
    first_name: "Jack",
    last_name: "Jackson",
  },
  {
    id: 13,
    avatar: "https://i.pravatar.cc/150?img=13",
    first_name: "Kara",
    last_name: "White",
  },
  {
    id: 14,
    avatar: "https://i.pravatar.cc/150?img=14",
    first_name: "Leo",
    last_name: "Harris",
  },
  {
    id: 15,
    avatar: "https://i.pravatar.cc/150?img=15",
    first_name: "Mia",
    last_name: "Martin",
  },
  {
    id: 16,
    avatar: "https://i.pravatar.cc/150?img=16",
    first_name: "Noah",
    last_name: "Garcia",
  },
  {
    id: 17,
    avatar: "https://i.pravatar.cc/150?img=17",
    first_name: "Olivia",
    last_name: "Martinez",
  },
  {
    id: 18,
    avatar: "https://i.pravatar.cc/150?img=18",
    first_name: "Paul",
    last_name: "Robinson",
  },
  {
    id: 19,
    avatar: "https://i.pravatar.cc/150?img=19",
    first_name: "Quinn",
    last_name: "Clark",
  },
  {
    id: 20,
    avatar: "https://i.pravatar.cc/150?img=20",
    first_name: "Ruby",
    last_name: "Rodriguez",
  },
  {
    id: 21,
    avatar: "https://i.pravatar.cc/150?img=21",
    first_name: "Sam",
    last_name: "Lewis",
  },
  {
    id: 22,
    avatar: "https://i.pravatar.cc/150?img=22",
    first_name: "Tina",
    last_name: "Lee",
  },
  {
    id: 23,
    avatar: "https://i.pravatar.cc/150?img=23",
    first_name: "Uma",
    last_name: "Walker",
  },
  {
    id: 24,
    avatar: "https://i.pravatar.cc/150?img=24",
    first_name: "Victor",
    last_name: "Hall",
  },
  {
    id: 25,
    avatar: "https://i.pravatar.cc/150?img=25",
    first_name: "Wendy",
    last_name: "Allen",
  },
  {
    id: 26,
    avatar: "https://i.pravatar.cc/150?img=26",
    first_name: "Xander",
    last_name: "Young",
  },
  {
    id: 27,
    avatar: "https://i.pravatar.cc/150?img=27",
    first_name: "Yara",
    last_name: "King",
  },
  {
    id: 28,
    avatar: "https://i.pravatar.cc/150?img=28",
    first_name: "Zack",
    last_name: "Scott",
  },
];

const listEl = document.querySelector(".members-list");
const btnViewAll = document.querySelector("#btn-view-all");

data.forEach((member) => {
  createListItem(member);
});

function createListItem(member) {
  const liEl = document.createElement("li");
  liEl.classList.add("members__list-item");
  liEl.innerHTML = `
    <input type="checkbox" name="member" id="member_${member.id}" value="${member.id}" />
    <label for="member_${member.id}">
    <img src="${member.avatar}" alt="avatar" />
    <div class="member-info">${member.first_name} ${member.last_name}</div>
    </label>
  `;
  listEl.appendChild(liEl);
}

btnViewAll.addEventListener("click", () => {
  listEl.classList.toggle("members-list--all");
});

/* TODO: Add search functionallity */
const formEl = document.querySelector(".search-form");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
});
