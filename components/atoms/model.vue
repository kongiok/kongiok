<template>
  <main class="panel">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="content">
      <slot></slot>
    </div>
    <div class="btn">
      <slot name="handle-btn"></slot>
    </div>
  </main>
</template>

<script setup lang="ts"></script>
<style scoped>
.panel {
  @apply w-[88%] h-[88%] p-5 absolute flex flex-col justify-around items-center;
  @apply bg-concrete-100 shadow-lg rounded-2xl;
}
.title {
  @apply text-center text-pretty;
}
.content {
  @apply text-center text-pretty;
}
.btn {
  @apply flex justify-center;
}
</style>
