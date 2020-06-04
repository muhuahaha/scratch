function randomPick(arr) {
  const selected = arr[Math.floor(Math.random() * arr.length)];

  return selected;
}

const images = [
  'img/ava2.png',
  'img/ava3.png',
  'img/ava4.png',
  'img/ava5.png',
  'img/ava6.png',
  'img/ava7.png',
  'img/ava8.png',
  'img/ava9.png',
  'img/ava10.png',
  'img/ava11.png',
];

function randomHover() {
  const myImage = document.getElementById('hover');
  const selImage = randomPick(images);

  myImage.src = selImage;
}

function resetState() {
  const myImage = document.getElementById('hover');
  myImage.src = 'img/ava1.png';
}
