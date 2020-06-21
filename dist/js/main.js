const header = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY;
  if (scrollPos > 150) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// let prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   const currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById('testtest').style.top = '0';
//   } else {
//     document.getElementById('testtest').style.top = '-89px';
//   }
//   prevScrollpos = currentScrollPos;
// };

const headerTest = document.getElementById('myDIV');
// console.log(headerTest);
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
  // console.log('click');
  document.getElementById('menu-btn').checked = false;
});
document.getElementById('myDIV').addEventListener('click', myFunction);

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clock').innerHTML = `${h}<br />${m}<br />${s}`;
  const t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {
    i = `0${i}`;
  } // add zero in front of numbers < 10
  return i;
}

document.getElementById('clock').addEventListener('load', startTime());

function date() {
  const event = new Date();

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const test23 = event.toLocaleDateString('ko-KR', options);
  // const test23 = event.toLocaleDateString('de-DE', options);

  document.getElementById('datum').innerHTML = test23;
}

document.getElementById('datum').addEventListener('load', date());
