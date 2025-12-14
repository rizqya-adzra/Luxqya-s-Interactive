<template>
  <div ref="serviceRoot" class="service-section relative">
    <div class="absolute left-24 -top-5 z-20 service-anim-text">
      <div class="w-48 h-[620px] bg-gradient-to-b from-primary to-complimentary flex items-center justify-center">
        <p class="text-white font-serif text-7xl flex flex-col items-center leading-none -space-y-3">
          <span>S</span>
          <span>E</span>
          <span>R</span>
          <span>V</span>
          <span>I</span>
          <span>C</span>
          <span>E</span>
          <span>S</span>
        </p>
      </div>
    </div>
    
    <div class="absolute right-[490px] -top-14 service-anim-button">
      <div class="relative w-fit group flex items-center justify-center">
        <button  
          @click="openServicesPopUp = true"
          class="bg-complimentary px-5 pb-10 pt-4 font-poppins font-bold text-secondary
                relative z-10 transition-all duration-200 group-hover:-translate-y-5 hover:bg-primary flex"
        >
          <span ref="diamondEl" class="inline-block">
            <Icon name="mdi:chevron-double-up" size="28"/>
          </span>
          Terms of Service
        </button>
      </div>
    </div>

    <div
      class="w-[1200px] h-[580px] m-auto bg-[#FFFAF0] rounded-xl p-10 justify-center items-start flex relative z-10 ml-48 shadow-[4px_0_6px_rgba(0,0,0,0.2)] service-anim-item1"
      :style="{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }"
    >
      <div>
        <div class="flex-1 grid grid-cols-2 mr-20 mt-5">
          <div class="flex justify-center">
            <div class="w-48 aspect-[3/4] overflow-hidden -rotate-6 border-8 border-white shadow-md">
              <img
                src="assets/images/full_render_sample.jpg"
                alt="sample"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
          <div class="font-poppins">
            <h2 class="font-bold text-3xl text-primary mb-4">Full Render</h2>
            <ul class="space-y-3 font-medium">
              <li class="flex justify-between">
                <span class="font-semibold">Headshot</span>
                <span class="mx-1 tracking-widest">............................</span>
                <span class="font-bold text-complimentary">Rp100K | 30$</span>
              </li>
              <li class="flex justify-between">
                <span class="font-semibold">Bust Up</span>
                <span class="mx-1 tracking-widest">.............................</span>
                <span class="font-bold text-complimentary">Rp140K | 45$</span>
              </li>
              <li class="flex justify-between">
                <span class="font-semibold">Half Body</span>
                <span class="mx-1 tracking-widest">............................</span>
                <span class="font-bold text-complimentary">Rp200K | 65$</span>
              </li>
              <li class="flex justify-between">
                <span class="font-semibold">Knee Up</span>
                <span class="mx-1 tracking-widest">.............................</span>
                <span class="font-bold text-complimentary">Rp250K | 75$</span>
              </li>
              <li class="flex justify-between">
                <span class="font-semibold">Full Body</span>
                <span class="mx-1 tracking-widest">............................</span>
                <span class="font-bold text-complimentary">Rp300K | 90$</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex-1 grid grid-cols-2 mr-20">
          <div class="flex justify-center">
            <img
              src="assets/images/chibis_sample.jpg"
              class="w-44 h-fit rotate-6 mt-10 border-8 shadow-md border-white"
              alt="sample"
              />
            </div>
            <div class="font-poppins mt-12">
              <h2 class="font-bold text-3xl text-primary mb-4">Chibis</h2>
              <ul class="space-y-3 font-medium">
                <li class="flex justify-between">
                  <span class="font-semibold">Headshot</span>
                  <span class="mx-1 tracking-widest">............................</span>
                  <span class="font-bold text-complimentary">Rp100K | 30$</span>
                </li>
                <li class="flex justify-between">
                  <span class="font-semibold">Full Body</span>
                  <span class="mx-1 tracking-widest">............................</span>
                  <span class="font-bold text-complimentary">Rp300K | 90$</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="flex-2 grid gap-7">
          <div class="flex flex-col justify-center">
            <img
            src="assets/images/char_sheet_sample.jpg"
            class="w-80 h-fit -rotate-6 border-8 shadow border-white"
            alt="sample"
            />
            <img
            src="assets/images/char_sheet2_sample.jpg"
            class="w-80 h-fit shadow -mt-5 mx-6 border-8 border-white"
            alt="sample"
            />
          </div>
          <div class="font-poppins">
            <h2 class="font-bold text-3xl text-primary mb-4">Character Sheet</h2>
            <ul class="space-y-3 font-medium">
              <li class="flex justify-between">
                <span class="font-semibold">Flat Colored</span>
                <span class="mx-1 tracking-widest">...............................</span>
                <span class="font-bold text-complimentary">Rp600K | 99$</span>
              </li>
              <li class="flex justify-between">
                <span class="font-semibold">Fully Rendered</span>
                <span class="mx-1 tracking-widest">.........................</span>
              <span class="font-bold text-complimentary">Rp1.200K | 179$</span>
            </li>
          </ul>
        </div>
      </div>      
    </div>
    <div
      class="absolute top-5 left-48 w-[1220px] h-[540px] bg-[#FFFAF0] rounded-xl
            shadow-[4px_0_4px_rgba(0,0,0,0.1)] z-8 service-anim-item2"
    ></div>
    <div
      class="absolute top-3 left-48 w-[1210px] h-[560px] bg-[#FFFAF0] rounded-xl
            shadow-[4px_0_4px_rgba(0,0,0,0.2)] z-9 service-anim-item3"
    ></div>
  </div>
  <PopUpsServicesPopUp 
    :open="openServicesPopUp"
    @close="openServicesPopUp = false"
  />
</template>

<script setup>
import bg from '~/assets/images/bg-2.png'
import { ref, onMounted, onBeforeUnmount } from "vue"
import { servicesCardAnimation } from "~/utils/animations/servicesCard"
import gsap from "gsap"

const diamondEl = ref(null)
const serviceRoot = ref(null)
let cleanup

onMounted(() => {
  cleanup = servicesCardAnimation(serviceRoot),
  gsap.to(diamondEl.value, {
    y: -4,
    rotate: -6,
    duration: 1.2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  })
})

onBeforeUnmount(() => {
  cleanup?.()
})
const openServicesPopUp = ref(false)
</script>
