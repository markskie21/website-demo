
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x'); 
  navbar.classList.toggle('active'); 
  navbar.classList.remove('close')

}
const swiper = new Swiper(".slider-wrapper", {
  // Optional parameters
  loop: true,
  spaceBetween: 30,
  grabCursor: true,


  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

 
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },


  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1080: {
      slidesPerView: 3,
    },
  },
});

ScrollReveal({
  reset: true,
  distance: '60px',
  duration: 2500,
  delay: 400

});

ScrollReveal().reveal('.home-content',{delay:250, orgin:'right'});
ScrollReveal().reveal('.about-content',{delay:250, orgin:'right'});

ScrollReveal().reveal('#event',{delay:250, orgin:'left'});
ScrollReveal().reveal('#about-us',{delay:250, orgin:'left'});
ScrollReveal().reveal('#contact',{delay:250, orgin:'left'});


document.querySelector("#about > div > div > div > div > div.col-lg-7.col-sm-5 > img:nth-child(1)")