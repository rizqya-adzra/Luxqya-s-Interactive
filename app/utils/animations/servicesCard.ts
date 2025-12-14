import gsap from "gsap";

export function servicesCardAnimation(root) {
  const ctx = gsap.context(() => {
    gsap.from(".service-anim-item1", {
      scrollTrigger: {
        trigger: ".service-section",
        start: "top bottom",
        end: "bottom top+=850",
        scrub: 1,
      },
      clipPath: "inset(0 200% 0 0)",   
      transformOrigin: "right center",   
      y: -40,
      duration: 1.2,
      ease: "power1.out",
    });

    gsap.from(".service-anim-item2", {
      scrollTrigger: {
        trigger: ".service-section",
        start: "top bottom",
        end: "bottom top+=850",
        scrub: 1,
      },
      clipPath: "inset(0 100% 0 0)",   
      transformOrigin: "right center",   
      y: -40,
      duration: 1.2,
      ease: "power1.out",
    });

    gsap.from(".service-anim-item3", {
      scrollTrigger: {
        trigger: ".service-section",
        start: "top bottom",
        end: "bottom top+=850",
        scrub: 1,
      },
      clipPath: "inset(0 150% 0 0)",   
      transformOrigin: "right center",   
      y: -40,
      duration: 1.2,
      ease: "power1.out",
    });

    gsap.from(".service-anim-star", {
      scrollTrigger: {
        trigger: ".service-section",
        start: "top bottom",
        end: "bottom top+=520",
        scrub: 1,
      },
      opacity: 0,
      y: -1000,
      x: -550,
      skewY: 25,
      scale: 0.5,
      duration: 0.1,
      ease: "power1.out",
    });

    gsap.from(".service-anim-text", {
      scrollTrigger: {
        trigger: ".service-section",
        start: "top bottom",
        end: "bottom top+=620",
        scrub: 1,
      },
      skewX: 15,
      duration: 0.1,
      ease: "power1.out",
    });

    gsap.from(".service-anim-button", {
      scrollTrigger: {
        trigger: ".service-section",
        start: "top bottom",
        end: "bottom top+=800",
        scrub: 1,
      },
      opacity: 0,
      y: 500,
      x: -800,
      duration: 0.1,
      ease: "power1.out",
    });
  }, root)
  return () => ctx.revert()
}
