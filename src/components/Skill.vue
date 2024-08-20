<script lang="ts" setup>
    import { computed } from 'vue';
    import { useI18n } from 'vue-i18n';

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
            'border border-white h-10 rounded-full bg-blue-gradient flex relative top-[-1px]',
            ...customClassesArray
        ].join(' ');
    });

    const { image } = props;
    const { t } = useI18n();

    const translatedDate = computed(() => t(props.years!))
</script>

<template>
    <div class="flex">
        <img class="w-16 h-16" :src="image" alt="Icon">
        <div class="ml-4 border border-white h-10 rounded-full w-full flex m-auto">
            <div :class="computedClasses">
                <p class="text-white m-auto">{{ translatedDate }}</p>
            </div>
        </div>
    </div>
</template>
