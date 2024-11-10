<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";
</script>

<template>
  <div class="border-none mt-3">
    <Card>
      <CardContent>
        <Separator class="my-4" />
        <div class="space-y-4">
          <h1 class="scroll-m-20  pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">Instructor</h1>
          <h2 class="scroll-m-20  pb-2 text-md font-semibold tracking-tight transition-colors first:mt-0">Notez (Rent a mind)</h2>
          <span>Notez</span>
          <div class="grid gap-6">
            <div class="flex items-center justify-between space-x-4">
              <div class="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage
                    src="https://img-c.udemycdn.com/user/200_H/43253346_0b0b_2.jpg"
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div>
                  <p class="text-sm font-medium leading-none">
                    Professional Cloud Architect
                  </p>
                  <p class="text-sm text-muted-foreground">
                    Issued by google cloud
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class="mt-4">
            Found by a team of dynamic young professionals, Notez aims to implant the necessary skills in you, in order to make you excel professionally and personally. You may be a beginner, a curious student, a hobbiest or a working professional looking to upgrade skills, WE have the best content for all.
      </p>
      <h2>Our mission statment</h2>
      <p class="text-gray-400">We are a global provider of high-quality, innovative, practical oriented online training. We intend to Enable individuals to achieve competitive advantages through superior enterprise-wide knowledge and</p>
      <p class="mt-4 font-bold text-blue-600 cursor-pointer">Show more <span class="text-blue-400">&#x25BC;</span></p>
      </CardContent>
    </Card>
  </div>
</template>
