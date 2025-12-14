<template>
  <div
    class="m-auto mt-2 bg-[#FFFAF0] rounded-md w-[1200px] py-4 cursor-pointer hover:bg-white"
    @click="toggle"
  >
    <div class="flex justify-between px-8 items-center">
      <h3 class="font-poppins text-lg font-bold">{{ question }}</h3>

      <div
        class="bg-primary px-7 py-1 flex items-center rounded transition-colors duration-300"
        :style="{ backgroundColor: isOpen ? '#009DA8' : '' }"
      >
        <div class="bg-secondary rounded-full flex items-center">
          <Icon
            name="mdi:chevron-double-down"
            size="28"
            class="transition-transform duration-300 bg-primary"
            :class="{ '-rotate-180': isOpen }"
            :style="{ backgroundColor: isOpen ? '#009DA8' : '' }"
          />
        </div>
      </div>
    </div>

    <div
      ref="answerEl"
      class="overflow-hidden px-8"
    >
      <p class="font-poppins leading-relaxed w-[1000px] text-gray-700 py-2">
        {{ answer }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import gsap from "gsap"

const props = defineProps({
  question: String,
  answer: String
})

const isOpen = ref(false)
const answerEl = ref(null)

onMounted(() => {
  gsap.set(answerEl.value, {
    height: 0,
    opacity: 1,
    y: -10
  })
})

const toggle = () => {
  isOpen.value = !isOpen.value

  if (isOpen.value) {
    gsap.to(answerEl.value, {
      height: "auto",
      opacity: 1,
      y: 0,
      duration: 0.45,
      ease: "power3.out"
    })
  } else {
    gsap.to(answerEl.value, {
      height: 0,
      opacity: 0,
      y: -6,
      duration: 0.35,
      ease: "power2.inOut"
    })
  }
}
</script>

