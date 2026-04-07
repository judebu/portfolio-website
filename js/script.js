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

// Force top-of-page when navigating to projects page from any site link.
document.querySelectorAll('a[href^="projects.html"], a[href^="/projects.html"]').forEach(link => {
  link.addEventListener('click', () => {
    sessionStorage.setItem('forceProjectsTop', '1');
  });
});

if (window.location.pathname.endsWith('/projects.html') || window.location.pathname === 'projects.html') {
  if (sessionStorage.getItem('forceProjectsTop') === '1') {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    const resetToTop = () => {
      window.scrollTo(0, 0);
    };

    resetToTop();
    window.addEventListener('DOMContentLoaded', resetToTop);
    window.addEventListener('load', resetToTop);
    window.addEventListener('pageshow', () => {
      resetToTop();
      setTimeout(resetToTop, 0);
      sessionStorage.removeItem('forceProjectsTop');
    });
  }
}
