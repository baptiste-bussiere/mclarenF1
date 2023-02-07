import "./scss/style.scss"
import gsap from "gsap"
import Experience from "./class/Experience.js"

const experience = new Experience(document.querySelector("canvas.webgl"))

var orig = document.querySelector('.c'),
    length, timer;

var obj = {
    length: 0,
    pathLength: orig.getTotalLength()
};

orig.style.stroke = '#fff';

var t = gsap.
timeline({ repeat: -1, yoyo: true, repeatDelay: 0.2, })
    .to(obj, { duration: 1, length: obj.pathLength, onUpdate: drawLine, ease: "none" })

function drawLine() {
    orig.style.strokeDasharray = [obj.length, obj.pathLength].join(' ');

}