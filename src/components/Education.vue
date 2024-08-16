<script lang="ts" setup>
    import SectionTitle from './SectionTitle.vue';
</script>

<template>
    <div class="space-y-6">
        <SectionTitle :title="$t('education.title')"/>
        <p class="text-white text-xl font-thin text-justify ml-4">{{ $t('education.description')}}</p>
    </div>
</template>