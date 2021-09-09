const hamburguerBtn = document.querySelector('.header__hamburguer');
const slideBar = document.querySelector('.header__nav');

hamburguerBtn.addEventListener('click',() => {
    if (slideBar.classList.contains('show-slidebar')) {
        slideBar.classList.remove('show-slidebar');
    } else {
        slideBar.classList.add('show-slidebar');
    };
});
