const navbar = document.querySelector(".navbar");

let timeLine = gsap.timeline(); 

timeLine.from(navbar.children, {
    opacity: 0,
    y: 50,
    duration: 2,
    stagger:{
        amount:0.4,
    }
});

timeLine.fromTo(".title img", {
    opacity:0,
    scale:0,
    rotate:200,
},
{
    duration:1,
    delay:1,
    opacity:1,
    scale:1,
    rotate:1,
}
)

timeLine.from(".swiper", {
    duration:2,
    opacity:0,
    y:100,
    
})
