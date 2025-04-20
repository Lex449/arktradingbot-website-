// === Menü-Toggle ===
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

// === Cookie-Banner ===
function acceptCookies() {
  document.getElementById('cookie-banner').style.display = 'none';
  localStorage.setItem('ark_cookies', 'accepted');
}

function cancelCookies() {
  document.getElementById('cookie-banner').style.display = 'none';
  localStorage.setItem('ark_cookies', 'declined');
}

window.addEventListener('load', () => {
  const consent = localStorage.getItem('ark_cookies');
  if (consent === 'accepted' || consent === 'declined') {
    document.getElementById('cookie-banner').style.display = 'none';
  }
});

// === Scroll-Effekte (Mockups & spätere Animationen) ===
const fadeIns = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

fadeIns.forEach(el => observer.observe(el));