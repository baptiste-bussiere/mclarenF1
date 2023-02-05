import * as THREE from "three"
import Experience from "../Experience.js"

export default class Floor {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.setGeometry()
        this.setMaterial()
        this.setMesh()
    }

    setGeometry() {
        this.geometry = new THREE.PlaneGeometry(2000, 2000)
    }

    setMaterial() {
        this.material = new THREE.MeshStandardMaterial({
            color: 0xffffff
        })
    }

    setMesh() {
        this.meshFloor = new THREE.Mesh(this.geometry, this.material)
        this.meshFloor.rotation.x = -Math.PI * 0.5
        this.meshFloor.position.y = -0.04

        this.meshFloorReturn = new THREE.Mesh(this.geometry, this.material)
        this.meshFloorReturn.rotation.x = -Math.PI * -0.5
        this.meshFloorReturn.position.y = -0.042

        this.scene.add(this.meshFloor, this.meshFloorReturn)
    }
}