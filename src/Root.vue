<script setup lang="ts">
const appTitle = import.meta.env.VITE_APP_TITLE;

useHead({
  titleTemplate: (pageTitle?: string) => (!pageTitle ? appTitle : `${pageTitle} | ${appTitle}`),
  meta: [
    {
      name: "description",
      content: `${appTitle} is a starter template for Vue 3 with Vite and Tailwind CSS.`,
    },
  ],
});
</script>

<template>
  <router-view />
</template>
