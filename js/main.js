let racersSwiper = new Swiper('.slider-racers', {
    slidesPerView: 3,
    spaceBetween: 50,
    pagination: {
      el: '.racer-pagination',
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

let mapSwiper = new Swiper('.slider-maps', {

    pagination: {
      el: '.map-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

/* HEADER BLUR onScroll */
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    window.scrollY > 20 && header.classList.add('header-scroll');
    window.scrollY === 0 && header.classList.remove('header-scroll');
});
document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.mobile-menu').classList.toggle('mobile-menu-active');
    document.querySelector('body').classList.toggle('stop-scrolling');
});


/* TABS with pricing */
const tables = document.querySelectorAll('.table');
const selector = document.querySelectorAll('.offer-os-link');

function hideTabsContent() {
    tables.forEach(tab => tab.classList.add('hidden'));
    selector.forEach(tab => tab.classList.remove('offer-os-link-active'));
}
hideTabsContent();


function showTabsContent(i = 0) {
    tables[i].classList.remove('hidden');
    selector[i].classList.add('offer-os-link-active');
}
showTabsContent();


document.querySelector('.offer-platforms').addEventListener('click', event => {
    const target = event.target;

    if (target && target.classList.contains('offer-os-link')) {
        selector.forEach((selector, i) => {
            if (target === selector) {
                hideTabsContent();
                showTabsContent(i);
            }
        });
    }
});


/* MODALS (cards with advantages) */
document.querySelectorAll('.card').forEach((card, i) => {

    card.addEventListener('click', event => {

        event.preventDefault();
        $.modal(cardModals[i]).open();
    });
});

/* TABLE (results) */

document.querySelectorAll('.table-toggle').forEach(toggler => {

    toggler.addEventListener('click', () => {

       toggler.closest('.mobile-table-wrapper').classList.toggle('active');
    });
}); 