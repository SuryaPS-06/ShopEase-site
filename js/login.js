function generateUserId() {
  return "UID_" + Math.random().toString(36).substring(2, 12);
}

function openLogin() {
  document.getElementById("loginModal").style.display = "block";
}

function closeLogin() {
  document.getElementById("loginModal").style.display = "none";
}

function login() {
  const user = document.getElementById("user").value.trim();
  const pass = document.getElementById("password").value.trim();

  const isEmail = user.includes("@");
  const isMobile = /^\d{10}$/.test(user);

  if (!user || !pass) {
    error("All fields required");
    return;
  }

  if (!(isEmail || isMobile)) {
    error("Enter valid email or 10-digit mobile");
    return;
  }

  if (pass.length !== 6) {
    error("Password must be 6 characters");
    return;
  }

  localStorage.setItem("loggedIn", "true");
  
  if (!localStorage.getItem("userId")) {
  localStorage.setItem("userId", generateUserId());
}

  closeLogin();
  checkLogin();
}

function error(msg) {
  document.getElementById("error").innerText = msg;
}

function checkLogin() {
  const loggedIn = localStorage.getItem("loggedIn");
  document.getElementById("loginBtn").style.display = loggedIn ? "none" : "inline";
  document.getElementById("logoutBtn").style.display = loggedIn ? "inline" : "none";
}

function logout() {
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("userId");
  checkLogin();
}


function requireLogin() {
  if (!localStorage.getItem("loggedIn")) {
    alert("Please login to continue");
    location.href = "index.html";
    return false;
  }
  return true;
}

document.addEventListener("click", function (event) {
  var target = event.target.closest("[data-cta-name]");
  if (!target) return;

  var isLoggedIn = localStorage.getItem("loggedIn") === "true";
  var userId = localStorage.getItem("userId");

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "cta_click",
    cta_name: target.getAttribute("data-cta-name"),
    cta_location: target.getAttribute("data-cta-location") || "unknown",
    page_name: document.title.toLowerCase().replace(/\s+/g, "_"),
    page_url: window.location.href,
    user_type: isLoggedIn ? "logged_in" : "guest",
    user_id: isLoggedIn ? userId : undefined,
    timestamp: new Date().toISOString()
  });
});



