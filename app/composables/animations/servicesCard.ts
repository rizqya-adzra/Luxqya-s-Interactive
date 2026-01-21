import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function servicesCardAnimation(root) {
  gsap.registerPlugin(ScrollTrigger);

  let mm = gsap.matchMedia();
  const scope = root || document.body;

  mm.add({
    isDesktop: "(min-width: 1000px)",
    isMobile: "(max-width: 999px)",
  }, (context) => {
    let { isMobile } = context.conditions;

    const items = [".service-anim-item1", ".service-anim-item2", ".service-anim-item3"];
    
    items.forEach((item, index) => {
      let desktopClipPath = index === 0 ? "inset(0 200% 0 0)" : (index === 1 ? "inset(0 100% 0 0)" : "inset(0 150% 0 0)");

      gsap.from(item, {
        scrollTrigger: {
          trigger: ".service-section",
          start: isMobile ? "top 85%" : "top bottom",
          end: isMobile ? "center center" : "bottom top+=850",
          scrub: isMobile ? 1 : 2, 
        },
        clipPath: isMobile ? null : desktopClipPath,
        y: isMobile ? 100 : 200, 
        opacity: 0,              
        transformOrigin: "right center",
        duration: 1.2,
        ease: "power1.out",
      });
    });

    gsap.from(".service-anim-star", {
      scrollTrigger: {
        trigger: ".service-section",
        start: isMobile ? "top 80%" : "top bottom",
        end: isMobile ? "center center" : "bottom top+=520",
        scrub: isMobile ? 1.5 : 3,
      },
      opacity: 0,
      y: isMobile ? 150 : 300, 
      x: 0, 
      rotate: 90,
      scale: 0.5,
      duration: 1,
      ease: "power1.out",
    });

    gsap.from(".service-anim-text", {
      scrollTrigger: {
        trigger: ".service-section",
        start: isMobile ? "top 85%" : "top bottom",
        end: isMobile ? "center 45%" : "bottom top+=620",
        scrub: isMobile ? 1 : 2,
      },
      opacity: 0,
      y: isMobile ? 50 : 150, 
      x: 0,
      duration: 1,
      ease: "power1.out",
    });
  }, scope); 

  return () => mm.revert();
}