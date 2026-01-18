<template>
  <div ref="footerRoot" class="footer-section px-1 lg:px-4 w-full overflow-hidden">
    <div class="relative m-auto bg-primary rounded-t-3xl w-full md:max-w-[1230px] md:min-h-[710px] flex justify-center items-center z-20 shadow-xl custom-dashed footer-anim-red p-4 sm:p-0">
      
      <div class="absolute md:top-16 md:left-16 lg:top-24 lg:left-20 md:w-[730px] md:h-[800px] lg:w-[1100px] lg:h-[600px] bg-[#FFFAF0] rounded-xl -z-20 footer-anim-star hidden md:block"></div>

      <div
        class="bg-[#FFFAF0] w-full max-w-[700px] md:max-w-[730px] lg:max-w-[1100px] lg:h-[600px] mt-10 p-6 lg:p-14 flex flex-col justify-center z-64 gap-10 rounded-xl shadow-[4px_4px_3px_rgba(0,0,0,0.2)] footer-anim-item"
        :style="{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }"
      >
        <div class="space-y-3 text-center lg:text-left">
          <p class="font-playfair font-bold text-4xl lg:text-6xl">Have an Intriguing Idea?</p>
          <p class="font-poppins font-bold text-base lg:text-lg">Let's bring it to life together!</p>
        </div>

        <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-28">
          <p class="font-poppins text-sm lg:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatges. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatges.
          </p>
          
          <div class="flex flex-col gap-4 justify-start w-full lg:w-auto">
            <p class="font-poppins font-bold text-2xl lg:text-3xl">Sections</p>
            <div class="flex justify-between gap-10 sm:gap-32 items-center w-full lg:w-auto">
              <div class="space-y-2">
                <ButtonsFooterButton buttonName="Home" @click="navbarScroll('start')" />
                <ButtonsFooterButton buttonName="About" @click="navbarScroll('about')" />
                <ButtonsFooterButton buttonName="Service" @click="navbarScroll('service')" />
              </div>
              <div class="space-y-2">
                <ButtonsFooterButton buttonName="Review" @click="navbarScroll('testimony')" />
                <ButtonsFooterButton buttonName="Gallery" @click="navbarScroll('gallery')" />
                <ButtonsFooterButton buttonName="FAQ" @click="navbarScroll('FAQ')" />
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:flex justify-between gap-4 lg:gap-2">
          <a href="https://vgen.co/luxqya_ra" class="h-14 lg:h-16 w-full lg:w-64 bg-[#5865F2] flex items-center justify-center gap-4 rounded hover:brightness-95">
            <p class="font-poppins font-bold text-white text-lg">Discord</p>
            <img src="assets/images/discord.png" alt="" class="w-8 lg:w-10 rounded-full">
          </a>
          <a href="" class="h-14 lg:h-16 w-full lg:w-64 bg-[#B8FF26] flex items-center justify-center gap-4 rounded hover:brightness-95">
            <p class="font-poppins font-bold text-black text-lg">VGen</p>
            <img src="assets/images/vgen.png" alt="" class="w-8 lg:w-10 rounded-full">
          </a>
          <a href="mailto:rizqyaadzra68@gmail.com?subject=Commission%20Request&body=Hello%20Luxqya!%20I%20would%20like%20to%20.%20.%20." class="h-14 lg:h-16 w-full lg:w-64 bg-[#FFFFFF] flex items-center justify-center gap-4 rounded hover:brightness-95">
            <p class="font-poppins font-bold text-black text-lg">Email</p>
            <img src="assets/images/email.png" alt="" class="w-8 lg:w-10 rounded-full">
          </a>
          <a href="https://x.com/luxqya_ra" class="h-14 lg:h-16 w-full lg:w-64 bg-[#171617] flex items-center justify-center gap-4 rounded hover:brightness-150">
            <p class="font-poppins font-bold text-white text-lg">X</p>
            <img src="assets/images/x.png" alt="" class="w-8 lg:w-10 rounded-full">
          </a>
        </div>

        <p class="font-poppins font-bold text-base lg:text-lg text-center lg:text-left">© Copyright 2025 Luxqya_ra.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import bg from '~/assets/images/bg-4.png'
import { navbarScroll } from "~/utils/animations/navbarScroll";
import { ref, onMounted, onBeforeUnmount } from "vue"
import { footerAnimation } from "~/utils/animations/footerAnimation"

const footerRoot = ref(null)
let cleanup

onMounted(() => {
  cleanup = footerAnimation(footerRoot)
})

onBeforeUnmount(() => {
  cleanup?.()
})
</script>

<style>
.custom-dashed::before {
  content: "";
  position: absolute;
  inset: 0;
  top: 20px; 
  left: 20px;
  right: 20px;
  height: calc(100% - 20px); 
  border-top: 4px dashed #FFEEDE;
  border-left: 4px dashed #FFEEDE;
  border-right: 4px dashed #FFEEDE;
  border-bottom: none;
  border-radius: 24px 24px 0 0;  
  pointer-events: none;
}
</style>

