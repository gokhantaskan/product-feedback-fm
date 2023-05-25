<script setup lang="ts">
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from "@headlessui/vue";
import CloseIcon from "@img/shared/mobile/icon-close.svg";

const open = defineModel<boolean>("open", {
  default: false,
});
</script>

<template>
  <TransitionRoot
    as="template"
    :show="open"
  >
    <Dialog
      as="div"
      class="relative z-20"
      @close="open = false"
    >
      <!-- Overlay -->
      <TransitionChild
        as="template"
        enter="ease-in-out duration-500 transform-gpu"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in-out duration-500 transform-gpu"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-12">
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-500"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <DialogPanel class="pointer-events-auto w-screen max-w-[271px]">
                <!-- Content -->
                <div class="flex h-screen flex-col bg-surface">
                  <!-- Header -->
                  <div class="flex h-[72px] items-center justify-between gap-2 bg-helper-p px-6">
                    <button
                      type="button"
                      class="ml-auto flex items-center justify-center text-white"
                      @click="open = false"
                    >
                      <span class="sr-only">Close panel</span>
                      <CloseIcon
                        class="h-6 w-6"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                  <!-- Drawer Body -->
                  <div class="flex flex-1 flex-col gap-6 overflow-y-auto p-6">
                    <FilterCard />
                    <RoadmapCard />
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
