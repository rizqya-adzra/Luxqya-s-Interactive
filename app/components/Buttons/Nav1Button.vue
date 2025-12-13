<template>
    <button @click="$emit('click')" class="hover:bg-primary rounded-lg p-3 flex transtition-all duration-300 font-poppins font-black text-black hover:text-secondary">
        {{buttonName}}
    </button>
</template>

<script setup>
    defineProps({
        buttonName: {
            type: String,
            default: "Lorem Ipsum"
        },
        onClick: {
            type: Function
        }
    })
    defineEmits(['click'])
</script>