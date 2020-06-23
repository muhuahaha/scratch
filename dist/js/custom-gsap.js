gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

ScrollTrigger.defaults({
  toggleActions: 'restart pause resume pause',
});

gsap.utils.toArray('.nav-link a').forEach(function(a) {
  a.addEventListener('click', function(e) {
    e.preventDefault();
    gsap.to(window, { duration: 1, scrollTo: e.target.getAttribute('href') });
  });
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
    // markers: true,
  },
});

tl.from('.purple h2', { yPercent: 200, autoAlpha: 0 })
  .from('.line-3', { scaleX: 0, transformOrigin: 'left center', ease: 'none', duration: 0.3 }, 0)
  .from('.portfolio-filter button', { yPercent: 200, autoAlpha: 0, duration: 0.3, stagger: 0.1 })
  .from('.portfolio-item-inner', { yPercent: 200, autoAlpha: 0, duration: 0.2, stagger: 0.1 })
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
