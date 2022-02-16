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

// carousel //

let index = 0;
const dots = document.getElementsByClassName("dot");
const images = document.getElementsByClassName("image");
showImage(index);

function showImage(j){
    index += j;
    for (i = 0; i < images.length; i++)
        images[i].style.display = "none";
    
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if (index > images.length - 1){
            index = 0;
    }
    if (index < 0){
            index = images.length - 1;}
        

    images[index].style.display = "block";
    dots[index].className += " active";
}