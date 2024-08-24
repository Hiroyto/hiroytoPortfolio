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
            'border-white h-[36px] rounded-full flex grow-animation bg-blue-gradient',
            ...customClassesArray
        ].join(' ');
    });

    const { image } = props;
    const { t } = useI18n();

    const translatedDate = computed(() => t(props.years!))
</script>

<template>
    <div class="flex">
        <img class="w-[72px] h-[72px]" :src="image" alt="Icon">
        <div class="ml-4 border-2 border-white h-10 rounded-full w-full m-auto flex items-center">
            <div :class="computedClasses">
                <p class="text-white m-auto font-medium text-lg">{{ translatedDate }}</p>
            </div>
        </div>
    </div>
</template>

<style>
    @keyframes growFromLeft {
    from {
        transform: scaleX(0);
        transform-origin: left;
        opacity: 0;
    }
    to {
        transform: scaleX(1);
        transform-origin: left;
        opacity: 1;
    }
    }

    .grow-animation {
    animation: growFromLeft 1s ease-out forwards;
    }
</style>
