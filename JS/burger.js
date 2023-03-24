const burger = document.getElementById('burger-main')
const mobile_menu = document.querySelector('div.mobile-menu');
const logo = document.querySelector('div.main_page');

burger.addEventListener('click', () => {
    mobile_menu.classList.toggle('open-mobile');
    body.classList.toggle('noScroll');
    logo.classList.toggle('hiddenLogo');
    blackout.classList.toggle('view');
    burger.classList.toggle('reverse')

})

mobile_menu.addEventListener("click", () => {
    mobile_menu.classList.remove('open-mobile');
    body.classList.remove('noScroll');
    logo.classList.remove('hiddenLogo');
    blackout.classList.remove('view');
    burger.classList.remove('reverse');
})

blackout.addEventListener('click', () => {
    blackout.classList.remove('view');
    body.classList.remove('noScroll');
    mobile_menu.classList.remove('open-mobile');
    logo.classList.remove('hiddenLogo');
    burger.classList.remove('reverse');
})
