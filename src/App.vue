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
    <div class="mx-6 md:mx-0 mt-6 w-full mb-4 md:flex">
      <div class="space-y-6 md:space-y-14 md:ml-14 md:mr-8">
        <Profile/>
        <Biography/>
        <Links/>
        <Contact/>
      </div>
      <div class="md:h-[80vh] md:border-white md:border-r md:m-auto"></div>
      <div class="space-y-6 md:space-y-14 md:mx-14 md:flex md:flex-col md:justify-center">        
        <Education/>
        <Experience/>
      </div>
    </div>
  </main>
</template>