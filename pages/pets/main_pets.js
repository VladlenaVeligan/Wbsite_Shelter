const burger = document.querySelector('.burger-menu__button'),
    list = document.querySelector('.list'),
    header = document.querySelector('.header_position'),
    body = document.querySelector('body'),
    bodyBurger = document.querySelector('.open_burger'),
    logo = document.querySelector('.logo'),
    overlay = document.querySelector('.overlay');


burger.addEventListener('click', openMenu);

bodyBurger.addEventListener('click', closeMenu);

burger.addEventListener('click', (e) => {
    e.preventDefault();
    bodyBurger.classList.toggle('active');
    overlay.classList.toggle('show');
});


overlay.addEventListener('click', () => {
    bodyBurger.classList.toggle('active');
    overlay.classList.toggle('show');
    logo.classList.toggle('opened');
    closeMenu()
});

function openMenu() {

    burger.classList.toggle('opened');
    logo.classList.toggle('opened');
    document.body.classList.toggle('scroll-off');
    bodyBurger.classList.toggle('opened');
}

function closeMenu() {
    list.classList.remove('opened');
    burger.classList.remove('opened');
    header.classList.remove('opened');
    document.body.classList.remove('scroll-off');
    bodyBurger.classList.remove('opened');
}