<template>
  <h3 class="text-white text-2xl font-bold">{{ translatedTitle }}</h3>
</template>


<script lang="ts" setup>
  import { ref, watch, computed } from 'vue';
  import { useI18n } from 'vue-i18n';

  const props = defineProps({
    title: String
  })

  const { title } = props;
  const { t } = useI18n();

  const translatedTitle = computed(() => t(props.title))
</script>

  