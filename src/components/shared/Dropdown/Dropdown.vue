<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import IconArrowDown from "@img/shared/icon-arrow-down.svg?component";
import IconCheck from "@img/shared/icon-check.svg?component";

defineOptions({
  inheritAttrs: false,
});

withDefaults(
  defineProps<{
    items: Array<string> | Object;
  }>(),
  {
    items: () => [],
  }
);

const modelValue = defineModel();
</script>

<template>
  <Menu
    v-slot="{ open }"
    as="div"
    class="relative inline-block"
  >
    <MenuButton
      as="button"
      :class="['flex h-fit items-center gap-2 rounded p-1 transition-all']"
      v-bind="$attrs"
    >
      <slot :open="open" />
      <IconArrowDown :class="['h-2 origin-center text-white transition', open && 'rotate-180']" />
    </MenuButton>

    <transition name="dd">
      <MenuItems
        :class="['mt-11 min-w-[256px] divide-y rounded bg-white shadow', 'absolute left-0 z-10 origin-top-left']"
      >
        <MenuItem
          v-for="(item, i) in items"
          :key="i"
          v-slot="{ active }"
          as="template"
          @click="modelValue = item"
        >
          <div
            :class="[
              'flex cursor-pointer items-center justify-between px-6 py-3',
              active ? 'text-primary' : 'text-helper-p',
            ]"
          >
            <span>{{ item }}</span>
            <IconCheck
              v-if="item === modelValue"
              class="h-2 text-primary"
            />
          </div>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>
