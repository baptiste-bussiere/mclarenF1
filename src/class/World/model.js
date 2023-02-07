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
        console.log(this.model.rotation);
        console.log(this.model.position);

    }
    setModel() {
        this.model = this.model.scene
        this.scene.add(this.model)
        this.model.position.set(0, 0.2, -6.4)
        this.model.rotation.set(0.6, 0, 0)
        console.log(this.model);

    }
    setAnimation() {
        var sectionDuration = 1;
        let tau = Math.PI * 2;
        // gsap.fromTo('canvas', { x: "50%", autoAlpha: 0 }, { duration: 1, x: "0%", autoAlpha: 1 });

        let tl = new gsap.timeline({
            onUpdate: this.scene.render,
            scrollTrigger: {
                trigger: ".content",
                scrub: 4,
                start: "top top",
                end: "bottom bottom"
            },
            defaults: { duration: sectionDuration, ease: 'power2.inOut' }
        });

        let delay = 1;




        tl.to(this.model.rotation, { x: 0, y: 0, z: 0, ease: 'power1.inOut' }, delay)
        delay += sectionDuration;

        tl.to(this.model.position, { x: 0, y: -0.1, z: 0, ease: 'power1.inOut' }, delay)
        tl.to(this.model.rotation, { x: 0, y: 1.6, z: -0.8, ease: 'power1.inOut' }, delay)



        // tl.to(this.model.rotation, { x: tau * .25, y: 0, z: tau * 0.05, ease: 'power3.inOut' }, delay)
        // tl.to(this.model.position, { x: 40, y: 0, z: -60, ease: 'power2.inOut' }, delay)

        // delay += sectionDuration;

        // tl.to(this.model.rotation, { x: tau * .2, y: 0, z: -tau * 0.1, ease: 'power3.inOut' }, delay)
        // tl.to(this.model.position, { x: -40, y: 0, z: -30, ease: 'power2.inOut' }, delay)

        // delay += sectionDuration;

        // tl.to(this.model.rotation, { x: 0, z: 0, y: tau * .25 }, delay)
        // tl.to(this.model.position, { x: 0, y: -10, z: 50 }, delay)

        // delay += sectionDuration;
        // delay += sectionDuration;

        // tl.to(this.model.rotation, { x: tau * 0.25, y: tau * .5, z: 0, ease: 'power4.inOut' }, delay)
        // tl.to(this.model.position, { z: 30, ease: 'power4.inOut' }, delay)

        // delay += sectionDuration;

        // tl.to(this.model.rotation, { x: tau * 0.25, y: tau * .5, z: 0, ease: 'power4.inOut' }, delay)
        // tl.to(this.model.position, { z: 60, x: 30, ease: 'power4.inOut' }, delay)

        // delay += sectionDuration;

        // tl.to(this.model.rotation, { x: tau * 0.35, y: tau * .75, z: tau * 0.6, ease: 'power4.inOut' }, delay)
        // tl.to(this.model.position, { z: 100, x: 20, y: 0, ease: 'power4.inOut' }, delay)

        // delay += sectionDuration;

        // tl.to(this.model.rotation, { x: tau * 0.15, y: tau * .85, z: -tau * 0, ease: 'power1.in' }, delay)
        // tl.to(this.model.position, { z: -150, x: 0, y: 0, ease: 'power1.inOut' }, delay)

        // delay += sectionDuration;

        // tl.to(this.model.rotation, { duration: sectionDuration, x: -tau * 0.05, y: tau, z: -tau * 0.1, ease: 'none' }, delay)
        // tl.to(this.model.position, { duration: sectionDuration, x: 0, y: 30, z: 320, ease: 'power1.in' }, delay)









    }
}




// .to(this.camera.position, { x: 0 })
// .to(this.camera.position, { y: 7.3 })
// .to(this.camera.position, { y: -2.04 })
// .to(this.camera.rotation, { x: -1.73 })
// .to(this.camera.rotation, { y: 0 })
// .to(this.camera.rotation, { z: 0 })