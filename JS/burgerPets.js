const burger = document.getElementById('burger');
const mobile_menu = document.querySelector('div.mobile-menu');
const body = document.body;
const blackout = document.querySelector('div.blackout');
const header = document.querySelector('header');
const logo = document.querySelector('div.logo.second_page');


burger.addEventListener('click', () => {
    mobile_menu.classList.toggle('open-mobile');
    body.classList.toggle('noScroll');
    blackout.classList.toggle('view');
    burger.classList.toggle('reverse');
    header.classList.toggle('headerHidden');
    logo.classList.toggle('logoHidden');

})

mobile_menu.addEventListener("click", () => {
    mobile_menu.classList.remove('open-mobile');
    body.classList.remove('noScroll');
    blackout.classList.remove('view');
    burger.classList.remove('reverse');
    header.classList.remove('headerHidden');
    logo.classList.remove('logoHidden')
})

blackout.addEventListener('click', () => {
    blackout.classList.remove('view');
    body.classList.remove('noScroll');
    mobile_menu.classList.remove('open-mobile');
    burger.classList.remove('reverse');
    header.classList.remove('headerHidden');
    logo.classList.remove('logoHidden')
})