<template>
    <div class="space-y-2 md:space-y-6 md:w-[52vw]">
        <SectionTitle title='biography.title'/>
        <p class="text-white text-xl md:text-2xl font-thin text-justify ml-4">{{ $t('biography.description')}}</p>
    </div>
</template>

<script lang="ts" setup>
    import SectionTitle from './SectionTitle.vue';
</script>
