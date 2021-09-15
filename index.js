const hamburguerBtn = document.querySelector('.header__hamburguer');
const slideBar = document.querySelector('.header__nav');
const header = document.querySelector('.header');

const cards = [ {
    id: 1,
    img: './images/photo2.jpg',
    buttonText: "Shop Livingroom"
},
{
    id: 2,
    img: './images/photo3.jpg',
    buttonText: "Shop fireplace"
},
{
    id: 1,
    img: './images/photo4.jpg',
    buttonText: "Shop paintings"
}
];

const arrowPrevious = document.querySelector('.js-previous')
const arrowPrevious = document.querySelector('.js-next')

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
