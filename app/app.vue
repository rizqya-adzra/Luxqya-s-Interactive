<script setup lang="ts">
import gsap from 'gsap'

const { progress, loadImages } = useAssetLoader()

const imageAssets = import.meta.glob('~/assets/*.{png,jpg,jpeg,svg,webp}', {
  eager: true,
  import: 'default',
})
const assets = Object.values(imageAssets) as string[]
onMounted(async () => {
  await loadImages(assets)

  const tl = gsap.timeline()
  
  tl.to(".preloader", {
    opacity: 0,
    duration: 1,
    ease: "power2.inOut",
    onComplete: () => {
      gsap.set(".preloader", { display: "none" })
    }
  })
})
</script>

<template>
  <div>
    <div class="text-inter preloader fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-complimentary text-white">
      
      <h1 class="text-4xl font-bold mb-4 tracking-widest animate-pulse">
        Please wait...
      </h1>

      <div class="w-64 h-3 bg-slate-800 rounded-full overflow-hidden">
        <div 
          class="h-full bg-primary transition-all duration-100 ease-linear"
          :style="{ width: `${progress}%` }"
        ></div>
      </div>

      <p class="mt-2 text-xs text-white font-inter">{{ Math.round(progress) }}%</p>
    </div>

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
body, html {
  overflow-x: hidden; 
  width: 100%;
}
</style>