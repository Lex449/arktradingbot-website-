// === Menü-Toggle für Mobile ===
document.getElementById('menu-toggle')?.addEventListener('click', () => {
  const menu = document.getElementById('mobile-menu');
  if (menu) menu.classList.toggle('active');
});

// === Cookie-Banner Logik ===
function acceptCookies() {
  document.getElementById('cookie-banner').style.display = 'none';
  localStorage.setItem('cookiesAccepted', 'true');
}

function cancelCookies() {
  document.getElementById('cookie-banner').style.display = 'none';
  localStorage.setItem('cookiesAccepted', 'false');
}

window.addEventListener('load', () => {
  const status = localStorage.getItem('cookiesAccepted');
  if (status === 'true' || status === 'false') {
    document.getElementById('cookie-banner').style.display = 'none';
  }
});