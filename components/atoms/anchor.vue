<template>
  <nuxt-link :to="props.to" class="anchor" :class="[...styles]">
    <slot></slot>
  </nuxt-link>
</template>

<script setup lang="ts">
import { defineProps, reactive } from "vue";
const props = defineProps<{
  to: string;
  text: string;
  alt: string;
  color: string;
}>();

const styles = reactive([
  `text-${props.color}-700`,
  `bg-${props.color}-100`,
  `border-${props.color}-600`,
  `hover:text-${props.color}-800`,
  `hover:bg-${props.color}-200/30`,
  `hover:border-${props.color}-700`,
  `active:text-${props.color}-900`,
  `active:bg-${props.color}-300/50`,
  `active:border-${props.color}-800`,
]);
</script>
<style scoped>
.anchor {
  @apply px-3 py-2 rounded-xl border-2;
  @apply font-mono font-semibold text-sm capitalize;
  @apply shadow-anime transition-all duration-150;
  &:hover {
    @apply shadow-none;
  }
  &:active {
    @apply shadow-anime-inner;
  }
}
</style>
