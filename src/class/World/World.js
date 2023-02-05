import Experience from "../Experience.js"
import Environment from "./Environment.js"
import Floor from "./Floor.js"
import Model from "./model.js"

export default class World {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        // Wait for resources
        this.resources.on("ready", () => {
            // Setup
            this.floor = new Floor()
            this.model = new Model()
            this.environment = new Environment()
        })
    }

    update() {
        if (this.model) this.model.update()
    }
}