function randomPick(arr) {
  const selected = arr[Math.floor(Math.random() * arr.length)];

  return selected;
}

const images = [
  'img/svg/ava02.svg',
  'img/svg/ava03.svg',
  'img/svg/ava04.svg',
  'img/svg/ava05.svg',
  'img/svg/ava06.svg',
  'img/svg/ava07.svg',
  'img/svg/ava08.svg',
  'img/svg/ava09.svg',
  'img/svg/ava11.svg',
  'img/svg/ava12.svg',
  'img/svg/ava13.svg',
];

const txt = ['Hallo', 'Hi', '안녕하세요', 'Hello', 'Hola'];

// function randomHover() {}

const test1 = document.getElementById('hover');

test1.addEventListener('mouseenter', event => {
  const myImage = document.getElementById('hover');
  const selImage = randomPick(images);

  const selText = randomPick(txt);

  document.getElementById('yoo').innerText = `${selText} , hire me!`;
  myImage.src = selImage;
});

const test2 = document.getElementById('hover');

test2.addEventListener('mouseleave', event => {
  const myImage = document.getElementById('hover');
  myImage.src = 'img/svg/ava01.svg';
  const selText = randomPick(txt);
  document.getElementById('yoo').innerText = `${selText} , how do u do?`;
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
