<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: "primary" | "secondary" | "tertiary" | "danger";
  }>(),
  {
    type: "primary",
  }
);

const COLORS = {
  primary: "bg-primary hocus:bg-primary-l",
  secondary: "bg-secondary hocus:bg-secondary-l",
  tertiary: "bg-tertiary hocus:bg-tertiary-l",
  danger: "bg-danger hocus:bg-danger-l",
};
</script>

<template>
  <button
    :class="[
      // BASE CLASSES
      'font-bold transition-all tablet:text-sm',
      'h-[40px] rounded px-6 py-3 tablet:h-[44px]',
      'inline-flex items-center justify-center gap-2 align-baseline',
      'text-white hocus:text-helper-hover',
      // TYPE CLASSES
      COLORS[type],
    ]"
  >
    <slot />
  </button>
</template>
