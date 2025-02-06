const tl = gsap.timeline({
  default: {
    duration: 1,
    ease : 'power4.out'
  },
  // repeat : -1,
  // yoyo : true,
  paused : true,
  onComplete : () => console.log("Completed"),
  onStart: () => console.log("Start")
});

tl
.from('.img1', {autoAlpha: 0,  y: -50})
.from('.img2', {autoAlpha: 0,  y: -50}) 
.from('.img3', {autoAlpha: 0,  y: -50})
.from('h1', {autoAlpha: 0,  y: -50})
.add('endAim', '-=2')
.from('p', {autoAlpha: 0,  y: -50})

setTimeout(() => {
   tl.seek('endAim'),
   tl.play()
}, 2000)