import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function aboutPopupAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".about-anim-item", {
    scrollTrigger: {
      trigger: ".about-section",
      start: "top bottom",
      end: "bottom top+=620",
      scrub: 1,
    },
    y: 400,
    scale: 0.9,
    duration: 0.9,
    ease: "power1.out",
  });

  gsap.from(".about-anim-star1", {
    scrollTrigger: {
      trigger: ".about-section",
      start: "top bottom",
      end: "bottom top+=620",
      scrub: 1,
    },
    opacity: 0,
    y: -300,
    x: -300,
    scale: 0.2,
    duration: 0.9,
    ease: "power1.out",
    stagger: 0.20,
  });

  gsap.from(".about-anim-star2", {
    scrollTrigger: {
      trigger: ".about-section",
      start: "top bottom",
      end: "bottom top-=200",
      scrub: 1,
    },
    opacity: 0,
    y: -500,
    scale: 0.2,
    duration: 0.9,
    ease: "power1.out",
    stagger: 0.20,
  });

  gsap.from(".about-anim-text", {
    scrollTrigger: {
      trigger: ".about-section",
      start: "top bottom",
      end: "bottom top+=620",
      scrub: 1,
    },
    opacity: 0,
    y: 60,
    skewY: 25,
    duration: 1.1,
    ease: "power3.out",
  });


}
