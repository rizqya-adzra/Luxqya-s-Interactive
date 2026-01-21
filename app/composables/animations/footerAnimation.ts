import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function footerAnimation(root) {
  gsap.registerPlugin(ScrollTrigger);

  let mm = gsap.matchMedia();
  const scope = root || document.body;

  mm.add({
    isDesktop: "(min-width: 768px)",
    isMobile: "(max-width: 767px)",
  }, (context) => {
    let { isMobile } = context.conditions;

    gsap.from(".footer-anim-star", {
      scrollTrigger: {
        trigger: ".footer-section",
        start: "top bottom",
        end: isMobile ? "top top" : "bottom top+=1000", 
        scrub: isMobile ? 1 : 2,
      },
      opacity: 0,
      y: isMobile ? 50 : 230, 
      skewY: isMobile ? 0 : 20, 
      duration: 1,
      ease: "power1.out",
    });

    gsap.from(".footer-anim-item", {
      scrollTrigger: {
        trigger: ".footer-section",
        start: "top bottom",
        end: isMobile ? "top top" : "bottom top+=1000",
        scrub: isMobile ? 1 : 2,
      },
      opacity: 0.9, 
      y: isMobile ? 30 : 130,
      skewX: isMobile ? 0 : 20, 
      duration: 1,
      ease: "power1.out",
    });

    gsap.from(".footer-anim-red", {
      scrollTrigger: {
        trigger: ".footer-section",
        start: "top bottom",
        end: isMobile ? "bottom bottom" : "bottom top+=1000",
        scrub: isMobile ? 1 : 2,
      },
      scale: isMobile ? 0.9 : 0.8, 
      y: isMobile ? 50 : 100,
      opacity: 0.9, 
      duration: 1,
      ease: "power1.out",
    });

  }, scope);

  return () => mm.revert();
}