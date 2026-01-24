<template>
  <div
    ref="el"
    class="inline-block cursor-grab active:cursor-grabbing select-none will-change-transform"
    @mousedown="startDrag"
    @touchstart.passive="startDrag"
  >
    <img
      :src="src"
      draggable="false" 
      :class="['pointer-events-none block', size, imgClass]"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  src: { type: String, required: true },
  size: { type: String, default: "w-20" },
  imgClass: { type: String, default: "" }
});

const el = ref(null);

// Physics State
let isDragging = false;
let startX = 0, startY = 0; // Posisi awal mouse
let currentX = 0, currentY = 0; // Posisi elemen saat ini (Drag/Spring)
let velocityX = 0, velocityY = 0; // Kecepatan untuk efek lempar/spring

// Float State
let floatAngle = 0;

// Loop utama (Jantung animasi)
// Menggabungkan Drag, Spring, dan Float dalam satu frame agar tidak bentrok
let animationFrame;

function update() {
  // 1. Hitung Floating (Naik turun cantik) - Selalu jalan
  floatAngle += 0.03;
  const floatY = Math.sin(floatAngle) * 6; // Angka 6 = jarak naik turun

  // 2. Logika Fisika
  if (!isDragging) {
    // Jika tidak di-drag, jalankan efek Spring Back (kembali ke 0,0)
    // Menggunakan teknik "Friction" sederhana: posisi dikali angka < 1 (0.8)
    // Semakin mendekati 1 semakin licin, semakin kecil semakin kaku
    currentX *= 0.85; 
    currentY *= 0.85;
    
    // Jika angka sudah sangat kecil (mendekati 0), set ke 0 biar hemat resource
    if (Math.abs(currentX) < 0.1) currentX = 0;
    if (Math.abs(currentY) < 0.1) currentY = 0;
  }

  // 3. Hitung Rotasi (Miring saat ditarik)
  // currentX / 15 artinya setiap geser 15px, miring 1 derajat
  const rotation = currentX / 15;

  // 4. Render ke elemen (Gabungan Drag + Float)
  if (el.value) {
    // Kita pisah: currentY untuk drag, floatY untuk animasi diam
    const totalY = currentY + floatY; 
    el.value.style.transform = `translate3d(${currentX}px, ${totalY}px, 0) rotate(${rotation}deg)`;
  }

  animationFrame = requestAnimationFrame(update);
}

// --- Event Handlers ---

function startDrag(e) {
  isDragging = true;
  velocityX = 0; 
  velocityY = 0;
  
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;

  // Catat posisi awal mouse dikurangi posisi elemen saat ini 
  // supaya tidak "snap" (loncat) saat diklik
  startX = clientX - currentX;
  startY = clientY - currentY;

  window.addEventListener("mousemove", onDrag);
  window.addEventListener("mouseup", stopDrag);
  window.addEventListener("touchmove", onDrag, { passive: false });
  window.addEventListener("touchend", stopDrag);
}

function onDrag(e) {
  if (!isDragging) return;
  if (e.type === 'touchmove') e.preventDefault(); // Stop scroll di HP

  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;

  // Update posisi berdasarkan mouse
  currentX = clientX - startX;
  currentY = clientY - startY;
}

function stopDrag() {
  isDragging = false;
  window.removeEventListener("mousemove", onDrag);
  window.removeEventListener("mouseup", stopDrag);
  window.removeEventListener("touchmove", onDrag);
  window.removeEventListener("touchend", stopDrag);
}

// Lifecycle
onMounted(() => {
  update(); // Mulai loop
});

onUnmounted(() => {
  cancelAnimationFrame(animationFrame); // Bersihkan memori saat pindah halaman
});
</script>