// Double Range slider
// Credits to https://codepen.io/alexpg96/pen/xxrBgbP and https://troll-winner.com/blog/one-more-dual-range-slider
const range = document.querySelector(".range");
const rangeTrackDouble = document.querySelector(".range-track-double");
const rangeMin = document.querySelector("#range-min");
const rangeMax = document.querySelector("#range-max");
const rangeMinLabel = document.querySelector("[data-range-min]");
const rangeMaxLabel = document.querySelector("[data-range-max]");
const gap = 30;
const minValue = parseInt(rangeMin.min);
const maxValue = parseInt(rangeMax.max);

function formatPrice(value) {
  if (typeof value == "number") {
    value = value.toFixed(2);
  }
  return `$${value}`;
}

function fillColor() {
  const percentMin =
    ((parseInt(rangeMin.value) - minValue) / (maxValue - minValue)) * 100;
  const percentMax =
    ((parseInt(rangeMax.value) - minValue) / (maxValue - minValue)) * 100;
  range.style.setProperty("--percent-min", `${percentMin}%`);
  range.style.setProperty("--percent-max", `${percentMax}%`);
}

function updateRange() {
  rangeMinLabel.textContent = formatPrice(rangeMin.value);
  rangeMaxLabel.textContent = formatPrice(rangeMax.value);
  range.setAttribute("data-from-value", formatPrice(rangeMin.value));
  range.setAttribute("data-to-value", formatPrice(rangeMax.value));
  fillColor();
}

updateRange();

rangeMin.addEventListener("input", function () {
  if (parseInt(rangeMax.value) - parseInt(rangeMin.value) <= gap) {
    rangeMin.value = parseInt(rangeMax.value) - gap;
  }
  updateRange();
});

rangeMax.addEventListener("input", function () {
  if (parseInt(rangeMax.value) - parseInt(rangeMin.value) <= gap) {
    rangeMax.value = parseInt(rangeMin.value) + gap;
  }
  updateRange();
});

// Product list and filter
const productList = document.querySelector(".product-list");
const listTotal = document.querySelector(".filter__total");
const sortByEl = document.querySelector("#sortBy");
const pTmpl = document.querySelector("#card");

function createProduct(product) {
  const pClone = pTmpl.content.cloneNode(true);
  const pImgEl = pClone.querySelector(".card__img");
  const pBrandEl = pClone.querySelector(".card__brand");
  const pTitleEl = pClone.querySelector(".card__title");
  const pPriceEl = pClone.querySelector(".card__price");
  const pStockEl = pClone.querySelector(".card__stock-status");

  pImgEl.src = product.thumbnail;
  pBrandEl.textContent = product.brand;
  pTitleEl.textContent = product.title;

  const priceEl = createPrice(product);
  pPriceEl.appendChild(priceEl.discountEl);
  pPriceEl.appendChild(priceEl.orgEl);

  pStockEl.textContent = product.availabilityStatus;

  return pClone;
}

function createPrice(product) {
  const { salePrice, price } = calculatePrice(product);
  const discountEl = document.createElement("div");
  discountEl.classList.add("price-sale");
  discountEl.textContent = formatPrice(salePrice);
  const orgEl = document.createElement("div");
  orgEl.classList.add("price-org");
  orgEl.textContent = formatPrice(price);

  return { discountEl, orgEl };
}

function calculatePrice(product) {
  const price = product.price;
  const discount = product.discountPercentage;

  const salePrice = price - (price * discount) / 100;

  return { salePrice, price };
}

function getSortByQuery(selected) {
  switch (selected) {
    case "popularity":
      return { sortby: "rating", order: "desc" };
      break;
    case "price-asc":
      return { sortby: "price", order: "asc" };
      break;
    case "price-desc":
      return { sortby: "price", order: "desc" };
      break;
    case "discount":
      return { sortby: "discountPercentage", order: "desc" };
      break;
  }
}

async function loadProducts(query) {
  listTotal.textContent = "0 products";
  productList.innerHTML = "";

  const sortBy = query?.sortby ? `sortBy=${query.sortby}` : "";
  const order = query?.order ? `order=${query.order}` : "";

  const url = `https://dummyjson.com/products/category/furniture?${sortBy}&${order}`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("There was an error with response");
    }
    const { products, total } = await res.json();

    if (total > 0) {
      listTotal.textContent = total + (total > 1 ? " products" : " product");
      products.forEach((product) => {
        const tmp = createProduct(product);
        productList.appendChild(tmp);
      });
    }
  } catch (e) {
    console.error(e);
  }
}

sortByEl.addEventListener("change", function () {
  const query = getSortByQuery(this.value);
  loadProducts(query);
});

loadProducts();
