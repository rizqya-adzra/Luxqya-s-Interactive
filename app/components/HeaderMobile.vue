<template>
  <div class="fixed top-4 right-6 z-50 lg:hidden">
    <div
      :class="[
        'bg-tertiary/80 backdrop-blur-md',
        'transition-all duration-300 ease-out',
        // PERBAIKAN 1: Tambahkan 'overflow-hidden' di sini
        'overflow-hidden', 
        isOpen
          ? 'rounded-2xl h-[395px] w-[85vw]'
          : 'rounded-xl h-[48px] w-[48px]'
      ]"
      class="origin-top-right shadow-lg"
    >
      <button
        class="w-full h-[48px] flex items-center justify-end pr-[9px] shrink-0"
        @click="isOpen = !isOpen"
      >
        <Icon
          :name="isOpen ? 'mdi:close' : 'mdi:menu'"
          size="28"
          class="transition-transform duration-300"
        />
      </button>

      <div
        class="px-4 pt-4 flex flex-col gap-3 transition-opacity duration-300"
        :class="isOpen ? 'opacity-100 pointer-events-auto delay-100' : 'opacity-0 pointer-events-none'"
      >
        <ButtonsNav1Button buttonName="About Me" @click="handleScroll('about')" />
        <ButtonsNav1Button buttonName="Service" @click="handleScroll('service')" />
        <ButtonsNav1Button buttonName="Gallery" @click="handleScroll('gallery')" />
        <ButtonsNav1Button buttonName="Contact" @click="handleScroll('contact')" />

        <a
          href="https://trello.com/b/4dYYaxuy/luxqyas-commissions-list"
          class="mt-2 bg-black hover:bg-primary
                 py-3 rounded-full text-center
                 font-poppins font-black text-secondary"
        >
          Work Queue
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { navbarScroll } from "~/composables/animations/navbarScroll";

const isOpen = ref(false);

const handleScroll = (id) => {
  navbarScroll(id);
  isOpen.value = false;
}
</script>