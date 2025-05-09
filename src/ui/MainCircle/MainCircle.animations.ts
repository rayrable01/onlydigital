import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export const animateCounter = (el: Element | null, from: number, to: number, duration: number = 0.5) => {
    const obj = {val: from};

    gsap.to(obj, {
        val: to,
        duration,
        ease: "none",
        onUpdate: () => {
            if (el) {
                el.textContent = String(Math.floor(obj.val))
            }
        }
    })
}