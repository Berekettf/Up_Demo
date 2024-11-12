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

    <!-- Fixed Floating Card -->
    <div class="col-span-4">
      <div class="sticky top-0 mt-4" v-show="isVisible">
        <div class="absolute top-1/2 transform -translate-y-1 bg-white p-6 rounded-lg shadow-lg w-80 border border-gray-200">
          <div class="text-center mb-4">
            <p class="text-2xl font-bold text-gray-800">$14.99</p>
            <p class="text-sm line-through text-gray-500">$19.99</p>
            <p class="text-red-500 text-sm mt-1">25% off - 1 day left at this price!</p>
          </div>

          <button class="w-full bg-purple-600 text-white py-2 rounded-md mb-2 font-semibold">Add to cart</button>
          <button class="w-full border border-gray-300 py-2 rounded-md font-semibold">Buy now</button>

          <p class="text-gray-500 text-xs mt-4 text-center">30-Day Money-Back Guarantee</p>

          <div class="mt-4 text-sm">
            <p class="font-semibold">This course includes:</p>
            <ul class="text-gray-600 list-disc list-inside mt-2 space-y-1">
              <li>3 hours on-demand video</li>
              <li>1 downloadable resource</li>
              <li>Access on mobile and TV</li>
              <li>Full lifetime access</li>
              <li>Certificate of completion</li>
            </ul>
          </div>

          <div class="flex items-center justify-center mt-6 space-x-4 text-purple-500">
            <a href="#" class="text-xs font-semibold">Share</a>
            <a href="#" class="text-xs font-semibold">Gift this course</a>
            <a href="#" class="text-xs font-semibold">Apply Coupon</a>
          </div>

          <div class="mt-4">
            <label class="block text-sm font-semibold mb-1">Enter Coupon</label>
            <input type="text" class="border rounded-md w-full py-2 px-3 focus:outline-none focus:border-purple-600" placeholder="Enter Coupon" />
            <button class="w-full mt-2 bg-gray-800 text-white py-2 rounded-md font-semibold">Apply</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div ref="footer" class="mt-20 p-4 bg-slate-900 text-white">
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
      isVisible: true, // Controls visibility of the floating card
    };
  },
  mounted() {
    // Create an IntersectionObserver to watch the footer element
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.isVisible = false; // Hide card when footer is in view
      } else {
        this.isVisible = true; // Show card when footer is not in view
      }
    }, { threshold: 0 });

    // Start observing the footer element
    observer.observe(this.$refs.footer);
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
