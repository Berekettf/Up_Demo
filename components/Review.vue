<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";
</script>

<template>
  <Card>
    <CardContent>
      <Separator class="my-4" />
      <div class="space-y-4">
        <h4 class="text-sm font-medium">Instructor</h4>
        <p>Colt Steal</p>
        <p>Developer and Bootcamp Instructor</p>
        <div class="grid gap-6">
          <div class="flex items-center justify-between space-x-4">
            <div class="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="#" />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>
              <div>
                <p class="text-sm font-medium leading-none">
                  4.7 Instructor Rating
                </p>
                <p class="text-sm text-muted-foreground">546,253 Reviews</p>
                <p class="text-sm font-medium leading-none">
                  1,796,108 Students
                </p>
                <p class="text-sm text-muted-foreground">30 Courses</p>
              </div>
            </div>
          </div>
          <div class="w-full px-4 md:px-8 lg:px-12">
            <p class="text-justify">
              Hi! I'm Colt. I'm a developer with a serious love for teaching.
              I've spent the last few years teaching people to program at 2
              different immersive bootcamps where I've helped hundreds of people
              become web developers and change their lives. My graduates work at
              companies
              <span
                class="backdrop-blur-md text-black bg-white/70 bg-clip-text"
              >
                like Google, Salesforce, and Square. Most recently, I led
                Galvanize's SF's 6-month immersive program as Lead Instructor
                and Curriculum Director. After graduating from my class, 94% of
                my students went on to receive full-time developer roles. I also
                worked at Udacity as a Senior Course Developer on the web
                development team where I got to reach thousands of
              </span>
            </p>
            <p class="font-bold text-blue-500 cursor-pointer mt-2">see more</p>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
