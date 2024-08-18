<script lang="ts" setup>
    import SectionTitle from './SectionTitle.vue';
</script>

<template>
    <div class="space-y-6 mx-14">
        <SectionTitle :title="$t('biography.title')"/>
        <p class="text-white text-xl font-thin text-justify ml-4">{{ $t('biography.description')}}</p>
    </div>
</template>