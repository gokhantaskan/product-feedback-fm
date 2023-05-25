<script setup lang="ts">
import { colors } from "appconfig";

import { Status } from "@/types/data.types";

const items: { name: string; value: Exclude<Status, "suggestion">; color: string }[] = [
  { name: "Planned", value: Status.PLANNED, color: colors.orange },
  { name: "In-Progress", value: Status.IN_PROGRESS, color: colors.primary.DEFAULT },
  { name: "Live", value: Status.LIVE, color: colors.blue },
];

const { stateCount } = storeToRefs(useDataStore());
</script>

<template>
  <Card title="Roadmap">
    <template #actions>
      <router-link
        class="text-secondary underline hocus:text-[#8397F8]"
        :to="{ name: '' }"
        >View</router-link
      >
    </template>

    <ul class="space-y-2">
      <template
        v-for="item in items"
        :key="item.name"
      >
        <li class="flex items-baseline justify-between">
          <div class="inline-flex items-center gap-4">
            <span
              class="inline-block h-2 w-2 rounded-full"
              :style="{ backgroundColor: item.color }"
            />
            {{ item.name }}
          </div>
          <span class="font-bold text-helper-p">{{ stateCount[item.value] }}</span>
        </li>
      </template>
    </ul>
  </Card>
</template>
