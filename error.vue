<template>
  <div class="w-dvw h-dvh flex justify-center items-center relative">
    <img
      src="/images/profile/capybara_240623-profile.webp"
      alt="The Logo Of Capybara"
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 aspect-1 rounded-full shadow-lg z-0"
    />
    <main class="panel">
      <h1 class="text-4xl font-bold text-pesto-900">
        Error {{ error.statusCode }}
      </h1>
      <p class="text-2xl text-pesto-800">{{ error.statusMessage }}</p>
      <button @click="handleError" class="text-pesto-800 underline">
        Go back to the home page
      </button>
    </main>
  </div>
</template>
<script setup lang="ts">
const error = useError();
const handleError = () => clearError({ redirect: "/" });
</script>
<style scoped lang="css">
.panel {
  @apply w-[85%] h-[88%] z-10;
  @apply bg-concrete-100/75 shadow-lg rounded-lg backdrop-blur-md;
  @apply flex flex-col justify-evenly items-center;
}
</style>
<style>
body {
  @apply bg-pesto-100;
}
</style>
