let text = "Hey..! I'm Nimesh. This made for Practice my GSAP Skills";
let charecters = text.split("");


charecters.forEach((char => {
    console.log(char);
    let span = document.createElement("span");
    span.textContent = char == " " ? "\u00A0" : char;
    document.querySelector(".container").appendChild(span);
}));