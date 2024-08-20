<script setup lang="ts">
    import SectionTitle from './SectionTitle.vue';
    import Skill from './Skill.vue';
</script>

<template>
    <div class="space-y-6">
        <SectionTitle title='experience.title'/>
        <div class="ml-4">
            <Skill years='experience.threeYears' measure="w-full" image="/mdi--language-javascript.png"/>
            <Skill years='experience.twoYears' measure="w-2/3" image="/mdi--language-typescript.png"/>
            <Skill years='experience.twoYears' measure="w-2/3" image="public\mdi--vuejs.png"/>
            <Skill years='experience.oneYear' measure="w-1/3" image="public\mdi--react.png"/>
        </div>
    </div>
</template>