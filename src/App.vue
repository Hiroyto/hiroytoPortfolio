<script setup lang="ts">
import Biography from './components/Biography.vue';
import Education from './components/Education.vue';
import Experience from './components/Experience.vue';
import Links from './components/Links.vue';
import Profile from './components/Profile.vue';
</script>

<template>
  <main class="bg-night flex min-h-screen max-h-screen items-center">
    <div class="min-w-[40vw] max-w-[50vw] mx-14 space-y-14">
      <Profile/>
      <Biography/>
      <Links/>
    </div>
    <div class="h-[80vh] border-white border-r"></div>
    <div class="min-w-[40vw] max-w-[50vw] mx-14 space-y-14">
      <Education/>
      <Experience/>
    </div>
  </main>
</template>