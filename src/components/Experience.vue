<script setup lang="ts">
    import SectionTitle from './SectionTitle.vue';
    import Skill from './Skill.vue';
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
</script>

<template>
    <div class="space-y-6">
        <SectionTitle title='experience.title'/>
        <div>
            <Skill years='experience.threeYears' measure="w-full" image="src\assets\png\mdi--language-javascript.png"/>
            <Skill years='experience.twoYears' measure="w-2/3" image="src\assets\png\mdi--language-typescript.png"/>
            <Skill years='experience.twoYears' measure="w-2/3" image="src\assets\png\mdi--vuejs.png"/>
            <Skill years='experience.oneYear' measure="w-1/3" image="src\assets\png\mdi--react.png"/>
        </div>
    </div>
</template>