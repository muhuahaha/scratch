gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

gsap.set('#demo', { scale: 1 });

const test3 = document.getElementById('hover');

gsap
  .timeline()
  .from('#demo', { duration: 2, opacity: 0 })
  .from('#time1', { opacity: 0, x: -450, rotation: 5, duration: 0.1, ease: 'back' })
  .from('#title', { opacity: 0, ease: 'back', rotation: 180 })
  .from('#time2', { opacity: 0, x: -450, rotation: 5, duration: 0.1, ease: 'back' })
  .from('#ava', { opacity: 0, x: -450, rotation: 180, duration: 0.1, ease: 'back' })
  .from('#time3', { opacity: 0, x: -450, rotation: 5, duration: 0.1, ease: 'back' })
  .from('#time4', { opacity: 0, x: -450, rotation: 5, stagger: 0.1, duration: 0.2, ease: 'back' })
  .from('#time5', { opacity: 0, x: -450, rotation: 5, duration: 0.1, ease: 'back' })
  .from('.freds', { opacity: 0, x: -450, rotation: 5, duration: 0.1, ease: 'back' })
  .from('.freds img', {
    opacity: 0,
    y: 160,
    rotation: 45,
    stagger: { each: 0.2, from: 'random', ease: 'power2.inOut' },
    duration: 0.2,
    ease: 'bounce',
  })

  .set(test3, { attr: { src: 'img/svg/ava01.svg' } })
  // .to(test3, { rotation: 5, duration: 1, ease: 'back' })
  .set(test3, { attr: { src: 'img/svg/ava11.svg', duration: 10, delay: 10 } })

  .from('#time6', { opacity: 0, x: -450, rotation: 5, duration: 0.1, ease: 'back' })
  .from('#time6 span', { opacity: 0, x: -450, stagger: 0.5, rotation: 45, duration: 0.2, ease: 'back' })

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
  },
});

tl.from('.purple p', { scale: 0.3, rotation: 45, autoAlpha: 0, ease: 'power2' })
  .from('.line-3', { scaleX: 0, transformOrigin: 'left center', ease: 'none' }, 0)
  .to('.purple', { backgroundColor: '#28a92b' }, 0);

gsap.utils.toArray('.nav-link a').forEach(function(a) {
  a.addEventListener('click', function(e) {
    e.preventDefault();
    gsap.to(window, { duration: 1, scrollTo: e.target.getAttribute('href') });
  });
});

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.gray',
    scrub: 0.5,
    pin: true,
    start: 'top top',
    end: 'top top',
    // markers: true,
  },
});

tl2.from('.portfolio-item', {
  opacity: 0,
  x: -1000,
  scale: 0.3,
  rotation: 45,
  autoAlpha: 0,
  ease: 'slow',
  stagger: 0.5,
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
