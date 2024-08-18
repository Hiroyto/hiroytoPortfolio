<script lang="ts" setup>
import { computed } from 'vue';

    const props = defineProps({
        years: String,
        measure: [String, Array],
        image: String
    })
    
    const computedClasses = computed(() => {
        const customClassesArray = typeof props.measure === 'string' 
            ? props.measure.split(' ') 
            : props.measure || [];
        return [
            'border border-white h-10 rounded-full bg-blue-gradient flex',
            ...customClassesArray
        ].join(' ');
    });

const { years, image } = props;
</script>

<template>
    <div class="flex">
        <img class="w-16 h-16" :src="image" alt="Icon">
        <div class="ml-6 border border-white h-10 rounded-full w-full flex m-auto ">
            <div :class="computedClasses">
                <p class="text-white m-auto">{{ years }}</p>
            </div>
        </div>
    </div>
</template>
