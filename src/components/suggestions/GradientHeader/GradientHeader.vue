<script setup lang="ts">
import DesktopBg from "@img/suggestions/desktop/background-header.png";
import TabletBg from "@img/suggestions/tablet/background-header.png";
import { breakPoints } from "appconfig";
</script>

<template>
  <div class="relative shrink-0 overflow-hidden rounded">
    <picture>
      <source
        :srcset="TabletBg"
        :media="`(min-width: ${breakPoints.tablet}) and (max-width: ${breakPoints.desktop})`"
        type="image/png"
      />
      <source
        :srcset="DesktopBg"
        :media="`(min-width: ${breakPoints.desktop})`"
        type="image/png"
      />
      <img
        class="block h-full w-full select-none object-cover"
        :src="DesktopBg"
        alt=""
      />
    </picture>

    <div class="absolute bottom-6 left-6">
      <h1 class="text-xl text-white">Frontend Mentor</h1>
      <p class="text-[15px] text-white/75">Feedback Board</p>
    </div>
  </div>
</template>
