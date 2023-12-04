document.addEventListener('DOMContentLoaded', function() {
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const navLinks = document.getElementById('nav-links');

    hamburgerIcon.addEventListener('click', function() {
        // Toggle class 'show' on nav links
        navLinks.classList.toggle('show');
    });
});
