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

timeLine.fromTo(".subtitle", {
    opacity:1
},{
    opacity:0,
    duration:1,
    ease:"power4.inOut",
    y:-50,
})


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

timeLine.from(".title p", {
    opacity:0,
    x:100,
    duration:1,
})

timeLine.from(".swiper", {
    duration:2,
    opacity:0,
    y:100,
    
})

timeLine.from('.statment' , {
    opacity:0,
    duration:1,
    delay:0.5,
    scale:0,
})
