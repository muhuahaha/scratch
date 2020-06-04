function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const elements = document.querySelectorAll('.mein-element');

function callbackFunc() {
  for (let i = 0; i < elements.length; i++) {
    if (isElementInViewport(elements[i])) {
      elements[i].classList.add('visible');
    } else {
      /* Else-Bedinung entfernen, um .visible nicht wieder zu löschen, wenn das Element den Viewport verlässt. */
      elements[i].classList.remove('visible');
    }
  }
}

window.addEventListener('load', callbackFunc);
window.addEventListener('scroll', callbackFunc);
