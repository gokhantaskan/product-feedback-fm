<template>
  <footer class="bg-white py-4">
    <div class="container">
      <p class="text-center">
        {{ $appName }}
        <span class="text-gray-500">{{ $appVersion }}</span>
        ©{{ new Date().getFullYear() }}
      </p>
    </div>
  </footer>
</template>
