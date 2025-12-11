<template>
  <div
    ref="star"
    class="inline-block cursor-grab active:cursor-grabbing select-none"
    @mousedown="startDrag"
    @touchstart.prevent="startDrag"
  >
    <img
      :src="src"
      :class="['pointer-events-none', size, imgClass]"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Props
const props = defineProps({
  src: { type: String, required: true },
  size: { type: String, default: "w-20" },
  imgClass: { type: String, default: "" }
});

const star = ref(null);
let offsetX = 0, offsetY = 0, isDragging = false;
let startX, startY;
let angle = 0;

// Floating animation
function float() {
  angle += 0.02;
  if (!isDragging) {
    const y = Math.sin(angle) * 5;
    applyTransform(offsetX, offsetY + y);
  }
  requestAnimationFrame(float);
}

// Start drag
function startDrag(e) {
  isDragging = true;
  const p = e.touches ? e.touches[0] : e;
  startX = p.clientX - offsetX;
  startY = p.clientY - offsetY;

  window.addEventListener("mousemove", drag);
  window.addEventListener("mouseup", endDrag);
  window.addEventListener("touchmove", drag);
  window.addEventListener("touchend", endDrag);
}

// Drag
function drag(e) {
  if (!isDragging) return;
  const p = e.touches ? e.touches[0] : e;

  offsetX = p.clientX - startX;
  offsetY = p.clientY - startY;

  const rotate = offsetX / 20;
  applyTransform(offsetX, offsetY, rotate);
}

// End drag (spring back)
function endDrag() {
  if (!isDragging) return;
  isDragging = false;

  let vx = -offsetX * 0.2;
  let vy = -offsetY * 0.2;

  function animateBack() {
    if (isDragging) return;

    offsetX += vx;
    offsetY += vy;

    vx *= 0.8;
    vy *= 0.8;

    applyTransform(offsetX, offsetY);

    if (Math.abs(vx) > 0.5 || Math.abs(vy) > 0.5) {
      requestAnimationFrame(animateBack);
    } else {
      offsetX = 0;
      offsetY = 0;
    }
  }

  requestAnimationFrame(animateBack);

  window.removeEventListener("mousemove", drag);
  window.removeEventListener("mouseup", endDrag);
  window.removeEventListener("touchmove", drag);
  window.removeEventListener("touchend", endDrag);
}

// Apply transform (tanpa scale)
function applyTransform(x, y, rotate = 0) {
  if (star.value) {
    star.value.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg)`;
  }
}

onMounted(() => float());
</script>

<style scoped>
div {
  transition: transform 0.15s cubic-bezier(0.22, 1, 0.36, 1);
}
</style>
