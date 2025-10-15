// Typed.js animation (only on home page)
var typedElement = document.querySelector(".typing");
if (typedElement) {
  var typed = new Typed(".typing", {
    strings: ["Frontend Developer", "Software Engineer", "UI Designer", "Full Stack Developer"],
    typeSpeed: 80,
    backSpeed: 50,
    loop: true
  });
}

// Mobile Navigation Toggle (works on all pages)
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

if (hamburger && navMenu) {
  // Toggle menu when hamburger is clicked
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close menu when a nav link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('header')) {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });
}