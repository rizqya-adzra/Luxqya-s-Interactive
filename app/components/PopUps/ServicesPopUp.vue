<template>
  <div
    v-if="open"
    ref="overlay"
    class="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999] p-4"
    @click.self="closeModal"
  >
    <div
      ref="modal"
      class="relative bg-primary rounded-3xl w-full max-w-[550px] lg:max-w-none lg:w-[1200px] h-auto lg:h-[680px] p-6 lg:p-12 flex justify-center items-center z-50 shadow-xl overflow-hidden outline-4 outline-secondary outline-dashed outline-offset-[-15px] lg:outline-offset-[-25px]"
      @click.stop
    >
      <div class="flex flex-col lg:flex-row w-full h-full items-center lg:items-start justify-center relative">
        
        <div 
          class="bg-secondary w-full lg:w-[550px] h-[500px] lg:h-[570px] p-6 lg:p-10 flex-col gap-6 rounded-lg lg:rounded-l-lg lg:rounded-r-none overflow-y-auto transition-all duration-300"
          :class="currentPage === 0 ? 'flex' : 'hidden lg:flex'"
        >
          <div>
            <ButtonsLanguageSwitchButton />
          </div>
          <div>
            <p class="font-playfair font-bold text-xl lg:text-2xl">{{ t('copyrights').header }}</p>
            <div class="font-poppins mt-2">
              <ul class="list-disc pl-5 space-y-1 text-sm">
                <li>{{ t('copyrights').one }}</li>
                <li>{{ t('copyrights').two }}</li>
                <li>{{ t('copyrights').three }}</li>
              </ul>
            </div>
          </div>
          <div>
            <p class="font-playfair font-bold text-xl lg:text-2xl">{{ t('payment').header }}</p>
            <div class="font-poppins mt-2">
              <ul class="list-disc pl-5 space-y-1 text-sm">
                <li>{{ t('payment').one }}</li>
                <li>{{ t('payment').two }}</li>
                <li>{{ t('payment').three }}</li>
                <li>{{ t('payment').four }}</li>
                <li>{{ t('payment').five }}</li>
              </ul>
            </div>
          </div>
        </div>

        <div 
          class="bg-tertiary w-full lg:w-[550px] h-[500px] lg:h-[570px] p-6 lg:p-12 flex-col gap-6 rounded-lg lg:rounded-r-lg lg:rounded-l-none overflow-y-auto transition-all duration-300"
          :class="currentPage === 1 ? 'flex' : 'hidden lg:flex'"
        >
          <div>
            <p class="font-playfair font-bold text-xl lg:text-2xl">{{ t('pricing').header }}</p>
            <div class="font-poppins mt-2">
              <ul class="list-disc pl-5 space-y-1 text-sm">
                <li>{{ t('pricing').one }}</li>
                <li>{{ t('pricing').two }}</li>
                <li>{{ t('pricing').three }}</li>
                <li>{{ t('pricing').four }}</li>
                <li>{{ t('pricing').five }}</li>
              </ul>
            </div>
          </div>
          <div class="w-full">
            <table class="w-full border-collapse font-poppins text-center text-xs lg:text-sm">
              <thead>
                <tr class="bg-complimentary text-white">
                  <th class="p-2 lg:p-4">Can Do</th>
                  <th class="p-2 lg:p-4">Can't Do</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-secondary"><td class="p-2 lg:p-3 border">FANART</td><td class="p-2 lg:p-3 border">NSFW</td></tr>
                <tr class="bg-secondary"><td class="p-2 lg:p-3 border">COUPLE / YUMESHIP</td><td class="p-2 lg:p-3 border">FURRY</td></tr>
                <tr class="bg-secondary"><td class="p-2 lg:p-3 border">KEMONOMIMI</td><td class="p-2 lg:p-3 border">MECHA</td></tr>
                <tr class="bg-secondary"><td class="p-2 lg:p-3 border">OC / PERSONA</td><td class="p-2 lg:p-3 border">GORE (SLIGHTLY OK!)</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="absolute bottom-2 lg:hidden w-full px-4 flex justify-between pointer-events-none">
            <button 
                v-if="currentPage === 1"
                @click="currentPage = 0"
                class="pointer-events-auto bg-white/80 text-black p-3 rounded-full shadow-lg hover:bg-white transition-transform active:scale-95 absolute left-[-10px] top-1/2 transform -translate-y-1/2"
                aria-label="Previous Page"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>

            <button 
                v-if="currentPage === 0"
                @click="currentPage = 1"
                class="pointer-events-auto bg-white/80 text-black p-3 rounded-full shadow-lg hover:bg-white transition-transform active:scale-95 absolute right-[-10px] top-1/2 transform -translate-y-1/2"
                aria-label="Next Page"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>
        
        <div class="flex lg:hidden gap-2 absolute bottom-[-15px]">
            <span class="block w-2 h-2 rounded-full transition-colors" :class="currentPage === 0 ? 'bg-secondary' : 'bg-gray-300'"></span>
            <span class="block w-2 h-2 rounded-full transition-colors" :class="currentPage === 1 ? 'bg-tertiary' : 'bg-gray-300'"></span>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, nextTick } from "vue";
import { popupEnter, popupLeave } from "~/composables/animations/popUpAnimation";
import { useLanguage } from '@/composables/useLanguage'

const { t } = useLanguage()

const props = defineProps({
  open: Boolean
});

const emit = defineEmits(["close"]);

const modal = ref(null);
const overlay = ref(null);
const currentPage = ref(0); 

const closeModal = () => {
  if (!modal.value || !overlay.value) {
    emit("close");
    return;
  }

  popupLeave(modal.value, () => {
    emit("close");
    document.body.style.overflow = "";
    setTimeout(() => { currentPage.value = 0 }, 300);
  });
};

watch(
  () => props.open,
  async (val) => {
    if (!val) return;

    await nextTick();
    document.body.style.overflow = "hidden";

    if (modal.value) {
      popupEnter(modal.value);
    }
  }
);
</script>