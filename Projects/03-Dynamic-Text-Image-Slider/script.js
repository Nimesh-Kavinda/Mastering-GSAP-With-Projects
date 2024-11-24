let timeline = gsap.timeline({ repeat: -1});

timeline.fromTo(".text-content1", {
    xPercent:-100,
},
{
    
    xPercent:0,
}
);


timeline.fromTo(".img-1" , {
    xPercent:100,
},
{
    xPercent:0,
},
"<"
);


timeline.add(() => {}, "+=3");

timeline.to(".text-content1", {
    xPercent: -100,
})

timeline.to(".img-1", {
    xPercent: 100,
},
"<"
);




timeline.fromTo(".text-content2", {
    xPercent:-100,
},
{
    
    xPercent:0,
}
);


timeline.fromTo(".img-2" , {
    xPercent:100,
},
{
    xPercent:0,
},
"<"
);


timeline.add(() => {}, "+=3");

timeline.to(".text-content2", {
    xPercent: -100,
})

timeline.to(".img-2", {
    xPercent: 100,
},
"<"
);


