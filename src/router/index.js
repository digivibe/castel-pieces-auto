import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CentreDepollutionView from '../views/CentreDepollutionView.vue'
import AtelierMecaniqueView from '../views/AtelierMecaniqueView.vue'

const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/centre-de-depollution',
            name: 'cenreDepollution',
            component: CentreDepollutionView
        },
        {
            path: '/garage-atelier-mecanique',
            name: 'atelierMecanique',
            component: AtelierMecaniqueView
        }
    ]
})

export default router