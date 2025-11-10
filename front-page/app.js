// Simple JavaScript for the landing page
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const menuButton = document.querySelector('.mobile-menu-button');
  const mobileMenu = document.querySelector('.mobile-menu');
  const body = document.body;
  
  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', function() {
      const isOpen = mobileMenu.classList.contains('open');
      if (isOpen) {
        mobileMenu.classList.remove('open');
        body.style.overflow = '';
        menuButton.setAttribute('aria-label', 'Open menu');
      } else {
        mobileMenu.classList.add('open');
        body.style.overflow = 'hidden';
        menuButton.setAttribute('aria-label', 'Close menu');
      }
    });
  }
  
  // Close mobile menu when clicking on links
  const mobileLinks = document.querySelectorAll('.mobile-menu a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.remove('open');
      body.style.overflow = '';
      menuButton.setAttribute('aria-label', 'Open menu');
    });
  });
  
  // Hero tabs functionality
  const tabButtons = document.querySelectorAll('.hero-tab-button');
  const tabImages = document.querySelectorAll('.hero-tab-image');
  
  if (tabButtons.length > 0 && tabImages.length > 0) {
    tabButtons.forEach((button, index) => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons and images
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabImages.forEach(img => img.classList.remove('active'));
        
        // Add active class to clicked button and corresponding image
        button.classList.add('active');
        tabImages[index].classList.add('active');
      });
    });
  }
  
  // Form handling for request access
  const requestButtons = document.querySelectorAll('.request-access-button');
  requestButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      alert('In the full application, this would open a request access form. This is a standalone landing page demo.');
    });
  });
  
  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  
  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 10) {
        navbar.classList.remove('bg-transparent');
        navbar.classList.add('bg-white/90', 'backdrop-blur-md', 'shadow-md');
      } else {
        navbar.classList.add('bg-transparent');
        navbar.classList.remove('bg-white/90', 'backdrop-blur-md', 'shadow-md');
      }
    });
  }
});