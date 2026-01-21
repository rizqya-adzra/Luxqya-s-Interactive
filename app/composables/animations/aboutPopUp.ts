import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function aboutPopupAnimation() {
  gsap.registerPlugin(ScrollTrigger);
  let mm = gsap.matchMedia();
  mm.add({
    isDesktop: "(min-width: 768px)",
    isMobile: "(max-width: 767px)", 
  }, (context) => {
    let { isMobile } = context.conditions;

    gsap.from(".about-anim-item", {
      scrollTrigger: {
        trigger: ".about-section",
        start: isMobile ? "top 85%" : "top bottom",
        end: isMobile ? "center center" : "bottom top+=620",
        scrub: isMobile ? 1 : 2,
      },
      y: isMobile ? 100 : 400,
      scale: isMobile ? 0.9 : 0.7,
      duration: 0.9,
      ease: "power1.out",
    });

    gsap.from(".about-anim-star1", {
      scrollTrigger: {
        trigger: ".about-section",
        start: isMobile ? "top 80%" : "top bottom",
        end: isMobile ? "center center" : "bottom top+=620",
        scrub: isMobile ? 1.5 : 3,
      },
      opacity: 0,
      y: isMobile ? -100 : -300,
      x: isMobile ? -50 : -300,
      scale: 0.2,
      duration: 0.9,
      ease: "power1.out",
      stagger: 0.20,
    });

    gsap.from(".about-anim-star2", {
      scrollTrigger: {
        trigger: ".about-section",
        start: isMobile ? "top 80%" : "top bottom",
        end: isMobile ? "center center" : "bottom top-=200",
        scrub: isMobile ? 1.5 : 3,
      },
      opacity: 0,
      y: isMobile ? -150 : -500,
      scale: 0.2,
      duration: 0.9,
      ease: "power1.out",
      stagger: 0.20,
    });

    gsap.from(".about-anim-text", {
      scrollTrigger: {
        trigger: ".about-section",
        start: isMobile ? "top 85%" : "top bottom",
        end: isMobile ? "center 40%" : "bottom top+=620", 
        scrub: isMobile ? 1 : 2,
      },
      opacity: 0,
      y: isMobile ? 100 : 400,
      skewY: isMobile ? 10 : 25, 
      duration: 1.1,
      ease: "power2.out",
    });
  }); 
}