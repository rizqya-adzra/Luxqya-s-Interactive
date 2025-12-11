<template>
  <div
    ref="track"
    class="relative m-auto h-12 bg-tertiary rounded flex items-center px-2"
    :style="{ width: trackWidth + 'px' }"
  >
    <div
      ref="thumb"
      class="h-9 w-32 bg-primary rounded flex items-center justify-center text-secondary font-bold cursor-pointer active:scale-95 transition absolute left-0"
      @pointerdown="startDrag"
    >
      <Icon name="mdi:chevron-double-right" size="38" />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  sliderWidth: { type: Number, default: 300 }
});

const emit = defineEmits(["move"]);

const track = ref(null);
const thumb = ref(null);

const trackWidth = ref(props.sliderWidth);

watch(
  () => props.sliderWidth,
  (val) => {
    trackWidth.value = val;
  }
);

let isDragging = false;
let startX = 0;
let startLeft = 0;

const startDrag = (e) => {
  isDragging = true;
  startX = e.clientX;
  startLeft = thumb.value.offsetLeft;

  document.addEventListener("pointermove", onDrag);
  document.addEventListener("pointerup", stopDrag);
};

const onDrag = (e) => {
  if (!isDragging) return;

  const dx = e.clientX - startX;
  let newLeft = startLeft + dx;
  const maxLeft = trackWidth.value - thumb.value.clientWidth;

  if (newLeft < 0) newLeft = 0;
  if (newLeft > maxLeft) newLeft = maxLeft;

  thumb.value.style.left = newLeft + "px";

  emit("move", newLeft / maxLeft);
};

const stopDrag = () => {
  isDragging = false;
  document.removeEventListener("pointermove", onDrag);
  document.removeEventListener("pointerup", stopDrag);
};
</script>
