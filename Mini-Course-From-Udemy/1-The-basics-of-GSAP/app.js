const image1 = document.querySelector('.img1');

gsap.from(image1, {
  autoAlpha: 0,
  y: -100,
  rotation: 90,
  ease: 'bounce',
  duration: 2,
  delay: 1,
  repeat: -1,
  repeatDelay: 0.2,
  yoyo: true,
});
