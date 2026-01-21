<template>
  <Teleport to="body">
    <div
      v-if="modelValue"
      ref="overlay"
      class="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999] p-4 sm:p-0"
      @click.self="close"
    >
      <div ref="popupWrap" class="relative max-w-full">
        
        <div class="absolute -top-10 -left-4 w-24 sm:-top-20 sm:-left-16 sm:w-44 z-[100] mt-5 pointer-events-none">
          <img
            src="assets/images/stars/twinsrotated.png"
            alt=""
            class="w-full h-auto"
          />
        </div>

        <div class="absolute inset-0 translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 bg-[#FFFAF0] rounded-md -z-10"></div>
        
        <div
          ref="card"
          class="popup-card relative px-5 py-5 sm:px-10 sm:py-6 rounded-md shadow-[4px_4px_3px_rgba(0,0,0,0.2)] max-w-full"
          @click.stop
        >
          
          <img
            v-if="modelValue?.images?.high"
            :src="modelValue.images.high"
            class="block 
                   max-w-[85vw] max-h-[60vh] 
                   sm:max-w-[70vw] sm:max-h-[70vh] 
                   w-auto h-auto object-contain
                   border-[6px] sm:border-[14px] border-white shadow-md mx-auto"
          />

          <div class="flex flex-col sm:flex-row justify-between items-center mt-4 sm:mt-5 gap-3 sm:gap-0 text-center sm:text-left">
            <p class="font-poppins font-bold text-sm sm:text-base">
              COMMISSION for:
              <br class="block sm:hidden" /> <a class="underline break-all" :href="commissionerLink" target="_blank" rel="noopener noreferrer" >{{ getCommissioner }}</a>
            </p>
            
            <ButtonsGalleryButton :items="mappedSources" />
          </div>

        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, ref, watch, nextTick } from "vue";
import { popupEnter, popupLeave } from "~/composables/animations/popUpAnimation";

const props = defineProps<{ modelValue: any | null }>();
const emit = defineEmits(["update:modelValue"]);
const popupWrap = ref<HTMLElement | null>(null);

function close() {
  if (!popupWrap.value) {
    emit("update:modelValue", null);
    return;
  }

  popupLeave(popupWrap.value, () => {
    emit("update:modelValue", null);
    document.body.style.overflow = "";
  });
}

watch(
  () => props.modelValue,
  async (val) => {
    if (!val) return;

    await nextTick();
    document.body.style.overflow = "hidden";

    if (popupWrap.value) {
      popupEnter(popupWrap.value);
    }
  }
);

const getCommissioner = computed(() => { 
    if (!props.modelValue?.commissioner?.length) return "-"; 
    return props.modelValue.commissioner.map((c: any) => c.name).join(", "); 
});

const commissionerLink = computed(() => {
  if (!props.modelValue?.commissioner?.length) return "#";
  return props.modelValue.commissioner[0].url || "#";
});

const mappedSources = computed(() => {
  if (!props.modelValue?.sources) return [];
  return props.modelValue.sources.map((s: any) => ({
    type: s.name.toLowerCase(),
    link: s.url,
  }));
});
</script>

<style>
.popup-card {
  position: relative;
  background-color: #FFFAF0;
  overflow: hidden;
}

.popup-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("~/assets/images/bg-4.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 0;
}

.popup-card > * {
  position: relative;
  z-index: 1;
}
</style>