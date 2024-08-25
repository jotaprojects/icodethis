const GITHUB_BASE_URL = "https://github.com/";
const GITHUB_USERNAME = "jotaprojects";
const ICONS = {
  public:
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>',
  private:
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>',
};

const data = {
  repos: [
    {
      id: 1,
      org: GITHUB_USERNAME,
      name: "icodethis",
      type: "public",
    },
    {
      id: 2,
      url: null,
      org: GITHUB_USERNAME,
      name: "private-repo",
      type: "private",
    },
    {
      id: 3,
      org: GITHUB_USERNAME,
      name: "frontend-mentor",
      type: "public",
    },
    {
      id: 4,
      org: GITHUB_USERNAME,
      name: "wordpress-plugin-boilerplate",
      type: "public",
    },
    {
      id: 5,
      org: GITHUB_USERNAME,
      name: "sublime-theme-soda",
      type: "public",
    },
    {
      id: 6,
      org: GITHUB_USERNAME,
      name: "product-preview-card-component",
      type: "public",
    },
    {
      id: 7,
      org: GITHUB_USERNAME,
      name: "private-repo-1",
      type: "private",
    },

    {
      id: 8,
      org: GITHUB_USERNAME,
      name: "faq-accordion",
      type: "public",
    },
  ],
  orgs: [
    {
      id: 1,
      name: `${GITHUB_USERNAME}`,
    },
  ],
};

// Elements
const listEl = document.querySelector("#repo-list");
const formSearch = document.querySelector("#search-form");
const formCreateRepo = document.querySelector("#form-create-repo");
const formCreateOrg = document.querySelector("#form-create-org");
const createRepoBtn = document.querySelector("#create-repo-btn");
const createOrgBtn = document.querySelector("#create-org-btn");
const stateTriggerCloseEls = document.querySelectorAll(".state-trigger-close");
const showMoreBtn = document.querySelector(".btn--invisible");
const selectOrgEl = document.querySelector("#repo-org");

// Event Listeners
document.body.addEventListener("click", (e) => {
  if (!e.target.matches(".state-container")) return;

  resetState();
});

showMoreBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const showMore = listEl.dataset.show === "true";
  listEl.dataset.show = !showMore;
  showMoreBtn.innerText = !showMore ? "Show less" : "Show more";

  renderList();
});

formSearch.addEventListener("submit", (e) => {
  e.preventDefault();
});

formCreateRepo.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(formCreateRepo);
  const newRepo = {
    id: data.repos.length + 1,
    url: GITHUB_BASE_URL + GITHUB_USERNAME + "/" + formData.get("repo-name"),
    org: formData.get("repo-org"),
    name: formData.get("repo-name"),
    type: formData.get("repo-type"),
  };

  if (formData.get("repo-type") === "private") {
    newRepo.url = null;
  }

  data.repos.push(newRepo);
  renderList();
  resetState();
  formCreateRepo.reset();
});

formCreateOrg.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(formCreateOrg);
  const newOrg = {
    id: data.orgs.length + 1,
    name: formData.get("org-name"),
  };

  data.orgs.push(newOrg);
  createOrgBtn.disabled = true;
  createRepoBtn.disabled = true;

  resetState();
  formCreateOrg.reset();

  setTimeout(() => {
    createRepoBtn.disabled = false;
    createOrgBtn.disabled = false;
  }, 2000);
});

stateTriggerCloseEls.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    resetState();
  });
});

createRepoBtn.addEventListener("click", (e) => {
  e.preventDefault();

  resetState();
  renderOrgs();

  document.body.classList.add("state-create-repo");
});

createOrgBtn.addEventListener("click", (e) => {
  e.preventDefault();

  resetState();

  document.body.classList.add("state-create-org");
});

function resetState() {
  document.body.removeAttribute("class");
}

// DOM manipulation

function renderOrgs() {
  selectOrgEl.innerHTML = "";

  const defaultOpt = document.createElement("option");
  defaultOpt.value = "";
  defaultOpt.innerText = "Select an organization";
  selectOrgEl.appendChild(defaultOpt);

  data.orgs.forEach((item) => {
    selectOrgEl.appendChild(createOrgOption(item));
  });
}

function createOrgOption(item) {
  const option = document.createElement("option");
  option.value = item.name;
  option.innerText = item.name;
  return option;
}

function renderList() {
  listEl.innerHTML = "";
  const showAll = listEl.dataset.show === "true";

  data.repos.forEach((item, idx) => {
    listEl.appendChild(createListItem(item, idx, showAll));
  });
}

function createListItem(item, idx, showAll) {
  const listItem = document.createElement("li");
  listItem.classList.add("list__item");

  if (idx + 1 > NR_VISIBLE && !showAll) {
    listItem.classList.add("list__item--hidden");
  }

  let wrapperNode = document.createElement("div");

  if (item.url) {
    wrapperNode = document.createElement("a");
    wrapperNode.href = `${GITHUB_BASE_URL}/${item.org}/${item.name}`;
    wrapperNode.target = "_blank";
  }

  wrapperNode.classList.add("list__item-wrapper");

  const iconNode = document.createElement("div");
  iconNode.innerHTML = ICONS[item.type];
  wrapperNode.appendChild(iconNode);

  const spanNode = document.createElement("span");
  spanNode.innerText = `${item.org}/${item.name}`;
  wrapperNode.appendChild(spanNode);

  listItem.appendChild(wrapperNode);

  return listItem;
}

renderList();
