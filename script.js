const menuBtn = document.querySelector('.burger-btn');
const burgerMenu = document.querySelector('.burger-mb');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        burgerMenu.classList.add('burger-mb-show');
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        burgerMenu.classList.remove('burger-mb-show');
    }
});
 