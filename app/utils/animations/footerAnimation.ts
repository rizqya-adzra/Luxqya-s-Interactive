import gsap from "gsap";

export function footerAnimation(root) {
  const ctx = gsap.context(() => {
    gsap.from(".footer-anim-star", {
      scrollTrigger: {
        trigger: ".footer-section",
        start: "top bottom",
        end: () => window.innerWidth < 1024 ? "bottom top+=1300" : "bottom top+=800",
        scrub: 2,
      },
      opacity: 0,
      y: 230,
      skewY: 20,
      duration: 0.1,
      ease: "power1.out",
    });

    gsap.from(".footer-anim-item", {
      scrollTrigger: {
        trigger: ".footer-section",
        start: "top bottom",
        end: () => window.innerWidth < 1024 ? "bottom top+=1300" : "bottom top+=800",
        scrub: 2,
      },
      y: 130,
      skewX: 20,
      duration: 0.1,
      ease: "power1.out",
    });

    gsap.from(".footer-anim-red", {
      scrollTrigger: {
        trigger: ".footer-section",
        start: "top bottom",
        end: () => window.innerWidth < 1024 ? "bottom top+=1300" : "bottom top+=800",
        scrub: 2,
      },
      scale: 0.8,
      y: 100,
      duration: 0.1,
      ease: "power1.out",
    });

  }, root)
  return () => ctx.revert()
}
