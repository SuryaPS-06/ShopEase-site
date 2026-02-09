let products = "";

for (let i = 1; i <= 10; i++) {
  products += `
  <div class="product">
    <h3>Product ${i}</h3>
    <p>₹${i * 100}</p>
    <button onclick="view(${i})">View</button>
  </div>`;
}

document.getElementById("products").innerHTML = products;

function view(id) {
  localStorage.setItem("pid", id);
  location.href = "pdp.html";
}
