<template>
  <div class="bg-secondary/80 backdrop-blur-md hidden lg:flex items-center justify-between px-16 py-2">
    <button class="font-playfair font-black text-3xl" @click="navbarScroll('start')">LUXQYA</button>

    <div class="flex gap-5">
      <ButtonsNav1Button buttonName="About Me" @click="navbarScroll('about')" />
      <ButtonsNav1Button buttonName="Service" @click="navbarScroll('service')" />
      <ButtonsNav1Button buttonName="Gallery" @click="navbarScroll('gallery')" />
      <ButtonsNav1Button buttonName="Contact" @click="navbarScroll('contact')" />
    </div>

    <a
      href="https://trello.com/b/4dYYaxuy/luxqyas-commissions-list"
      class="bg-black hover:bg-primary py-5 px-6 flex transition-all duration-300 font-poppins font-black text-secondary rounded-full"
    >
      Work Queue
    </a>
  </div>
</template>

<script setup>
import { navbarScroll } from "~/utils/animations/navbarScroll";
</script>

