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

const arrowPrevious = document.querySelector('.js-previous')
const arrowNext = document.querySelector('.js-next')
const carouselButton = document.querySelector('.carousel__button')
const carouselImg = document.querySelector('.carousel__img');

const cards = [ {
    id: 1,
    img: './images/photo2.jpg',
    buttonText: "Shop Livingroom",
},
{
    id: 2,
    img: './images/photo3.jpg',
    buttonText: "Shop fireplace",
},
{
    id: 1,
    img: './images/photo4.jpg',
    buttonText: "Shop paintings",
}
];

let currentItem = 0;

function showImage() {
    const item = cards[currentItem];
    carouselImg.src = item.img;
    carouselButton.textContent = item.buttonText;
};

arrowNext.addEventListener('click', () => {
    currentItem++;
    if (currentItem > cards.length -1) {
        currentItem = 0;
    }
    showImage();
});

arrowPrevious.addEventListener('click', () => {
    currentItem--;
    if (currentItem < 0) {
        currentItem = cards.length -1
    }
    showImage();
});

const menu = [
    {
      id: 1,
      title: "Candles",
      category: "candles",
      price: 20,
      img: "./images/filter1.jpg",
      desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.`,
    },
    {
        id: 2,
        title: "Candles",
        category: "candles",
        price: 20,
        img: "./images/filter2.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.`,
    },
    {
        id: 3,
        title: "Candles",
        category: "candles",
        price: 20,
        img: "./images/filter3.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.`,
    },
    {
        id: 4,
        title: "Candles",
        category: "candles",
        price: 20,
        img: "./images/filter4.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.`,
    },
    {
        id: 5,
        title: "Cushions",
        category: "cushions",
        price: 20,
        img: "./images/filter5.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.`,
    },
    {
        id: 6,
        title: "Cushions",
        category: "cushions",
        price: 20,
        img: "./images/filter6.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.`,
    },
    {
        id: 7,
        title: "Cushions",
        category: "cushions",
        price: 20,
        img: "./images/filter7.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.`,
    },
    {
        id: 8,
        title: "Cushions",
        category: "cushions",
        price: 20,
        img: "./images/filter8.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.`,
    },
    {
        id: 9,
        title: "Decorative",
        category: "decorative",
        price: 20,
        img: "./images/filter9.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.`,
    },
    {
        id: 10,
        title: "Decorative",
        category: "decorative",
        price: 20,
        img: "./images/filter10.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.`,
    },
    {
        id: 11,
        title: "Decorative",
        category: "decorative",
        price: 20,
        img: "./images/filter11.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.`,
    },
    {
        id: 12,
        title: "Decorative",
        category: "decorative",
        price: 20,
        img: "./images/filter12.jpg",
        desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.`,
    },
];

const sectionCenter = document.querySelector('.menu__container');
const filterBtns = document.querySelectorAll('.menu__filter-btn');

window.addEventListener('DOMContentLoaded', () => { 
    sectionMenuItems(menu);
});

filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const categoryBtn = btn.dataset.id;
        filterBtns.forEach((b) => b.classList.remove("keeping-the-color"));
        btn.classList.add('keeping-the-color');
        const filteredMenu = menu.filter((menuItem) => {
            if (categoryBtn === "all") {
                return true;
            }else {
                return menuItem.category === categoryBtn;
            }
        });
        sectionMenuItems(filteredMenu);
    });
});

function sectionMenuItems(theMenu) {
    let htmlMenu = theMenu.map((item) => {
        return `<article class="menu__items">
                   <img class="menu__img" src=${item.img} alt=${item.img}>
                   <div class="menu__item-info">
                        <div>
                            <h4 class="menu__h4">${item.title}</h4>
                            <span class="menu__price">$${item.price}</span>
                        </div>
                        <p class="menu__item-text">
                            ${item.desc}
                        </p>
                   </div>
                </article>`;
    });
    htmlMenu = htmlMenu.join("");
    sectionCenter.innerHTML = htmlMenu;
};

const questionButton = document.querySelectorAll('.faq__btn');

questionButton.forEach((btn) => {
    btn.addEventListener('click', () => {        
        const closeIcon = btn.querySelector('.faq__close');
        const arrowIcon = btn.querySelector('.faq__arrow');
        const answer = btn.nextElementSibling;
        answer.classList.toggle('show-answer');
        closeIcon.classList.toggle('hide-icon');
        arrowIcon.classList.toggle('show-icon');
    });
});
