const burgerButton = document.querySelector('.burger');
const closeMenu = document.querySelector('.menu-close');
const menu = document.querySelector('.menu')

burgerButton.addEventListener('click', () => {
    menu.classList.add('burger-active');
})

closeMenu.addEventListener('click', () => {
    menu.classList.remove('burger-active')
})