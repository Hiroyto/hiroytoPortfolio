<script lang="ts" setup>
    import SectionTitle from './SectionTitle.vue';
    import GitIcon from './icons/GitIcon.vue';
import InstaIcon from './icons/InstaIcon.vue';
    import LinkedinIcon from './icons/LinkedinIcon.vue';

</script>

<template>
    <div>
        <SectionTitle class="mb-4" title='links.title'/>
        <div class="flex space-x-8 mb-4 ml-4">
            <a class="border border-white rounded-full px-2 py-2" href="https://www.linkedin.com/in/otavio-abe/">
                <LinkedinIcon class="hover:scale-125 duration-300"/>
            </a>
            <a class="border border-white rounded-full px-2 py-2" href="https://github.com/OtavioHiroyto">
                <GitIcon class="hover:scale-125 duration-300"/>
            </a>
            <a class="border border-white rounded-full px-2 py-2" href="https://github.com/OtavioHiroyto">
                <InstaIcon class="hover:scale-125 duration-300"/>
            </a>
        </div>
    </div>
</template>