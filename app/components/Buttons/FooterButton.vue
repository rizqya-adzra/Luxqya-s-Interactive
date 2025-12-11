<template>
<button
  @click="$emit('click')"
  class="group font-poppins font-black flex items-center justify-start text-[#6C5D54] hover:text-black transition-all duration-300"
>
  <Icon
    name="mdi:chevron-right"
    size="32"
    class="transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-2"
  />

  <Icon
    name="mdi:chevron-double-right"
    size="32"
    class="absolute transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 "
  />

  <span class="transition-all duration-300 group-hover:translate-x-2 text-lg">
    {{ buttonName }}
  </span>
</button>

</template>

<script setup>
    defineProps({
        buttonName: {
            type: String,
            default: "Lorem Ipsum"
        },        
      })
    defineEmits(['click'])
</script>