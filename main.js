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




window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    window.scrollY > 40 && header.classList.add('header-scroll');
    window.scrollY === 0 && header.classList.remove('header-scroll');
});

document.querySelector('.burger').addEventListener('click', function() {
    document.querySelector('.mobile-menu').classList.toggle('mobile-menu-active');
    document.querySelector('body').classList.toggle('stop-scrolling');
});



