<script setup lang="ts"></script>

<template>
  <div class="w-dvw h-dvh flex justify-center items-center">
    <main class="bento">
      <section class="part heading">
        <slot name="title"></slot>
        <slot name="anchor-fyi"></slot>
      </section>
      <section class="part profile">
        <slot name="profile"></slot>
      </section>
      <section class="part name">
        <slot name="name"></slot>
      </section>
      <nav class="part tabs">
        <slot name="tabs"></slot>
      </nav>
      <section class="part stats first">
        <div class="title">
          <slot name="stats-first-title"></slot>
        </div>
        <div class="statistics">
          <slot name="stats-first"></slot>
        </div>
      </section>
      <nav class="part social">
        <slot name="social"></slot>
      </nav>
      <section class="part stats second">
        <div class="title">
          <slot name="stats-second-title"></slot>
        </div>
        <div class="statistics">
          <slot name="stats-second"></slot>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped lang="css">
.bento {
  @apply grid gap-4 p-5;
  @apply rounded-lg shadow;
}
.part {
  @apply flex justify-center items-center;
  @apply rounded-lg p-5;
}
.heading {
  grid-area: heading;
}
.profile {
  grid-area: profile;
}
.name {
  grid-area: name;
}
.tabs {
  grid-area: tabs;
}
.social {
  grid-area: social;
  @apply gap-5 flex-wrap overflow-hidden;
}
.stats {
  @apply relative flex-col justify-center items-center;
  &.first {
    grid-area: stats-first;
  }
  &.second {
    grid-area: stats-second;
  }
  .title {
    @apply absolute;
  }
}

@screen xs {
  .bento {
    @apply w-[88%] h-[95%];
    @apply bg-concrete-100;
    grid-template-rows: 2fr 0.5fr 1fr 2fr;
    grid-template-areas:
      "profile"
      "name"
      "tabs"
      "social";
  }
  .heading {
    @apply hidden relative;
  }
  .tabs {
    @apply gap-4 flex-wrap;
    @apply flex flex-row justify-center items-center;
    @apply bg-concrete-200/40 shadow;
  }
  .stats {
    @apply hidden;
  }
}

@screen md {
  .bento {
    @apply w-[92%] h-[92%];
    @apply bg-transparent shadow-none;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: 1.5fr 0.2fr 1.5fr;
    grid-template-areas:
      "heading heading heading heading profile profile profile"
      "tabs tabs tabs tabs tabs tabs tabs"
      "stats-first stats-first social social social stats-second stats-second";
  }
  .part {
    @apply shadow-lg bg-concrete-100/95 backdrop-blur-sm;
  }
  .heading {
    @apply bg-goldenrod-400 pt-14;
    @apply flex flex-col justify-start items-start text-center text-nowrap;
  }
  .name {
    @apply hidden;
  }
  .tabs {
    @apply gap-6;
  }
  .stats {
    @apply flex;
    .title {
      @apply top-1/4 left-5;
    }
  }
}
@screen lg {
  .bento {
    @apply w-[88%] h-[88%];
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: 3fr 0.5fr 3fr;
    grid-template-areas:
      "heading heading heading heading heading profile profile"
      "tabs tabs tabs tabs tabs tabs tabs"
      "stats-first stats-first social social social stats-second stats-second";
  }
  .stats .title {
    @apply top-[20%];
  }
}
</style>
<style>
body {
  @apply bg-pesto-200;
}
</style>
