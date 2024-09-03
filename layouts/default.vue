<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.wrapper {
  @apply h-dvh w-dvw;
  @apply flex flex-col items-center justify-center;
  @apply bg-concrete-200;
}
</style>
