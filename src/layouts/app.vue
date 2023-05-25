<script setup lang="ts">
const navbarVisible = ref(false);

// emit the boolean value from the page `pages/index.vue`
// show the navbar only in the mobile view
const setNavbarVisible = (isVisible: boolean) => {
  navbarVisible.value = isVisible;
};
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <Navbar v-if="navbarVisible" />

    <div class="flex-1">
      <router-view @show-navbar="setNavbarVisible" />
    </div>

    <Footer />
  </div>
</template>
