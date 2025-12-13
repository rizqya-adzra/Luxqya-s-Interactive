import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function navbarAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.set(".sticky-navbar", {
    y: -1000,
    opacity: 0,
  });

  ScrollTrigger.create({
    trigger: ".start-section",
    start: "bottom top+=400",
    onEnter: () => {
      gsap.to(".sticky-navbar", {
        y: 0,
        opacity: 1,
        duration: 0.45,
        ease: "power3.out",
      });
    },
    onLeaveBack: () => {
      gsap.to(".sticky-navbar", {
        y: -200,
        opacity: 1,
        duration: 0.4,
        ease: "power1.in",
      });
    },
  });
}
