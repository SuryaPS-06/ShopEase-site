const id = localStorage.getItem("pid");

document.getElementById("title").innerText = "Product " + id;
document.getElementById("price").innerText = "₹" + id * 100;

// 🔥 PDP PAGE LOAD DATALAYER (view_item)

window.dataLayer = window.dataLayer || [];

var isLoggedIn = localStorage.getItem("loggedIn") === "true";
var userId = localStorage.getItem("userId");

let productName = "Product " + id;
let price = id * 100;

window.dataLayer.push({
  event: "view_item",
  currency: "INR",
  value: price,
  user_type: isLoggedIn ? "logged_in" : "guest",
  user_id: isLoggedIn ? userId : undefined,
  items: [
    {
      item_id: "SKU_" + id,
      item_name: productName,
      affiliation: "ShopEase",
      coupon: "",
      discount: 0,
      index: 0,
      item_brand: "ShopEase",
      item_category: "General",
      item_category2: "Default",
      item_category3: "Default",
      item_category4: "",
      item_category5: "",
      item_list_id: "plp_products",
      item_list_name: "Product Listing",
      item_variant: "default",
      location_id: "online_store",
      price: price,
      google_business_vertical: "retail",
      quantity: 1 ,
      pdp_load: "Yes" ,
      product_view: "Yes"
    }
  ],
  timestamp: new Date().toISOString()
});


function addToCart() {
  if (!requireLogin()) return;

window.dataLayer = window.dataLayer || [];

var isLoggedIn = localStorage.getItem("loggedIn") === "true";
var userId = localStorage.getItem("userId");

window.dataLayer.push({
  event: "add_to_cart",
  currency: "INR",
  value: id * 100 * document.getElementById("qty").value,
  items: [
    {
      item_id: "SKU_" + id,
      item_name: "Product " + id,
      affiliation: "ShopEase Store",
      coupon: "",
      discount: 0,
      index: 0,
      item_brand: "ShopEase",
      item_category: "Apparel",
      item_category2: "General",
      item_category3: "Clothing",
      item_category4: "Standard",
      item_category5: "Default",
      item_list_id: "plp_products",
      item_list_name: "Product Listing",
      item_variant: document.getElementById("color").value,
      location_id: "online_store",
      price: id * 100,
      google_business_vertical: "retail",
      quantity: parseInt(document.getElementById("qty").value),
      item_added: "Yes"
    }
  ],
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






