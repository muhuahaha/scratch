
new Glide('.glide', {
  type: 'carousel',
  startAt: 0,
  perView: 3
});

var select = document.querySelector('#options-type-select')

var glide = new Glide('#options-type', {
  type: select.value,
  focusAt: 'center',
  perView: 3
})

select.addEventListener('change', function (event) {
  glide.update({
    type: event.target.value
  })
})

glide.mount()
