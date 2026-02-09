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

        <button onclick="removeItem(${index})">Remove</button>
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
  discount = parseInt(document.getElementById("coupon").value);
  renderCart();
}

function updateCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function openPayment() {
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
  location.href = "failure.html";
}

renderCart();

