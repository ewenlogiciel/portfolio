import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Home.vue'
import Agenda from '../components/Projets/Agenda.vue'
import Utopia from '../components/Projets/Utopia.vue'
import DataVision from '../components/Projets/DataVision.vue'
import OblivionFest from '../components/Projets/OblivionFest.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/agenda', component: Agenda },
    { path: '/utopia', component: Utopia },
    { path: '/datavision', component: DataVision },
    { path: '/oblivion_fest', component: OblivionFest }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }

        if (to.hash) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const element = document.querySelector(to.hash)
                    if (element) {
                        const elementRect = element.getBoundingClientRect()
                        const absoluteElementTop = elementRect.top + window.pageYOffset
                        const middle = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2)

                        resolve({
                            top: middle,
                            behavior: 'smooth'
                        })
                    } else {
                        resolve({ top: 0 })
                    }
                }, 100)
            })
        }

        return { top: 0 }
    }
})

export default router
