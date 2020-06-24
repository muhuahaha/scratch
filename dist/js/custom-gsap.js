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
    end: '+=60%',
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

// //wtf

gsap.registerPlugin(TextPlugin);

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: '#test6',
    // scrub: 5,
    // pin: true,
    start: '-=450',
    end: '-=500',
    toggleActions: 'restart none none reverse',
    // markers: true,
  },
});

tl2
  .to('#test6', { y: 20, color: 'white', text: 'YTK', scale: 0.7, duration: 1, delay: 0.5 })
  .to('.red', { backgroundColor: '#040c26', duration: 3, delay: 2 })
  .to('#test6', { y: 20, color: 'white', text: 'WTF', scale: 2, duration: 0.5 })
  .to('#test6', { y: 20, color: 'white', text: 'OMG', scale: 1, duration: 0.5 })
  .to('#test6', { y: 20, color: 'white', text: 'YTK', scale: 1, duration: 0.5 })
  .to('#test6', { y: 20, color: 'white', text: 'READY TO GO?', scale: 1.2, duration: 1 })
  .to('#test6', { y: 20, color: 'white', text: 'YES OK', scale: 1.2, duration: 1 })
  .to('#test6', { y: 20, color: 'white', text: 'LET#S GO!', scale: 1.2, duration: 1 });

const blindtext = gsap.timeline({
  scrollTrigger: {
    trigger: '#test66',
    scrub: 5,
    // pin: true,
    start: 'top +=350',
    end: '-=500',
    toggleActions: 'restart none none reverse',
    // markers: true,
  },
});

blindtext
  .to('#test66', {
    y: 20,
    color: 'black',
    text:
      "Hi, i'm Young. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'",
    scale: 0.7,
    duration: 1,
    delay: 3,
  })
  .to('.red', { backgroundColor: '#040c26', duration: 2 })
  .to('#test66', {
    y: 20,
    color: 'black',
    text:
      "Hi, i'm Young. Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, ",
    scale: 2,
    duration: 1,
  })
  .to('#test66', { y: 20, color: 'white', text: 'PHOTOSHOP', scale: 2, duration: 3 })
  .to('#test66', {
    y: 20,
    color: 'white',
    text:
      'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, ',
    scale: 1,
    duration: 0.5,
  })
  .to('#test66', { y: 20, color: 'white', text: 'READY TO GO?', scale: 1.2, duration: 1 })
  .to('#test66', { y: 20, color: 'white', text: 'YES OK', scale: 1.2, duration: 1 })
  .to('#test66', {
    y: 20,
    color: 'white',
    text:
      "Hallo, I'm Young. Dies ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen. Manchmal benutzt man Worte wie Hamburgefonts, Rafgenduks oder Handgloves, um Schriften zu testen.",
    scale: 1.2,
    duration: 1,
  });

const tl123 = gsap.timeline({
  scrollTrigger: {
    trigger: '.dark',
    start: 'center bottom',
    toggleActions: 'restart none none reverse',
  },
});

tl123
  .from('.iTest img', { yPercent: 100, opacity: 0, duration: 1.5 })
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
tl_fadein.fromTo('.box55', { autoAlpha: 1, y: '-=500' }, { autoAlpha: 1, y: 0, duration: 1 });

// tl move to right
const tl_move = gsap.timeline();
tl_move.fromTo('.box55', { xPercent: -10 }, { x: '+=500%', duration: 1, scale: 2, text: 'YOUNG-TAE KIM' });

// tl rotate
const tl_rotate = gsap.timeline();
tl_rotate.fromTo('.box55', { rotation: 0 }, { rotation: 0, duration: 1, text: 'kimyou2019@gmail.com' });

// tl test
const tl_test = gsap.timeline();
tl_test
  .fromTo(
    '.box55',
    { rotation: 0 },
    {
      xPercent: 50,
      yPercent: 50,
      scale: 1,
      rotation: 360,
      duration: 1,
      backgroundColor: 'yellow',
      autoAlpha: 1,
    }
  )
  .to('.box55', { backgroundColor: 'black' });

const tl_moveLeft = gsap.timeline();
tl_moveLeft.fromTo('.box55', { xPercent: -10 }, { x: '-=500%', y: '+=200', duration: 1, scale: 2, text: 'DESIGNER' });

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

ScrollTrigger.create({
  // test animation
  trigger: '#first',
  start: 'top top',
  end: '33% center',
  animation: tl_test,
  toggleActions: 'play none none reverse',
});

ScrollTrigger.create({
  // test2 animation
  trigger: '#first',
  start: '77% center',
  animation: tl_moveLeft,
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

gsap.set('#demo', { scale: 1 });

const test3 = document.getElementById('hover');

gsap
  .timeline()
  .from('#demo', { duration: 0.3, opacity: 0 })

  .from('.logo', { opacity: 0, x: -450, y: -450, rotation: 5, duration: 0.5, ease: 'power1' })
  .from('#myDIV li', {
    opacity: 0,
    y: -160,
    rotation: 45,
    stagger: { each: 0.2, ease: 'power2.inOut' },
    duration: 0.1,
    ease: 'bounce',
  })

  .from('#gallery', { opacity: 0, duration: 0.3 })
  .from('.demo', { duration: 0.3, opacity: 0, y: 150 })
  .from('.time1', {
    opacity: 0,
    y: 160,
    rotation: 0,
    stagger: { each: 0.3, ease: 'power2.inOut' },
    duration: 1,
    from: 'center',
    grid: 'auto',
    ease: 'power2.inOut',
  })

  .set(test3, { attr: { src: 'img/svg/ava04.svg' } })
  .to(test3, { rotation: 0, duration: 1, ease: 'back' })
  .set(test3, { attr: { src: 'img/svg/ava12.svg', duration: 1 } })
  .to(test3, { rotation: 0, duration: 1, ease: 'back' })
  .set(test3, { attr: { src: 'img/svg/ava01.svg', duration: 1, ease: 'back' } });
