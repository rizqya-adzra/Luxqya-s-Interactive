<template>
<div class="flex w-[1200px] h-[450px] m-auto rounded-lg bg-secondary justify-between">

  <div class="flex flex-col gap-10 px-9 py-5 text-black w-[65%]">
    <ButtonsLanguageSwitchButton/>
    
    <Transition name="section-fade" mode="out-in">  
      <div :key="activeSection">

      <section v-if="activeSection === 'about'" key="about" class="space-y-5 text-start">
        <div class="flex space-x-24 mb-10">
          <div class="space-y-2 font-poppins font-bold text-xl text-start">
            <p>{{ t('name') }}</p>
            <p>{{ t('call') }}</p>
            <p>{{ t('birthday') }}</p>
            <p>{{ t('language') }}</p>
          </div>
          <div class="space-y-2 font-poppins font-bold text-start text-xl text-primary">
            <p>: Luxqya Ra</p>
            <p>: Lux / Qya</p>
            <p>: 31st July</p>
            <p>: {{ t('language1') }}</p>
          </div>
        </div>
        <p class="font-poppins text-lg text-start w-[90%]">
          {{ t('get_to_know_me') }}
        </p>
      </section>
      <section v-if="activeSection === 'likeDislike'" key="like" class="space-y-5 mt-10">
        <div class="flex gap-10 w-[90%]">
          <div class="flex flex-col gap-3">
            <p class="font-poppins font-black text-xl text-start">I LIKE</p>
            <p class="font-poppins text-lg text-start">
              {{ t('like') }}
            </p>
          </div>
          <div class="flex flex-col gap-3">
            <p class="font-poppins font-black text-primary text-xl text-start">I DON’T LIKE</p>
            <p class="font-poppins text-lg text-start">
              {{ t('dislike') }}
            </p>
          </div>
        </div>
      </section>
      <section v-if="activeSection === 'hobby'" key="hobby" class="space-y-5">
        <p class="font-poppins font-black text-xl text-start mt-10">{{ t('hobby') }}</p>
        <p class="font-poppins text-lg w-[90%] text-start">
          {{ t('hobby1') }}
        </p>
      </section>
      <section v-if="activeSection === 'games'" key="games" class="space-y-5">
        <h2 class="text-xl font-black font-poppins text-start">{{ t('games') }}</h2>
        <div class="flex gap-4 items-start gallery">
          <img src="assets/images/rdr2.jpg" class="w-44 rounded transition hover:-translate-y-3 hover:scale-105 hover:shadow-lg">
          <img src="assets/images/clair_obscur.jpg" class="w-44 rounded transition hover:-translate-y-3 hover:scale-105 hover:shadow-lg">
          <img src="assets/images/cyberpunk.jpg" class="w-44 rounded transition hover:-translate-y-3 hover:scale-105 hover:shadow-lg">
          <img src="assets/images/kcd2.jpg" class="w-44 rounded transition hover:-translate-y-3 hover:scale-105 hover:shadow-lg">
        </div>
      </section>
      </div>

    </Transition>

    </div>

  <div class="flex flex-col justify-center gap-4 px-7 py-5 rounded-tr-lg rounded-br-lg bg-tertiary border-l-[3px] border-dashed border-primary">
    <ButtonsAboutMeSwitchButton buttonName="Get to know me!"           @click="activeSection = 'about'"        :isActive="activeSection === 'about'" />
    <ButtonsAboutMeSwitchButton buttonName="What I Like and Dislike"   @click="activeSection = 'likeDislike'"  :isActive="activeSection === 'likeDislike'" />
    <ButtonsAboutMeSwitchButton buttonName="Hobby?"                    @click="activeSection = 'hobby'"        :isActive="activeSection === 'hobby'"/>
    <ButtonsAboutMeSwitchButton buttonName="Favorite Games"            @click="activeSection = 'games'"        :isActive="activeSection === 'games'"/>
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
</style>