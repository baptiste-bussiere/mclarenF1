import "./scss/style.scss"
import gsap from "gsap"
import Experience from "./class/Experience.js"

const experience = new Experience(document.querySelector("canvas.webgl"))

function closePopup() {
    gsap.to(".popup", {
        opacity: 0,
        display: "none",
        zIndex: -1
    })
}