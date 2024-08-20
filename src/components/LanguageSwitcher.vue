<template>
  <div class="fixed bottom-3 right-2 md:top-2">
    <div class="flex border border-white rounded-xl">
      <div
      @click="switchLanguage('pt_BR')"
      :class="[
          'px-2 py-1 cursor-pointer',
          currentLanguage === 'pt_BR'
            ? 'border border-white bg-white rounded-l-[10px]'
            : 'transition duration-300 hover:scale-110'
        ]"
      >
        <img class="w-10" src="../assets/png/twemoji--flag-brazil.png" alt="">
      </div>
      <div
        @click="switchLanguage('en_US')"
        :class="[
          'px-2 py-1 cursor-pointer',
          currentLanguage === 'en_US'
            ? 'border border-white bg-white rounded-r-[11px]'
            : 'transition duration-300 hover:scale-110'
        ]"
      >
        <img class="w-10" src="../assets/png/twemoji--flag-united-states.png" alt="">
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const currentLanguage = ref(locale.value);

const switchLanguage = (code: string) => {
  currentLanguage.value = code;
  locale.value = code;
};
</script>
