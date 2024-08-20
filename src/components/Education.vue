<script lang="ts" setup>
    import SectionTitle from './SectionTitle.vue';
</script>

<template>
    <div class="space-y-2">
        <SectionTitle title='education.title'/>
        <p class="text-white text-xl md:text-2xl font-thin text-justify ml-4">{{ $t('education.description')}}</p>
    </div>
</template>