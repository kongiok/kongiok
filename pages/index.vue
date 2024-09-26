<template>
  <NuxtLayout name="home">
    <template #title>
      <h1 class="title">
        I am
        <span class="rolling">
          {{ titleToBeRolled[rollingTitleIndex] }}
        </span>
      </h1>
      <p class="quote">心若正，身自穩，行於天地間，無愧於心。</p>
    </template>
    <template #anchor-fyi>
      <nuxt-link class="anchor" to="/about">start your journey!</nuxt-link>
    </template>
    <template #profile>
      <nuxt-link to="/about" class="avatar">
        <img
          src="/images/profile/capybara_240623-profile.webp"
          alt="image of my profile pic"
          class="img"
        />
      </nuxt-link>
    </template>
    <template #tabs>
      <nuxt-link
        class="tab"
        v-for="link in [...localLinks, ...siteLinks]"
        :to="link.url"
      >
        {{ link.title }}
        <Icon v-if="link.icon" :name="link.icon" />
      </nuxt-link>
    </template>
    <template #social>
      <nuxt-link
        v-for="link in socialLinks"
        :key="link.url"
        :to="link.url"
        class="link social"
      >
        <Icon v-if="link.icon" :name="link.icon" class="icon" />
      </nuxt-link>
    </template>
    <template #stats-first-title>
      <h1 class="statistics">Current Stars</h1>
    </template>
    <template #stats-first>
      <span class="counts">0</span>
    </template>
    <template #stats-second-title>
      <h1 class="statistics">Contributions</h1>
    </template>
    <template #stats-second>
      <span class="counts">0</span>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
  layoutTransition: {
    name: "fade",
  },
});
interface NavLinks {
  social: Link[];
  local: Link[];
  external: Link[];
}
const rollingTitleIndex: Ref<number> = ref(0);
let intervalId: number | null = null;
const titleToBeRolled = useState<string[]>("Home Page Titles", () => [
  "Ong Kong Giok",
  "a Technologist",
  "a Believer",
  "an Avid Learner",
  "a Proactive Sharer",
]);

const { data: navLinks } = await useAsyncData("Social Links", () =>
  queryContent<NavLinks>("nav").findOne(),
);
const {
  social: socialLinks,
  local: localLinks,
  external: siteLinks,
} = navLinks?.value || { social: [], local: [], external: [] };

onMounted(() => {
  setInterval(() => {
    rollingTitleIndex.value++;
    if (rollingTitleIndex.value >= titleToBeRolled.value.length) {
      rollingTitleIndex.value = 0;
    }
  }, 1450);
});
onBeforeUnmount(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>

<style scoped>
.part {
  @apply flex-1 rounded-lg shadow;
  @apply bg-concrete-300;
}
.link {
  @apply w-full h-full flex justify-center items-center;
}
.social {
  @apply w-16 h-16 aspect-1 m-4 p-2 shadow rounded-md;
  @apply transition-all duration-150;
  &:hover {
    @apply shadow-md bg-concrete-200/15;
    > .icon {
      @apply text-concrete-800;
    }
  }
  &:active {
    @apply shadow-inner bg-concrete-800;
    > .icon {
      @apply text-goldenrod-400;
    }
  }
  .icon {
    @apply h-full w-full;
    @apply text-4xl text-concrete-600;
  }
}

.heading {
  .title {
    @apply font-bold font-title;
    @apply flex text-center items-center text-4xl text-concrete-900;
    .rolling {
      @apply inline-flex items-center p-4 h-full;
      @apply overflow-hidden whitespace-nowrap pr-5;
      @apply animate-typing delay-150;
      @apply text-goldenrod-800;
      @apply border-r-8 border-concrete-50;
    }
  }
  .quote {
    @apply block text-center p-3 rounded-md;
    @apply font-handwriting text-xl mt-3;
    @apply text-concrete-900;
  }
  .anchor {
    @apply absolute bottom-10 right-14 px-3 py-2 rounded-xl;
    @apply bg-concrete-50 text-concrete-900 border-2 border-olive-900;
    @apply font-mono font-semibold capitalize italic;

    @apply shadow-anime transition-all duration-150;
    &:hover {
      @apply shadow-none;
    }
    &:active {
      @apply text-olive-700 italic;
      @apply shadow-anime-inner;
    }
  }
}
.avatar {
  @apply w-full max-w-[85%] aspect-1;
  @apply rounded-full overflow-hidden;
  @apply shadow-anime;
  img {
    @apply object-cover w-full h-full;
  }
  &:active {
    @apply shadow-none;
  }
}
.tab {
  @apply px-3 py-2 rounded-lg border-2;
  @apply font-mono font-semibold text-sm capitalize;
  @apply text-concrete-800 border-concrete-600 shadow-anime transition-all duration-150;
  &:hover {
    @apply shadow-none;
  }
  &:active {
    @apply shadow-anime-inner text-olive-700;
  }
  &:first-child,
  &:last-child {
    @apply hidden;
  }
}
.statistics {
  @apply font-serif text-2xl font-bold;
  @apply text-concrete-900;
}
.counts {
  @apply font-mono text-5xl font-bold;
  @apply text-concrete-800;
}
@screen md {
  .tab {
    @apply text-base;
    &:first-child,
    &:last-child {
      @apply inline-block;
    }
  }
}
@screen lg {
  .tab {
    @apply text-lg;
  }
}
</style>
