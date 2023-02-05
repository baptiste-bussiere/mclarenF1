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
        this.mclarenF1 = this.resources.items.mclarenF1
    }

    update() {
        // this.urbainRessource.scene.getObjectByName( this.instance.position
        console.log(this.controls.target)
        console.log(this.camera.instance.position)

        // ).rotatation.x += 1
        this.mixer.update(this.time.delta * 0.001)
        this.mixerVeh.update(this.time.delta * 0.001)
    }
}