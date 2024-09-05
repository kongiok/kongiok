<script setup lang="ts"></script>

<template>
  <div class="w-dvw h-dvh flex justify-center items-center">
    <main class="bento">
      <div class="part heading">
        <slot name="title"></slot>
        <slot name="anchor-fyi"></slot>
      </div>
      <div class="part profile">
        <slot name="profile"></slot>
      </div>
      <nav class="part tabs">
        <slot name="tabs"></slot>
      </nav>
      <div class="part stats">
        <div class="title">
          <slot name="stats-first-title"></slot>
        </div>
        <div class="statistics">
          <slot name="stats-first"></slot>
        </div>
      </div>
      <nav class="part social">
        <slot name="social"></slot>
      </nav>
      <div class="part stats">
        <div class="title">
          <slot name="stats-second-title"></slot>
        </div>
        <div class="statistics">
          <slot name="stats-second"></slot>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.bento {
  @apply w-[88%] h-[90%];
  @apply grid grid-cols-1 grid-rows-6 gap-4 p-5;
  @apply bg-concrete-100 rounded-lg shadow;
}
.part {
  @apply flex justify-center items-center;
  @apply w-full h-full p-5;
  @apply bg-concrete-100 rounded-lg;
  &:nth-child(2) {
    @apply row-span-2;
  }
}
.heading {
  @apply hidden relative;
}
.tabs {
  @apply flex flex-row gap-4 justify-center items-center;
  @apply bg-concrete-200/30;
}
.stats {
  @apply relative;
  @apply flex flex-col justify-center items-center;
  .title {
    @apply absolute top-4 left-4;
    @apply text-start m-2;
  }
  .statistics {
    @apply flex flex-col gap-4 justify-center items-center;
  }
}
@screen md {
  .bento {
    @apply w-[88%] h-[88%];
    @apply grid-cols-3 grid-rows-9;
    @apply bg-transparent shadow-none;
  }
  .part {
    &:nth-child(1) {
      @apply col-span-2 row-span-4;
      @apply bg-goldenrod-400;
    }
    &:nth-child(2) {
      @apply row-span-4 col-start-3;
    }
    &:nth-child(3) {
      @apply col-span-3 row-start-5;
    }
    &:nth-child(4) {
      @apply row-span-4 row-start-6;
    }
    &:nth-child(5) {
      @apply row-span-4 row-start-6;
    }
    &:nth-child(6) {
      @apply row-span-4 row-start-6;
    }
  }
  .heading {
    @apply flex flex-col justify-start items-start text-center h-full text-nowrap;
  }
  .tabs {
    @apply gap-6 bg-concrete-100;
  }
}
@screen lg {
  .bento {
    @apply grid-cols-8 grid-rows-7;
  }
  .part {
    &:nth-child(1) {
      @apply col-span-6 row-span-3;
    }
    &:nth-child(2) {
      @apply col-span-2 row-span-3 col-start-7;
    }
    &:nth-child(3) {
      @apply col-span-8 row-start-4;
    }
    &:nth-child(4) {
      @apply col-span-2 row-span-3 row-start-5;
    }
    &:nth-child(5) {
      @apply col-span-4 row-span-3 col-start-3 row-start-5;
    }
    &:nth-child(6) {
      @apply col-span-2 row-span-3 col-start-7 row-start-5;
    }
  }
}
</style>
<style>
body {
  @apply bg-pesto-200;
}
</style>
