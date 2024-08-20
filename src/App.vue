<script setup lang="ts">
  import Biography from './components/Biography.vue';
  import Contact from './components/Contact.vue';
  import Education from './components/Education.vue';
  import Experience from './components/Experience.vue';
  import LanguageSwitcher from './components/LanguageSwitcher.vue';
  import Links from './components/Links.vue';
  import Profile from './components/Profile.vue';
</script>

<template>
  <LanguageSwitcher/>
  <main class="bg-night flex min-h-screen min-w-screen">
    <div class="mx-6 mt-6 w-full space-y-6 mb-4">
      <Profile/>
      <Biography/>
      <Links/>
      <Contact/>
      <Education/>
      <Experience/>
    </div>

    <!-- <div class="h-[80vh] border-white border-r"></div> -->

    <!-- <div class="min-w-[35vw] max-w-[50vw] mx-14 space-y-14"> -->
      <!-- <Contact/> -->
    <!-- </div> -->
  </main>
</template>