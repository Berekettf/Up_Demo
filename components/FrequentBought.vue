<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardFooter } from "@/components/ui/card";
</script>

<template>
  <div class="space-y-8 mt-6 border border-gray-300 px-6 py-4">
    <h1 class="scroll-m-20 text-md font-bold tracking-tight lg:text-3xl">
      Frequently Bought Together
    </h1>
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-4">
        <img
          class="h-28 w-60 object-cover"
          src="/public/avatar1.png"
          alt="Udemy Logo"
        />
        <div class="ml-4 space-y-1">
          <h2
            class="scroll-m-20 pb-2 text-lg font-bold tracking-tight transition-colors first:mt-0"
          >
            An Introduction to Google Cloud <br />
            platform for data Engineers
          </h2>
          <p class="text-sm text-muted-foreground">
            3 total hour -> updated 7/2024
          </p>
        </div>
      </div>

      <div class="pr-3">
        <div class="ml-auto font-medium">$14.88</div>
      </div>
    </div>
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-4">
        <img
          class="h-28 w-60 object-cover"
          src="/public/avatar1.png"
          alt="Udemy Logo"
        />
        <div class="ml-4 space-y-1">
          <h2
            class="scroll-m-20 pb-2 text-lg font-bold tracking-tight transition-colors first:mt-0"
          >
            An Introduction to Google Cloud <br />
            platform for data Engineers
          </h2>
          <p class="text-sm text-muted-foreground">
            3 total hour -> updated 7/2024
          </p>
        </div>
      </div>

      <div class="pr-3">
        <div class="ml-auto font-medium">$14.88</div>
      </div>
    </div>
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-4">
        <img
          class="h-28 w-60 object-cover"
          src="/public/avatar1.png"
          alt="Udemy Logo"
        />
        <div class="ml-4 space-y-1">
          <h2
            class="scroll-m-20 pb-2 text-lg font-bold tracking-tight transition-colors first:mt-0"
          >
            An Introduction to Google Cloud <br />
            platform for data Engineers
          </h2>
          <p class="text-sm text-muted-foreground">
            3 total hour -> updated 7/2024
          </p>
        </div>
      </div>

      <div class="pr-3">
        <div class="ml-auto font-medium">$14.88</div>
      </div>
    </div>
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <img
          class="h-28 w-60 object-cover"
          src="/public/avatar1.png"
          alt="Udemy Logo"
        />
        <div class="ml-4 space-y-1">
          <h2
            class="scroll-m-20 pb-2 text-lg font-bold tracking-tight transition-colors first:mt-0"
          >
            An Introduction to Google Cloud <br />
            platform for data Engineers
          </h2>
          <p class="text-sm text-muted-foreground">
            3 total hour -> updated 7/2024
          </p>
        </div>
      </div>

      <div class="pr-3">
        <div class="ml-auto font-medium">$14.88</div>
      </div>
    </div>
    <CardFooter class="justify-between space-x-2">
      <h2>Total: $46.97 <span class="line-through">$112.97</span></h2>
      <Button>Add all to Cart</Button>
    </CardFooter>
  </div>
</template>
