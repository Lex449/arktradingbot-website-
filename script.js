// Smooth Scroll to Sections
document.querySelectorAll('.cta-btn').forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault();
    const target = this.getAttribute('href');
    document.querySelector(target).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
