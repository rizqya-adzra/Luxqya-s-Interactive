<template>
  <div ref="serviceRoot" class="service-section relative w-full px-4 lg:px-0 mx-auto">
    
    <div class="flex justify-between items-center lg:hidden w-full md:w-auto max-w-[600px] mx-auto mb-12 md:mb-0 absolute top-[-62px] left-10 md:top-[-60px] md:left-24 md:z-0 ">
       <div class="bg-gradient-to-r from-[#d64a58] to-[#148e9c] p-4 md:px-10 md:py-4 shadow-md relative z-10 service-anim-item1">
          <h1 class="text-white font-serif text-2xl md:text-3xl text-left tracking-[0.2em] font-bold ">SERVICES</h1>
       </div>
       
       <div class="md:hidden absolute top-[-43px] right-20">
          <div class="service-anim-item1 flex flex-col items-center bg-complimentary w-20 rounded-t-xl px-8 py-3 font-poppins font-bold text-secondary shadow-md text-center md:text-start">
            <Icon name="mdi:chevron-down" size="32" />
            CMS <br> Open
          </div>
       </div>
    </div>

    <div class="hidden md:block lg:hidden absolute top-[-45px] md:right-24 lg:right-10 z-0">
        <div class="service-anim-item1 bg-complimentary rounded-t-xl px-8 py-3 font-poppins font-bold text-secondary shadow-md">
          Commission Open
        </div>
    </div>
    
    <div class="relative w-full max-w-[600px] md:max-w-[770px] lg:max-w-[1200px] mx-auto md:mt-16 lg:mt-10">
      <div class="absolute -left-16 -top-5 z-20 service-anim-text hidden lg:block">
        <div class="hidden lg:flex w-48 h-[620px] bg-gradient-to-b from-primary to-complimentary items-center justify-center">
          <p class="text-white font-serif text-7xl flex flex-col items-center leading-none -space-y-3">
            <span>S</span><span>E</span><span>R</span><span>V</span><span>I</span><span>C</span><span>E</span><span>S</span>
          </p>
        </div>
      </div>
      
      <div class="absolute md:right-[90px] lg:right-[500px] -top-14 service-anim-text hidden lg:block">
        <div class="relative w-fit group flex items-center justify-center">
          <p class="bg-complimentary rounded-2xl px-6 pb-10 pt-4 font-poppins font-bold text-secondary relative z-10 transition-all duration-200 flex">
            Commission Open
          </p>
        </div>
      </div>
      <div class="hidden lg:block absolute top-4 left-1/2 -translate-x-1/2 w-[105%] h-full bg-[#FFFAF0] rounded-xl z-0 shadow-[4px_0_4px_rgba(0,0,0,0.2)] service-anim-item2"></div>
      <div class="hidden lg:block absolute top-2 left-1/2 -translate-x-1/2 w-[103%] h-full bg-[#FFFAF0] rounded-xl z-0 shadow-[4px_0_4px_rgba(0,0,0,0.2)] service-anim-item3"></div>
      <div
        class="relative w-full h-auto lg:h-[580px] bg-[#FFFAF0] shadow-[4px_0_4px_rgba(0,0,0,0.2)] rounded-xl p-6 md:p-8 lg:p-10 flex flex-col md:flex-row lg:flex-row justify-center items-start z-10 gap-8 md:gap-4 lg:gap-0 bg-cover bg-no-repeat bg-center 
        bg-[image:var(--bg-mobile)] md:bg-[image:var(--bg-desktop)] service-anim-item1"
        :style="{
          '--bg-mobile': `url(${bg_sm})`,
          '--bg-desktop': `url(${bg})`
        }"
      >
        
        <div class="w-full md:w-[65%] lg:w-auto md:pr-20 lg:pr-0 pb-8 md:pb-0">
          <div class="flex-1 grid grid-cols-[auto_1fr] lg:grid-cols-2 lg:mr-20 mt-0 lg:mt-5 gap-6 md:gap-4 lg:gap-0">
            <div class="flex justify-center md:justify-start lg:justify-center">
              <div class="flex justify-center md:justify-start lg:justify-center lg:hover:translate-x-12 transition-transform duration-300 lg:hover:scale-110">
                <div 
                  class="w-28 md:w-28 lg:w-48 aspect-[3/4] overflow-hidden border-4 lg:border-8 border-white shadow-md relative cursor-pointer will-change-transform transition-all duration-100 ease-out"
                  :style="cardStyles.fullRender.transform ? cardStyles.fullRender : { transform: 'rotate(-6deg)' }"
                  @mousemove="(e) => handleSteamHover(e, 'fullRender')"
                  @mouseleave="resetCard('fullRender', '-6deg')"
                >
                  <img
                    src="assets/images/full_render_sample.jpg"
                    alt="sample"
                    class="w-full h-full object-cover pointer-events-none"
                  />
                  
                  <div 
                    class="absolute inset-0 w-full h-full pointer-events-none mix-blend-overlay z-20"
                    :style="{
                      background: `radial-gradient(circle at var(--glare-pos, 50% 50%), rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0) 80%)`,
                      opacity: cardStyles.fullRender['--glare-opacity'] || 0,
                      transition: 'opacity 0.3s'
                    }"
                  ></div>
                </div>
              </div>
            </div>
            <div class="font-poppins flex flex-col justify-center">
              <h2 class="font-bold text-2xl lg:text-3xl text-primary mb-2 lg:mb-4 text-left">Full Render</h2>
              <ul class="space-y-2 lg:space-y-3 font-medium text-sm md:text-[15px] lg:text-base">
                <li class="flex justify-between items-end w-full">
                  <span class="font-semibold whitespace-nowrap">Headshot</span>
                  <span class="hidden lg:block mx-1 tracking-widest text-gray-400 overflow-hidden truncate">.....................................</span>
                  <span class="hidden md:block lg:hidden mx-1 tracking-widest text-gray-400 overflow-hidden truncate">..............</span>
                  <span class="font-bold text-complimentary whitespace-nowrap">Rp100K | 30$</span>
                </li>
                <li class="flex justify-between items-end w-full">
                  <span class="font-semibold whitespace-nowrap">Bust Up</span>
                  <span class="hidden lg:block mx-1 tracking-widest text-gray-400 overflow-hidden truncate">.....................................</span>
                  <span class="hidden md:block lg:hidden mx-1 tracking-widest text-gray-400 overflow-hidden truncate">..............</span>
                  <span class="font-bold text-complimentary whitespace-nowrap">Rp140K | 45$</span>
                </li>
                <li class="flex justify-between items-end w-full">
                  <span class="font-semibold whitespace-nowrap">Half Body</span>
                  <span class="hidden lg:block mx-1 tracking-widest text-gray-400 overflow-hidden truncate">.....................................</span>
                  <span class="hidden md:block lg:hidden mx-1 tracking-widest text-gray-400 overflow-hidden truncate">..............</span>
                  <span class="font-bold text-complimentary whitespace-nowrap">Rp200K | 65$</span>
                </li>
                <li class="flex justify-between items-end w-full">
                  <span class="font-semibold whitespace-nowrap">Knee Up</span>
                  <span class="hidden lg:block mx-1 tracking-widest text-gray-400 overflow-hidden truncate">.....................................</span>
                  <span class="hidden md:block lg:hidden mx-1 tracking-widest text-gray-400 overflow-hidden truncate">..............</span>
                  <span class="font-bold text-complimentary whitespace-nowrap">Rp250K | 75$</span>
                </li>
                <li class="flex justify-between items-end w-full">
                  <span class="font-semibold whitespace-nowrap">Full Body</span>
                  <span class="hidden lg:block mx-1 tracking-widest text-gray-400 overflow-hidden truncate">.....................................</span>
                  <span class="hidden md:block lg:hidden mx-1 tracking-widest text-gray-400 overflow-hidden truncate">..............</span>
                  <span class="font-bold text-complimentary whitespace-nowrap">Rp300K | 90$</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="flex-1 grid grid-cols-[auto_1fr] lg:grid-cols-2 lg:mr-20 mt-8 md:mt-6 lg:mt-0 gap-6 md:gap-4 lg:gap-0">
            <div class="flex justify-center md:justify-start lg:justify-center">
              <div class="flex justify-center md:justify-start lg:justify-center lg:hover:translate-x-8 transition-transform duration-300 lg:hover:scale-125">
                <div 
                  class="w-20 md:w-28 lg:w-36 lg:mt-10 aspect-[3/4] overflow-hidden border-4 lg:border-8 border-white shadow-md relative cursor-pointer will-change-transform transition-all duration-100 ease-out"
                  :style="cardStyles.chibis.transform ? cardStyles.chibis : { transform: 'rotate(6deg)' }"
                  @mousemove="(e) => handleSteamHover(e, 'chibis')"
                  @mouseleave="resetCard('chibis', '6deg')"
                >
                    <img
                      src="assets/images/chibis_sample.jpg"
                      alt="sample"
                      class="w-full h-full object-cover pointer-events-none"
                    />

                      <div 
                        class="absolute inset-0 w-full h-full pointer-events-none mix-blend-overlay z-20"
                        :style="{
                          background: `radial-gradient(circle at var(--glare-pos, 50% 50%), rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0) 80%)`,
                          opacity: cardStyles.chibis['--glare-opacity'] || 0,
                          transition: 'opacity 0.3s'
                        }"
                      ></div>
                    </div>
                  </div>
                </div>
              <div class="font-poppins mt-0 lg:mt-12 flex flex-col justify-center">
                <h2 class="font-bold text-2xl lg:text-3xl text-primary mb-2 lg:mb-4 text-left">Chibis</h2>
                <ul class="space-y-2 lg:space-y-3 font-medium text-sm md:text-[15px] lg:text-base">
                  <li class="flex justify-between items-end w-full">
                    <span class="font-semibold whitespace-nowrap">Headshot</span>
                    <span class="hidden lg:block mx-1 tracking-widest text-gray-400 overflow-hidden truncate">.....................................</span>
                    <span class="hidden md:block lg:hidden mx-1 tracking-widest text-gray-400 overflow-hidden truncate">..............</span>
                    <span class="font-bold text-complimentary whitespace-nowrap">Rp65K | 17$</span>
                  </li>
                  <li class="flex justify-between items-end w-full">
                    <span class="font-semibold whitespace-nowrap">Full Body</span>
                    <span class="hidden lg:block mx-1 tracking-widest text-gray-400 overflow-hidden truncate">.....................................</span>
                    <span class="hidden md:block lg:hidden mx-1 tracking-widest text-gray-400 overflow-hidden truncate">..............</span>
                    <span class="font-bold text-complimentary whitespace-nowrap">Rp150K | 32$</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="flex-2 grid gap-4 lg:gap-7 w-full md:w-[30%] lg:w-auto lg:-mr-3 mx-auto">
            <div class="flex flex-col justify-center items-center md:items-center lg:items-center relative h-64 md:h-56 lg:h-auto gap-4">
              <div class="lg:hover:scale-110 transition-transform duration-300 lg:hover:z-50">
                <div 
                  class="relative cursor-pointer transition-all duration-100 ease-out will-change-transform"
                  :style="cardStyles.card1.transform ? cardStyles.card1 : { transform: 'rotate(-3deg)' }"
                  @mousemove="(e) => handleSteamHover(e, 'card1')"
                  @mouseleave="resetCard('card1', '-3deg')"
                >
                  <img
                    src="assets/images/char_sheet2_sample.jpg"
                    class="w-64 md:w-52 lg:w-80 h-fit border-4 lg:border-8 border-white shadow-lg pointer-events-none"
                    alt="sample"
                  />
                  
                  <div 
                    class="absolute inset-0 w-full h-full pointer-events-none mix-blend-overlay rounded-sm z-20"
                    :style="{
                      background: `radial-gradient(circle at var(--glare-pos, 50% 50%), rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0) 80%)`,
                      opacity: cardStyles.card1['--glare-opacity'] || 0,
                      transition: 'opacity 0.3s ease'
                    }"
                  ></div>
                </div>
              </div>
              <div class="lg:hover:scale-110 transition-transform duration-300 z-20">
                <div 
                  class="relative cursor-pointer transition-all duration-100 ease-out will-change-transform -mt-16 lg:-mt-10"
                  :style="cardStyles.card2.transform ? cardStyles.card2 : { transform: 'rotate(6deg)' }"
                  @mousemove="(e) => handleSteamHover(e, 'card2')"
                  @mouseleave="resetCard('card2', '6deg')"
                >
                  <img
                    src="assets/images/char_sheet_sample.jpg"
                    class="w-64 md:w-52 lg:w-80 h-fit border-4 lg:border-8 border-white shadow-lg pointer-events-none"
                    alt="sample"
                  />
                  <div 
                    class="absolute inset-0 w-full h-full pointer-events-none mix-blend-soft-light rounded-sm z-20"
                    :style="{
                      background: `radial-gradient(circle at var(--glare-pos, 50% 50%), rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0) 80%)`,
                      opacity: cardStyles.card2['--glare-opacity'] || 0,
                      transition: 'opacity 0.3s ease'
                    }"
                  ></div>
                </div>
              </div>
            </div>
            <div class="font-poppins mb-5 md:mb-0 md:mt-2 lg:mt-0">
              <h2 class="font-bold text-2xl md:text-xl lg:text-3xl text-primary mb-2 lg:mb-4 text-center">
                Character Sheet
              </h2>
              
              <ul class="space-y-2 lg:space-y-3 font-medium text-sm md:text-[15px] lg:text-base">
                <li class="flex px-6 md:px-0 md:gap-2 lg:gap-0 justify-between items-end w-full">
                  <span class="font-semibold whitespace-nowrap">Flat Colored</span>
                  <span class="hidden lg:block mx-1 tracking-widest text-gray-400 overflow-hidden truncate">.....................................</span>
                  <span class="font-bold text-complimentary whitespace-nowrap">Rp600K | 99$</span>
                </li>
                <li class="flex px-6 md:px-0 md:gap-2 lg:gap-0 justify-between items-end w-full">
                  <span class="font-semibold whitespace-nowrap">Fully Rendered</span>
                  <span class="hidden lg:block mx-1 tracking-widest text-gray-400 overflow-hidden truncate">.....................................</span>
                  <span class="font-bold text-complimentary whitespace-nowrap">Rp1.200K | 179$</span>
                </li>
              </ul>
            </div>
          </div>
      </div>
      <div
        class="hidden md:block lg:hidden absolute 
              md:top-5 md:-left-2 md:w-[800px] md:h-[402px]
              bg-[#FFFAF0] rounded-xl shadow-[4px_0_4px_rgba(0,0,0,0.1)] z-8 service-anim-item2"
      ></div>
      <div
        class="hidden md:block lg:hidden absolute 
              md:top-3 md:-left-2 md:w-[790px] md:h-[405px]
              bg-[#FFFAF0] rounded-xl shadow-[4px_0_4px_rgba(0,0,0,0.2)] z-9 service-anim-item3"
      ></div>
    </div>
  </div>
  <div class="mt-8 lg:mt-10 flex justify-center">
    <button @click="openServicesPopUp = true" class="service-anim-button flex gap-3 py-3 px-16 lg:px-20 text-xl lg:text-2xl font-bold font-poppins bg-primary hover:bg-complimentary text-secondary rounded-md transition-all duration-300 shadow-lg"> 
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
import { servicesCardAnimation } from "~/composables/animations/servicesCard"
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

const cardStyles = ref({
  fullRender: {},
  chibis: {},     
  card1: {},      
  card2: {}       
})

const handleSteamHover = (e, cardKey) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  
  const rotateX = ((y - centerY) / 10) * -1;
  const rotateY = (x - centerX) / 10;
  
  const glareX = (x / rect.width) * 100;
  const glareY = (y / rect.height) * 100;

  cardStyles.value[cardKey] = {
    transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
    boxShadow: `${-rotateY}px ${rotateX}px 10px rgba(0,0,0,0.15)`,
    zIndex: 50,
    
    '--glare-pos': `${glareX}% ${glareY}%`,
    '--glare-opacity': '1' 
  };
}

const resetCard = (cardKey, originalRotation) => {
  cardStyles.value[cardKey] = {
    transform: `perspective(1000px) rotateZ(${originalRotation}) scale3d(1, 1, 1)`,
    zIndex: 10, 
    '--glare-opacity': '0'
  };
}
</script>