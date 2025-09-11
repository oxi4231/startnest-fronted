// app.js

// Sayfa elementleri
const landingHero = document.getElementById('landingHero');
const dashboard = document.getElementById('dashboard');
const dashboardContent = document.getElementById('dashboardContent');

// Sidebar ve bottom nav linkleri
const navLinks = document.querySelectorAll('[data-page]');

// Sayfa içerikleri (dashboard)
const pages = {
  home: `
    <div class="tabs">
      <button class="active">Projects for you</button>
      <button>All projects</button>
      <button>People</button>
    </div>

    <div class="search-bar">
      <textarea placeholder="AI search for best experience..." rows="2"></textarea>
      <div class="search-actions">
        <button class="mic" title="Voice Input">🎤</button>
        <button class="search-btn" title="Search">🔍</button>
      </div>
    </div>

    <div class="projects-grid">
      <div class="card">
        <h3>Henîn & Hümâ</h3>
        <p>Henîn & Hümâ is a non-profit media initiative dedicated to creating a diverse, independent, and community-driven platform for cultural and social expression through magazines and journalism.</p>
        <button class="apply-btn">Apply for <span>Web Designer & Developer</span></button>
        <div class="card-footer">
          <span>Created: Bilgesu Çetkin | 31/08/25</span>
          <span>Category: Nonprofits</span>
          <span>Phase: Idea</span>
        </div>
      </div>
    </div>
  `,

  messages: `
    <h2>Messages</h2><br>
    <div class="messages-list">
      <div class="message"><strong>Bilgesu:</strong> Hi, can you check my project?</div>
      <div class="message"><strong>Ali:</strong> I applied to your project!</div>
      <div class="message"><strong>Ayşe:</strong> Let's collaborate on this idea.</div>
    </div>
  `,

  notifications: `
    <h2>Notifications</h2><br>
    <div class="notifications-list">
      <div class="notification">📌 You have a new project suggestion!</div>
      <div class="notification">💬 Someone commented on your project.</div>
      <div class="notification">🔔 Your application was approved.</div>
    </div>
  `,

  profile: `
    <h2>Your Profile</h2><br>
    <div class="profile-card">
      <div class="profile-pic">👤</div>
      <h3>Bilgesu Çetkin</h3>
      <p>Email: bilgesu@example.com</p>
      <p>Role: Web Designer & Developer</p>
      <button class="btn edit-profile">Edit Profile</button>
    </div>
  `
};

// Sayfa değiştirici
function loadPage(page) {
  dashboardContent.innerHTML = pages[page];
  // Aktif link class'ını ayarla
  navLinks.forEach(link => {
    if (link.dataset.page === page) link.classList.add('active');
    else link.classList.remove('active');
  });
}

// Navbar linklerine event ekle
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Landing hero gizle, dashboard göster
    landingHero.style.display = 'none';
    dashboard.style.display = 'flex';
    loadPage(link.dataset.page);
  });
});

// Landing sayfa butonları (SignUp/Login sonrası dashboard aç)
document.getElementById('openSignup').addEventListener('click', () => {
  landingHero.style.display = 'none';
  dashboard.style.display = 'flex';
  loadPage('home');
});

document.getElementById('openLogin').addEventListener('click', () => {
  landingHero.style.display = 'none';
  dashboard.style.display = 'flex';
  loadPage('home');
});
