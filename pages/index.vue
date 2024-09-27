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
      <nuxt-link class="anchor fyi" to="/about">wanna know about me?</nuxt-link>
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
        class="anchor tab"
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
        class="anchor social"
      >
        <Icon v-if="link.icon" :name="link.icon" class="icon" />
      </nuxt-link>
    </template>
    <template #name>
      <h1 class="name title">Ong Kong Giok</h1>
    </template>
    <template #stats-first-title>
      <h1 class="statistics">Current Stars</h1>
    </template>
    <template #stats-first>
      <span class="counts">{{ firstStatsCounts }}</span>
    </template>
    <template #stats-second-title>
      <h1 class="statistics">Contributions</h1>
    </template>
    <template #stats-second>
      <span class="counts">{{ secondStatsCounts }}</span>
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

const firstStatsCounts = useState<number>("First Stats Counts", () => 40);
const secondStatsCounts = useState<number>("Second Stats Counts", () => 99);
</script>

<style scoped>
.anchor {
  @apply px-3 py-2 rounded-xl border-2;
  @apply font-mono font-semibold text-sm capitalize;
  @apply shadow-anime transition-all duration-150;
  @apply text-concrete-600 border-concrete-600 shadow-concrete-700 bg-concrete-100;
  &:hover {
    @apply shadow-none text-concrete-800 border-concrete-800;
  }
  &:active {
    @apply shadow-anime-inner text-goldenrod-500 shadow-concrete-700 bg-concrete-200/20;
  }
}
.title {
  @apply font-bold font-title;
  @apply flex text-center items-center;
  @apply text-concrete-800;
  .rolling {
    @apply inline-flex items-center p-4 h-full;
    @apply overflow-hidden whitespace-nowrap pr-5;
    @apply animate-typing delay-150;
    @apply border-r-8;
    @apply text-burnt-sienna-700;
  }
}
.quote {
  @apply block text-center p-3 rounded-md;
  @apply font-handwriting mt-3;
  @apply text-concrete-800;
}
.fyi {
  @apply absolute bottom-[12%] right-[12%];
  @apply italic text-concrete-700 border-concrete-700;
}
.avatar {
  @apply w-full max-w-[65%] aspect-1;
  @apply rounded-full overflow-hidden;
  @apply border-2 border-concrete-600;
  @apply shadow-anime shadow-concrete-700;
  img {
    @apply object-cover w-full h-full;
  }
  &:active {
    @apply shadow-none;
  }
}
.name {
  @apply font-serif text-3xl font-bold;
  @apply text-goldenrod-500;
}

.statistics {
  @apply font-title font-semibold;
  @apply text-concrete-900;
}
.counts {
  @apply font-mono font-bold;
  @apply tabular-nums;
  @apply text-concrete-800;
}
.social {
  @apply flex p-3 text-4xl;
  & > span {
    @apply justify-center items-center;
  }
}

@screen xs {
  .tab:first-child {
    @apply hidden;
  }
}

@screen md {
  .title {
    @apply text-2xl;
  }
  .quote {
    @apply mt-3 text-lg;
  }
  .tab {
    @apply text-base;
    &:last-child {
      @apply inline-block;
    }
  }
  .statistics {
    @apply text-lg;
  }
  .counts {
    @apply text-[4em];
  }
}
@screen lg {
  .title {
    @apply text-4xl;
  }
  .quote {
    @apply mt-3 text-2xl;
  }
  .tab {
    @apply text-lg;
  }
  .statistics {
    @apply text-xl;
  }
  .counts {
    @apply text-[5em];
  }
}
</style>
