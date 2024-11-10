<template>

  <div class="grid grid-cols-12 ">
    <div
      class="scroll-area max-h-[500px] overflow-y-auto mt-4 scrollbar-hidden col-span-8 px-12 border-r border-gray-200"
    >
      <div class="px-6 border border-gray-300 m-6 rounded-md">
        <h1
          class="font-semibold leading-tight tracking-normal max-w-screen-md"
          style="
            font-family: var(--font-stack-heading);
            font-size: clamp(
              1.8rem,
              calc(1.8rem + (2.4 - 1.8) * ((100vw - 36rem) / (144 - 36))),
              2.4rem
            );
          "
        >
          What you'll learn
        </h1>
        <div class="bg-gray-50 rounded-lg shadow">
          <ul class="space-y-2 grid grid-cols-1 md:grid-cols-2 gap-1">
            <li
              v-for="(objective, index) in objectives"
              :key="index"
              class="flex items-start space-x-3"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                class="w-5 h-5 text-green-500"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M9 16.17L4.83 12a1 1 0 10-1.41 1.41l5 5c.39.39 1.02.39 1.41 0l12-12a1 1 0 10-1.41-1.41L9 16.17z"
                />
              </svg>
              <span class="text-gray-800 text-sm">{{ objective }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="px-6 border border-gray-300 m-6 rounded-md">
        <h1
          class="font-semibold leading-tight tracking-normal max-w-screen-md"
          style="
            font-family: var(--font-stack-heading);
            font-size: clamp(
              1.8rem,
              calc(1.8rem + (2.4 - 1.8) * ((100vw - 36rem) / (144 - 36))),
              2.4rem
            );
          "
        >
          What you'll learn
        </h1>
        <div class="bg-gray-50 rounded-lg shadow">
          <ul class="space-y-2 grid grid-cols-1 md:grid-cols-2 gap-1">
            <li
              v-for="(objective, index) in objectives"
              :key="index"
              class="flex items-start space-x-3"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                class="w-5 h-5 text-green-500"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M9 16.17L4.83 12a1 1 0 10-1.41 1.41l5 5c.39.39 1.02.39 1.41 0l12-12a1 1 0 10-1.41-1.41L9 16.17z"
                />
              </svg>
              <span class="text-gray-800 text-sm">{{ objective }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div class="p-6">
          <h1
            class="mb-4 scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-3xl"
          >
            Explore related topics
          </h1>
          <div class="container mx-auto px-4">
            <ul
              class="ud-unstyled-list pill-group-module--pill-group--q7hFg flex flex-wrap gap-4 mt-4"
            >
              <li class="pill-group-module--pill--4e6tF">
                <a
                  href="#"
                  class="ud-btn ud-btn-large ud-btn-secondary ud-btn-round ud-heading-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full px-6 py-2"
                >
                  <span class="leading-7 [&:not(:first-child)]:mt-6"
                    >Google Cloud</span
                  >
                </a>
              </li>
              <li class="pill-group-module--pill--4e6tF">
                <a
                  href="#"
                  class="ud-btn ud-btn-large ud-btn-secondary ud-btn-round border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full px-6 py-2"
                >
                  <span class="leading-7 [&:not(:first-child)]:mt-6"
                    >Google Cloud Professional Cloud Architect</span
                  >
                </a>
              </li>
              <li class="pill-group-module--pill--4e6tF">
                <a
                  href="#"
                  class="border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full px-6 py-2"
                >
                  <span class="leading-7 [&:not(:first-child)]:mt-6"
                    >IT Certifications</span
                  >
                </a>
              </li>
              <li class="pill-group-module--pill--4e6tF">
                <a
                  href="#"
                  class="ud-btn ud-btn-large ud-btn-secondary ud-btn-round ud-heading-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full px-6 py-2"
                >
                  <span class="leading-7 [&:not(:first-child)]:mt-6"
                    >IT & Software</span
                  >
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div class="p-6">
          <h1
            class="mb-4 scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-3xl"
          >
            Course content
          </h1>
          <div class="flex items-center justify-between">
            <div class="">
              <span class="text-gray-800 text-sm">
                <span>13 sections</span> • <span>43 lectures</span> •
                <span><span>3h&nbsp;6m</span> total length</span>
              </span>
            </div>
            <a href="#"><span>Expand all sections</span></a>
          </div>
        </div>
        <div class="px-6">
          <NuxtLink
            v-for="tag in tags"
            :key="tag.id"
            to="#"
            class="border border-gray-300 bg-slate-100 shadow-sm text-md py-3 px-2 inline-block w-full"
          >
            <div class="flex justify-between items-center">
              <h2>Bereket Wube</h2>
              <span>4:00pm</span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="col-span-4"></div>
  </div>
</template>

<script>
import { ref } from "vue";
import { DotIcon, BriefcaseIcon } from "lucide-vue-next";

export default {
  data() {
    return {
      objectives: [
        "Deploy Managed Hadoop apps on the Google Cloud",
        "Make informed decisions about Containers, VMs and AppEngine",
        "Understand overall architecture and working of Google Cloud",
        "Gain ability to work on GCP practically",
        "Preparedness for cloud architect professional exam",
        "Practice exam of exam standard",
      ],
    };
  },
  setup() {
    const tags = ref(
      Array.from({ length: 11 }, (_, i) => ({
        id: i + 1,
        name: `name-${i + 1}`,
      }))
    );
    return { tags };
  },
};
</script>

<style scoped>
svg {
  fill: currentColor;
}
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}

.scrollbar-hidden {
  -ms-overflow-style: none; /* For Internet Explorer and Edge */
  scrollbar-width: none; /* For Firefox */
}
</style>
