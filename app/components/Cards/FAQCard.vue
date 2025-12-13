<template>
  <div class="m-auto mt-2 bg-[#FFFAF0] rounded-md w-[1200px] py-4 cursor-pointer hover:bg-white" @click="toggle">
    <div class="flex justify-between px-8 items-center">
      <h3 class="font-poppins text-lg font-bold">{{ question }}</h3>
      <div :class="['bg-primary px-7 py-1 flex items-center rounded', { 'bg-secondary': isOpen }]">
        <div class="bg-secondary rounded-full flex items-center">
          <Icon
            name="mdi:chevron-double-down"
            :class="['transition-transform duration-300 bg-primary', { 'rotate-180': isOpen }]"
            size="28"
          />
        </div>
      </div>
    </div>

    <transition name="faq">
      <p 
        v-if="isOpen"
        class="mt-2 font-poppins leading-relaxed px-8 w-[1000px]"
      >
        {{ answer }}
      </p>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  question: String,
  answer: String
});

const isOpen = ref(false);

const toggle = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style>
.faq-enter-from,
.faq-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

.faq-enter-active,
.faq-leave-active {
  transition: all 0.25s ease;
}
</style>
