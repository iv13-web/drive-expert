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


/* MODALS cards with advantages */
document.querySelectorAll('.card').forEach(card => {
  
    const modal = $.modal({
        title: 'Подробнее о преимуществе',
        date: formatDate(),
        subtitle: 'Change log for RaceChrono v6.3.4 for Android (07.05.2021)',
        src: './img/modal_inner_photo.webp',
        content: 'List of paired devices will be displayed when adding a new Bluetooth device. Searching devices in range is now an option. Added new settings “Auto-detect my tracks only” and “Auto-detect again if finished”. The latter one should be useful for rally events with multiple different special stages. Added new setting “Split video files”. If disabled the video will be recorded to one large file. Improved: DIY CAN-Bus API now allows payload length up-to 16 bytes. Improved: Expert setting “GPS week rollover compensation” now also affects the built-in GPS. Fixed: A notification is now displayed, if location is disabled and it is needed for searching or connecting devices. Fixed: Channel postfix field was not displayed in CAN-Bus channel editor',
        closable: true,
    });
  
    card.addEventListener('click', (event) => {
        event.preventDefault();
        modal.open();
    });
});
