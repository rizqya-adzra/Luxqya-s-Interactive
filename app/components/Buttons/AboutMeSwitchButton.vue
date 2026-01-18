<template>
  <button @click="emit('click')" :class="[baseClass, isActive ? activeClass : inactiveClass]">
    {{ buttonName }}
  </button>
</template>

<script setup>
const emit = defineEmits(['click'])

const props = defineProps({
  buttonName: {
    type: String,
    default: "Get To Know Me!"
  },
  isActive: {
    type: Boolean,
    default: false
  }
})

const baseClass = `
  py-6 px-10 text-2xl py-5 text-lg md:py-6x md:text-xl font-bold font-poppins text-secondary
  rounded-md transition-all duration-300 outline outline-2
`

const inactiveClass = `
  bg-primary outline-transparent hover:outline-white hover:outline-dashed outline-offset-[-12px]
`

const activeClass = `
  bg-complimentary outline-white outline-dashed outline-offset-[-12px]
`
</script>
