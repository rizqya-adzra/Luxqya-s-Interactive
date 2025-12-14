import gsap from "gsap";

export function footerAnimation(root) {
  const ctx = gsap.context(() => {
    gsap.from(".footer-anim-star", {
      scrollTrigger: {
        trigger: ".footer-section",
        start: "top bottom",
        end: "bottom top+=800",
        scrub: 1,
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
        end: "bottom top+=800",
        scrub: 1,
      },
      y: 130,
      skewX: 10,
      duration: 0.1,
      ease: "power1.out",
    });

    gsap.from(".footer-anim-red", {
      scrollTrigger: {
        trigger: ".footer-section",
        start: "top bottom",
        end: "bottom top+=800",
        scrub: 1,
      },
      scale: 0.9,
      y: 100,
      duration: 0.1,
      ease: "power1.out",
    });

  }, root)
  return () => ctx.revert()
}
