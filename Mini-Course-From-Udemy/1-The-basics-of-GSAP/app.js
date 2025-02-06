const tl = gsap.timeline();

tl
.from('.img1', {autoAlpha: 0, duration: 1, y: -50})
.from('.img2', {autoAlpha: 0, duration: 1, y: -50}, '<') 
.from('.img3', {autoAlpha: 0, duration: 1, y: -50},'-=0.75')
.from('h1', {autoAlpha: 0, duration: 1, y: -50},'-=0.75')
.from('p', {autoAlpha: 0, duration: 1, y: -50},'-=0.75')
