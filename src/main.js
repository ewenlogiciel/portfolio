import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
//import './scripts/script.js'
import router from './router/index.js'


createApp(App).use(router).mount('#app')
