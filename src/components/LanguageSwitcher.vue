<template>
    <div class="flex items-center space-x-4">
      <label for="language-select" class="text-gray-700">Select Language:</label>
      <select
        id="language-select"
        v-model="currentLanguage"
        @change="switchLanguage"
        class="px-4 py-2 border rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
      >
        <option v-for="(label, code) in languages" :key="code" :value="code">
          {{ label }}
        </option>
      </select>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  import { useI18n } from 'vue-i18n';
  
  // Use o composable useI18n para acessar a instância do Vue I18n
  const { locale } = useI18n();
  
  // Defina os idiomas disponíveis
  const languages = {
    en_US: 'English',
    pt_BR: 'Français',
  };
  
  // Estado do idioma selecionado
  const currentLanguage = ref(locale.value);
  
  // Função para alterar o idioma
  const switchLanguage = () => {
    locale.value = currentLanguage.value;
  };
  </script>
  
  <style scoped>
  /* Adicione estilos adicionais, se necessário */
  </style>
  