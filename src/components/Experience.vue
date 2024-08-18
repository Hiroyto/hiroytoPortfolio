<script setup lang="ts">
    import SectionTitle from './SectionTitle.vue';
    import Skill from './Skill.vue';
</script>

<template>
    <div class="space-y-6">
        <SectionTitle :title="$t('experience.title')"/>
        <div>
            <Skill :years="$t('experience.threeYears')" measure="w-full" image="src\assets\png\mdi--language-javascript.png"/>
            <Skill :years="$t('experience.twoYears')" measure="w-2/3" image="src\assets\png\mdi--language-typescript.png"/>
            <Skill :years="$t('experience.twoYears')" measure="w-2/3" image="src\assets\png\mdi--vuejs.png"/>
            <Skill :years="$t('experience.oneYear')" measure="w-1/3" image="src\assets\png\mdi--react.png"/>
        </div>
    </div>
</template>