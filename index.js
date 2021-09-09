const barsBtn = document.querySelector('.header__hamburguer');
const slideBar = document.querySelector('.header__nav');

barsBtn.addEventListener('click',() => {
    if (slideBar.classList.contains('show-slidebar')) {
        slideBar.classList.remove('show-slidebar');
    }else {
        slideBar.classList.add ('show-slidebar');
    };
});
