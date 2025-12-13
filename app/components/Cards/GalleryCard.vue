<template>
  <div class="w-full">
    <Swiper
      @swiper="onSwiperInit"
      :slides-per-view="isMobile ? 1 : 4.8"
      :space-between="8"
      :allow-touch-move="false"
      class="mySwiper"
    >
      <SwiperSlide v-for="(img, i) in images" :key="i">
        <div class="h-full overflow-visible pt-6">
          <div
            class="aspect-[2/3] w-full shadow-lg border-[7px] border-white 
                   transition-all duration-300 cursor-pointer
                   hover:-translate-y-6"
            @click="openPopup(img)"
          >
            <img
              :src="img.images.low"
              :srcset="`${img.images.low} 480w, ${img.images.med} 1024w`"
              sizes="(max-width: 768px) 90vw, 300px"
              loading="lazy"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

    <ScrollSlider
      class="mt-8"
      :sliderWidth="Math.min(swiperWidth, 1200)"
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
import { ref, onMounted } from "vue";
import { galleryImages } from "@/utils/galleries.ts"; 

const images = galleryImages;

const isMobile = ref(false);
const swiperRef = ref(null);
const swiperWidth = ref(0);
const popupImg = ref(null);

onMounted(() => {
  isMobile.value = window.innerWidth < 768;

  const updateWidth = () => {
    if (swiperRef.value?.el) {
      swiperWidth.value = swiperRef.value.el.clientWidth;
    }
  };

  updateWidth();
  window.addEventListener("resize", updateWidth);
});

const onSwiperInit = (swiper) => {
  swiperRef.value = swiper;
  swiperWidth.value = swiper.el.clientWidth;
};

const onScrollMove = (progress) => {
  if (!swiperRef.value) return;

  const index = Math.round(progress * (images.length - 1));
  swiperRef.value.slideTo(index);
};

const openPopup = (imgObj) => {
  popupImg.value = imgObj; 
};
</script>

<style>
.mySwiper {
  width: 100%;
  touch-action: none !important;
  pointer-events: auto;
}
</style>
