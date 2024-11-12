<template>
    <a
      :href="link"
      target="_blank"
      rel="noopener noreferrer"
      class="block w-24 h-24 overflow-hidden rounded-lg"
    >
      <img
        :src="imageUrl"
        :alt="altText"
        class="object-cover w-full h-full"
      />
    </a>
  </template>
  
  <script>
  export default {
    props: {
      link: {
        type: String,
        default: "#"
      },
      imageUrl: {
        type: String,
        required: true
      },
      altText: {
        type: String,
        default: "Image"
      }
    }
  };
  </script>
  