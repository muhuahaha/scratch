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
