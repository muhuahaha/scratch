gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

ScrollTrigger.defaults({
  toggleActions: 'restart pause resume pause',
});

gsap.set('#demo', { scale: 1 });

const test3 = document.getElementById('hover');

gsap
  .timeline()
  .from('#demo', { duration: 1, opacity: 0 })
  .from('#time1', { opacity: 0, x: -450, rotation: 5, duration: 0.2, ease: 'back' })
  .from('#title', { opacity: 0, ease: 'back', rotation: 5 })
  .from('#time2', { opacity: 0, x: -850, rotation: 5, duration: 0.2, ease: 'back' })
  .from('#ava', { opacity: 0, x: 450, rotation: 45, ease: 'bounce' })
  .from('#time3', { opacity: 0, x: -450, rotation: 5, duration: 0.2, ease: 'back' })
  .from('#time4', { opacity: 0, y: -450, rotation: 5, duration: 0.2, ease: 'bounce' })
  .from('#time5', { opacity: 0, x: -450, rotation: 5, duration: 0.2, ease: 'back' })
  // .from('.freds', { opacity: 0, x: -450, rotation: 5, duration: 0.8, ease: 'back' })
  // .from('.freds img', {
  //   opacity: 0,
  //   y: 160,
  //   rotation: 45,
  //   stagger: { each: 0.2, ease: 'bounce' },
  //   duration: 0.2,
  //   ease: 'bounce',
  // })

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
    // scrub: 3,
    pin: true,
    start: 'top +=50',
    end: '+=100%',
    toggleActions: 'play none none reverse',
    markers: true,
  },
});

tl.from('.purple h2', { yPercent: 200, autoAlpha: 0 })
  .from('.line-3', { scaleX: 0, transformOrigin: 'left center', ease: 'none', duration: 0.2 }, 0)
  .from('.portfolio-filter button', { yPercent: 200, autoAlpha: 0, duration: 0.5, stagger: 0.1 })
  .from('.portfolio-item-inner', { yPercent: 200, autoAlpha: 0, duration: 0.5, stagger: 0.1 })
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
  gsap.from('#project01 div', {
    opacity: 0,
    duration: 0.5,
    yPercent: 100,
    ease: 'back',
    scrollTrigger: {
      trigger: '#project01',
      // scrub: true,
      markers: true,
    },
    stagger: { each: 0.2, ease: 'bounce' },
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

gsap.from('#testtest', {
  scrollTrigger: {
    trigger: '.demo',
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
    // scrub: 3,
    // pin: true,
    start: '-=450',
    end: '-=500',
    toggleActions: 'restart none none reverse',
    // markers: true,
  },
});

tl2
  .to('#test6', { y: 20, color: 'white', text: 'YTK', scale: 0.7, duration: 1, delay: 0.5 })
  .to('.red', { backgroundColor: '#040c26', duration: 0.5 })
  .to('#test6', { y: 20, color: 'white', text: 'WTF', scale: 2, duration: 0.5 })
  .to('#test6', { y: 20, color: 'white', text: 'OMG', scale: 1, duration: 0.5 })
  .to('#test6', { y: 20, color: 'white', text: 'YTK', scale: 1, duration: 0.5 })
  .to('#test6', { y: 20, color: 'white', text: 'READY TO GO?', scale: 1.2, duration: 1 })
  .to('#test6', { y: 20, color: 'white', text: 'YES OK', scale: 1.2, duration: 1 })
  .to('#test6', { y: 20, color: 'white', text: 'LET#S GO!', scale: 1.2, duration: 1 });

const tl123 = gsap.timeline({
  scrollTrigger: {
    trigger: '.dark',
    start: 'center bottom',
    toggleActions: 'restart none none reverse',
  },
});

tl123
  .from('.iTest img', { xPercent: -100, opacity: 0, duration: 1.5 })
  .from('.content1', { y: 800, opacity: 0, duration: 1 }, '-=1');

const frame_count = 9;
const offset_value = 100;

gsap.to('.viewer', {
  backgroundPosition: `${-offset_value * frame_count * 2}px 50%`,
  ease: `steps(${frame_count})`, // use a stepped ease for the sprite sheet
  scrollTrigger: {
    trigger: '.scene',
    start: 'top top',
    end: `+=${frame_count * offset_value}`,
    pin: true,
    scrub: true,
  },
});

const tl_height = document.querySelector('#first').offsetHeight;
console.log(tl_height);

// tl fade in
const tl_fadein = gsap.timeline();
tl_fadein.fromTo('.box55', { autoAlpha: 0, y: '-=500' }, { autoAlpha: 1, y: 0, duration: 1 });

// tl move to right
const tl_move = gsap.timeline();
tl_move.fromTo('.box55', { xPercent: -10 }, { x: '+=500%', duration: 1, scale: 2 });

// tl rotate
const tl_rotate = gsap.timeline();
tl_rotate.fromTo('.box55', { rotation: 0 }, { rotation: 360, duration: 1 });

ScrollTrigger.create({
  // pin element
  trigger: '#first',
  pin: '.pin-element',
  end: 'bottom bottom',
});

ScrollTrigger.create({
  // fadein animation
  trigger: '#first',
  start: 'top top',
  end: '33% center',
  animation: tl_fadein,
  toggleActions: 'play none none reverse',
});

ScrollTrigger.create({
  // move to right animation
  trigger: '#first',
  start: '33% center',
  end: '66% bottom',
  animation: tl_move,
  toggleActions: 'play none none reverse',
});

ScrollTrigger.create({
  // rotate animation
  trigger: '#first',
  start: '66% center',
  animation: tl_rotate,
  toggleActions: 'play none none reverse',
});

const targets = document.querySelectorAll('#container div');

targets.forEach(target => {
  const tl1234 = gsap
    .timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: target,
        scrub: true,
        start: 'center 80%',
        end: 'center 20%',
      },
    })
    .fromTo(target, { y: 50 }, { y: -50 })
    .from(target, { opacity: 0, duration: 0.2 }, 0)
    .to(target, { opacity: 0, duration: 0.2 }, 0.8);
});
