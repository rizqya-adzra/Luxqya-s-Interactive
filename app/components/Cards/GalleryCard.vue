<template>
  <div class="w-full">
    <Swiper
      @swiper="onSwiperInit"
      :slides-per-view="1.5" 
      :space-between="8"
      :breakpoints="{
        '640': {
          slidesPerView: 2.2,
          spaceBetween: 10
        },
        '768': {
          slidesPerView: 2.5,
          spaceBetween: 8
        },
        '1024': {
          slidesPerView: 4.8,
          spaceBetween: 8
        }
      }"
      :allow-touch-move="isMobile" 
      class="mySwiper"
    >
      <SwiperSlide v-for="(img, i) in images" :key="i">
        <div class="h-full overflow-visible pt-10 pb-4 px-1">
          <div
            class="aspect-[2/3] w-full shadow-lg border-[4px] md:border-[7px] border-white 
                   transition-all duration-300 cursor-pointer
                   hover:-translate-y-6"
            @click="openPopup(img)"
          >
            <img
              :src="img.images.low"
              :srcset="`${img.images.low} 480w, ${img.images.med} 1024w`"
              sizes="(max-width: 768px) 80vw, 300px"
              loading="lazy"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

    <ScrollSlider
      class="mt-8"
      :sliderWidth="isMobile ? swiperWidth * 0.9 : Math.min(swiperWidth, 1200)"
      @move="onScrollMove"
    />
  </div>

  <PopUpsGalleryPopUp
    v-model="popupImg"
    :image="popupImg?.images?.high"
  />
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { ref, onMounted, onBeforeUnmount } from "vue";
import { galleryImages } from "@/utils/galleries.ts"; 

const images = galleryImages;

const isMobile = ref(false);
const swiperRef = ref(null);
const swiperWidth = ref(0);
const popupImg = ref(null);

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

const onScrollMove = (progress) => {
  if (!swiperRef.value) return;
  // Perbaikan logika slideTo untuk slider yang lebih smooth
  const totalSlides = images.length - swiperRef.value.params.slidesPerView;
  const targetIndex = Math.max(0, Math.min(images.length - 1, progress * totalSlides));
  swiperRef.value.slideTo(targetIndex);
};

const openPopup = (imgObj) => {
  popupImg.value = imgObj; 
};
</script>

<style>
.mySwiper {
  width: 100%;
  /* allow touch move diaktifkan lewat props di mobile */
  touch-action: pan-y !important; 
  pointer-events: auto;
}

/* Memastikan bayangan shadow tidak terpotong saat hover di mobile */
.swiper-slide {
  overflow: visible !important;
}
</style>