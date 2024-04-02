import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CentreDepollutionView from '../views/VHUView.vue'
import AtelierMecaniqueView from '../views/AtelierMecaniqueView.vue'
import mentionsLegalesView from '../views/mentionsLegalesView.vue'

const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/jus',
            name: 'cenreDepollution',
            component: CentreDepollutionView
        },
        {
            path: '/garage-atelier-mecanique',
            name: 'atelierMecanique',
            component: AtelierMecaniqueView
        },
        {
            path: '/mentions-legales',
            name: 'mentionsLegales',
            component: mentionsLegalesView
        }
    ]
})

export default router