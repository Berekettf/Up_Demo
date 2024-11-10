<template>
 <div class="grid grid-cols-12 gap-4 h-auto">
  <div class="scroll-area overflow-y-auto mt-4 mb-6 scrollbar-hidden col-span-8 px-12 border-r border-gray-200">
    <Certefication />
    <CourseContent />
    <Description />
    <CourseComparation />
    <FrequentBought />
    <InstructorRating />
  </div>

  <div class="col-span-4">
   
  </div>
</div>





</template>

<script>
import Certefication from "./Certefication.vue";
import CourseComparation from "./CourseComparation.vue";
import CourseContent from "./CourseContent.vue";
import FrequentBought from "./FrequentBought.vue";
import InstructorRating from "./InstructorRating.vue";

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
