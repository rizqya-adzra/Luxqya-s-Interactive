<template>
  <div class="relative w-fit group flex items-center justify-center">
    <button
      class="bg-complimentary px-5 py-4 font-poppins font-bold text-secondary
             relative z-10 transition-all duration-200 group-hover:-translate-y-20"
    >
      ◆ Commissions Open
    </button>

    <div
      class="absolute top-full left-0 w-full bg-[#FFFAF0] overflow-hidden
             max-h-0 opacity-0 transition-all -translate-y-20
             group-hover:max-h-40 group-hover:opacity-100 group-hover:p-2"
    >
    <div class="flex justify-center">
      <Nav2Button buttonName="Terms of Service" @click="$emit('openTOS')"/>
    </div>
    </div>
  </div>
</template>
