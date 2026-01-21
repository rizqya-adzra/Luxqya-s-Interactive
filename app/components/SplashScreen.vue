<template>
  <div class="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-900 text-white">
    
    <div class="mb-8 text-center animate-pulse">
      <h1 class="text-4xl font-extrabold tracking-widest text-emerald-400">
        MY APP
      </h1>
      <p class="text-xs text-slate-400 mt-2 uppercase tracking-wide">
        Experience High Performance
      </p>
    </div>

    <div class="w-64 h-2 bg-slate-800 rounded-full overflow-hidden mb-3 border border-slate-700">
      <div 
        class="h-full bg-emerald-500 shadow-[0_0_10px_#10b981] transition-all duration-300 ease-out"
        :style="{ width: `${progress}%` }"
      ></div>
    </div>

    <p class="text-sm font-mono text-slate-400">
      Loading Assets... {{ Math.round(progress) }}%
    </p>

  </div>
</template>

<script setup lang="ts">
defineProps<{
  progress: number
}>()
</script>
