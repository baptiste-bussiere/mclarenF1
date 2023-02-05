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

        this.setInstance()
        this.setControls()
    }

    setInstance() {
        this.instance = new THREE.PerspectiveCamera(
            75,
            this.sizes.width / this.sizes.height,
            0.1,
            300
        )
        this.instance.position.set(-5.00743481376338,
            1.3622963747003163,
            4.411647503302046
        )
        this.scene.add(this.instance)
        this.pivot = new THREE.Vector3()
        this.instance.getWorldDirection(this.pivot)
    }

    setControls() {
        this.controls = new OrbitControls(this.instance, this.canvas)
        this.controls.enableDamping = true
        this.controls.minDistance = 1
        this.controls.maxDistance = 20
        this.controls.minPolarAngle = Math.PI / 12
        this.controls.maxPolarAngle = Math.PI / 2.15
        this.controls.enablePan = true
        this.controls.autoRotate = true
        this.controls.screenSpacePanning = true
        this.controls.autoRotateSpeed = 0.4
            // CameraControls.install({ THREE: THREE })
            // this.cameraControls = new CameraControls(
            //     this.camera,
            //     renderer.domElement
            // )
    }

    resize() {
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }

    update() {
        // this.hasControlsUpdated = this.cameraControls.update(delta)
        // if (this.hasControlsUpdated) {
        //     renderer.render(scene, camera)
        // }

        this.controls.update()
    }
}