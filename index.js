const hamburguerBtn = document.querySelector('.header__hamburguer');
const slideBar = document.querySelector('.header__nav');
const header = document.querySelector('.header');


hamburguerBtn.addEventListener('click',() => {
    if (slideBar.classList.contains('show-slidebar')) {
        slideBar.classList.remove('show-slidebar');
    } else {
        slideBar.classList.add('show-slidebar');
    };
});

window.addEventListener('scroll',() => {
    const scrollPosition = window.scrollY;
    if (scrollPosition >= 77) {
        header.classList.add('is-scrolled');
    } else {
        header.classList.remove('is-scrolled');
    }
});
