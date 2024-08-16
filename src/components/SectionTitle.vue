<script lang="ts" setup>
  const props = defineProps({
    title: String
  })

const { title } = props;
</script>

<template>
  <h3 class="text-white text-2xl font-bold">{{ title }}</h3>
</template>
  