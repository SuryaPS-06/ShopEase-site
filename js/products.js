let products = "";

for (let i = 1; i <= 10; i++) {
  products += `
  <div class="product">
    <h3>Product ${i}</h3>
    <p>₹${i * 100}</p>
    <button
  data-cta-name="product_view"
  data-cta-location="plp_product_card"
  data-product_id="product_${i}"
  data-product_price="${i * 100}"
  onclick="view(${i})">
  View
</button>
  </div>`;
}

document.getElementById("products").innerHTML = products;

function view(id) {
  localStorage.setItem("pid", id);
  location.href = "pdp.html";
}


