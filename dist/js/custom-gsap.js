gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

ScrollTrigger.defaults({
  toggleActions: 'restart pause resume pause',
});

gsap.set('#demo', { scale: 1 });

const test3 = document.getElementById('hover');

gsap
  .timeline()
  .from('#demo', { duration: 1, opacity: 0 })
  .from('#time1', { opacity: 0, x: -450, rotation: 5, duration: 0.8, ease: 'back' })
  .from('#title', { opacity: 0, ease: 'back', rotation: 5 })
  .from('#time2', { opacity: 0, x: -850, rotation: 5, duration: 0.1, ease: 'back' })
  .from('#ava', { opacity: 0, x: 450, rotation: 45, ease: 'bounce' })
  .from('#time3', { opacity: 0, x: -450, rotation: 5, duration: 0.8, ease: 'back' })
  .from('#time4', { opacity: 0, y: -450, rotation: 5, duration: 1.5, ease: 'bounce' })
  .from('#time5', { opacity: 0, x: -450, rotation: 5, duration: 0.8, ease: 'back' })

  .from('.freds', { opacity: 0, x: -450, rotation: 5, duration: 0.8, ease: 'back' })
  .from('.freds img', {
    opacity: 0,
    y: 160,
    rotation: 45,
    stagger: { each: 0.2, ease: 'bounce' },
    duration: 0.2,
    ease: 'bounce',
  })

  .set(test3, { attr: { src: 'img/svg/ava01.svg' } })
  // .to(test3, { rotation: 5, duration: 1, ease: 'back' })
  .set(test3, { attr: { src: 'img/svg/ava11.svg', duration: 10, delay: 10 } })

  .from('#time6', { opacity: 0, x: -450, rotation: 5, duration: 0.8, ease: 'back' })
  .from('#time6 span', {
    opacity: 0,
    y: 160,
    rotation: 45,
    stagger: { each: 0.2, from: 'random', ease: 'power2.inOut' },
    duration: 0.2,
    ease: 'bounce',
  })

  .set(test3, { attr: { src: 'img/svg/ava01.svg', duration: 1, ease: 'back' } });

// --- RED PANEL ---
gsap.from('.line-1', {
  scrollTrigger: {
    trigger: '.line-1',
    scrub: true,
    start: 'top bottom',
    end: 'top top',
  },
  scaleX: 0,
  transformOrigin: 'left center',
  ease: 'none',
});

// --- ORANGE PANEL ---
gsap.from('.line-2', {
  scrollTrigger: {
    trigger: '.orange',
    scrub: true,
    pin: true,
    start: 'top top',
    end: '+=100%',
  },
  scaleX: 0,
  transformOrigin: 'left center',
  ease: 'none',
});

// --- PURPLE/GREEN PANEL ---
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.purple',
    scrub: true,
    pin: true,
    start: 'top top',
    end: '+=100%',
    toggleActions: 'play none none reverse',
    // markers: true,
  },
});

tl.from('.purple h3', { scale: 0.3, rotation: 45, autoAlpha: 0, ease: 'power2' })
  .from('.line-3', { scaleX: 0, transformOrigin: 'left center', ease: 'none' }, 0)
  .to('.purple', { backgroundColor: '#040c26', opacity: 1 }, 0)
  // .from('.portfolio .portfolio-item-inner', {
  //   y: 260,
  //   opacity: 0,
  //   stagger: { each: 0.1, ease: 'power2.inOut' },
  //   duration: 0.3,
  //   ease: 'back',
  // })
  .from('.purple .portfolio-img img', {
    opacity: 0,
    y: 260,
    rotation: 5,
    stagger: { each: 0.2, from: 'start', ease: 'power2.inOut' },
    duration: 0.3,
    ease: 'back',
  });

gsap.utils.toArray('.nav-link a').forEach(function(a) {
  a.addEventListener('click', function(e) {
    e.preventDefault();
    gsap.to(window, { duration: 1, scrollTo: e.target.getAttribute('href') });
  });
});

function init() {
  gsap.from('#project01', {
    opacity: 0,
    duration: 10,
    x: -550,
    ease: 'back',
    scrollTrigger: {
      trigger: '#project01',
      scrub: true,
      start: 'top -=200',
      end: 'top +=600',
      // markers: true,
    },
  });
}

window.addEventListener('load', function() {
  init();
});

const select = e => document.querySelector(e);
const selectAll = e => document.querySelectorAll(e);
const blue = select('.blue');
const pink = select('.pink');
const btn = select('#btn');

const blueAni = gsap
  .timeline()
  .to(blue, { scale: 2 })
  .to(blue, { rotation: 360 })
  .to(blue, { scale: 1 });

const pinkAni = gsap
  .timeline()
  .to(pink, { y: -50 })
  .to(pink, { rotation: 360 })
  .to(pink, { y: 0 });

// this sequence goes
// blue - blue - pink - blue

const animation = gsap.timeline();
animation.add(blueAni.tweenTo(blueAni.duration(), { repeat: 3 })); // duration changes speed
animation.add(pinkAni);
animation.add(blueAni.tweenFromTo(0, blueAni.duration()));

btn.addEventListener('click', () => {
  animation.restart();
});

gsap.from('.testtest', {
  scrollTrigger: {
    trigger: '.testtest',
    scrub: true,
    start: 'top bottom',
    end: 'top +=200',
  },
  scale: 1.3,
  rotation: 45,
  autoAlpha: 0,
  ease: 'power2',
});

// const w = document.querySelector('.wrapper');
// console.log(w);
// const index = 1;
// const [x, xEnd] = index % 2 ? ['100%', (w.scrollWidth - w.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
// console.log(x);
// gsap.fromTo(
//   w,
//   { xPercent: 100, opacity: 0 },
//   {
//     x: xEnd,
//     scrollTrigger: {
//       trigger: '.wrapper',
//       scrub: 0.3,
//     },
//     ease: 'none',
//     opacity: 1,
//     scale: 0.8,
//   }
// );

gsap.registerPlugin(TextPlugin);

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: '#test6',
    // scrub: 5,
    // pin: true,
    start: '-=500',
    end: '-=500',
    toggleActions: 'play none none reverse',
    // markers: true,
  },
});

tl2
  .to('#test6', { y: 20, color: 'white', text: 'YTK', scale: 0.7, duration: 1 })
  .to('.red', { backgroundColor: '#040c26', duration: 0.5 })
  .to('#test6', { y: 20, color: 'white', text: 'WTF', scale: 2, duration: 0.5 })
  .to('#test6', { y: 20, color: 'white', text: 'OMG', scale: 1, duration: 0.5 })
  .to('#test6', { y: 20, color: 'white', text: 'YTK', scale: 1, duration: 0.5 })
  .to('#test6', { y: 20, color: 'white', text: 'READY TO GO', scale: 1.5, duration: 1 })
  .to('#test6', { y: 20, color: 'white', text: 'YES', scale: 1.5, duration: 0.5 })
  .to('#test6', { y: 20, color: 'white', text: 'LET#S GO', scale: 1.2, duration: 1 });
