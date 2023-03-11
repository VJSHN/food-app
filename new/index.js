var menu = document.querySelector("#menu-bars");
var navbar = document.querySelector(".navbar");

menu.onclick = function () {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = function () {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

document.querySelector("#search").onclick = function(){
  document.querySelector("#search-form").classList.toggle("active");
}

document.querySelector("#close").onclick = function(){
  document.querySelector("#search-form").classList.remove("active");
}

var swiper = new Swiper(".homepage", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        loop:true,
      });
