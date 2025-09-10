// Seçimler
const searchInput = document.querySelector('.search-bar textarea');
const searchBtn = document.querySelector('.search-btn');
const micBtn = document.querySelector('.mic');

// Arama butonu click
searchBtn.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (query !== "") {
    alert('Searching for: ' + query);
    // Buraya arama fonksiyonunu ekleyebilirsin
  } else {
    alert('Please enter something to search.');
  }
});

// Enter ile arama yapma
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault(); // Yeni satır eklemeyi engelle
    searchBtn.click();
  }
});

// Voice input (webkitSpeechRecognition)
if ('webkitSpeechRecognition' in window) {
  const recognition = new webkitSpeechRecognition();
  recognition.lang = 'en-US'; // dil ayarı, istersen değiştir
  recognition.interimResults = false;

  micBtn.addEventListener('click', () => {
    recognition.start();
  });

  recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    searchInput.value = transcript;
    searchBtn.click(); // otomatik arama tetikleme
  };

  recognition.onerror = function(event) {
    alert('Voice recognition error: ' + event.error);
  };
}
