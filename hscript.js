// ---------- Dark / Light Mode Toggle ----------
const modeToggle = document.getElementById("modeToggle");
let darkMode = true;
if (modeToggle) {
  modeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    darkMode = !darkMode;
    modeToggle.textContent = darkMode ? "🌙" : "☀️";
  });
}

// ---------- Search & Voice Input Initialization ----------
function initSearchVoice() {
  const searchInput = document.querySelector('.search-bar textarea');
  const searchBtn = document.querySelector('.search-btn');
  const micBtn = document.querySelector('.mic');

  if (searchInput && searchBtn) {
    searchBtn.addEventListener('click', () => {
      const query = searchInput.value.trim();
      if (query) alert('Searching for: ' + query);
      else alert('Please enter something to search.');
    });

    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        searchBtn.click();
      }
    });
  }

  if ('webkitSpeechRecognition' in window && micBtn) {
    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'tr-TR';
    recognition.interimResults = false;

    micBtn.addEventListener('click', () => recognition.start());

    recognition.onresult = function(e) {
      const transcript = e.results[0][0].transcript;
      searchInput.value = transcript;
      searchBtn.click();
    }

    recognition.onerror = function(e) {
      alert('Voice recognition error: ' + e.error);
    }
  }
}

// ---------- Page Navigation (SPA) ----------
function loadPage(page) {
  const main = document.getElementById('mainContent');
  fetch(`${page}.html`)
    .then(res => res.text())
    .then(data => main.innerHTML = data)
    .catch(err => main.innerHTML = `<p>Error loading ${page}</p>`)
    .finally(() => initSearchVoice()); // Dinamik elementleri yeniden başlat
}

// ---------- Varsayılan Sayfa Yükleme ----------
document.addEventListener("DOMContentLoaded", () => {
  loadPage('home2'); // Sayfa açılır açılmaz home2.html yükle
});
