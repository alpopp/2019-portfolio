var hamburger = document.getElementById("hamburger");
var menu = document.querySelector(".menuItems");

function navClick() {    
    hamburger.firstElementChild.classList.toggle('animate');
    menu.classList.toggle("active");
}