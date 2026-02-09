const id = localStorage.getItem("pid");

document.getElementById("title").innerText = "Product " + id;
document.getElementById("price").innerText = "₹" + id * 100;

function addToCart() {
  if (!requireLogin()) return;

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


