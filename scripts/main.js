let lastScrollY = window.scrollY;
const navbar = document.querySelector('header nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        navbar.classList.remove('show-mobile-nav')
    } else {
        navbar.classList.add('show-mobile-nav')
    }
    lastScrollY = window.scrollY
})

