document.addEventListener("DOMContentLoaded", function () {

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

        <button onclick="viewProduct(${i})">
          View
        </button>
      </div>
    `;

    // GA4 items array
   itemsArray.push({
  item_id: "SKU_" + i,
  item_name: productName,
  affiliation: "ShopEase Store",
  coupon: "",
  discount: 0,
  index: i - 1,
  item_brand: "ShopEase",
  item_category: "Apparel",
  item_category2: "General",
  item_category3: "Clothing",
  item_category4: "Standard",
  item_category5: "Default",
  item_list_id: "plp_products",
  item_list_name: "Product Listing",
  item_variant: "default",
  location_id: "online_store",
  price: price,
  google_business_vertical: "retail",
  quantity: 1
});
  }

  // render UI safely
  const container = document.getElementById("products");
  if (container) {
    container.innerHTML = productsHTML;
  }

  // 🔥 dataLayer push (safe)
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

});

// navigation function (must be OUTSIDE DOMContentLoaded)
function viewProduct(id) {

  let productName = "Product " + id;
  let price = id * 100;

  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    event: "select_item",
    item_list_id: "plp_products",
    item_list_name: "Product Listing",
    items: [
      {
        item_id: "SKU_" + id,
        item_name: productName,
        affiliation: "ShopEase Store",
        coupon: "",
        discount: 0,
        index: id - 1,
        item_brand: "ShopEase",
        item_category: "Apparel",
        item_category2: "General",
        item_category3: "Clothing",
        item_category4: "Standard",
        item_category5: "Default",
        item_list_id: "plp_products",
        item_list_name: "Product Listing",
        item_variant: "default",
        location_id: "online_store",
        price: price,
        google_business_vertical: "retail",
        quantity: 1
      }
    ]
  });

  // navigation
  localStorage.setItem("pid", id);
  window.location.href = "pdp.html";
}
