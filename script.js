// Menü-Logik
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

// Cookie-Logik
function acceptCookies() {
  document.getElementById('cookie-banner').style.display = 'none';
  localStorage.setItem('ark_cookies', 'accepted');
}

function cancelCookies() {
  document.getElementById('cookie-banner').style.display = 'none';
  localStorage.setItem('ark_cookies', 'declined');
}

// Cookie-Banner automatisch ausblenden, wenn bereits entschieden
window.addEventListener('load', () => {
  const consent = localStorage.getItem('ark_cookies');
  if (consent === 'accepted' || consent === 'declined') {
    document.getElementById('cookie-banner').style.display = 'none';
  }
});