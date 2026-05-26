import './styles.css';

const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
        siteNav.classList.toggle('show');
    });
}

const navLinks = document.querySelectorAll('.site-nav a');
navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        if (siteNav.classList.contains('show')) {
            siteNav.classList.remove('show');
        }
    });
});
