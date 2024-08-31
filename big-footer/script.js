const links = document.querySelectorAll("a");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

const languages = document.querySelectorAll(".languages a");
const LANG_CLASS_ACTIVE = "language--active";

languages.forEach((language) => {
  language.addEventListener("click", (e) => {
    e.preventDefault();
    resetLang();
    language.classList.add(LANG_CLASS_ACTIVE);
  });
});

function resetLang() {
  languages.forEach((language) => {
    language.classList.remove(LANG_CLASS_ACTIVE);
  });
}
