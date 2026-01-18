<template>
  <a
    ref="btn"
    href="https://vgen.co/luxqya_ra"
    class="relative overflow-hidden
           border-4 border-complimentary
           rounded-lg px-7 py-3
           font-poppins font-black
           text-complimentary
           flex items-center gap-5"
  >
    <span
      ref="bg"
      class="absolute inset-0 bg-complimentary -z-10"
    />

    <span ref="text" class="relative z-10 md:text-xl">
      Commission Me!
    </span>

    <span ref="iconWrap" class="relative z-10 flex items-center">
      <Icon
        name="mdi:arrow-right-circle-outline"
        size="44"
      />
    </span>
  </a>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'

const btn = ref<HTMLElement | null>(null)
const iconWrap = ref<HTMLElement | null>(null)
const bg = ref<HTMLElement | null>(null)
const text = ref<HTMLElement | null>(null)

let hoverIn: () => void
let hoverOut: () => void

onMounted(() => {
  if (!btn.value || !iconWrap.value || !bg.value) return

  gsap.set(bg.value, { xPercent: -100 })
  gsap.set(iconWrap.value, { x: 0 })

hoverIn = () => {
  gsap.killTweensOf([bg.value, iconWrap.value, text.value])

  gsap.to(bg.value, {
    xPercent: 0,
    duration: 0.5,
    ease: 'power1.out'
  })

  gsap.to(text.value, {
    x: 64,
    color: '#FFEEDE',
    duration: 0.5,
    ease: 'power2.out'
  })
  
  gsap.to(iconWrap.value, {
    x: 80,
    duration: 0.3,
    ease: 'power1.out',
    onComplete: () => {
      gsap.set(iconWrap.value, { x: -200 })
      gsap.to(iconWrap.value, {
        color: '#FFEEDE',
        x: -185,
        duration: 0.3,
        ease: 'power1.out'
      })
    }
  })
}

hoverOut = () => {
  gsap.killTweensOf([bg.value, iconWrap.value, text.value])

  gsap.to(bg.value, {
    xPercent: -100,
    duration: 0.3,
    ease: 'power1.in'
  })

  gsap.to(text.value, {
    x: 0,
    color: '#009DA8',
    duration: 0.35,
    ease: 'power2.out'
  })

  gsap.to(iconWrap.value, {
    x: -1000,
    duration: 0.25,
    ease: 'power2.in',
    color: '#009DA8',
    onComplete: () => {
      gsap.set(iconWrap.value, { x: 300 })
      gsap.to(iconWrap.value, {
        x: 0,
        duration: 0.2,
        ease: 'power2.out'
      })
    }
  })
}

  btn.value.addEventListener('mouseenter', hoverIn)
  btn.value.addEventListener('mouseleave', hoverOut)
})

onBeforeUnmount(() => {
  btn.value?.removeEventListener('mouseenter', hoverIn)
  btn.value?.removeEventListener('mouseleave', hoverOut)
})
</script>
