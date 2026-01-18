<template>
  <NuxtLayout >
      <NuxtPage />
  </NuxtLayout>
</template>

<script>
import gsap from "gsap";

// Panggil fungsi ini di onMounted
export function initPreloader() {
  const tl = gsap.timeline();

  // Pastikan browser sudah selesai download semua aset (gambar, font, dll)
  window.addEventListener("load", () => {
    
    tl.to(".preloader", {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        // Hapus elemen dari DOM biar gak nutupin tombol walau transparan
        document.querySelector(".preloader").style.display = "none"; 
        
        // --- DISINI MEMULAI ANIMASI LAINNYA ---
        // Panggil animasi hero/intro kamu disini supaya sinkron
        // contoh: heroAnimation();
      }
    });

  });
}
</script>
<style>
  body, html {
  overflow-x: hidden; /* Matikan scroll samping untuk seluruh website */
  width: 100%;
}
</style>
