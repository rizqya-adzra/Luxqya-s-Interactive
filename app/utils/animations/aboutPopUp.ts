import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function aboutPopupAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  // Gunakan matchMedia untuk penanganan responsif yang lebih stabil
  let mm = gsap.matchMedia();

  mm.add({
    // Kondisi untuk Desktop (Min-width 768px)
    isDesktop: "(min-width: 768px)",
    // Kondisi untuk Mobile/Tablet (Max-width 767px)
    isMobile: "(max-width: 767px)", 
  }, (context) => {
    let { isMobile } = context.conditions;

    // --- Konfigurasi Animasi ---
    
    // 1. Animasi Item Utama
    gsap.from(".about-anim-item", {
      scrollTrigger: {
        trigger: ".about-section",
        start: isMobile ? "top 85%" : "top bottom", // Mobile mulai lebih lambat sedikit
        end: isMobile ? "center center" : "bottom top+=620", // Mobile selesai saat elemen di tengah layar
        scrub: isMobile ? 1 : 2, // Scrub di mobile jangan terlalu besar (1 cukup smooth)
        // markers: true, // Uncomment untuk debugging
      },
      y: isMobile ? 100 : 400, // Kurangi jarak gerak di mobile agar cepat sampai
      scale: isMobile ? 0.9 : 0.7,
      duration: 0.9,
      ease: "power1.out",
    });

    // 2. Animasi Star 1
    gsap.from(".about-anim-star1", {
      scrollTrigger: {
        trigger: ".about-section",
        start: isMobile ? "top 80%" : "top bottom",
        end: isMobile ? "center center" : "bottom top+=620",
        scrub: isMobile ? 1.5 : 3, // Kurangi lag scrub
      },
      opacity: 0,
      y: isMobile ? -100 : -300, // Kurangi jarak
      x: isMobile ? -50 : -300,
      scale: 0.2,
      duration: 0.9,
      ease: "power1.out",
      stagger: 0.20,
    });

    // 3. Animasi Star 2
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

    // 4. Animasi Text
    gsap.from(".about-anim-text", {
      scrollTrigger: {
        trigger: ".about-section",
        start: isMobile ? "top 85%" : "top bottom",
        end: isMobile ? "center 40%" : "bottom top+=620", // Text selesai agak di atas tengah
        scrub: isMobile ? 1 : 2,
      },
      opacity: 0,
      y: isMobile ? 100 : 400,
      skewY: isMobile ? 10 : 25, // Skew dikurangi di mobile agar tetap terbaca
      duration: 1.1,
      ease: "power2.out",
    });
  }); 
}