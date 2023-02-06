import * as THREE from "three"
import Experience from "./Experience.js"

export default class Renderer {
    constructor() {
        this.experience = new Experience()
        this.canvas = this.experience.canvas
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.camera = this.experience.camera
        this.debug = this.experience.debug
        this.setInstance()
        console.log(this.instance);

        if (this.debug.active) {
            this.debugFolder = this.debug.ui.addFolder("Scene")
            this.debugFolder.addColor(this.instance, 'clearColor').name("Background Color")



        }
    }

    setInstance() {
        window.onbeforeunload = function() {
            window.scrollTo(0, 0)
        }
        this.instance = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true
        })

        this.instance.physicallyCorrectLights = true
        this.instance.outputEncoding = THREE.sRGBEncoding

        this.instance.toneMappingExposure = 100
        this.instance.shadowMap.enabled = true

        this.instance.setClearColor(0x000000)
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