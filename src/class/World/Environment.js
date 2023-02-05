import * as THREE from "three"
import Experience from "../Experience.js"

export default class Environment {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene

        this.resources = this.experience.resources
        this.debug = this.experience.debug
        this.scene.fog = new THREE.Fog(0xb3d7f1, 0.2, 125)
        this.ressource = this.resources.items.hdriMap
            // Debug
        if (this.debug.active) {
            this.debugFolder = this.debug.ui.addFolder("environment")
        }

        this.setSunLight()
        this.setHdri()
    }

    setSunLight() {
        this.sunLight = new THREE.AmbientLight("#ffffff", 1)
        this.scene.add(this.sunLight)
    }
    setHdri() {
        this.hdrMap = this.ressource
        this.hdrMap.mapping = THREE.EquirectangularReflectionMapping
        this.scene.environment - this.hdrMap
    }
}