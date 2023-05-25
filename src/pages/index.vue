<script setup lang="ts">
const emit = defineEmits<{
  showNavbar: [val: boolean];
}>();

const { isMobile } = useBreakpoints();
const { getFilteredPRs } = storeToRefs(useDataStore());
const { fetchData } = useDataStore();

onMounted(() => {
  fetchData();
});

// show navbar on mobile only
// reference: `layouts/app.vue`
watchEffect(() => {
  emit("showNavbar", isMobile.value);
});
</script>

<template>
  <div
    :class="['grid grid-cols-1 gap-[30px] desktop:grid-cols-12 desktop:gap-[30px]', 'tablet:container tablet:py-12']"
  >
    <aside
      v-if="!isMobile"
      class="w-full desktop:col-span-3"
    >
      <div class="flex gap-[10px] desktop:flex-col desktop:gap-6">
        <!-- Colorful -->
        <GradientHeader />
        <!-- Filters -->
        <FilterCard />
        <!-- Roadmap -->
        <RoadmapCard />
      </div>
    </aside>

    <main class="flex flex-col gap-6 desktop:col-span-9">
      <SuggestionsHeader />
      <div class="space-y-5 max-tablet:container">
        <template v-if="getFilteredPRs()?.length">
          <PRCard
            v-for="pr in getFilteredPRs()"
            :key="pr.id"
            :pr="pr"
          />
        </template>
        <template v-else>
          <Card size="lg">
            <Empty />
          </Card>
        </template>
      </div>
    </main>
  </div>
</template>

<route lang="yaml">
name: Home
meta:
  layout: app
</route>
