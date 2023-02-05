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
            this.debugFolder.add(this.instance.position, 'x', 0, 1, ).name("name");
            this.debugFolder.add(this.instance.position, 'y', 0, 1).name("name")
            this.debugFolder.add(this.instance.position, 'z', 0, 1);


        }
    }

    setInstance() {
        this.instance = new THREE.PerspectiveCamera(
            50,
            this.sizes.width / this.sizes.height,
            0.1,
            300
        )
        this.instance.position.set(10, 2, 1)
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
        console.log(this.instance.position);

        // this.controls.update()
    }
}