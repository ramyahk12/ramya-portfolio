// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Change button icon dynamically
  if (body.classList.contains('dark-mode')) {
    themeToggle.textContent = '🌞';  // Sun icon for light mode
  } else {
    themeToggle.textContent = '🌙';  // Moon icon for dark mode
  }
});
