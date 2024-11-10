<template>
  <div class="bg-gray-900 text-white px-20 py-8 gap-8 flex flex-col justify-between">
    <!-- Breadcrumb Navigation -->
    <div class="flex items-center space-x-2 text-gray-400 text-sm">
      <a href="#" class="hover:text-white">IT & Software</a>
      <span>&rsaquo;</span>
      <a href="#" class="hover:text-white">IT Certifications</a>
      <span>&rsaquo;</span>
      <a href="#" class="hover:text-white">Google Cloud</a>
    </div>

    <!-- Course Preview Section -->

    <div class="flex flex-col">
      <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl">
        Hands-on Google Cloud Platform (GCP) - Cloud <br> Architect
      </h1>
      <p class="text-lg">Cloud Architect Certification</p>
    </div>
   
      <div class="mb-4 flex flex-col ">
        <div class="flex items-center mr-4">
          <a
            href="#"
            class="flex items-center text-yellow-400 no-underline mr-4"
          >
            <span class="sr-only">Rating: 3.9 out of 5</span>
            <span class="text-lg mr-1">3.9</span>
            <span class="text-yellow-400">⭐⭐⭐⭐⭐</span>
            <span class="text-gray-300 ml-2">(817 ratings)</span>
          </a>
          <div class="text-gray-400">3,003 students</div>
        </div>
        <div class="mb-4">
          <div>
            <span class="text-sm">Created by</span>
            <a href="##" class="text-blue-400 hover:underline"
              >Notez (Rent a Mind)</a
            >
          </div>
        </div>
        <div class="flex items-center space-x-4 text-gray-400 text-sm">
          <div>Last updated 6/2018</div>
          <div>English</div>
          <div>English</div>
        </div>
      </div>
    </div>

</template>

<script>
export default {
  name: "CourseLandingPage",
};
</script>
