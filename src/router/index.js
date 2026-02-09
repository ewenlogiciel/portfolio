import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Home.vue'
import Agenda from '../components/Projets/Agenda.vue'
import DataVision from '../components/Projets/DataVision.vue'
import Nexus from '../components/Projets/Nexus.vue'
import Cineverse from "@/components/Projets/Cineverse.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/agenda', component: Agenda },
{ path: '/datavision', component: DataVision },
    { path: '/nexus', component: Nexus },
    { path: '/cineverse', component: Cineverse }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return new Promise((resolve) => {
            const delay = (to.path === from.path && to.hash) ? 0 : 300

            if (savedPosition) {
                setTimeout(() => {
                    resolve(savedPosition)
                }, delay)
            } else if (to.hash) {
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
                }, delay)
            } else {
                setTimeout(() => {
                    resolve({ top: 0 })
                }, delay)
            }
        })
    }
})

export default router
