window.addEventListener('load', function() {
  new Glider(document.querySelector('.glider'), {
    slidesToScroll: 1,
    slidesToShow: 1,
    draggable: true,
    dots: '.dots',
    rewind: true,

    // dragVelocity: 3.8,
    scrollLockDelay: 250,
    scrollLock: false,
    propagateEvent: true,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next',
    },
  });
});
