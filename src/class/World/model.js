import * as THREE from "three"
import Experience from "../Experience.js"
import gsap from "gsap"
import TweenMax from "gsap"
import { TextureFilter } from "three"
export default class Model {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.sizes = this.experience.sizes
        this.debug = this.experience.debug
        this.camera = this.experience.camera
        this.canvas = this.experience.canvas
        this.controls = this.experience.camera.controls
        this.model = this.resources.items.mclarenF1
        this.setModel()
    }

    update() {

    }
    setModel() {
        this.model = this.model.scene
        this.scene.add(this.model)
        this.model.position.set(0, 0, 0)
        this.model.rotation.set(0, 0, 0)
        console.log(this.model);

    }
    setAnimation() {
        gsap.timeline({
                scrollTrigger: {
                    trigger: ".grid-container",
                    start: "top top",
                    end: () => innerHeight * 4,
                    scrub: true,
                    pin: ".grid",
                    anticipatePin: 1
                }
            })
            .set(".gridBlock:not(.centerBlock)", { autoAlpha: 0 })
            .to(".gridBlock:not(.centerBlock)", { duration: 0.1, autoAlpha: 1 }, 0.001)
            .from(".gridLayer", {
                scale: 3.3333,
                ease: "none",
            });

    }
}