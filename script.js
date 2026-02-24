// Juniper & Stone Café - JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Sticky Header Scroll Effect
    const siteHeader = document.querySelector('.site-header');

    if (siteHeader) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 10) {
                siteHeader.classList.add('scrolled');
            } else {
                siteHeader.classList.remove('scrolled');
            }
        });
    }

    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        navMenu.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                navToggle.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navToggle.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('active');
            }
        });

        // Close menu with Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && navMenu.classList.contains('active')) {
                navToggle.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('active');
                navToggle.focus();
            }
        });
    }

    // Theme Toggle - restore saved preference on every page
    if (localStorage.getItem('theme') === 'manuscript') {
        document.body.classList.add('theme-manuscript');
    }

    const themeToggle = document.getElementById('theme-toggle');

    if (themeToggle) {
        themeToggle.setAttribute('aria-pressed', document.body.classList.contains('theme-manuscript'));
        themeToggle.addEventListener('click', function() {
            const isActive = document.body.classList.toggle('theme-manuscript');
            themeToggle.setAttribute('aria-pressed', isActive);
            if (isActive) {
                localStorage.setItem('theme', 'manuscript');
            } else {
                localStorage.removeItem('theme');
            }
        });
    }

    // Contact Form Handling
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');

            // Show success message (in a real app, this would send to a server)
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;

            submitBtn.textContent = 'Message Sent!';
            submitBtn.disabled = true;

            // Reset form
            contactForm.reset();

            // Reset button after delay
            setTimeout(function() {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 3000);
        });
    }
});
