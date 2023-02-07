import * as THREE from "three"
import Experience from "./Experience.js"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
// import CameraControls from "camera-controls"

export default class Camera {
    constructor() {
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas
        this.camera = this.experience.camera
        this.debug = this.experience.debug

        this.setInstance()
            // this.setControls()
        if (this.debug.active) {
            this.debugFolder = this.debug.ui.addFolder("Camera")
            this.debugFolder.add(this.instance.position, 'x', -10, 10).name("Position X")
            this.debugFolder.add(this.instance.position, 'y', -10, 10).name("Position Y")
            this.debugFolder.add(this.instance.position, 'z', -10, 10).name("Position Z")
            this.debugFolder.add(this.instance.rotation, 'x', -10, 10).name("Rotation X")
            this.debugFolder.add(this.instance.rotation, 'y', -10, 10).name("Rotation Y")
            this.debugFolder.add(this.instance.rotation, 'z', -10, 10).name("Rotation Z")


        }
    }

    setInstance() {
        this.instance = new THREE.PerspectiveCamera(
            50,
            this.sizes.width / this.sizes.height,
            0.1,
            300
        )
        this.instance.position.set(0, 0, 0)
        this.instance.rotation.set(0, 0, 0)
        this.scene.add(this.instance)
        this.pivot = new THREE.Vector3()
        this.instance.getWorldDirection(this.pivot)
    }
    setControls() {
        this.controls = new OrbitControls(this.instance, this.canvas)
        this.controls.enableDamping = true
        this.controls.minDistance = 1
        this.controls.maxDistance = 20

    }


    resize() {
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }

    update() {

        // this.controls.update()
    }
}