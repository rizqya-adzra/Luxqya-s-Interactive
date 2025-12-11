<template>
  <div class="relative m-auto bg-primary rounded-t-3xl w-[1230px] h-[710px] flex justify-center items-center z-20 shadow-xl custom-dashed">
    <div class="bg-[#FFFAF0] w-[1100px] h-[600px] mt-10 p-14 flex flex-col justify-center z-64 gap-10 rounded-lg shadow-[4px_4px_3px_rgba(0,0,0,0.2)]"
      :style="{
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }"
    >
      <div class="absolute top-24 left-20 w-[1100px] h-[600px] bg-[#FFFAF0] rounded-xl -z-10"></div>
      <div class="space-y-3">
        <p class="font-playfair font-bold text-6xl">Have an Intriguing Idea?</p>
        <p class="font-poppins font-bold text-lg">Let's bring it to life together!</p>
      </div>
      <div class="flex justify-between items-center gap-28">
        <p class="font-poppins">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatges. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatges.</p>
        <div class="flex flex-col gap-4 justify-start">
          <p class="font-poppins font-bold text-3xl">Sections</p>
          <div class="flex justify-between gap-32 items-center">
            <div class="space-y-2">
              <ButtonsFooterButton buttonName="Home"/>
              <ButtonsFooterButton buttonName="About"/>
              <ButtonsFooterButton buttonName="Service"/>
            </div>
            <div class="space-y-2">
              <ButtonsFooterButton buttonName="Review"/>
              <ButtonsFooterButton buttonName="Gallery"/>
              <ButtonsFooterButton buttonName="FAQ"/>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-between gap-2">
        <a href="https://vgen.co/luxqya_ra" class="h-16 w-64 bg-[#5865F2] flex items-center justify-center gap-4 rounded hover:brightness-95">
          <p class="font-poppins font-bold text-white text-lg">Discord</p>
          <img src="assets/images/discord.png" alt="" class="w-10 rounded-full">
        </a>
        <a href="" class="h-16 w-64 bg-[#B8FF26] flex items-center justify-center gap-4 rounded hover:brightness-95">
          <p class="font-poppins font-bold text-black text-lg">VGen</p>
          <img src="assets/images/vgen.png" alt="" class="w-10 rounded-full">
        </a>
        <a href="mailto:rizqyaadzra68@gmail.com?subject=Commission%20Request&body=Hello%20Luxqya!%20I%20would%20like%20to%20.%20.%20." class="h-16 w-64 bg-[#FFFFFF] flex items-center justify-center gap-4 rounded hover:brightness-95">
          <p class="font-poppins font-bold text-black text-lg">Email</p>
          <img src="assets/images/email.png" alt="" class="w-10 rounded-full">
        </a>
        <a href="https://x.com/luxqya_ra" class="h-16 w-64 bg-[#171617] flex items-center justify-center gap-4 rounded hover:brightness-150">
          <p class="font-poppins font-bold text-white text-lg">X</p>
          <img src="assets/images/x.png" alt="" class="w-10 rounded-full">
        </a>
      </div>
      <p class="font-poppins font-bold text-lg">© Copyright 2025 Luxqya_ra.</p>
    </div>
  </div>
</template>

<script setup>
import bg from '~/assets/images/bg-4.png'

</script>

<style scoped>
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

