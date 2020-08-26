$(document).ready(function () {
  /*=== Testimonials Slider ===*/
  var testimonialsSwiper = new Swiper(".testimonials-slider", {
    loop: true,
    speed: 500,
    slidesPerView: '1.5',
    watchSlidesVisibility: true,
    slideClass: 'swiper-slide',
    slideVisibleClass: 'swiper-slide--visible',

    navigation: {
      nextEl: ".testimonials-slider__button--next",
      prevEl: ".testimonials-slider__button--prev",
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },

    keyboard: {
      enabled: true,
    },
  });
});