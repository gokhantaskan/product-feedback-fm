<script setup lang="ts">
import UpIcon from "@img/shared/icon-arrow-up.svg";
import BubbleIcon from "@img/shared/icon-comments.svg";

import { Category, type ProductRequest } from "@/types/data.types";

defineProps<{
  pr: ProductRequest;
}>();
</script>

<template>
  <Card size="lg">
    <div :class="['grid grid-cols-2 gap-4', 'tablet:grid-cols-[40px_1fr_auto] tablet:gap-10']">
      <!-- m2/t1 -->
      <div class="flex items-center justify-stretch max-tablet:order-2">
        <button
          :class="[
            'flex items-center justify-center gap-2 self-start tablet:flex-col',
            'w-full rounded bg-helper-hover p-2 transition-all max-tablet:w-fit',
          ]"
        >
          <UpIcon class="w-2" /><span class="text-sm font-bold">{{ pr.upvotes }}</span>
        </button>
      </div>
      <!-- m1/t2 -->
      <div class="max-tablet:col-span-2">
        <h3 class="mb-1">{{ pr.title }}</h3>
        <p class="mb-3">{{ pr.description }}</p>
        <!-- Badge -->
        <div class="body-3 inline-block rounded bg-helper-hover px-4 leading-[30px] text-secondary">
          {{ Category[pr.category] }}
        </div>
      </div>
      <!-- m3/t3 -->
      <div class="flex items-center justify-end gap-2 font-bold max-tablet:order-3">
        {{ pr.comments?.length ?? 0 }}<BubbleIcon class="h-4" />
      </div>
    </div>
  </Card>
</template>
