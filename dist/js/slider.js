window.addEventListener('load', function() {
  new Glider(document.querySelector('.glider'), {
    slidesToScroll: 1,
    slidesToShow: 1,
    draggable: true,
    dots: '.dots',
    dragVelocity: 3.8,
    rewind: true,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next',
    },
  });
});
