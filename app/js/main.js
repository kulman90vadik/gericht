
window.addEventListener("load", function(){

    let scrollTo = document.querySelector('.scroll');
    let about = document.querySelector('.about');
    
    scrollTo.addEventListener('click', function() {
        about.scrollIntoView({
            top: 0,
            behavior: 'smooth'
        });
    })


    const homeSwiper = new Swiper('.home__swiper', {
        wrapperClass: 'home__wrapper',
        slideClass: 'home__slide',
        pagination: {
            el: '.home__pagination',
            clickable: true,
            // type: 'fraction',
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
    });


    // let headerItems = document.querySelectorAll('.header__btn-item');
    // document.querySelector('.header__btn').addEventListener('click', function(){
    //     document.querySelector('.menu').classList.toggle('menu--active');
    //     headerItems.forEach(elem => {
    //         elem.classList.toggle('header__btn-item--active');
    //     });
    // });

    window.addEventListener('scroll', function(){
        if(window.scrollY >= 100) {
            document.querySelector('.header').classList.add('header--active');
    //         document.querySelector('.home-page__title').classList.add('home-page__title--outLeft');
    //         document.querySelector('.home-page__name').classList.add('home-page__name--outLeft');
    //         document.querySelector('.home-page__link').classList.add('home-page__link--outLeft');
        }
        else {
            document.querySelector('.header').classList.remove('header--active');
    //         document.querySelector('.home-page__title').classList.remove('home-page__title--outLeft');
    //         document.querySelector('.home-page__name').classList.remove('home-page__name--outLeft');
    //         document.querySelector('.home-page__link').classList.remove('home-page__link--outLeft');
        }
    });

    let bookHead = document.querySelectorAll('.book__head');
    bookHead.forEach(function(item) {
        item.addEventListener('click', function(){

            let allDr =  document.querySelectorAll('.book__dropdown');
            allDr.forEach(function(elem) {
                if (elem.classList.contains('book__dropdown--active')) {
                    elem.classList.remove('book__dropdown--active');
                }
            });

            let closest = item.closest('.book__item');
            closest.querySelector('.book__dropdown').classList.toggle('book__dropdown--active');
        });
    });


    // $('.menu__link, .logo, .home-page__link').on('click', function (event) {
    //     event.preventDefault();
    //     var id = $(this).attr('href');
    //     var top = $(id).offset().top;
    //     $('body,html').animate({scrollTop: top}, 1500);

    //     $('.menu').removeClass('menu--active');
    //     $('.header__btn-item').removeClass('header__btn-item--active');
    // });

    // new WOW().init();
});
