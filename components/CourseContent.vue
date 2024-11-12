
<script>
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
<template>
    <div class="px-6 border border-gray-300 m-6 rounded-md py-3">
        <h1
          class="font-bold leading-tight tracking-normal max-w-screen-md text-2xl pb-3"
          
        >
          What you'll learn
        </h1>
        <div class=" rounded-lg shadow">
          <ul class="space-y-2 grid grid-cols-1 md:grid-cols-2 gap-1">
            <li
              v-for="(objective, index) in objectives"
              :key="index"
              class="flex items-start space-x-3"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                class="w-5 h-5 text-slate-800"
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
            class="border border-gray-300 bg-slate-100 shadow-sm text-md py-3 px-2 inline-block w-full"
          >
            <div class="flex justify-between items-center px-3">
              <h2>Introduction</h2>
              <span>4 lectures.5min</span>
            </div>
          </NuxtLink>
          <NuxtLink
            class="border border-gray-300 bg-slate-100 shadow-sm text-md py-3 px-2 inline-block w-full"
          >
            <div class="flex justify-between items-center px-3">
              <h2>Introduction</h2>
              <span>4 lectures.5min</span>
            </div>
          </NuxtLink>
          <NuxtLink
            class="border border-gray-300 bg-slate-100 shadow-sm text-md py-3 px-2 inline-block w-full"
          >
            <div class="flex justify-between items-center px-3">
              <h2>Introduction</h2>
              <span>4 lectures.5min</span>
            </div>
          </NuxtLink>
          <NuxtLink
            class="border border-gray-300 bg-slate-100 shadow-sm text-md py-3 px-2 inline-block w-full"
          >
            <div class="flex justify-between items-center px-3">
              <h2>Introduction</h2>
              <span>4 lectures.5min</span>
            </div>
          </NuxtLink>
          <NuxtLink
            class="border border-gray-300 bg-slate-100 shadow-sm text-md py-3 px-2 inline-block w-full"
          >
            <div class="flex justify-between items-center px-3">
              <h2>Introduction</h2>
              <span>4 lectures.5min</span>
            </div>
          </NuxtLink>
          <NuxtLink
            class="border border-gray-300 bg-slate-100 shadow-sm text-md py-3 px-2 inline-block w-full"
          >
            <div class="flex justify-between items-center px-3">
              <h2>Introduction</h2>
              <span>4 lectures.5min</span>
            </div>
          </NuxtLink>
          <NuxtLink
            class="border border-gray-300 bg-slate-100 shadow-sm text-md py-3 px-2 inline-block w-full"
          >
            <div class="flex justify-between items-center px-3">
              <h2>Introduction</h2>
              <span>4 lectures.5min</span>
            </div>
          </NuxtLink>
          <NuxtLink
            class="mt-2 mb-4 font-bold border border-gray-500 shadow-sm text-md py-3 px-2 inline-flex items-center justify-center w-full"
          >
            <span>3 more Sections</span>
          </NuxtLink>
        </div>
      </div>
      <div class="component-margin px-6 py-3">
        <h2
          class="scroll-m-20 text-3xl font-semibold tracking-tight lg:text-3xl py-3"
        >
          Requirements
        </h2>
        <ul class="list-none space-y-4">
          <li class="flex items-center text-sm">
            <svg
              aria-hidden="true"
              focusable="false"
              class="h-4 w-4 mr-2 text-gray-500"
              fill="currentColor"
            >
              <circle cx="8" cy="8" r="4"></circle>
            </svg>
            <div class="text-gray-700">Basic understanding of technology</div>
          </li>
          <li class="flex items-center text-sm">
            <svg
              aria-hidden="true"
              focusable="false"
              class="h-4 w-4 mr-2 text-gray-500"
              fill="currentColor"
            >
              <circle cx="8" cy="8" r="4"></circle>
            </svg>
            <div class="text-gray-700">Basic computer skills</div>
          </li>
        </ul>
      </div>
</template>