<template>
  <div class="relative mx-auto">
    <img
      v-if="!isDesktop"
      src="assets/images/main_image/flat.png"
      class="w-full max-w-md mx-auto select-none"
      draggable="false"
    />
    <div
      v-else
      ref="wrap"
      class="relative mx-auto perspective w-[620px]"
    >
      <img
        src="assets/images/main_image/back.png"
        class="block select-none"
        draggable="false"
      />
      <img
        ref="layerMid"
        src="assets/images/main_image/mid.png"
        class="layer mt-4"
      />
      <img
        ref="layerFront"
        src="assets/images/main_image/front.png"
        class="layer ml-12"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch, nextTick } from "vue";
import gsap from "gsap";

const wrap = ref<HTMLElement | null>(null);
const layerMid = ref<HTMLElement | null>(null);
const layerFront = ref<HTMLElement | null>(null);

const isDesktop = ref(false);

let onMove: any;
let onEnter: any;
let onLeave: any;

const checkScreen = () => {
  isDesktop.value = window.innerWidth >= 1024;
};

const initParallax = async () => {
  await nextTick();
  if (!wrap.value) return;

  gsap.set(layerFront.value, { filter: "saturate(0)" });

  const layers = [
    { el: layerMid, move: 35, rotate: 10 },
    { el: layerFront, move: 20, rotate: 3 },
  ];

  onMove = (e: MouseEvent) => {
    const rect = wrap.value!.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;

    layers.forEach(({ el, move, rotate }) => {
      if (!el.value) return;
      gsap.to(el.value, {
        x: x * move,
        y: y * move,
        rotateX: -y * rotate,
        rotateY: x * rotate,
        duration: 0.4,
        ease: "power3.out",
      });
    });
  };

  onEnter = () => {
    gsap.to(layerFront.value, { filter: "saturate(1)", duration: 0.6 });
  };

  onLeave = () => {
    gsap.to(".layer", {
      x: 0,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      duration: 0.7,
    });
    gsap.to(layerFront.value, { filter: "saturate(0)", duration: 0.8 });
  };

  wrap.value.addEventListener("mousemove", onMove);
  wrap.value.addEventListener("mouseenter", onEnter);
  wrap.value.addEventListener("mouseleave", onLeave);
};

const destroyParallax = () => {
  wrap.value?.removeEventListener("mousemove", onMove);
  wrap.value?.removeEventListener("mouseenter", onEnter);
  wrap.value?.removeEventListener("mouseleave", onLeave);
};

onMounted(() => {
  checkScreen();
  window.addEventListener("resize", checkScreen);
});

watch(isDesktop, (val) => {
  if (val) initParallax();
  else destroyParallax();
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkScreen);
  destroyParallax();
});

</script>

<style>
.perspective {
  perspective: 1000px;
}

.layer {
  position: absolute;
  inset: 0;
  will-change: transform;
  transform-style: preserve-3d;
}

.layer-back {
  z-index: 1;
}
.layer-mid {
  z-index: 2;
}
.layer-front {
  z-index: 3;
}

</style>