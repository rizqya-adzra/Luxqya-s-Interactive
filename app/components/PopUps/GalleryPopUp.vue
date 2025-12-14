<template>
  <Teleport to="body">
    <div
      v-if="modelValue"
      ref="overlay"
      class="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999]"
      @click.self="close"
    >
      <div ref="popupWrap" class="relative">
        <div class="absolute -top-20 -left-16 z-[100] mt-5">
          <img
            src="assets/images/stars/twinsrotated.png"
            alt=""
            class="w-44"
          />
        </div>
        <div class="absolute inset-0 translate-x-3 translate-y-3 bg-[#FFFAF0] rounded-md -z-10"></div>
        <div
          ref="card"
          class="popup-card relative px-10 py-6 rounded-md
                 shadow-[4px_4px_3px_rgba(0,0,0,0.2)]"
          @click.stop
        >
          <img
            v-if="modelValue?.images?.high"
            :src="modelValue.images.high"
            class="block max-w-[70vw] max-h-[70vh] w-auto h-auto object-contain
                   border-[14px] border-white shadow-md"
          />
          <div class="flex justify-between items-center mt-5">
            <p class="font-poppins font-bold">
              COMMISSION for:
              <a class="underline" :href="commissionerLink" target="_blank" rel="noopener noreferrer" >{{ getCommissioner }}</a>
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
import gsap from "gsap";

const props = defineProps<{ modelValue: any | null }>();
const emit = defineEmits(["update:modelValue"]);
const popupWrap = ref<HTMLElement | null>(null);

function close() {
  if (!popupWrap.value) {
    emit("update:modelValue", null);
    return;
  }

  gsap.to(popupWrap.value, {
    y: 1000,
    opacity: 0,
    duration: 0.6,
    ease: "power2.in",
    onComplete: () => {
      emit("update:modelValue", null);
      document.body.style.overflow = "";
    },
  });
}

watch(
  () => props.modelValue,
  async (val) => {
    if (!val) return;

    await nextTick();
    document.body.style.overflow = "hidden";

    gsap.fromTo(
      popupWrap.value,
      { y: 1000, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      }
    );
  }
);

const getCommissioner = computed(() => { if (!props.modelValue?.commissioner?.length) return "-"; return props.modelValue.commissioner.map((c: any) => c.name).join(", "); });
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

