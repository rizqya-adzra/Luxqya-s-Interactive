<template>
    <button class="hover:bg-primary p-3 flex transtition-all duration-300 font-poppins font-black text-black hover:text-secondary" @click="onClick?.()">
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
</script>