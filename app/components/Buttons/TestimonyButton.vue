<template>
  <button
    :class="[
      'group font-poppins font-bold px-4 shadow-md flex items-center justify-between w-[150px] h-[60px] transition-all duration-200',

      disabledState ? 'cursor-default' : 'cursor-pointer',

      disabledState
        ? `bg-transparent border-r-[3px] border-t-[3px] border-b-[3px] ${borderColor}`
        : (color === 'primary' ? 'bg-primary' : 'bg-complimentary'),

      textColor,
    ]"
    :disabled="disabledState"
  >
    <span>{{ buttonName }}</span>

    <Icon
      :name="(!disabledState && showIcon && iconName) ? iconName : 'mdi:blank'"
      size="40"
      :class="[
        disabledState || !iconName
          ? 'opacity-0 pointer-events-none'
          : 'opacity-0 group-hover:opacity-100 transition-opacity duration-200'
      ]"
    />
  </button>
</template>

<script setup>
  const props = defineProps({
    buttonName: { type: String, required: true },
    color: { type: String, default: "primary" }, 
    disabledState: { type: Boolean, default: false },
    showIcon: { type: Boolean, default: true },
  });

  const textColor = computed(() => {
    if (props.disabledState) {
      return props.color === "primary"
        ? "text-primary"
        : "text-complimentary";
    }
    return "text-secondary"; 
  });

  const borderColor = computed(() => {
    return props.color === "primary" ? "border-primary" : "border-complimentary";
  });

  const iconName = computed(() => {
    if (props.buttonName.toLowerCase() === "next") return "mdi:chevron-double-right";
    if (props.buttonName.toLowerCase() === "previous") return "mdi:chevron-double-left";
    return null;
  });
</script>