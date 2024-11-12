<template>
    <div class="relative flex justify-center items-center min-h-screen bg-gray-100">
      <!-- Empty container as background -->
      <div class="h-full w-full"></div>
  
      <!-- Floating card -->
      <div class="absolute top-1/2 transform -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg w-80 border border-gray-200">
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
  </template>
  
  <style scoped>
  /* Additional styles if needed */
  </style>
  