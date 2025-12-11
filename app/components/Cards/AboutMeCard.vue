<template>
<div class="flex w-[1300px] h-[450px] m-auto rounded-lg bg-secondary justify-between">

  <div class="flex flex-col gap-10 px-9 py-5 text-black w-[65%]">
    <ButtonsLanguageSwitchButton/>
    
    <Transition name="section-fade" mode="out-in">  
      <div :key="activeSection">

      <section v-if="activeSection === 'about'" key="about" class="space-y-5 text-start">
        <div class="flex space-x-24 mb-10">
          <div class="space-y-2 font-poppins font-bold text-lg text-start">
            <p>Name</p>
            <p>You can call me</p>
            <p>Birthday</p>
            <p>Languages</p>
          </div>
          <div class="space-y-2 font-poppins font-bold text-start text-lg text-primary">
            <p>: Luxqya Ra</p>
            <p>: Lux / Qya</p>
            <p>: 31st July</p>
            <p>: Indonesian, English, a bit of German</p>
          </div>
        </div>
        <p class="font-poppins text-lg text-start w-[90%]">
          I’m a student who loves tech, art, games, and storytelling.  
          I'm passionate about developing creative projects and improving my skills every day.
        </p>
      </section>
      <section v-if="activeSection === 'likeDislike'" key="like" class="space-y-5 mt-10">
        <div class="flex gap-10 w-[90%]">
          <div class="flex flex-col gap-3">
            <p class="font-poppins font-black text-xl text-start">I LIKE</p>
            <p class="font-poppins text-lg text-start">
              Art, coding, open worlds, music, and peaceful rainy vibes.  
              I love exploring new ideas and creating things that inspire others.
            </p>
          </div>
          <div class="flex flex-col gap-3">
            <p class="font-poppins font-black text-primary text-xl text-start">I DON’T LIKE</p>
            <p class="font-poppins text-lg text-start">
              Loud chaotic places, unnecessary drama, and being rushed.  
              I prefer calm and meaningful moments.
            </p>
          </div>
        </div>
      </section>
      <section v-if="activeSection === 'hobby'" key="hobby" class="space-y-5">
        <p class="font-poppins font-black text-xl text-start mt-10">I’d like to spend my time doing. . .</p>
        <p class="font-poppins text-lg w-[90%] text-start">
          I love drawing, creating digital art, playing guitar, working out,  
          and exploring programming projects.  
          I enjoy anything that lets me improve and express myself.
        </p>
      </section>
      <section v-if="activeSection === 'games'" key="games" class="space-y-5">
        <h2 class="text-xl font-black font-poppins text-start">Current Favorite Games:</h2>
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

const activeSection = ref('about')
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