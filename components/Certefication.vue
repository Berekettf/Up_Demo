<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
} from "@/components/ui/card";


import { Separator } from "@/components/ui/separator";
</script>

<template>
    <div class="px-6"><Card>
    <CardContent>
      <Separator class="my-4 " />
      <div class="space-y-4">
       <span>Prepare for your certification with this course.<a class="text-red-400" href="#">Learn more</a></span>
        <div class="grid gap-6">
          <div class="flex items-center justify-between space-x-4">
            <div class="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="https://img-c.udemycdn.com/open-badges/v2/badge-class/1669080693/c1426e99-cdec-4dd5-bd9a-f1bda341759711601063208505863200.png" />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>
              <div>
                <p class="text-sm font-medium leading-none">
                  Professional Cloud Architect
                </p>
                <p class="text-sm text-muted-foreground">Issued by google cloud</p>
    
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </CardContent>
  </Card></div>
  
</template>
