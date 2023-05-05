const menu = document.querySelector('#menu');
const btnMenu = document.querySelector('#btnMenu');

btnMenu.addEventListener('click', function() {
    menu.classList.toggle('active');
});



// efect of scroll menu
window.addEventListener('scroll', function() {
    const scroll = window.pageYOffset;
    if (scroll > 41) {
        document.querySelector('.menu-container').style.position = "fixed";
        document.querySelector('.menu-container').style.top = "0";
    } else {
        document.querySelector('.menu-container').style.position = "absolute";
        document.querySelector('.menu-container').style.top = "40px";
    }
})