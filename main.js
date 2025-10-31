// js/main.js

// Footer: Set the current year dynamically
document.addEventListener('DOMContentLoaded', function () {
  var yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

// Mobile navigation toggle (for accessibility/fallback if needed)
(function () {
  var menuToggle = document.getElementById('menu-toggle');
  var navMenu = document.querySelector('nav ul');
  var menuIcon = document.querySelector('.menu-icon');

  if (menuToggle && navMenu && menuIcon) {
    menuIcon.addEventListener('click', function () {
      menuToggle.checked = !menuToggle.checked;
      // Optionally, focus the first nav link for accessibility
      if (menuToggle.checked) {
        var firstLink = navMenu.querySelector('a');
        if (firstLink) firstLink.focus();
      }
    });

    // Optional: Close menu when a nav link is clicked (on mobile)
    navMenu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A' && window.innerWidth <= 900) {
        menuToggle.checked = false;
      }
    });
  }
})();

// Basic client-side validation for contact form (optional enhancement)
(function () {
  var form = document.querySelector('form[aria-label="Contact form"]');
  if (form) {
    form.addEventListener('submit', function (e) {
      // Example: check required fields
      var name = form.querySelector('#name');
      var email = form.querySelector('#email');
      var message = form.querySelector('#message');
      if (
        !name.value.trim() ||
        !email.value.trim() ||
        !message.value.trim()
      ) {
        alert('Please fill in all required fields.');
        e.preventDefault();
        return false;
      }
      // Optionally, add more validation here
    });
  }
})();