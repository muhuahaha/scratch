

window.addEventListener('load', function() {
  new Glider(document.querySelector('.glider'), {
    type: 'carousel',
  startAt: 0,
  perView: 3,
    draggable: true,
    dots: '.dots',
 
    dragVelocity: 3.8,
    scrollLockDelay: 350,
    scrollLock: true,
    propagateEvent: true,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next',
    },
  });
});
