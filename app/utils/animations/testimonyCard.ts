import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function testimonyCardAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".testimony-anim-item", {
    scrollTrigger: {
      trigger: ".testimony-section",
      start: "top bottom",
      end: "bottom top+=500",
      scrub: 1,
    },
    opacity: 0,
    y: -60,
    scale: 0.95,
    duration: 0.9,
    ease: "power1.out",
    stagger: 0.20,
  });

  gsap.from(".testimony-anim-star", {
    scrollTrigger: {
      trigger: ".testimony-section",
      start: "top bottom",
      end: "bottom top+=620",
      scrub: 1,
    },
    opacity: 0,
    y: -200,
    skewY: 50,
    scale: 0.5,
    duration: 0.1,
    ease: "power1.out",
  });

  gsap.from(".testimony-anim-text", {
    scrollTrigger: {
      trigger: ".testimony-section",
      start: "top bottom",
      end: "bottom top+=620",
      scrub: 1,
    },
  opacity: 0,
  y: -60,
  scaleY: 0.6,
  filter: "blur(10px)",
  transformOrigin: "top center",
  duration: 1.2,
  ease: "power2.out",
  });
}
