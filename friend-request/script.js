const confirmBtns = document.querySelectorAll(".list__item-actions button");
const resetBtn = document.querySelector("[data-reset]");

confirmBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const parent = e.target.closest(".list__item");
    parent.classList.add("remove");
    // parent.addEventListener("transitionend", (e) => {
    //   parent.remove();
    // });
  });
});

resetBtn.addEventListener("click", (e) => {
  confirmBtns.forEach((btn) => {
    const parent = btn.closest(".list__item");
    parent.classList.remove("remove");
  });
});
