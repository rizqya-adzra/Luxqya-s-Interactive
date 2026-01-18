<template>
  <div class="w-full px-4 py-8 overflow-hidden">
    <div class="relative w-full max-w-[760px] m-auto">
      
      <div class="relative w-fit m-auto scale-75 lg:scale-100 -mb-2">
        <div
          v-for="(layer, i) in visibleLayers"
          :key="i"
          class="absolute w-[210px] h-[65px] bg-[#FFFAF0]
                 shadow-[3px_0_2px_rgba(0,0,0,0.1)]
                 transition-transform duration-500 ease-out"
          :class="[layer.top, layer.left]"
        />

        <div
          class="relative w-[240px] h-[65px] bg-complimentary
                 flex justify-center items-center gap-1 z-10
                 shadow-[3px_0_2px_rgba(0,0,0,0.1)]
                 transition-transform duration-500 ease-out"
          :style="mainCardTransform"
        >
          <Icon name="mdi:star" size="28" class="text-secondary rotate-45" />
          <p class="font-poppins text-secondary font-bold text-lg">
            {{ currentReview.id.toString().padStart(2, '0') }}
          </p>
        </div>
      </div>

      <div
        class="w-full lg:w-[760px] h-auto min-h-[450px] lg:h-[480px] m-auto bg-[#FFFAF0]
               rounded-xl p-6 md:p-10 shadow-md relative z-10 flex flex-col"
        :style="{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }"
      >
        <div ref="textEl" class="flex-1 flex flex-col">
          <div class="flex flex-col sm:flex-row items-start justify-between gap-4 sm:gap-0">
            <div class="flex flex-col gap-1 sm:gap-2">
              <div class="flex items-end gap-2">
                <p class="text-primary font-poppins font-bold text-sm sm:text-base">by</p>
                <p class="text-primary font-poppins font-bold text-2xl sm:text-3xl md:text-4xl">
                  {{ currentReview.name }}
                </p>
              </div>

              <div class="flex gap-2 text-sm sm:text-base">
                <p class="font-poppins">order:</p>
                <p class="font-poppins">
                  {{ currentReview.order }} {{ currentReview.type }}
                </p>
              </div>
            </div>

            <div class="flex">
              <Icon
                v-for="n in currentReview.stars"
                :key="n"
                name="mdi:star"
                class="text-complimentary w-[30px] h-[30px] sm:w-[45px] sm:h-[45px]" 
              />
            </div>
          </div>

          <div class="mt-12 md:mt-24 mb-auto">
            <p class="font-poppins font-medium text-lg md:text-2xl max-w-[700px] leading-relaxed">
              <span class="font-playfair font-bold text-3xl md:text-5xl">“</span>
              {{ currentReview.review }}
              <span class="font-playfair font-bold text-3xl md:text-5xl rotate-180">“</span>
            </p>
          </div>

          <div class="mt-10 md:mt-20">
            <a
              :href="currentReview.link"
              class="font-poppins font-bold py-2 px-6 md:py-3 md:px-10 rounded-full inline-block text-sm md:text-base"
              :class="sourceButtonClass"
            >
              {{ "On " + currentReview.from }}
            </a>
          </div>
        </div>
      </div>

      <div class="relative mt-6 flex flex-row justify-center gap-4 
                  lg:absolute lg:right-[-150px] lg:top-[285px] lg:mt-0 lg:flex-col lg:justify-start">
        <div class="order-1 lg:order-2">
             <ButtonsTestimonyButton
            buttonName="Previous"
            color="complimentary"
            :disabledState="currentIndex === 0"
            @click="prev"
          />
        </div>
        
        <div class="order-2 lg:order-1">
          <ButtonsTestimonyButton
            buttonName="Next"
            color="primary"
            :disabledState="currentIndex === reviews.length - 1"
            @click="next"
          />
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import bg from '~/assets/images/bg-3.png'
import { reviews } from '~/utils/reviews.ts'
import { ref, watch, nextTick, onMounted, computed } from "vue" // Added computed import
import gsap from "gsap"

const currentIndex = ref(0)
const currentReview = computed(() => reviews[currentIndex.value])
const textEl = ref(null)

const layers = [
  { top: 'top-2', left: 'left-12' },
  { top: 'top-1', left: 'left-9' },
]

const visibleLayers = computed(() => {
  const maxLayers = layers.length
  const count = maxLayers - currentIndex.value
  return layers.slice(0, Math.max(count, 0))
})

const mainCardTransform = computed(() => {
  const len = visibleLayers.value.length

  if (len === 2) {
    return "transform: translate( -0.5rem, 0rem )" 
  }
  if (len === 1) {
    return "transform: translate( 0.5rem, 0rem )"
  }

  return "transform: translate( 1rem, 0rem )" 
})

const direction = ref("next") 

const next = () => {
  if (currentIndex.value < reviews.length - 1) {
    direction.value = "next"
    currentIndex.value++
  }
}

const prev = () => {
  if (currentIndex.value > 0) {
    direction.value = "prev"
    currentIndex.value--
  }
}

const sourceButtonClass = computed(() => {
  const from = currentReview.value.from.toLowerCase()

  if (from === "vgen") return "bg-complimentary text-white"
  if (from === "x") return "bg-black text-white"
  if (from === "instagram") return "bg-primary text-white"

  return "bg-complimentary text-white"
})

onMounted(() => {
  gsap.set(textEl.value, {
    opacity: 1,
    y: 0
  })
})

watch(currentIndex, async () => {
  if (!textEl.value) return

  await nextTick()

  const fromX = direction.value === "next" ? 50 : -50

  gsap.fromTo(
    textEl.value,
    {
      opacity: 0,
      x: fromX,
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.55,
      ease: "power3.out"
    }
  )
})
</script>