// ====== NAVIGATION MENU TOGGLE ======
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// ====== CLOSE MENU ON LINK CLICK (MOBILE) ======
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ====== SMOOTH SCROLL BEHAVIOR ======
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
smoothScrollLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ====== OPTIONAL: SHOW A WELCOME MESSAGE IN CONSOLE ======
console.log("💠 Welcome to Joseph Mwale’s Portfolio! Built with HTML, CSS & JS 💠");
