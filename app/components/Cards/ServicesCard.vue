<template>
  <div ref="serviceRoot" class="service-section relative w-full px-4 lg:px-0">
    
    <div class="flex justify-between items-center lg:hidden w-full md:w-auto max-w-[600px] mx-auto mb-12 md:mb-0 absolute top-[-62px] left-10 md:top-[-60px] md:left-24 md:z-0">
       <div class="bg-gradient-to-r from-[#d64a58] to-[#148e9c] p-4 md:px-10 md:py-4 shadow-md relative z-10">
          <h1 class="text-white font-serif text-2xl md:text-3xl text-left tracking-[0.2em] font-bold">SERVICES</h1>
       </div>
       
       <div class="md:hidden absolute top-[-45px] right-20">
          <div class="flex flex-col items-center bg-complimentary rounded-t-xl px-8 py-3 font-poppins font-bold text-secondary shadow-md text-center md:text-start">
            <Icon name="mdi:chevron-down" size="32" />
            CMS <br> Open
          </div>
       </div>
    </div>

    <div class="hidden md:block lg:hidden absolute top-[-45px] md:right-24 lg:right-10 z-0">
        <div class="bg-complimentary rounded-t-xl px-8 py-3 font-poppins font-bold text-secondary shadow-md">
          Commission Open
        </div>
    </div>

    <div class="absolute left-28 -top-5 z-20 service-anim-text hidden lg:block">
      <div class="hidden lg:flex w-48 h-[620px] bg-gradient-to-b from-primary to-complimentary items-center justify-center">
        <p class="text-white font-serif text-7xl flex flex-col items-center leading-none -space-y-3">
          <span>S</span><span>E</span><span>R</span><span>V</span><span>I</span><span>C</span><span>E</span><span>S</span>
        </p>
      </div>
    </div>
    
    <div class="absolute md:right-[90px] lg:right-[500px] -top-14 service-anim-button hidden lg:block">
      <div class="relative w-fit group flex items-center justify-center">
        <p class="bg-complimentary rounded-2xl px-6 pb-10 pt-4 font-poppins font-bold text-secondary relative z-10 transition-all duration-200 flex">
          Commission Open
        </p>
      </div>
    </div>

    <div
      class="w-full max-w-[600px] md:max-w-[770px] lg:max-w-none lg:w-[1200px] h-auto lg:h-[580px] mx-auto bg-[#FFFAF0] rounded-xl p-6 md:p-8 lg:p-10 flex flex-col md:flex-row lg:flex-row justify-center items-start relative z-10 lg:ml-48 shadow-[4px_0_6px_rgba(0,0,0,0.2)] service-anim-item1 gap-8 md:gap-4 lg:gap-0 md:mt-16 lg:mt-0 bg-cover bg-no-repeat bg-center 
      bg-[image:var(--bg-mobile)] md:bg-[image:var(--bg-desktop)]"
      
      :style="{
        '--bg-mobile': `url(${bg_sm})`,
        '--bg-desktop': `url(${bg})`
      }"
    >
      
      <div class="w-full md:w-[65%] lg:w-auto md:pr-20 lg:pr-0 pb-8 md:pb-0">

        <div class="flex-1 grid grid-cols-[auto_1fr] lg:grid-cols-2 lg:mr-20 mt-0 lg:mt-5 gap-6 md:gap-4 lg:gap-0">
          <div class="flex justify-center md:justify-start lg:justify-center">
            <div class="w-28 md:w-28 lg:w-48 aspect-[3/4] overflow-hidden -rotate-3 lg:-rotate-6 border-4 lg:border-8 border-white shadow-md">
              <img
                src="assets/images/full_render_sample.jpg"
                alt="sample"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
          <div class="font-poppins flex flex-col justify-center">
            <h2 class="font-bold text-2xl lg:text-3xl text-primary mb-2 lg:mb-4 text-left">Full Render</h2>
            <ul class="space-y-2 lg:space-y-3 font-medium text-sm md:text-[15px] lg:text-base">
              <li class="flex justify-between items-end w-full">
                <span class="font-semibold whitespace-nowrap">Headshot</span>
                <span class="hidden lg:block mx-1 tracking-widest text-gray-400 overflow-hidden truncate">.....................................</span>
                <span class="block lg:hidden mx-1 tracking-widest text-gray-400 overflow-hidden truncate">..............</span>
                <span class="font-bold text-complimentary whitespace-nowrap">Rp100K | 30$</span>
              </li>
              <li class="flex justify-between items-end w-full">
                <span class="font-semibold whitespace-nowrap">Bust Up</span>
                <span class="hidden lg:block mx-1 tracking-widest text-gray-400 overflow-hidden truncate">.....................................</span>
                <span class="block lg:hidden mx-1 tracking-widest text-gray-400 overflow-hidden truncate">..............</span>
                <span class="font-bold text-complimentary whitespace-nowrap">Rp140K | 45$</span>
              </li>
              <li class="flex justify-between items-end w-full">
                <span class="font-semibold whitespace-nowrap">Half Body</span>
                <span class="hidden lg:block mx-1 tracking-widest text-gray-400 overflow-hidden truncate">.....................................</span>
                <span class="block lg:hidden mx-1 tracking-widest text-gray-400 overflow-hidden truncate">..............</span>
                <span class="font-bold text-complimentary whitespace-nowrap">Rp200K | 65$</span>
              </li>
              <li class="flex justify-between items-end w-full">
                <span class="font-semibold whitespace-nowrap">Knee Up</span>
                <span class="hidden lg:block mx-1 tracking-widest text-gray-400 overflow-hidden truncate">.....................................</span>
                <span class="block lg:hidden mx-1 tracking-widest text-gray-400 overflow-hidden truncate">..............</span>
                <span class="font-bold text-complimentary whitespace-nowrap">Rp250K | 75$</span>
              </li>
              <li class="flex justify-between items-end w-full">
                <span class="font-semibold whitespace-nowrap">Full Body</span>
                <span class="hidden lg:block mx-1 tracking-widest text-gray-400 overflow-hidden truncate">.....................................</span>
                <span class="block lg:hidden mx-1 tracking-widest text-gray-400 overflow-hidden truncate">..............</span>
                <span class="font-bold text-complimentary whitespace-nowrap">Rp300K | 90$</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="flex-1 grid grid-cols-[auto_1fr] lg:grid-cols-2 lg:mr-20 mt-8 md:mt-6 lg:mt-0 gap-6 md:gap-4 lg:gap-0">
          <div class="flex justify-center md:justify-start lg:justify-center">
            <div class="w-20 md:w-28 lg:w-36 lg:mt-10 aspect-[3/4] overflow-hidden rotate-3 lg:rotate-6 border-4 lg:border-8 border-white shadow-md">
              <img
                src="assets/images/chibis_sample.jpg"
                alt="sample"
                class="w-full h-full object-cover"
              />
            </div>
            </div>
            <div class="font-poppins mt-0 lg:mt-12 flex flex-col justify-center">
              <h2 class="font-bold text-2xl lg:text-3xl text-primary mb-2 lg:mb-4 text-left">Chibis</h2>
              <ul class="space-y-2 lg:space-y-3 font-medium text-sm md:text-[15px] lg:text-base">
                <li class="flex justify-between items-end w-full">
                  <span class="font-semibold whitespace-nowrap">Headshot</span>
                  <span class="hidden lg:block mx-1 tracking-widest text-gray-400 overflow-hidden truncate">.....................................</span>
                  <span class="block lg:hidden mx-1 tracking-widest text-gray-400 overflow-hidden truncate">..............</span>
                  <span class="font-bold text-complimentary whitespace-nowrap">Rp65K | 17$</span>
                </li>
                <li class="flex justify-between items-end w-full">
                  <span class="font-semibold whitespace-nowrap">Full Body</span>
                  <span class="hidden lg:block mx-1 tracking-widest text-gray-400 overflow-hidden truncate">.....................................</span>
                  <span class="block lg:hidden mx-1 tracking-widest text-gray-400 overflow-hidden truncate">..............</span>
                  <span class="font-bold text-complimentary whitespace-nowrap">Rp150K | 32$</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="flex-2 grid gap-4 lg:gap-7 w-full md:w-[30%] lg:w-auto lg:-mr-3">
          <div class="flex flex-col justify-center items-center md:items-center lg:items-center relative h-64 md:h-56 lg:h-auto">
            <img
            src="assets/images/char_sheet_sample.jpg"
            class="w-64 md:w-52 lg:w-80 h-fit -rotate-3 lg:-rotate-6 border-4 mr-4 lg:border-8 shadow border-white z-10"
            alt="sample"
            />
            <img
            src="assets/images/char_sheet2_sample.jpg"
            class="w-64 md:w-52 lg:w-80 h-fit shadow -mt-8 md:-mt-12 lg:-mt-5 ml-7 lg:mx-6 border-4 lg:border-8 border-white z-20"
            alt="sample"
            />
          </div>
          <div class="font-poppins mb-5 md:mb-0 md:mt-2 lg:mt-0">
            <h2 class="font-bold text-2xl md:text-xl lg:text-3xl text-primary mb-2 lg:mb-4 text-center">Character Sheet</h2>
            <ul class="space-y-2 lg:space-y-3 font-medium text-sm md:text-[15px] lg:text-base">
              <li class="flex px-16 md:px-0 md:gap-2 lg:gap-0 justify-between items-end w-full">
                <span class="font-semibold whitespace-nowrap">Flat Colored</span>
                <span class="hidden lg:block mx-1 tracking-widest text-gray-400 overflow-hidden truncate">.....................................</span>
                <span class="font-bold text-complimentary whitespace-nowrap">Rp600K | 99$</span>
              </li>
              <li class="flex px-16 md:px-0 md:gap-2 lg:gap-0 justify-between items-end w-full">
                <span class="font-semibold whitespace-nowrap">Fully Rendered</span>
                <span class="hidden lg:block mx-1 tracking-widest text-gray-400 overflow-hidden truncate">.....................................</span>
              <span class="font-bold text-complimentary whitespace-nowrap">Rp1.200K | 179$</span>
            </li>
          </ul>
        </div>
      </div>  
      
    </div>

    <div
      class="hidden md:block absolute 
             md:top-5 md:left-5 md:w-[800px] md:h-[402px]
             lg:top-5 lg:left-48 lg:translate-x-0 lg:w-[1220px] lg:h-[540px]
             bg-[#FFFAF0] rounded-xl shadow-[4px_0_4px_rgba(0,0,0,0.1)] z-8 service-anim-item2"
    ></div>
    <div
      class="hidden md:block absolute 
             md:top-3 md:left-5 md:w-[790px] md:h-[405px]
             lg:top-3 lg:left-48 lg:translate-x-0 lg:w-[1210px] lg:h-[560px]
             bg-[#FFFAF0] rounded-xl shadow-[4px_0_4px_rgba(0,0,0,0.2)] z-9 service-anim-item3"
    ></div>
  </div>

  <div class="mt-8 lg:mt-5 flex justify-center">
    <button @click="openServicesPopUp = true" class="flex gap-3 py-3 px-16 lg:px-20 text-xl lg:text-2xl font-bold font-poppins bg-primary hover:bg-complimentary text-secondary rounded-md transition-all duration-300 shadow-lg"> 
      <span class="inline-block" ref="diamondEl">◆</span> read ToS
    </button>
  </div>
  <PopUpsServicesPopUp 
    :open="openServicesPopUp"
    @close="openServicesPopUp = false"
  />
</template>

<script setup>
import bg from '~/assets/images/bg-2.png'
import bg_sm from '~/assets/images/bg-5.png'
import { ref, onMounted, onBeforeUnmount } from "vue"
import { servicesCardAnimation } from "~/utils/animations/servicesCard"
import gsap from "gsap"

const diamondEl = ref(null)
const serviceRoot = ref(null)
let cleanup

onMounted(() => {
  cleanup = servicesCardAnimation(serviceRoot),
  gsap.to(diamondEl.value, {
    scale: 1.1,
    duration: 1.3,
    repeat: -100,
    yoyo: true,
    ease: "sine.inOut"
  })
})

onBeforeUnmount(() => {
  cleanup?.()
})
const openServicesPopUp = ref(false)
</script>