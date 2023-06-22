// JavaScript functionality for smooth scrolling navigation

// Select all navigation links
const navLinks = document.querySelectorAll('nav ul li a');

// Add click event listener to each navigation link
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    // Get the target section ID from the link's href attribute
    const targetId = link.getAttribute('href').substring(1);

    // Scroll smoothly to the target section
    document.getElementById(targetId).scrollIntoView({
      behavior: 'smooth'
    });

    // Close the mobile navigation menu on link click
    if (window.innerWidth <= 768) {
      document.getElementById('menu-toggle').checked = false;
    }
  });
});

// JavaScript functionality for mobile navigation toggle

const menuToggle = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-nav');

// Add change event listener to the menu toggle checkbox
menuToggle.addEventListener('change', () => {
  mobileNav.classList.toggle('active');
});

// JavaScript functionality for form submission

// Select the form element
const form = document.querySelector('form');

// Add submit event listener to the form
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the form input values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Perform validation if needed

  // Clear the form input values
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';

  // Display a success message
  alert('Thank you for your message. We will get back to you soon!');
});