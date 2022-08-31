import Swiper from '../vendor/swiper';

// eslint-disable-next-line no-new
new Swiper('.swiper', {

  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },

  slidesPerView: 1,

  loop: true,

  spaceBetween: 40,

  mousewheel: {
    sensitivity: 1,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});
