// ---------- Search Bar ----------
const searchInput = document.querySelector('.search-bar textarea');
const searchBtn = document.querySelector('.search-btn');
const micBtn = document.querySelector('.mic');

if (searchInput && searchBtn) {
  // Arama butonu click
  searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query !== "") {
      alert('Searching for: ' + query);
    } else {
      alert('Please enter something to search.');
    }
  });

  // Enter ile arama yapma
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      searchBtn.click();
    }
  });
}

// Voice input (webkitSpeechRecognition)
if ('webkitSpeechRecognition' in window && micBtn) {
  const recognition = new webkitSpeechRecognition();
  recognition.lang = 'en-US';
  recognition.interimResults = false;

  micBtn.addEventListener('click', () => recognition.start());

  recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    searchInput.value = transcript;
    searchBtn.click();
  };

  recognition.onerror = function(event) {
    alert('Voice recognition error: ' + event.error);
  };
}

// ---------- Tabs İşlevi (Home ve Messages) ----------
document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-contents > div');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Butonların aktif sınıfı
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // İlgili içerik göster / diğerlerini gizle
      const target = btn.dataset.tab;
      tabContents.forEach(content => {
        content.style.display = content.id === target ? 'grid' : 'none';
      });
    });
  });
});
// ---------- Dark / Light Mode ----------
const modeBtn = document.getElementById('modeToggle');
if (modeBtn) {
  // Sayfa yüklendiğinde önce localStorage kontrolü
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    modeBtn.textContent = '🌙';
  }

  modeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
      modeBtn.textContent = '🌙';
      localStorage.setItem('theme', 'light');
    } else {
      modeBtn.textContent = '☀️';
      localStorage.setItem('theme', 'dark');
    }
  });
}
