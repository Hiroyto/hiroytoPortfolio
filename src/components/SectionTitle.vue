<template>
  <h3 class="text-white text-2xl md:text-3xl font-bold">{{ translatedTitle }}</h3>
</template>


<script lang="ts" setup>
  import { computed } from 'vue';
  import { useI18n } from 'vue-i18n';

  const props = defineProps({
    title: String
  })

  const { t } = useI18n();

  const translatedTitle = computed(() => t(props.title!))
</script>

  