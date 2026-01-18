import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function galleryAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".gallery-anim-item", {
    scrollTrigger: {
      trigger: ".gallery-section",
      start: "top bottom",
      end: () => window.innerWidth < 768 ? "bottom top+=800" : "bottom top+=400",
      scrub: 2,
    },
    y: -400,
    scale: 0.9,
    duration: 0.9,
    ease: "power1.out",
  });

  gsap.from(".gallery-anim-text", {
    scrollTrigger: {
      trigger: ".gallery-section",
      start: "top bottom",
      end: () => window.innerWidth < 768 ? "bottom top+=800" : "bottom top+=800",
      scrub: 1,
    },
    opacity: 0,
    y: 60,
    skewY: 25,
    duration: 1.1,
    ease: "power3.out",
  });
}
