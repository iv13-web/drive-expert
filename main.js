var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});

const header = document.querySelector('.header')
const menuLinks = document.querySelectorAll('.some-link')
const headerNav = document.querySelector('.header-nav')
const headerLogo = document.querySelector('.header-logo')
const headerProfile = document.querySelector('.profile-img')
const navButton = document.querySelector('.nav-button')

/*для данной функции хотел применить делегирование событий, а не цикл, 
но т.к. из-за position fixed не получается повесить event scroll на .header, а приходится вешать
event на все окно window, то появляется проблема. Стоит ли применять тут делегирование событий или можно 
оставить цикл для перебора querySelectorAll*/

window.addEventListener('scroll', function() {
    /*хотел сократить часть коди ниже, чтобы строка, например, header.classList.add, формировалась сама
    function classAction(object, action) {
        object.classList.action 
    }*/
    if (window.scrollY !== 0) {
        header.classList.add('header-scroll');
        headerNav.classList.add('header-nav-scroll');
        headerLogo.setAttribute('src', 'img/driveexpert-logo-scroll.svg');
        headerProfile.setAttribute('src', 'img/profile-icon-scroll.svg');
        
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
        headerNav.classList.remove('header-nav-scroll');
        headerLogo.setAttribute('src', 'img/driveexpert-logo.svg');
        headerProfile.setAttribute('src', 'img/profile-icon.svg');

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
})


