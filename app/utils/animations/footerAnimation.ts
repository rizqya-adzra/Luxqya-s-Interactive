import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function footerAnimation(root) {
  gsap.registerPlugin(ScrollTrigger);

  // Ganti gsap.context biasa dengan matchMedia agar bisa bedain HP/Laptop
  let mm = gsap.matchMedia();
  const scope = root || document.body;

  mm.add({
    isDesktop: "(min-width: 768px)",
    isMobile: "(max-width: 767px)",
  }, (context) => {
    let { isMobile } = context.conditions;

    // --- 1. Star Animation (Dekorasi) ---
    gsap.from(".footer-anim-star", {
      scrollTrigger: {
        trigger: ".footer-section",
        start: "top bottom", // Mulai saat footer menyentuh bawah layar
        end: isMobile ? "top top" : "bottom top+=1000", // Mobile selesai lebih cepat
        scrub: isMobile ? 1 : 2, // Mobile lebih responsif
      },
      opacity: 0,
      // Mobile: Naik dikit (50px). Desktop: Naik jauh (230px)
      y: isMobile ? 50 : 230, 
      // Mobile: JANGAN SKEW (Berat & jelek di layar kecil). Desktop: Skew 20.
      skewY: isMobile ? 0 : 20, 
      duration: 1,
      ease: "power1.out",
    });

    // --- 2. Item Animation (Konten Utama) ---
    gsap.from(".footer-anim-item", {
      scrollTrigger: {
        trigger: ".footer-section",
        start: "top bottom",
        end: isMobile ? "top top" : "bottom top+=1000",
        scrub: isMobile ? 1 : 2,
      },
      opacity: 0, // Pastikan ada fade-in
      y: isMobile ? 30 : 130, // Jarak pendek di mobile
      // Hapus SkewX di mobile
      skewX: isMobile ? 0 : 20, 
      duration: 1,
      ease: "power1.out",
    });

    // --- 3. Red Element (Background/Accent) ---
    gsap.from(".footer-anim-red", {
      scrollTrigger: {
        trigger: ".footer-section",
        start: "top bottom",
        end: isMobile ? "bottom bottom" : "bottom top+=1000",
        scrub: isMobile ? 1 : 2,
      },
      // Mobile: Zoom out dikit aja (0.9). Desktop: 0.8
      scale: isMobile ? 0.9 : 0.8, 
      y: isMobile ? 50 : 100,
      opacity: 0, // Tambah opacity biar halus
      duration: 1,
      ease: "power1.out",
    });

  }, scope);

  return () => mm.revert();
}