<template>
  <img
    :src="src"
    :class="[
      'transition-all duration-300 ease-out pointer-events-none',
      size,
      imgClass,
      { 'hover:scale-110 hover:rotate-6 hover:brightness-125': hoverEffect }
    ]"
  />
</template>

<script setup>
const props = defineProps({
  src: { type: String, required: true },     // PATH GIF-nya
  size: { type: String, default: "w-20" },    // Tailwind size
  imgClass: { type: String, default: "" },    // Custom class tambahan
  hoverEffect: { type: Boolean, default: true } // bisa matiin efek hover
});
</script>
