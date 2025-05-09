import gsap from "gsap";

const animatedItem = (el: Element | null) => {
    gsap.fromTo(el, {opacity: 0, y: 20 }, {opacity: 1, y: 0, duration: 1});
}

export default animatedItem