<script setup lang="ts">
interface Props {
  tag: string;
  title: string;
  size: "default" | "lg";
}

withDefaults(defineProps<Partial<Props>>(), {
  tag: "div",
  title: "",
  size: "default",
});

const SIZES: { [key in Props["size"]]: string } = {
  default: "p-6",
  lg: "py-7 px-8",
};
</script>

<template>
  <component
    :is="tag"
    :class="['card w-full rounded bg-card', SIZES[size]]"
  >
    <!-- HEADER -->
    <template v-if="title">
      <header class="card__header mb-6 flex items-baseline justify-between gap-2">
        <!-- TITLE -->
        <slot name="title">
          <div class="h3">
            {{ title }}
          </div>
        </slot>
        <!-- ACTIONS -->
        <template v-if="$slots.actions">
          <slot name="actions" />
        </template>
      </header>
    </template>
    <!-- BODY -->
    <div class="card__body">
      <slot />
    </div>
  </component>
</template>
