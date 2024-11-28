const image1 = document.querySelector('.img1')

document.querySelector('.btn')
.addEventListener("click", () => {
    gsap.from(image1, {autoAlpha: 0, duration : 2}) 
})

