const id = localStorage.getItem("pid");

// UI (UNCHANGED)
document.getElementById("title").innerText = "Product " + id;
document.getElementById("price").innerText = "₹" + id * 100;

// =========================
// ✅ PDP LOAD → view_item
// =========================

window.dataLayer = window.dataLayer || [];

let productName = "Product " + id;
let price = id * 100;

dataLayer.push({ ecommerce: null });

window.dataLayer.push({
  event: "view_item",
  ecommerce: {
    currency: "INR",
    value: price,
    items: [
      {
        item_id: "SKU_" + id,
        item_name: productName,
        affiliation: "ShopEase",
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
        item_variant: "default",
        location_id: "online_store",
        price: price,
        google_business_vertical: "retail",
        quantity: 1,
        pdp_load: "Yes",
        product_view: "Yes"
      }
    ]
  }
});

// =========================
// ✅ ADD TO CART
// =========================

function addToCart() {
  if (!requireLogin()) return;

  window.dataLayer = window.dataLayer || [];

  var isLoggedIn = localStorage.getItem("loggedIn") === "true";
  var userId = localStorage.getItem("userId");

  const qty = parseInt(document.getElementById("qty").value);

  dataLayer.push({ ecommerce: null });

  window.dataLayer.push({
    event: "add_to_cart",
    ecommerce: {
      currency: "INR",
      value: id * 100 * qty,
      items: [
        {
          item_id: "SKU_" + id,
          item_name: "Product " + id,
          affiliation: "ShopEase",
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
          quantity: qty,
          item_added: "Yes"
        }
      ]
    }
  });

  // existing logic (UNCHANGED)
  const color = document.getElementById("color").value;
  const size = document.getElementById("size").value;

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

// =========================
// (UNCHANGED ANALYTICS ATTRIBUTES)
// =========================

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





