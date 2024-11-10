<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  CardFooter,
 
} from '@/components/ui/card'
</script>

<template>
  <div class="space-y-8 mt-6 border border-gray-300 p-4 ">
    <h1 class="scroll-m-20 text-md font-bold tracking-tight lg:text-3xl">
        Frequently Bought Together
    </h1>
    <div class="flex items-center justify-between col-span-12 ">
      <div class="flex items-center justify-between col-span-8 gap-10">
        <Avatar class="h-9 w-9">
          <AvatarImage src="/public/avatar1.png" alt="Avatar" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
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
      <div class=" col-span-4 pr-3">
        <div class="ml-auto font-medium">$14.88</div>
      </div>
    </div>
    <div class="flex items-center justify-between col-span-12 ">
      <div class="flex items-center justify-between col-span-8 gap-10">
        <Avatar class="h-9 w-9">
          <AvatarImage src="/public/avatar1.png" alt="Avatar" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
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
      <div class=" col-span-4 pr-3">
        <div class="ml-auto font-medium">$14.88</div>
      </div>
    </div>
    <div class="flex items-center justify-between col-span-12 ">
      <div class="flex items-center justify-between col-span-8 gap-10">
        <Avatar class="h-9 w-9">
          <AvatarImage src="/public/avatar1.png" alt="Avatar" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
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
      <div class=" col-span-4 pr-3">
        <div class="ml-auto font-medium">$14.88</div>
      </div>
    </div>
    <div class="flex items-center justify-between col-span-12 ">
      <div class="flex items-center justify-between col-span-8 gap-10">
        <Avatar class="h-9 w-9">
          <AvatarImage src="https://img-c.udemycdn.com/user/200_H/43253346_0b0b_2.jpg" alt="Avatar" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
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
      <div class=" col-span-4 pr-3">
        <div class="ml-auto font-medium">$14.88</div>
      </div>
    </div>
    <CardFooter class="justify-between space-x-2">
      <h2>Total:
$46.97
<span class="line-through">$112.97</span></h2>
      <Button>Add all to Cart</Button>
    </CardFooter>
    
  </div>
</template>
