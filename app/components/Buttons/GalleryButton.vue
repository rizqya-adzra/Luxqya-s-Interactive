<template>
  <div class="flex items-center gap-2">
    <a
      v-for="(item, i) in items"
      :key="i"
      :href="item.link"
      target="_blank"
      rel="noopener"
      class="hover:-translate-y-1 transition-all duration-300 inline-block"
    >
      <img
        :src="getIcon(item.type)"
        :alt="item.type"
        class="max-w-10 max-h-10"
      />
    </a>
  </div>
</template>

<script setup lang="ts">
import imagex from "@/assets/images/x.png"
import imagevgen from "@/assets/images/vgen.png"

interface SocialItem {
  type: "x" | "vgen";
  link: string;
}

defineProps<{
  items: SocialItem[];
}>();

const getIcon = (type: "x" | "vgen") => {
  return type === "x" ? imagex : imagevgen;
};
</script>
