let productsHTML = "";
let itemsArray = [];

for (let i = 1; i <= 10; i++) {

  let productName = "Product " + i;
  let price = i * 100;

  // UI rendering
  productsHTML += `
    <div class="product">
      <h3>${productName}</h3>
      <p>₹${price}</p>

      <button
        data-cta-name="product_view"
        data-cta-location="plp_product_card"
        data-product_id="${i}"
        data-product_price="${price}"
        onclick="viewProduct(${i})">
        View
      </button>
    </div>
  `;

  // GA4 items array
  itemsArray.push({
    item_id: "SKU_" + i,
    item_name: productName,
    affiliation: "ShopEase",
    coupon: "",
    discount: 0,
    index: i - 1,
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
    plp_load: "Yes"
  });
}

document.getElementById("products").innerHTML = productsHTML;

// 🔥 DATA LAYER PUSH (GA4 FORMAT)
window.dataLayer = window.dataLayer || [];

var isLoggedIn = localStorage.getItem("loggedIn") === "true";
var userId = localStorage.getItem("userId");

window.dataLayer.push({
  event: "view_item_list",
  item_list_id: "plp_products",
  item_list_name: "Product Listing",
  user_type: isLoggedIn ? "logged_in" : "guest",
  user_id: isLoggedIn ? userId : undefined,
  items: itemsArray,
  timestamp: new Date().toISOString()
});

// navigation
function viewProduct(id) {

  let productName = "Product " + id;
  let price = id * 100;

  window.dataLayer = window.dataLayer || [];

  var isLoggedIn = localStorage.getItem("loggedIn") === "true";
  var userId = localStorage.getItem("userId");

  window.dataLayer.push({
    event: "select_item",
    item_list_id: "plp_products",
   

