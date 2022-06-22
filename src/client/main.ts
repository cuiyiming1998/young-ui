import { createApp } from 'vue'
import { createInstall } from '../index'
import App from './App.vue'

createApp(App).use(createInstall()).mount('#app')