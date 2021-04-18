let racersSwiper = new Swiper('.slider-racers .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 50,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      }, 
      1000: {
          slidesPerView: 2
      },
      1200: {
          slidesPerView: 3
      }
    }
});

let mapSwiper = new Swiper('.slider-maps .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 50,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      }, 
      1000: {
          slidesPerView: 2
      },
      1200: {
          slidesPerView: 3
      }
    }
});



const header = document.querySelector('.header');
const menuLinks = document.querySelectorAll('.nav-link');
const headerMenu = document.querySelector('.header-menu');
const headerLogo = document.querySelector('.header-logo');
const headerProfile = document.querySelector('.profile-img');
const navButton = document.querySelector('.nav-button');
const burgerMenu = document.querySelector('.burger');
const burgerMenuLines = document.querySelector('.burger span');
const mobileMenu = document.querySelector('.mobile-menu')
const body = document.querySelector('body');


window.addEventListener('scroll', function() {
    /*хотел сократить часть кода ниже, чтобы строка, например, header.classList.add, формировалась сама
    function classAction(object, action) {
        object.classList.action 
    }*/
    if (window.scrollY >= 80) {
        header.classList.add('header-scroll');
        headerMenu.classList.add('header-nav-scroll');
        headerLogo.setAttribute('src', 'img/drive-expert-red-black.svg');
        headerProfile.setAttribute('src', 'img/profile-icon-scroll.svg');
        burgerMenuLines.classList.add('black');

        navButton.addEventListener('mouseenter', function() { 
            navButton.classList.add('nav-button-scroll');
        })
        navButton.addEventListener('mouseleave', function() {
            navButton.classList.remove('nav-button-scroll');
        })

        for (let i = 0; i < menuLinks.length; i++) {
            menuLinks[i].classList.add('menu-text-scroll');
        }
    } else {
        header.classList.remove('header-scroll');
        headerMenu.classList.remove('header-nav-scroll');
        headerLogo.setAttribute('src', 'img/drive-expert-white.svg');
        headerProfile.setAttribute('src', 'img/profile-icon.svg');
        burgerMenuLines.classList.remove('black');

        navButton.addEventListener('mouseenter', function() {
            navButton.classList.remove('nav-button-scroll');
        })
        navButton.addEventListener('mouseleave', function() {
            navButton.classList.remove('nav-button-scroll');
        })

        for (let i = 0; i < menuLinks.length; i++) {
            menuLinks[i].classList.remove('menu-text-scroll');
        }
    } 
});

burgerMenu.addEventListener('click', function(){
    burgerMenuLines.classList.toggle('active');
    mobileMenu.classList.toggle('mobile-menu-active');
    body.classList.toggle('stop-scrolling');

    if (window.scrollY === 0) {
        burgerMenuLines.classList.toggle('black');

        if(mobileMenu.classList.contains('mobile-menu-active')) {
            headerLogo.setAttribute('src', 'img/driveexpert-logo-scroll.svg')
        } else {
            headerLogo.setAttribute('src', 'img/driveexpert-logo.svg')
        }

        navButton.addEventListener('mouseenter', function() { 
            navButton.classList.add('nav-button-scroll');
        })
        navButton.addEventListener('mouseleave', function() {
            navButton.classList.remove('nav-button-scroll');
        })
    } 
});



