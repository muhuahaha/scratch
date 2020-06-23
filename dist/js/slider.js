window.addEventListener('load', function() {
  new Glider(document.querySelector('.glider'), {
    slidesToScroll: 1,
    slidesToShow: 1,
    draggable: true,
    dots: '.dots',
    rewind: true,
    // itemWidth: 350,
    // exactWidth: true,
    // dragVelocity: 3.8,
    // scrollLockDelay: 350,
    // scrollLock: true,
    // scrollPropagate: true,
    // resizeLock: true,

    arrows: {
      prev: '.glider-prev',
      next: '.glider-next',
    },

    // Glider.js breakpoints are mobile-first
    responsive: [
      {
        breakpoint: 900,
        settings: {
          draggable: false,
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
