const header = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY;
  const currentScrollPos = window.scrollY;
  if (scrollPos > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  if (scrollPos > currentScrollPos) {
    document.getElementById('testtest').style.top = '0';
  } else {
    document.getElementById('testtest').style.top = '-89px';
  }
  scrollPos = currentScrollPos;
});

// /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
// const prevScrollpos = window.scrollY;
// window.onscroll = function() {
//   const currentScrollPos = window.scrollY;
//   if (scrollPos > currentScrollPos) {
//     document.getElementById('testtest').style.top = '0';
//   } else {
//     document.getElementById('testtest').style.top = '-89px';
//   }
//   scrollPos = currentScrollPos;
// };

const headerTest = document.getElementById('myDIV');
console.log(headerTest);
const btns = headerTest.getElementsByClassName('nav-link');
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function() {
    const current = document.getElementsByClassName('active');
    if (current.length > 0) {
      current[0].className = current[0].className.replace(' active', '');
    }
    this.className += ' active';
  });
}

// const check = document.getElementById('menu-btn').checked === true ? alert('ASDAS') : alert('ZZZZ');

// console.log(check);

function myFunction() {
  document.getElementById('menu-btn').checked = false;
}

document.getElementById('logo-btn').addEventListener('click', () => {
  console.log('click');
  document.getElementById('menu-btn').checked = false;
});
document.getElementById('myDIV').addEventListener('click', myFunction);
