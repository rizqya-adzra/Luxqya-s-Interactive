import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function faqAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  let mm = gsap.matchMedia();

  mm.add({
    isDesktop: "(min-width: 768px)",
    isMobile: "(max-width: 767px)",
  }, (context) => {
    let { isMobile } = context.conditions;

    // --- 1. FAQ Item Animation ---
    gsap.from(".faq-anim-item", {
      scrollTrigger: {
        trigger: ".faq-section",
        // Mobile: Mulai saat elemen masuk 90% viewport (sedikit di bawah)
        start: isMobile ? "top 90%" : "top bottom", 
        // Mobile: Selesai saat elemen berada di tengah layar (agar user langsung lihat hasilnya)
        end: isMobile ? "center center" : "bottom top+=800",
        // Mobile: Scrub 1 supaya tidak terasa berat/laggy
        scrub: isMobile ? 1 : 2, 
      },
      // Jarak gerak dikurangi drastis di mobile (150px vs 600px)
      y: isMobile ? 150 : 600, 
      scale: isMobile ? 0.9 : 0.1, // Scale tetap 0.1 agar efek zoom tetap ada
      duration: 0.9,
      ease: "power1.out",
    });

    // --- 2. Star Animation (Dekorasi) ---
    gsap.from(".faq-anim-star", {
      scrollTrigger: {
        trigger: ".faq-section",
        start: isMobile ? "top 85%" : "top bottom",
        end: isMobile ? "center center" : "bottom top+=700",
        scrub: isMobile ? 1.5 : 4, // Kurangi scrub biar bintangnya gak ketinggalan jauh
      },
      // Mobile: Jangan gerak terlalu jauh (200px vs 1000px)
      y: isMobile ? 200 : 1000, 
      // Mobile: X jangan terlalu besar biar gak bikin horizontal scroll bar muncul
      x: isMobile ? 50 : 400, 
      scale: 0.9,
      duration: 1,
      ease: "power1.out",
    });

    // --- 3. Text Animation ---
    gsap.from(".faq-anim-text", {
      scrollTrigger: {
        trigger: ".faq-section",
        start: isMobile ? "top 90%" : "top bottom",
        // Text harus cepat terbaca di mobile, jadi end-nya dipercepat
        end: isMobile ? "top 40%" : "bottom top+=600",
        scrub: isMobile ? 0.5 : 2, // Scrub sangat rendah agar text cepat fokus (tidak blur lama)
      },
      opacity: 0,
      y: -60, // Jarak kecil ini aman untuk mobile & desktop
      scaleY: 0.6,
      filter: isMobile ? "blur(0px)" : "blur(10px)",
      transformOrigin: "top center",
      duration: 1.2,
      ease: "power2.out",
    });
  });
}