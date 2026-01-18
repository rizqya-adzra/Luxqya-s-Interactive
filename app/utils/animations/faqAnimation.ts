import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function faqAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".faq-anim-item", {
    scrollTrigger: {
      trigger: ".faq-section",
      start: "top bottom",
      end: () => window.innerWidth < 768 ? "bottom top+=800" : "bottom top+=800",
      scrub: 3,
    },
    y: 600,
    scale: 0.1,
    duration: 0.9,
    ease: "power1.out",
  });

  gsap.from(".faq-anim-star", {
    scrollTrigger: {
      trigger: ".faq-section",
      start: "top bottom",
      end: () => window.innerWidth < 768 ? "bottom top+=800" : "bottom top+=700",
      scrub: 4,
    },
    y: 1000,
    x: 400,
    scale: 0.9,
    duration: 1,
    ease: "power1.out",
  });

  gsap.from(".faq-anim-text", {
    scrollTrigger: {
      trigger: ".faq-section",
      start: "top bottom",
      end: () => window.innerWidth < 768 ? "bottom top+=800" : "bottom top+=600",
      scrub: 3,
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
