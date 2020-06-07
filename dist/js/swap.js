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

function randomHover() {}

const test1 = document.getElementById('hover');

test1.addEventListener('mouseenter', event => {
  const myImage = document.getElementById('hover');
  const selImage = randomPick(images);

  myImage.src = selImage;
});

const test2 = document.getElementById('hover');

test2.addEventListener('mouseleave', event => {
  const myImage = document.getElementById('hover');
  myImage.src = 'img/ava1.png';
});

// const test = document.getElementById('hover');

// window.addEventListener(
//   'load',
//   event => {
//     const myImage = document.getElementById('hover');

//     setTimeout(function() {
//       const selImage = randomPick(images);
//       myImage.src = selImage;
//     }, 5000);

//     setTimeout(function() {
//       myImage.src = 'img/ava1.png';
//     }, 7000);
//   },
//   false
// );

// test.addEventListener(
//   'load',
//   event => {
//     const myImage = document.getElementById('hover');

//     setTimeout(function() {
//       const selImage = randomPick(images);
//       myImage.src = selImage;
//     }, 7000);

//     setTimeout(function() {
//       myImage.src = 'img/ava1.png';
//     }, 9000);
//   },
//   false
// );
