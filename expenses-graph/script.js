const actionsMenuBtn = document.querySelector("#actions-menu-btn");

actionsMenuBtn.addEventListener("click", (e) => {
  const isOpen = actionsMenuBtn.getAttribute("aria-expanded") === "true";

  actionsMenuBtn.setAttribute("aria-expanded", !isOpen);
});

document.body.addEventListener("click", (e) => {
  if (e.target.id === "actions-menu-btn") return;

  if (e.target.id !== "actions-menu-btn") {
    const isOpen = actionsMenuBtn.getAttribute("aria-expanded") === "true";
    if (isOpen) {
      actionsMenuBtn.setAttribute("aria-expanded", false);
    }
  }
});

const filterForm = document.getElementById("filter-form");
filterForm.addEventListener("click", (e) => {
  if (!e.target.matches('input[type="radio"]')) return;

  filterForm.setAttribute("data-filter", e.target.value);
  const selectedRadio = e.target.value;
  chart.data.labels = data[selectedRadio].labels;
  chart.data.datasets[0].data = data[selectedRadio].data.map(
    (item) => item.income
  );
  chart.data.datasets[1].data = data[selectedRadio].data.map(
    (item) => item.expense
  );

  chart.update();
});
