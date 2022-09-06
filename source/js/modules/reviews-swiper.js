import Swiper from '../vendor/swiper';

// eslint-disable-next-line no-new
new Swiper('.reviews__swiper', {

  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },

  slidesPerView: 1,

  loop: true,

  spaceBetween: 1000,

  mousewheel: {
    sensitivity: 1,
  },
});
