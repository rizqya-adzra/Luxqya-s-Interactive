<template>
    <div
      v-if="open"
      ref="overlay"
      class="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999]"
      @click.self="closeModal"
    >
        <div
          ref="modal"
          class="relative bg-primary rounded-3xl w-[1200px] h-[680px] p-12 flex justify-center items-center z-50 shadow-xl overflow-y-auto outline-4 outline-secondary outline-dashed outline-offset-[-25px]"
          @click.stop
        >
          <div class="flex">
            <div class="bg-secondary w-[550px] h-[570px] p-10 flex flex-col gap-6 rounded-l-lg overflow-y-auto">
              <div>
                <ButtonsLanguageSwitchButton/>
              </div>
              <div>
                <p class="font-playfair font-bold text-2xl">{{ t('copyrights').header }}</p>
                <div class="font-poppins mt-2">
                  <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li>{{ t('copyrights').one }}</li>
                    <li>{{ t('copyrights').two }}</li>
                    <li>{{ t('copyrights').three }}</li>
                  </ul>
                </div>
              </div>
              <div>
                <p class="font-playfair font-bold text-2xl">{{ t('payment').header }}</p>
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
            <div class="bg-tertiary w-[550px] h-[570px] p-12 flex flex-col gap-6 rounded-r-lg overflow-y-auto">
              <div>
                <p class="font-playfair font-bold text-2xl">{{ t('pricing').header }}</p>
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
                <table class="w-full border-collapse font-poppins text-center">
                  <thead>
                    <tr class="bg-complimentary text-white">
                      <th class="p-4">Can Do</th>
                      <th class="p-4">Can't Do</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-secondary"><td class="p-3 border">FANART</td><td class="p-3 border">NSFW</td></tr>
                    <tr class="bg-secondary"><td class="p-3 border">COUPLE / YUMESHIP</td><td class="p-3 border">FURRY</td></tr>
                    <tr class="bg-secondary"><td class="p-3 border">KEMONOMIMI</td><td class="p-3 border">MECHA</td></tr>
                    <tr class="bg-secondary"><td class="p-3 border">OC / PERSONA</td><td class="p-3 border">GORE (SLIGHTLY OK!)</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, nextTick } from "vue";
import { popupEnter, popupLeave } from "~/utils/animations/popUpAnimation";
import { useLanguage } from '@/composables/useLanguage'

const { t } = useLanguage()

const props = defineProps({
  open: Boolean
});

const emit = defineEmits(["close"]);

const modal = ref(null);
const overlay = ref(null);

const closeModal = () => {
  if (!modal.value || !overlay.value) {
    emit("close");
    return;
  }

  popupLeave(modal.value, () => {
    emit("close");
    document.body.style.overflow = "";
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