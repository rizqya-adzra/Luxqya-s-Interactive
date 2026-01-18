import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function lineAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".line-anim-item1", {
    scrollTrigger: {
      trigger: ".line-section",
      start: "top bottom",
      end: () => window.innerWidth < 768 ? "bottom top+=800" : "bottom top+=400",
      scrub: 2,
    },
    clipPath: "inset(0 100% 0 0)",   
    transformOrigin: "right center",   
    duration: 10,
    ease: "power1.out",
  });

  gsap.from(".line-anim-item2", {
    scrollTrigger: {
      trigger: ".line-section",
      start: "top bottom",
      end: () => window.innerWidth < 768 ? "bottom top+=800" : "bottom top+=400",
      scrub: 5,
    },
    clipPath: "inset(0 100% 0 0)",   
    transformOrigin: "right center",   
    duration: 10,
    ease: "power2.out",
  });
  
  gsap.from(".line-anim-item3", {
    scrollTrigger: {
      trigger: ".line-section",
      start: "top bottom",
      end: () => window.innerWidth < 768 ? "bottom top+=800" : "bottom top+=400",
      scrub: 3,
    },
    clipPath: "inset(0 100% 0 0)",   
    transformOrigin: "right center",   
    duration: 10,
    ease: "power1.out",
  });
}
