// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        navMenu.classList.remove('active'); // Close mobile menu on click
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple form submission handler
document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('button');
    const originalText = btn.innerText;
    
    // Fake loading state
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    btn.style.opacity = '0.8';
    
    setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-check"></i> Request Sent!';
        btn.style.background = '#28a745'; // Green success color
        this.reset();
        
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.background = ''; // Revert to secondary color
            btn.style.opacity = '1';
        }, 3000);
    }, 1500);
});
