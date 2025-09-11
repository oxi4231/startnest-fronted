// ---------- Dark / Light Mode Toggle ----------
const modeToggle = document.getElementById("modeToggle");
let darkMode = true;
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  darkMode = !darkMode;
  modeToggle.textContent = darkMode ? "🌙" : "☀️";
});

// ---------- Modal açma / kapama ----------
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

// ---------- Login / Signup ----------
const signupForm = document.querySelector('#signupModal form');
const loginForm = document.querySelector('#loginModal form');

function loginSuccess() {
  // Footer gizle
  const footer = document.querySelector('footer');
  if (footer) footer.style.display = 'none';

  // Redirect home
  window.location.href = 'home.html';
}

if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    loginSuccess();
  });
}

if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    loginSuccess();
  });
}
