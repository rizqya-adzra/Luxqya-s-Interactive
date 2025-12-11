<template>
  <div 
    v-show="modelValue"
    class="fixed inset-0 bg-black/70 flex items-center justify-center z-[999]"
    @click="close"
  >
    <Transition name="slide-up">
      <div
        v-if="modelValue"
        class="relative bg-[#FFFAF0] px-10 mt-6 py-6 rounded-md shadow-[4px_4px_3px_rgba(0,0,0,0.2)] inline-block"
        @click.stop
        :style="{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }"
      >
        <div class="absolute inset-0 translate-x-2 translate-y-2 scale-96 bg-[#FFFAF0] rounded-md -z-10"></div>

        <div class="absolute -top-20 -left-16">
          <img src="assets/images/stars/twinsrotated.png" alt="" class="w-44" />
        </div>

        <img 
          :src="modelValue.src"
          class="block max-w-[70vw] max-h-[70vh] w-auto h-auto object-contain border-[14px] border-white shadow-md"
        />
        <div class="flex justify-between items-center mt-5">
          <p class="font-poppins font-bold">
            COMMISSION for: 
            <span class="font-poppins font-bold underline-offset-1 underline">
              {{ getCommissioner }}
            </span>
          </p>
          <ButtonsGalleryButton :items="mappedSources" />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import bg from '~/assets/images/bg-4.png'

const props = defineProps({
  modelValue: {
    type: Object,
    default: null
  }
});

const emit = defineEmits(['update:modelValue']);

function close() {
  emit('update:modelValue', null);
}

const getCommissioner = computed(() => {
  if (!props.modelValue) return "";
  const file = props.modelValue.src.split("/").pop();
  return file?.startsWith("@") ? file.replace(".jpg", "") : "Anonymous";
});

const mappedSources = computed(() => {
  if (!props.modelValue) return [];

  return props.modelValue.sources.map(s => ({
    type: s.name.toLowerCase(),
    link: s.url
  }));
});
</script>

<style>
.slide-up-enter-from {
  transform: translateY(500px);
}

.slide-up-enter-to {
  transform: translateY(0);
}

.slide-up-leave-from {
  transform: translateY(0);
}

.slide-up-leave-to {
  transform: translateY(500px);
}

.slide-up-enter-active {
  transition: all 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}


.slide-up-leave-active {
  transition: all 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}
</style>