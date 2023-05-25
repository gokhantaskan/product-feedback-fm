<script setup lang="ts">
import EmptyIcon from "@img/suggestions/illustration-empty.svg?component";
</script>

<template>
  <div class="mx-auto flex w-full max-w-lg flex-col items-center justify-center px-4 py-12 text-center">
    <EmptyIcon class="mb-14 h-[136px]" />
    <p class="h1 mb-4">There is no feedback yet.</p>
    <p class="mb-12">
      Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.
    </p>
    <Button>+ Add Feedback</Button>
  </div>
</template>
