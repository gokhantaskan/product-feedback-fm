<script setup lang="ts">
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";
import { watchDebounced } from "@vueuse/core";

const filterOptions = [
  { label: "All", value: "all" },
  { label: "UI", value: "ui" },
  { label: "UX", value: "ux" },
  { label: "Enhancement", value: "enhancement" },
  { label: "Bug", value: "bug" },
  { label: "Feature", value: "feature" },
];

const { filterBy } = storeToRefs(useDataStore());
const filterByRef = ref(filterBy.value);

watchDebounced(
  filterByRef,
  value => {
    filterBy.value = value;
  },
  { debounce: 100 }
);
</script>

<template>
  <Card>
    <RadioGroup
      v-model="filterByRef"
      class="mt-2"
    >
      <RadioGroupLabel class="sr-only">Choose a category to filter</RadioGroupLabel>
      <div class="flex flex-wrap gap-x-2 gap-y-3">
        <RadioGroupOption
          v-for="option in filterOptions"
          :key="option.value"
          v-slot="{ checked }"
          as="template"
          :value="option.value"
        >
          <div
            :class="[
              'h-[30px] rounded px-4 text-[13px] font-semibold transition-all',
              'flex items-center justify-center',
              'cursor-pointer',
              checked ? 'bg-secondary text-white' : 'bg-helper-hover text-secondary hocus:bg-helper-over',
            ]"
          >
            <RadioGroupLabel as="span">{{ option.label }}</RadioGroupLabel>
          </div>
        </RadioGroupOption>
      </div>
    </RadioGroup>
  </Card>
</template>
