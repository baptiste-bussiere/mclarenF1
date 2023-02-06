import * as THREE from "three"
import Experience from "../Experience.js"
import TweenMax from "gsap"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
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
        this.setAnimation()
        if (this.debug.active) {
            this.debugFolder = this.debug.ui.addFolder("Model")
            this.debugFolder.add(this.model.position, 'x', -10, 10).name("Position X")
            this.debugFolder.add(this.model.position, 'y', -10, 10).name("Position Y")
            this.debugFolder.add(this.model.position, 'z', -10, 10).name("Position Z")
            this.debugFolder.add(this.model.rotation, 'x', -10, 10).name("Rotation X")
            this.debugFolder.add(this.model.rotation, 'y', -10, 10).name("Rotation Y")
            this.debugFolder.add(this.model.rotation, 'z', -10, 10).name("Rotation Z")


        }
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
        ScrollTrigger.defaults({
            immediateRender: false,
            ease: "power1.inOut",
        });



        this.car_anim_tl = gsap.timeline({

            scrollTrigger: {
                trigger: ".section-two",
                start: "top top",
                endTrigger: "bottom",
                end: "bottom bottom",
                scrub: 2,
            }

        });


        this.car_anim_tl


            .to(this.model.position, { x: 1 })
            .to(this.model.position, { y: 3 })
            .to(this.model.position, { z: -0.4 })
            .to(this.model.rotation, { x: -0.28 })
            .to(this.model.rotation, { y: 1.59 })
            .to(this.model.rotation, { z: 0 })




    }


}



// .to(this.camera.position, { x: 0 })
// .to(this.camera.position, { y: 7.3 })
// .to(this.camera.position, { y: -2.04 })
// .to(this.camera.rotation, { x: -1.73 })
// .to(this.camera.rotation, { y: 0 })
// .to(this.camera.rotation, { z: 0 })