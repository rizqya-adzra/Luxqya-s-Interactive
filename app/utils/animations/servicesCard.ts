import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function servicesCardAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".service-anim-item", {
    scrollTrigger: {
      trigger: ".service-section",
      start: "top bottom",
      end: "bottom top+=500",
      scrub: 1,
    },
    opacity: 0.5,
    clipPath: "inset(0 100% 0 0)",   
    rotateY: -35,                     
    transformOrigin: "right center",   
    y: -40,
    duration: 1.2,
    ease: "power2.out",
  });

  gsap.from(".service-anim-star", {
    scrollTrigger: {
      trigger: ".service-section",
      start: "top bottom",
      end: "bottom top+=100",
      scrub: 1,
    },
    opacity: 0,
    y: -1000,
    x: -550,
    skewY: 50,
    scale: 0.5,
    duration: 0.1,
    ease: "power1.out",
  });
}
