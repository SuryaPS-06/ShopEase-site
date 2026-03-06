const id = localStorage.getItem("pid");

document.getElementById("title").innerText = "Product " + id;
document.getElementById("price").innerText = "₹" + id * 100;

function addToCart() {
  if (!requireLogin()) return;

window.dataLayer = window.dataLayer || [];

var isLoggedIn = localStorage.getItem("loggedIn") === "true";
var userId = localStorage.getItem("userId");

window.dataLayer.push({
  event: "add_to_cart",
  product_id: id,
  product_price: id * 100,
  product_color: document.getElementById("color").value,
  product_size: document.getElementById("size").value,
  product_qty: document.getElementById("qty").value,
  user_type: isLoggedIn ? "logged_in" : "guest",
  user_id: isLoggedIn ? userId : undefined,
  page_name: "pdp_page",
  timestamp: new Date().toISOString()
});

  const color = document.getElementById("color").value;
  const size = document.getElementById("size").value;
  const qty = parseInt(document.getElementById("qty").value);

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({
    id,
    name: "Product " + id,
    price: id * 100,
    color,
    size,
    qty
  });

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Product added to cart");
}

// Attach product data for analytics
const addToCartBtn = document.querySelector('[data-cta-name="add_to_cart"]');

if (addToCartBtn) {
  addToCartBtn.setAttribute("data-product_id", "product_" + id);

  addToCartBtn.addEventListener("click", function () {
    this.setAttribute("data-product_color", document.getElementById("color").value);
    this.setAttribute("data-product_size", document.getElementById("size").value);
    this.setAttribute("data-product_qty", document.getElementById("qty").value);
    this.setAttribute("data-product_price", id * 100);
  });
}





