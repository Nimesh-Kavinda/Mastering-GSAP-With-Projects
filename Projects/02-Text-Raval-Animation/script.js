let text = "Hey..! I'm Nimesh. This made for Practice my GSAP Skills";
let charecters = text.split("");


charecters.forEach((char => {
    console.log(char);
    let span = document.createElement("span");
    span.textContent = char == " " ? "\u00A0" : char;
    span.className ="char";
    document.querySelector(".container").appendChild(span);
}));

let tl = gsap.timeline();

tl.from(".char" , {
    opacity:0,
    y:50,
    stagger:0.05,
    duration: 0.5,
    ease:"back.out(1.5)",
}).to(".char",  {
    y:-20,
    stagger:{
        each:0.05,
        repeat:1,
        yoyo:true,
    },
    ease:"power1.inOut",
    duration:0.3,
})