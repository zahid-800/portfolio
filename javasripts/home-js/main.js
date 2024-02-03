
// jquery slide
const para1 = document.getElementById("para1");
const para2 = document.getElementById("para2");
const para3 = document.getElementById("para3");
const para4 = document.getElementById("para4");
const para5 = document.getElementById("para5");

animate(para1);
animate(para2);
animate(para3);
animate(para4);
animate(para5);

function animate(element) {
let elementWidth = element.offsetWidth;
let parentWidth = element.parentElement.offsetWidth;
let flag = 0;

setInterval(() => {
    element.style.marginLeft = --flag + "px";

    if (elementWidth == -flag) {
        flag = parentWidth;
    }
},20);
}
// end
