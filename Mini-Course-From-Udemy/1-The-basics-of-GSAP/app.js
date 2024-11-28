const image1 = document.querySelector('.img1');

gsap.from('img', {
  autoAlpha: 0,
  y: -100,
  ease: 'power4',
  duration: 2,
  stagger: {
    each: 0.5,
    from: 'end',
  },
});
