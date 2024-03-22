<template>
    <div :class="`flex justify-center items-center h-screen ${darkBackground}`">
        <div class="banner-content-container left-align">
            <div class="arrows-animated-wrapper">
                <img v-for="index in 4" :key="`arrow-animated-${index}`" src="/images/arrow-outlone.svg" loading="lazy"
                    alt="icon" class="arrow-animated" width="67" height="84" style="display: inline-block;" />
            </div>
            <h1 class="home-title">
                Votre Solution Automobile Tout-en-un
            </h1>
            <p class="home-main-banner-discription">
                Castel Pièces Auto : Expertise, Qualité et Service sur-mesure pour votre véhicule, neuf ou d'occasion.
            </p>
            <div class="buttons-wrapper">
                <RouterLink to="/" class="primary-button w-button">
                    Demander un devis
                </RouterLink>
            </div>
        </div>
        <div class="arrows-banner-wrap">
            <img v-for="index in 3" :key="`arrow-banner-${index}`" src="/images/arrow-outlone-w.svg" loading="lazy"
                alt="icon" class="arrow-banner" width="66" height="84" style="display: inline-block;" />
        </div>
        <div class="arrows-banner-wrap-right">
            <img v-for="index in 5" :key="`arrow-banner-right-${index}`" src="/images/arrow-outlone-w.svg"
                loading="lazy" alt="icon" class="arrow-banner" width="66" height="84" style="display: inline-block;" />
        </div>
    </div>
</template>

<script setup>
    import { RouterLink } from 'vue-router'
    import styles from '@/styles/Banner0.module.css'

    const { darkBackground } = styles;
</script>