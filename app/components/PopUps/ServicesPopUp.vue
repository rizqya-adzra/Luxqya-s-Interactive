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
              <ButtonsLanguageSwitchButton/>
              <div>
                <p class="font-playfair font-bold text-2xl">1. Copyrights</p>
                <div class="font-poppins mt-2">
                  <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li>Using my artworks for AI or NFTs are PROHIBITED.</li>
                    <li>I have my own copyrights for my artworks, including advertising, portfolios, printing etc.</li>
                    <li>Credit me if you want to share my artworks publicly.</li>
                  </ul>
                </div>
              </div>
              <div>
                <p class="font-playfair font-bold text-2xl">2. Payment</p>
                <div class="font-poppins mt-2">
                  <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li>I will only proceed with the workflow after receiving an upfront payment of 50% of the total price. However, if you request me through VGEN, a full upfront payment is required.</li>
                    <li>After the final draft (sketch/lineart) is approved by the client, I will only continue the process once the full payment has been completed.</li>
                    <li>Payment method for local (Indonesia): Gopay.</li>
                    <li>Payment method for international buyers: VGEN / Ko-fi only.</li>
                    <li>No refunds allowed. Please spend carefully.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="bg-tertiary w-[550px] h-[570px] p-12 flex flex-col gap-6 rounded-r-lg overflow-y-auto">
              <div>
                <p class="font-playfair font-bold text-2xl">3. Pricing</p>
                <div class="font-poppins mt-2">
                  <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li>The price listed are for personal use only.</li>
                    <li>Commercial use is 2x the total price.</li>
                    <li>Merchandise or Fan-merch or Profit use is 3x the total price.</li>
                    <li>NDA (Non-Disclosure Agreement) fees are 2x the total price.</li>
                    <li>By purchasing a commission, the client agrees to the possibility of additional fees being added by the artist</li>
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