function getCartItemsArray() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  return cart.map(item => ({
    product_id: item.id,
    product_name: item.name,
    product_price: item.price,
    product_color: item.color,
    product_size: item.size,
    product_qty: item.qty
  }));

}


let cart = JSON.parse(localStorage.getItem("cart")) || [];
let discount = 0;

function renderCart() {
  const container = document.getElementById("cartItems");
  container.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.qty;

    container.innerHTML += `
      <div class="product">
        <h3>${item.name}</h3>
        <p>Color: ${item.color} | Size: ${item.size}</p>
        <p>Price: ₹${item.price}</p>

        <button onclick="changeQty(${index}, -1)">-</button>
        ${item.qty}
        <button onclick="changeQty(${index}, 1)">+</button>

        <button data-cta-name="remove_from_cart" data-cta-location="cart_item" data-product_id="${item.id}"onclick="removeItem(${index})">Remove</button>
      </div>
    `;
  });

  total = total - (total * discount / 100);
  document.getElementById("total").innerText = total.toFixed(2);
}

function changeQty(index, change) {
  cart[index].qty += change;
  if (cart[index].qty <= 0) cart.splice(index, 1);
  updateCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

function applyCoupon() {
window.dataLayer = window.dataLayer || [];

var isLoggedIn = localStorage.getItem("loggedIn") === "true";
var userId = localStorage.getItem("userId");
var couponValue = document.getElementById("coupon").value;

window.dataLayer.push({
  event: "apply_coupon",
  cta_location="cart",
  cta_name: "Apply Coupon",
  coupon_value: couponValue,
  page_name: "cart_page",
  user_type: isLoggedIn ? "logged_in" : "guest",
  user_id: isLoggedIn ? userId : undefined,
  timestamp: new Date().toISOString()
});

  renderCart();
}

function updateCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function openPayment() {
window.dataLayer = window.dataLayer || [];

var isLoggedIn = localStorage.getItem("loggedIn") === "true";
var userId = localStorage.getItem("userId");

window.dataLayer.push({
  event: "pay_now",
  cta_name: "Pay Now",
  page_name: "cart_page",
  user_type: isLoggedIn ? "logged_in" : "guest",
  user_id: isLoggedIn ? userId : undefined,
  cart_items: getCartItemsArray(),
  timestamp: new Date().toISOString()
});
  
  document.getElementById("paymentModal").style.display = "block";
}

function closePayment() {
  document.getElementById("paymentModal").style.display = "none";
}

function completePayment(method) {
  alert("Payment successful via " + method);
  localStorage.removeItem("cart");
  location.href = "success.html";
}


function orderFail() {
window.dataLayer = window.dataLayer || [];

var isLoggedIn = localStorage.getItem("loggedIn") === "true";
var userId = localStorage.getItem("userId");

window.dataLayer.push({
  event: "order_failure",
  cta_name: "Order Failure",
  page_name: "cart_page",
  user_type: isLoggedIn ? "logged_in" : "guest",
  user_id: isLoggedIn ? userId : undefined,
  cart_items: getCartItemsArray(),
  timestamp: new Date().toISOString()
});
  
  location.href = "failure.html";
}

renderCart();





