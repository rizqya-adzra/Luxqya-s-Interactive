<template>
  <div>
    <div class="relative w-fit m-auto">
      <div
        v-for="(layer, i) in visibleLayers"
        :key="i"
        class="absolute w-[210px] h-[65px] bg-[#FFFAF0]
               shadow-[3px_0_2px_rgba(0,0,0,0.1)]
               transition-transform duration-500 ease-out"
        :class="[layer.top, layer.left]"
        :style="layerTransform"
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
      class="w-[760px] h-[480px] m-auto bg-[#FFFAF0]
             rounded-xl p-10 shadow-md relative z-10"
      :style="{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }"
    >
      <Transition
        :name="direction === 'next' ? 'text-next' : 'text-prev'"
        mode="out-in"
      >
        <div :key="currentIndex">
          <div class="flex items-start justify-between">
            <div class="flex flex-col gap-2">
              <div class="flex items-end gap-2">
                <p class="text-primary font-poppins font-bold">by</p>
                <p class="text-primary font-poppins font-bold text-4xl">
                  {{ currentReview.name }}
                </p>
              </div>

              <div class="flex gap-2">
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
                size="45"
                class="text-complimentary"
              />
            </div>
          </div>

          <div class="mt-24">
            <p class="font-poppins font-medium text-2xl max-w-[700px]">
              <span class="font-playfair font-bold text-5xl">“</span>
              {{ currentReview.review }}
              <span class="font-playfair font-bold text-5xl rotate-180">“</span>
            </p>
          </div>

          <a
            :href="currentReview.link"
            class="mt-20 font-poppins font-bold py-3 px-10 rounded-full inline-block"
            :class="sourceButtonClass"
          >
            {{ "On " + currentReview.from }}
          </a>
        </div>
      </Transition>
      <div class="absolute right-[-150px] top-[285px] flex flex-col gap-4">
        <ButtonsTestimonyButton
          buttonName="Next"
          color="primary"
          :disabledState="currentIndex === reviews.length - 1"
          @click="next"
        />
        <ButtonsTestimonyButton
          buttonName="Previous"
          color="complimentary"
          :disabledState="currentIndex === 0"
          @click="prev"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import bg from '~/assets/images/bg-3.png'
import { reviews } from '~/utils/reviews.ts'

const currentIndex = ref(0)
const currentReview = computed(() => reviews[currentIndex.value])

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

</script>

<style>
.text-next-enter-from {
  opacity: 0;
  transform:
    translateX(30px)
    rotate(2deg)
    scale(0.98);
}

.text-next-enter-to {
  opacity: 1;
  transform:
    translateX(0)
    rotate(0deg)
    scale(1);
}

.text-next-leave-from {
  opacity: 1;
  transform:
    translateX(0)
    rotate(0deg)
    scale(1);
}

.text-next-leave-to {
  opacity: 0;
  transform:
    translateX(-30px)
    rotate(-2deg)
    scale(0.98);
}

.text-prev-enter-from {
  opacity: 0;
  transform:
    translateX(-30px)
    rotate(-2deg)
    scale(0.98);
}

.text-prev-enter-to {
  opacity: 1;
  transform:
    translateX(0)
    rotate(0deg)
    scale(1);
}

.text-prev-leave-from {
  opacity: 1;
  transform:
    translateX(0)
    rotate(0deg)
    scale(1);
}

.text-prev-leave-to {
  opacity: 0;
  transform:
    translateX(30px)
    rotate(2deg)
    scale(0.98);
}

.text-next-enter-active,
.text-next-leave-active,
.text-prev-enter-active,
.text-prev-leave-active {
  transition:
    transform 0.55s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.4s ease;
  transform-origin: center;
  will-change: transform, opacity;
}
</style>
