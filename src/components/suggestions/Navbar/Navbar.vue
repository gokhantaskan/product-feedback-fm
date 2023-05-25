<script setup lang="ts">
import HamburgerIcon from "@img/shared/mobile/icon-hamburger.svg?component";
import BgImage from "@img/suggestions/mobile/background-header.png";

const showDrawer = ref(false);
</script>

<template>
  <nav
    class="relative z-20 h-[72px]"
    :style="{
      background: `url(${BgImage})`,
      backgroundSize: 'cover',
    }"
  >
    <div class="container flex h-full items-center justify-between text-white">
      <div>
        <h1 class="text-lg text-white">Frontend Mentor</h1>
        <p>Feedback board</p>
      </div>

      <button @click="showDrawer = true">
        <HamburgerIcon class="w-[20px]" />
      </button>
    </div>
  </nav>

  <Drawer v-model:open="showDrawer" />
</template>
