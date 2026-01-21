import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function testimonyCardAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  let mm = gsap.matchMedia();

  mm.add({
    isDesktop: "(min-width: 768px)",
    isMobile: "(max-width: 767px)",
  }, (context) => {
    let { isMobile } = context.conditions;

    // --- 1. Testimony Cards (Item) ---
    gsap.from(".testimony-anim-item", {
      scrollTrigger: {
        trigger: ".testimony-section",
        start: isMobile ? "top 85%" : "top bottom", // Mobile mulai lebih cepat
        end: isMobile ? "center center" : "bottom top+=500",
        scrub: isMobile ? 1 : 2, // Mobile harus responsif (angka kecil)
      },
      opacity: 0,
      // Mobile: Naik dikit aja (50px). Desktop: Naik 100px.
      y: isMobile ? 50 : 100, 
      scale: 0.95, // Zoom in dikit gapapa, ringan.
      duration: 0.9,
      ease: "power1.out",
      // Mobile: Stagger dikit aja (0.1) biar user gak nunggu lama
      stagger: isMobile ? 0.1 : 0.20, 
    });

    // --- 2. Star Animation (Dekorasi) ---
    gsap.from(".testimony-anim-star", {
      scrollTrigger: {
        trigger: ".testimony-section",
        start: isMobile ? "top 85%" : "top bottom",
        end: isMobile ? "center center" : "bottom top+=620",
        scrub: isMobile ? 1 : 3,
      },
      opacity: 0,
      // Mobile: Jangan jauh-jauh (50px). Desktop: 150px.
      y: isMobile ? 50 : 150, 
      // Matikan Skew di Mobile biar gak pecah/lag
      skewY: isMobile ? 0 : 20, 
      scale: 0.5,
      duration: 1, // Diatur scrub, duration gak terlalu ngaruh
      ease: "power1.out",
    });

    // --- 3. Text Animation ---
    gsap.from(".testimony-anim-text", {
      scrollTrigger: {
        trigger: ".testimony-section",
        start: isMobile ? "top 85%" : "top bottom",
        end: isMobile ? "center 40%" : "bottom top+=620",
        scrub: isMobile ? 1 : 2,
      },
      opacity: 0,
      // Fade Up (Dari bawah ke atas)
      y: isMobile ? 30 : 60, 
      // Hapus scaleY di mobile biar font gak 'goyang'
      scaleY: isMobile ? 1 : 0.8, 
      // Filter blur SUDAH BENAR dimatikan di mobile
      filter: isMobile ? "blur(0px)" : "blur(10px)",
      transformOrigin: "top center",
      duration: 1.2,
      ease: "power2.out",
    });
    
  });
}