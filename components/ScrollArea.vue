<template>
    <div class="scroll-area h-screen w-full overflow-y-auto">
      <NuxtLink
        v-for="tag in tags"
        :key="tag.id"
        to="/dashboard/doctor/appointments/view/1"
        class="border mb-2 border-gray-200 shadow-sm text-xs bg-white py-3 px-2 inline-block w-full rounded-md"
      >
        <div class="flex justify-between items-center pb-2">
          <h2>Bereket Wube</h2>
          <span>4:00pm</span>
        </div>
        <div class="flex items-center gap-2">
          <div class="flex items-center">
            <DotIcon />
            <span>Follow Up</span>
          </div>
          <div class="flex items-center">
            <BriefcaseIcon class="w-4 h-4" />
            <span>Exam</span>
          </div>
        </div>
      </NuxtLink>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { DotIcon, BriefcaseIcon } from 'lucide-vue-next'
  
  const tags = ref(Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `name-${i + 1}`,
  })))
  </script>
  
  <style scoped>
  .scroll-area {
    /* Additional styling for the scroll area */
    overflow-y: auto;
  }
  </style>
  