<template>
  <div
    class="font-poppins w-[160px] h-[60px] bg-primary rounded-lg text-lg flex items-center justify-between px-3"
  >
    <div
      @click="setLang('en')"
      class="cursor-pointer font-black transition-all duration-300 
        flex items-center justify-center rounded px-4 py-1"
      :class="currentLang === 'en'
        ? 'bg-secondary text-black'
        : 'text-secondary'"
    >
      ENG
    </div>

    <div
      @click="setLang('id')"
      class="cursor-pointer font-black transition-all duration-300 
        flex items-center justify-center rounded px-4 py-1"
      :class="currentLang === 'id'
        ? 'bg-secondary text-black'
        : 'text-secondary'"
    >
      IDN
    </div>
  </div>
</template>

<script setup lang="ts">
const { currentLang, setLang } = useLanguage()
</script>
