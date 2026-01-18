<template>
  <div class="w-full">
    <Swiper
      @swiper="onSwiperInit"
      @progress="onSwiperProgress"
      :modules="modules"
      :slides-per-view="1.5"
      :space-between="8"
      :breakpoints="{
        '640': { slidesPerView: 2.2, spaceBetween: 10 },
        '768': { slidesPerView: 2.5, spaceBetween: 8 },
        '1024': { slidesPerView: 4.8, spaceBetween: 8 }
      }"
      
      :allow-touch-move="true"
      :grab-cursor="true"
      :free-mode="true" 
      :mousewheel="{ forceToAxis: true }"
      
      class="mySwiper"
    >
      <SwiperSlide v-for="(img, i) in images" :key="i">
        <div class="h-full overflow-visible pt-10 pb-4 px-1">
          <div
            class="aspect-[2/3] w-full shadow-lg border-[4px] md:border-[7px] border-white 
                   transition-all duration-300 cursor-pointer
                   hover:-translate-y-6 relative bg-gray-200"
            @click="openPopup(img)"
          >
            <picture class="w-full h-full block">
                <source media="(max-width: 767px)" :srcset="img.images.low">
                <source media="(min-width: 768px)" :srcset="img.images.med">
                <img
                  :src="img.images.med"
                  alt="Gallery image"
                  loading="lazy"
                  class="w-full h-full object-cover"
                  draggable="false" 
                />
            </picture>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

    <ScrollSlider
      v-if="!isMobile"
      ref="scrollSliderRef"
      class="hidden lg:flex mt-6" 
      :sliderWidth="Math.min(swiperWidth, 1200)"
      @move="onScrollSliderMove"
    />
  </div>

  <PopUpsGalleryPopUp
    v-model="popupImg"
    :image="popupImg?.images?.high"
  />
</template>

<script setup>
// 1. IMPORT MODULES (PENTING!)
import { FreeMode, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/vue";

// 2. IMPORT CSS MODULES
import "swiper/css";
import "swiper/css/free-mode";

import { ref, onMounted, onBeforeUnmount } from "vue";
import { galleryImages } from "@/utils/galleries.ts"; 

const images = galleryImages;

// Daftarkan Module agar fitur swipe/free mode jalan
const modules = [FreeMode, Mousewheel];

const isMobile = ref(false);
const swiperRef = ref(null);
const swiperWidth = ref(0);
const popupImg = ref(null);

// Ref untuk slider custom (jika ada method updateProgress di dalamnya)
const scrollSliderRef = ref(null);

const handleResize = () => {
  isMobile.value = window.innerWidth < 1024;
  if (swiperRef.value?.el) {
    swiperWidth.value = swiperRef.value.el.clientWidth;
  }
};

onMounted(() => {
  handleResize();
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});

const onSwiperInit = (swiper) => {
  swiperRef.value = swiper;
  swiperWidth.value = swiper.el.clientWidth;
};

// Fungsi 1: Slider Custom menggerakkan Swiper (Desktop)
const onScrollSliderMove = (progress) => {
  if (!swiperRef.value) return;
  const totalSlides = images.length - swiperRef.value.params.slidesPerView;
  const targetIndex = Math.max(0, Math.min(images.length - 1, progress * totalSlides));
  swiperRef.value.slideTo(targetIndex);
};

// Fungsi 2 (Opsional): Swiper menggerakkan Slider Custom
// Supaya kalau di-swipe pakai mouse di desktop, scroll bar ikut jalan
const onSwiperProgress = (swiper, progress) => {
    // Jika kamu punya prop/method di component ScrollSlider untuk update posisi, panggil disini
    // contoh: scrollSliderRef.value?.updatePosition(progress);
};

const openPopup = (imgObj) => {
  popupImg.value = imgObj; 
};
</script>

<style>
.mySwiper {
  width: 100%;
  /* Penting: pan-y membiarkan user scroll halaman ke bawah, tapi swipe kiri-kanan diambil alih Swiper */
  touch-action: pan-y !important; 
  pointer-events: auto;
}

.swiper-slide {
  overflow: visible !important;
}
</style>