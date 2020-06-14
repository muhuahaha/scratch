if (document.getElementById('marquee')) {
  const laufschrift = document.getElementById('marquee');
  const len = laufschrift.innerHTML.length;
  console.log(laufschrift.firstChild);
  laufschrift.firstChild.style.animationDuration = `${len / 6}s`;
}
