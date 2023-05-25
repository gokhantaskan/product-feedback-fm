<script setup lang="ts">
import LightIcon from "@img/suggestions/icon-suggestions.svg?component";

import { SortBy } from "@/types/suggestions.types";

const { sortBy, getFilteredPRs } = storeToRefs(useDataStore());
</script>

<template>
  <header
    :class="[
      'flex items-center justify-between gap-10',
      'bg-head pl-6 pr-4 text-white',
      'py-[8px] tablet:rounded tablet:py-[14px]',
    ]"
  >
    <div class="hidden items-center gap-4 tablet:flex">
      <LightIcon class="h-6" />
      <div class="text-lg font-bold">{{ getFilteredPRs()?.length ?? 0 }} suggestions</div>
    </div>

    <div class="mr-auto">
      <div class="text-helper-hover">
        <Dropdown
          v-model="sortBy"
          :items="Object.values(SortBy)"
        >
          <template #default="{ open }">
            <span class="tablet:text-sm">
              Sort by:
              <strong :class="['inline-block', open && 'text-helper-hover/75']">{{ sortBy }}</strong>
            </span>
          </template>
        </Dropdown>
      </div>
    </div>

    <Button>+ Add Feedback</Button>
  </header>
</template>
