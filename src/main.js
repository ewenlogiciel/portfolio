import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

app.mixin({
    mounted() {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        })
    }
})

router.afterEach(() => {
    setTimeout(() => {
        AOS.refresh()
    }, 500)
})

app.use(router).mount('#app')
