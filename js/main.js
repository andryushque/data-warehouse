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
      nextEl: ".testimonials__button--next",
      prevEl: ".testimonials__button--prev",
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },

    keyboard: {
      enabled: true,
    },

    breakpoints: {
      1200: {
        slidesPerView: 1.5,
      },
      320: {
        slidesPerView: 1,
      }
    }
  });
});