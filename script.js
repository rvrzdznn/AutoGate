// Handle login and store username
function handleLogin(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  localStorage.setItem('username', username);
  window.location.href = "home.html";
}

// Handle request form submission
function handleFormSubmission(event) {
  event.preventDefault();
  alert("Request submitted! Please wait for approval");
  window.location.href = "account.html";
}

// Footer navigation logic
function initFooterNavigation() {
  const homeBtn = document.getElementById("nav-home");
  const accountBtn = document.getElementById("nav-account");
  if (homeBtn) homeBtn.onclick = () => window.location.href = "home.html";
  if (accountBtn) accountBtn.onclick = () => window.location.href = "account.html";
}



