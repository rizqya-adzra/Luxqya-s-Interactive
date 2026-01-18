<template>
  <div class="flex flex-col-reverse lg:flex-row 
           lg:max-w-[1200px]
           min-h-[450px]
           md:max-w-[650px]
           w-full
           mx-auto
           rounded-2xl bg-[#FFFAF0]
           justify-between
           overflow-hidden shadow-lg"> <div class="flex flex-col gap-8
           px-7 lg:px-9
           py-9 lg:py-5
           text-black
           w-full lg:w-[65%]">
      
      <ButtonsLanguageSwitchButton />

      <Transition name="section-fade" mode="out-in">
        <div :key="activeSection">

          <section v-if="activeSection === 'about'" key="about" class="space-y-5 text-start">
            <div class="grid grid-cols-[110px_auto] sm:grid-cols-[150px_auto] gap-y-2 mb-10 font-poppins text-base sm:text-xl">
              <div class="font-bold space-y-2">
                <p>{{ t('name') }}</p>
                <p>{{ t('call') }}</p>
                <p>{{ t('birthday') }}</p>
                <p>{{ t('language') }}</p>
              </div>
              <div class="font-bold text-primary space-y-2">
                <p>: Luxqya Ra</p>
                <p>: Lux / Qya</p>
                <p>: 31st July</p>
                <p>: {{ t('language1') }}</p>
              </div>
            </div>

            <p class="font-poppins text-base sm:text-lg text-start w-full sm:w-[90%] leading-relaxed">
              {{ t('get_to_know_me') }}
            </p>
          </section>

          <section v-if="activeSection === 'likeDislike'" key="like" class="space-y-5 mt-5 lg:mt-10">
            <div class="flex flex-col sm:flex-row gap-8 sm:gap-10 w-full sm:w-[90%]">
              <div class="flex flex-col gap-3 flex-1">
                <p class="font-poppins font-black text-xl text-start bg-red-100 w-fit px-2 rounded">I LIKE</p>
                <p class="font-poppins text-base sm:text-lg text-start">
                  {{ t('like') }}
                </p>
              </div>
              <div class="flex flex-col gap-3 flex-1">
                <p class="font-poppins font-black text-primary text-xl text-start bg-blue-50 w-fit px-2 rounded">I DON’T LIKE</p>
                <p class="font-poppins text-base sm:text-lg text-start">
                  {{ t('dislike') }}
                </p>
              </div>
            </div>
          </section>

          <section v-if="activeSection === 'hobby'" key="hobby" class="space-y-5">
            <p class="font-poppins font-black text-xl text-start mt-5 lg:mt-10">{{ t('hobby') }}</p>
            <p class="font-poppins text-base sm:text-lg w-full sm:w-[90%] text-start leading-relaxed">
              {{ t('hobby1') }}
            </p>
          </section>

          <section v-if="activeSection === 'games'" key="games" class="space-y-5">
            <h2 class="text-xl font-black font-poppins text-start">{{ t('games') }}</h2>
            <div class="flex w-full gap-4 flex-wrap lg:flex-nowrap">
              <img src="assets/images/rdr2.jpg" class="w-36 sm:w-32 lg:w-44 rounded transition hover:-translate-y-3 hover:scale-105 hover:shadow-lg shrink-0">
              <img src="assets/images/clair_obscur.jpg" class="w-36 sm:w-32 lg:w-44 rounded transition hover:-translate-y-3 hover:scale-105 hover:shadow-lg shrink-0">
              <img src="assets/images/cyberpunk.jpg" class="w-36 sm:w-32 lg:w-44 rounded transition hover:-translate-y-3 hover:scale-105 hover:shadow-lg shrink-0">
              <img src="assets/images/kcd2.jpg" class="w-36 sm:w-32 lg:w-44 rounded transition hover:-translate-y-3 hover:scale-105 hover:shadow-lg shrink-0">
            </div>
          </section>

        </div>
      </Transition>
    </div>

    <div class="
        flex flex-row gap-3 p-4 items-center overflow-x-auto whitespace-nowrap scrollbar-hide
        bg-tertiary border-b-[4px] border-dashed border-primary
        lg:flex-col lg:items-stretch lg:overflow-visible lg:whitespace-normal
        lg:px-7 lg:py-5 lg:rounded-tr-lg lg:rounded-br-lg lg:rounded-tl-none lg:rounded-bl-none 
        lg:border-b-0 lg:border-l-[4px]
    ">
      <ButtonsAboutMeSwitchButton buttonName="Get to know me!" @click="activeSection = 'about'"
        :isActive="activeSection === 'about'" />
      <ButtonsAboutMeSwitchButton buttonName="Like & Dislike" @click="activeSection = 'likeDislike'"
        :isActive="activeSection === 'likeDislike'" />
      <ButtonsAboutMeSwitchButton buttonName="Hobby" @click="activeSection = 'hobby'"
        :isActive="activeSection === 'hobby'" />
      <ButtonsAboutMeSwitchButton buttonName="Favorite Games" @click="activeSection = 'games'"
        :isActive="activeSection === 'games'" />
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useLanguage } from '@/composables/useLanguage'

const activeSection = ref('about')
const { t } = useLanguage()
</script>

<style>
.section-fade-enter-active,
.section-fade-leave-active {
  transition: all 0.35s ease;
}

.section-fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.section-fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.section-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.section-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Utilitas tambahan untuk menyembunyikan scrollbar tapi tetap bisa di-scroll */
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>