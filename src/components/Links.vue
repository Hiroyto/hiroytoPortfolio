<script lang="ts" setup>
    import SectionTitle from './SectionTitle.vue';
    import GitIcon from './icons/GitIcon.vue';
import InstaIcon from './icons/InstaIcon.vue';
    import LinkedinIcon from './icons/LinkedinIcon.vue';

</script>

<template>
    <div>
        <SectionTitle class="mb-4" title='links.title'/>
        <div class="flex space-x-8 justify-center mb-4">
            <a class="border border-white rounded-full px-2 py-2" href="https://www.linkedin.com/in/otavio-abe/">
                <LinkedinIcon/>
            </a>
            <a class="border border-white rounded-full px-2 py-2" href="https://github.com/OtavioHiroyto">
                <GitIcon/>
            </a>
            <a class="border border-white rounded-full px-2 py-2" href="https://github.com/OtavioHiroyto">
                <InstaIcon/>
            </a>
        </div>
    </div>
</template>