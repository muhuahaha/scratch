// This changes everything

// retrieve the element
const element = document.getElementById('logo');

// reset the transition by...
element.addEventListener(
  'mouseover',
  function(e) {
    e.preventDefault;

    // -> removing the class
    element.classList.remove('run-animation');

    // -> triggering reflow /* The actual magic */
    // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
    // This was, from the original tutorial, will no work in strict mode. Thanks Felis Phasma! The next uncommented line is the fix.
    // element.offsetWidth = element.offsetWidth;

    void element.offsetWidth;

    // -> and re-adding the class
    element.classList.add('run-animation');
  },
  false
);
