const products = [
  {
    id: 1,
    name: "Razer Kraken Kitty Edt Gaming Headset Quartz",
    image:
      "https://images.pexels.com/photos/3394649/pexels-photo-3394649.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    price: 1599,
    salePrice: 799,
    inStock: 2,
  },
];

const overlayEl = document.querySelector(".overlay");
const cartEl = document.querySelector(".cart");
const cartBody = cartEl.querySelector(".cart__body");
const cartBtn = document.querySelector(".cart-btn");
const cartCloseBtn = cartEl.querySelector(".cart__close");
const inStockEl = document.querySelector("[data-in-stock]");
const addToCartBtn = document.querySelector("[data-addto-cart]");
const addToWishlistBtn = document.querySelector("[data-addto-wishlist]");

let cartItems = [];
let wishlistItems = [];

// Setup
renderStock(1);

// Event listeners
document.body.addEventListener("click", (e) => {
  if (!e.target.matches(".overlay")) return;

  clearState("cart");
});

cartBtn.addEventListener("click", (e) => {
  setState("cart");
});

cartCloseBtn.addEventListener("click", (e) => {
  clearState("cart");
});

cartEl.addEventListener("click", (e) => {
  if (!e.target.matches("[data-btn-remove]")) return;

  const listEl = e.target.closest(".cart__item");
  const id = parseInt(listEl.dataset.itemId);
  const product = getProduct(id);
  const cartItem = getCartItem(id);

  product.inStock = product.inStock + cartItem.qty;

  cartItems = cartItems.filter((item) => item.id !== id);
  renderStock(id);
  renderCart();
});

addToCartBtn.addEventListener("click", (e) => {
  const cardEl = e.target.closest(".card");
  const id = parseInt(cardEl.dataset.itemId);
  const product = getProduct(id);
  const cartItem = getCartItem(id);

  if (product.inStock === 0) {
    alert("Product is out of stock!");
    return;
  }

  if (cartItem) {
    if (product.inStock > 0) {
      cartItem.qty++;
      product.inStock--;
    } else {
      alert("Product is out of stock!");
      return;
    }
  } else {
    cartItems.push({
      id: product.id,
      qty: 1,
    });
    product.inStock--;
  }

  renderStock(id);
  renderCart();
  setState("cart");
});

addToWishlistBtn.addEventListener("click", (e) => {
  const cardEl = e.target.closest(".card");
  const id = parseInt(cardEl.dataset.itemId);
  const wishlistItem = getWishlistItem(id);

  if (wishlistItem) {
    wishlistItems = wishlistItems.filter((item) => item.id !== wishlistItem.id);
    cardEl.classList.remove("card--wishlist");
  } else {
    wishlistItems.push(id);
    cardEl.classList.add("card--wishlist");
  }
});

function setState(state) {
  document.body.classList.add(`state-${state}`);
}

function clearState(state) {
  document.body.classList.remove(`state-${state}`);
}

function getProduct(id) {
  return products.find((p) => p.id === id);
}

function getCartItem(id) {
  return cartItems.find((item) => item.id === id);
}

function getWishlistItem(id) {
  return wishlistItems.find((i) => i === id);
}

function renderStock(id) {
  const product = getProduct(id);

  if (product.inStock === 0) {
    inStockEl.classList.remove("card__stock--in");
    inStockEl.classList.add("card__stock--out");
    inStockEl.textContent = "Out of stock";
  } else {
    inStockEl.classList.remove("card__stock--out");
    inStockEl.classList.add("card__stock--in");
    inStockEl.textContent = `${product.inStock} pcs. in stock.`;
  }
}

function renderCart() {
  if (cartItems.length > 0) {
    cartBody.innerHTML = "";

    cartItems.forEach(createProductItem);
  } else {
    cartBody.innerHTML = "<p>No Items</p>";
  }
}

function createProductItem({ id, qty }) {
  const product = products.find((p) => p.id === id);

  const wrapper = document.createElement("div");
  wrapper.classList.add("cart__item");
  wrapper.dataset.itemId = id;

  const imgWrapperEl = document.createElement("div");
  imgWrapperEl.classList.add("img-wrapper");

  const img = document.createElement("img");
  img.src = product.image;

  const infoEl = document.createElement("div");
  infoEl.classList.add("info");

  const nameEl = document.createElement("div");
  nameEl.classList.add("name");
  nameEl.textContent = product.name;

  const priceWrapper = document.createElement("div");
  priceWrapper.classList.add("price-wrapper");

  let salePrice = null;
  if (product.salePrice !== undefined) {
    salePrice = document.createElement("div");
    salePrice.classList.add("price-sale");
    salePrice.textContent = formatCurrency(product.salePrice);
  }

  const priceEl = document.createElement("div");
  priceEl.classList.add("price-org");
  priceEl.textContent = formatCurrency(product.price);

  const qtyEl = document.createElement("div");
  qtyEl.classList.add("qty");
  qtyEl.textContent = `x${qty}`;

  const removeBtn = document.createElement("button");
  removeBtn.dataset.btnRemove = "";
  removeBtn.innerText = "Remove";

  priceWrapper.appendChild(salePrice);
  priceWrapper.appendChild(priceEl);

  infoEl.appendChild(nameEl);
  infoEl.appendChild(priceWrapper);
  infoEl.appendChild(qtyEl);

  imgWrapperEl.appendChild(img);

  wrapper.appendChild(imgWrapperEl);
  wrapper.appendChild(infoEl);
  wrapper.appendChild(removeBtn);

  cartBody.appendChild(wrapper);
}

const formatter = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "EUR",
  trailingZeroDisplay: "stripIfInteger",
});

function formatCurrency(price) {
  return `${formatter.format(price)},-`;
}
