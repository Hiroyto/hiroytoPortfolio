import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'
import { createI18n } from 'vue-i18n'

import { pt_BR } from './locales/pt_BR.ts'
import { en_US } from './locales/en_US.ts'

const languages = {
    pt_BR,
    en_US
}

const i18n = createI18n({
    locale: 'en_US',
    fallbackLocale: 'pt_BR',
    allowComposition: true,
    messages: languages
})

createApp(App).use(i18n).mount('#app')
