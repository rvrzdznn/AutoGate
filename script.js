// Handle login and store username
function handleLogin(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  localStorage.setItem('username', username);

  localStorage.removeItem('gatePassData');
  localStorage.removeItem('requestStatus');

  window.location.href = "home.html";
}

// Handle request form submission
function handleFormSubmission(event) {
  event.preventDefault();

const idNumber = document.querySelector('#idNumber').value.trim();
const purpose = document.querySelector('#purpose').value.trim();
const name = localStorage.getItem('username');
const date = document.querySelector('#date').value;
const time = document.querySelector('#time').value;

let status = "Declined";
if (/^20\d{7}$/.test(idNumber)) {
  status = "Approved";
} else if (purpose.toLowerCase() === "visit") {
  status = "Pending";
}

localStorage.setItem('requestStatus', status);
localStorage.setItem('gatePassData', JSON.stringify({ name, idNumber, purpose, date, time }));

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




