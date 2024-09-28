<template>
  <div class="w-dvw h-dvh flex justify-center items-center">
    <atoms-model>
      <template #title>
        <h1 class="font-bold font-title text-3xl text-concrete-700">
          <span class="font-mono pr-2 text-burnt-sienna-700">About Page</span>
          is currently Unavalible
        </h1>
      </template>
      <template>
        <p class="font-text text-concrete-800 text-xl">
          We sincerely apologize for the inconvenience, but the requested page
          is
          <strong class="text-bold text-concrete-900">not yet available</strong>
          as it is still under development. Our team is working hard to bring
          this service to you as soon as possible. We deeply regret any
          inconvenience this may have caused and greatly appreciate your
          understanding and patience. Please stay tuned for updates.<strong
            class="text-bold text-goldenrod-700"
            >Thank you for your continued support.</strong
          >
        </p>
      </template>
      <template #handle-btn>
        <atoms-anchor
          to="/"
          text="get back"
          color="goldenrod"
          alt="get back to root"
        >
          get back
        </atoms-anchor>
      </template>
    </atoms-model>
  </div>
</template>
<script setup lang="ts"></script>

<style scoped></style>
