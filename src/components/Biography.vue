<template>
    <div class="space-y-2">
        <SectionTitle title='biography.title'/>
        <p class="text-white text-xl font-thin text-justify ml-4">{{ $t('biography.description')}}</p>
    </div>
</template>

<script lang="ts" setup>
    import SectionTitle from './SectionTitle.vue';
    import { useI18n } from 'vue-i18n';

    const { t } = useI18n();
</script>
