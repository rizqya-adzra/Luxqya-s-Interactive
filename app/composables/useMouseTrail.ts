import { ref, onMounted, onUnmounted } from "vue";

export function useMouseTrail(maxParticles = 20) {
  const particles = ref<any[]>([]);

  const addParticle = (x: number, y: number) => {
    particles.value.push({
      x,
      y,
      opacity: 1,
      size: Math.random() * 6 + 4,
      id: crypto.randomUUID(),
    });

    if (particles.value.length > maxParticles) {
      particles.value.shift();
    }

    particles.value.forEach((p) => {
      p.opacity -= 0.05;
    });

    particles.value = particles.value.filter((p) => p.opacity > 0);
  };

  const mouseMove = (e: MouseEvent) => {
    addParticle(e.clientX, e.clientY);
  };

  onMounted(() => {
    window.addEventListener("mousemove", mouseMove);
  });

  onUnmounted(() => {
    window.removeEventListener("mousemove", mouseMove);
  });

  return {
    particles
  };
}
