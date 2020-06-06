// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// // gsap.config()({ autoKillThreshold: 1 });

// // --- RED PANEL ---
// gsap.from('.line-1', {
//   scrollTrigger: {
//     trigger: '.line-1',
//     scrub: true,
//     start: 'top bottom',
//     end: 'top top',
//   },
//   scaleX: 0,
//   transformOrigin: 'left center',
//   ease: 'none',
// });

// // --- ORANGE PANEL ---
// gsap.from('.line-2', {
//   scrollTrigger: {
//     trigger: '.orange',
//     scrub: true,
//     pin: true,
//     start: 'top top',
//     end: '+=100%',
//   },
//   scaleX: 0,
//   transformOrigin: 'left center',
//   ease: 'none',
// });

// // --- PURPLE/GREEN PANEL ---
// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.purple',
//     scrub: true,
//     pin: true,
//     start: 'top top',
//     end: '+=100%',
//   },
// });

// tl.from('.purple p', { scale: 0.3, rotation: 45, autoAlpha: 0, ease: 'power2' })
//   .from('.line-3', { scaleX: 0, backgroundColor: '#28a92b', transformOrigin: 'left center', ease: 'none' }, 0)
//   .to('.purple', { backgroundColor: '#28a92b' }, 0);

// gsap.utils.toArray('.nav-link a').forEach(function(a) {
//   a.addEventListener('click', function(e) {
//     e.preventDefault();
//     gsap.to(window, { duration: 1, autoKill: false, scrollTo: e.target.getAttribute('href') });
//   });
// });

// // possible solution for old iOS bugs that don't display things inside an iframe correctly. Create a --full-height CSS variable and use it instead of height: 100%
// // function readHeight() {
// // 		if (ScrollTrigger.isScrolling()) {
// // 			console.log("wait until end...");
// // 			ScrollTrigger.addEventListener("scrollEnd", readHeight);
// // 		} else {
// // 			ScrollTrigger.removeEventListener("scrollEnd", readHeight);
// // 			window.removeEventListener("resize", readHeight);
// // 			let scrollFunc = ScrollTrigger.getScrollFunc(window),
// // 				scrollProgress = scrollFunc() / ScrollTrigger.maxScroll(window),
// // 				docStyle = document.documentElement.style,
// // 				bodyStyle = document.body.style;
// // 			bodyStyle.overflow = "auto";
// // 			docStyle.setProperty("--full-height", "100%");
// // 			docStyle.setProperty("--full-height", window.innerHeight + "px");
// // 			bodyStyle.overflow = "unset";
// // 			setTimeout(function() {
// // 				window.addEventListener("resize", readHeight);
// // 			}, 500);
// // 			ScrollTrigger.refresh(true);
// // 			scrollFunc(scrollProgress * ScrollTrigger.maxScroll(window));
// // 		}
// // 	}

const anim = gsap.to('.orange', {
  x: 400,
  rotation: 360,
  y: 200,
});

ScrollTrigger.create({
  trigger: '.orange',
  animation: anim,
  // Uncomment these to see how they affect the ScrollTrigger
  markers: true,
  start: 'top center',
  end: 'top 100px',
  toggleClass: 'active',
  pin: true,
  scrub: 1,
  onUpdate: self => {
    console.log('progress:', self.progress.toFixed(3), 'direction:', self.direction, 'velocity', self.getVelocity());
  },
});
