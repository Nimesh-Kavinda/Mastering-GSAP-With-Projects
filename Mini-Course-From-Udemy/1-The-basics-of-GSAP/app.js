const image1 = document.querySelector('.img1');

gsap.to(image1, {
  x: 100,
  duration: 1,
  repeat: 1,
  onComplete: () => console.log('complete'),
  onStart: () => console.log('Start'),
  onUpdaate: () => console.log('Update'),
  onRepeat: () => console.log('Repaet'),
});
