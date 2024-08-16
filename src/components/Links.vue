<script lang="ts" setup>
    import SectionTitle from './SectionTitle.vue';
    import GitIcon from './icons/GitIcon.vue';
    import LinkedinIcon from './icons/LinkedinIcon.vue';

</script>

<template>
    <div>
        <SectionTitle class="mb-6" :title="$t('links.title')"/>
        <div class="flex">
            <a href="https://www.linkedin.com/in/otavio-abe/">
                <LinkedinIcon class="ml-4"/>
            </a>
            <a href="https://github.com/OtavioHiroyto">
                <GitIcon class="ml-4"/>
            </a>
        </div>
    </div>
</template>