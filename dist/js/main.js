const header = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY;
  if (scrollPos > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('testtest').style.top = '0';
  } else {
    document.getElementById('testtest').style.top = '-50px';
  }
  prevScrollpos = currentScrollPos;
};

// const headerTest = document.getElementById('myDIV');
// console.log(headerTest);
// const btns = headerTest.getElementsByClassName('nav-link');
// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener('click', function() {
//     const current = document.getElementsByClassName('active');
//     if (current.length > 0) {
//       current[0].className = current[0].className.replace(' active', '');
//     }
//     this.className += ' active';
//   });
// }

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
