const image1 = document.querySelector('.img1');

const tween = gsap.to('.img2', { y: 200 });

// tween.kill();
// tween.delay(1);
// tween.duration(5);

setTimeout(() => {
  // tween.resume();
  tween.seek(2.5);
  tween.play();
}, 2000);
