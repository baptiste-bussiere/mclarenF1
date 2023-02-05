import * as THREE from "three"
import Experience from "./Experience.js"

export default class Renderer {
    constructor() {
        this.experience = new Experience()
        this.canvas = this.experience.canvas
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.camera = this.experience.camera

        this.setInstance()
    }

    setInstance() {
        window.onbeforeunload = function() {
            window.scrollTo(0, 0)
        }
        this.instance = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true
        })

        // this.instance.physicallyCorrectLights = true
        this.instance.outputEncoding = THREE.sRGBEncoding

        // this.instance.toneMappingExposure = 100
        // this.instance.shadowMap.enabled = true

        this.instance.setClearColor(0xb3d7f1)
        this.instance.setSize(this.sizes.width, this.sizes.height)
        this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio, 2))
    }

    resize() {
        this.instance.setSize(this.sizes.width, this.sizes.height)
        this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio, 2))
    }

    update() {
        this.instance.render(this.scene, this.camera.instance)
    }
}