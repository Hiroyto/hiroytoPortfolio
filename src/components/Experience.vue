<script setup lang="ts">
    import SectionTitle from './SectionTitle.vue';
    import Skill from './Skill.vue';
</script>

<template>
    <div class="space-y-6">
        <SectionTitle :title="$t('experience.title')"/>
        <div>
            <Skill :years="$t('experience.oneYear')" measure="w-full" image="src\components\icons\jsIcon.svg"/>
            <Skill :years="$t('experience.twoYears')" measure="w-2/3" image="src\components\icons\tsIcon.svg"/>
            <Skill :years="$t('experience.twoYears')" measure="w-2/3" image="src\components\icons\la--vuejs.svg"/>
        </div>
    </div>
</template>