import Experience from "./Experience.js"
import three from "three"
import gsap from "gsap"
import TweenMax from "gsap"

export default class Animation {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.debug = this.experience.debug
        this.camera = this.experience.camera

        this.canvas = this.experience.canvas
    }

    setTransitionInit() {

    }
    update() {}
}