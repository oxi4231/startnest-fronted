// Dark / Light Mode Toggle
const modeToggle = document.getElementById("modeToggle");
let darkMode = true;

modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  darkMode = !darkMode;
  modeToggle.textContent = darkMode ? "🌙" : "☀️";
});

// Modal açma
const signupModal = document.getElementById("signupModal");
const loginModal = document.getElementById("loginModal");

document.getElementById("openSignup").addEventListener("click", () => {
  signupModal.style.display = "flex";
});

document.getElementById("openLogin").addEventListener("click", () => {
  loginModal.style.display = "flex";
});

// Tüm close butonları
document.querySelectorAll(".close").forEach(btn => {
  btn.addEventListener("click", () => {
    const modalId = btn.getAttribute("data-close");
    document.getElementById(modalId).style.display = "none";
  });
});

// Modal dışına tıklayınca kapatma
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }
});

// ----------------------------
// Login ve Signup Redirect
// ----------------------------
const signupForm = document.querySelector('#signupModal form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // İsteğe göre form doğrulama buraya eklenebilir
  window.location.href = 'home.html';
});

const loginForm = document.querySelector('#loginModal form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // İsteğe göre login doğrulama buraya eklenebilir
  window.location.href = 'home.html';
});
