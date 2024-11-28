const image1 = document.querySelector('.img1');

gsap.to('.btn', {
  duration: 0.4,
  stagger: 0.2,
  x: 'random(-100,100)',
});
