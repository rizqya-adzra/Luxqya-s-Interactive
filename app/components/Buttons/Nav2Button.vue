<template>
  <button 
    @click="$emit('click')"
    class="bg-black hover:bg-primary py-5 px-6 flex transition-all duration-300 font-poppins font-black text-secondary rounded-full"
  >
    {{ buttonName }}
  </button>
</template>

<script setup>
    defineProps({
        buttonName: {
            type: String,
            default: "Lorem Ipsum"
        }
    })
    defineEmits(['click'])
</script>