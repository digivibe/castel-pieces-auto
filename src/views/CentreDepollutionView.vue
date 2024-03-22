<template>
    <Header :type="1" />
    <Banner1 />
    <Section2 />
    <Section3 />
    <SectionDevis />
    <Footer />
</template>

<script setup>
    import { onMounted } from 'vue';
    import { useHead } from '@vueuse/head';
    import Header from '../components/Header.vue'
    import Banner1 from '../components/Banner1.vue'
    import Section2 from '../components/Section1.2.vue'
    import Section3 from '../components/Section1.3.vue'
    import SectionDevis from '../components/SectionDevis.vue'
    import Footer from '../components/Footer.vue'
    import { APP_NAME, CANONICAL } from '../libs/constants'

    const appName = APP_NAME;

    useHead({
        title: `Centre de dépollution - ${appName}`,
        meta: [
            { name: 'robots', content: 'index, follow' },
            { name: 'canonical', href: `${CANONICAL}/centre-de-depollution` },
        ],
    });

    const animateArrows = () => {
        const arrows = document.querySelectorAll('.arrows-animated-wrapper > img');
        const delayBetweenArrows = 200;
        const stayLitDuration = 600;

        arrows.forEach((arrow, index) => {
            setTimeout(() => {
                arrow.style.animation = `fadeIn 0.5s forwards`;
            }, index * delayBetweenArrows);
        });

        setTimeout(() => {
            arrows.forEach((arrow) => {
                arrow.style.animation = `fadeOut 0.5s forwards`;
            });
            setTimeout(animateArrows, arrows.length * delayBetweenArrows + stayLitDuration + 500);
        }, arrows.length * delayBetweenArrows + stayLitDuration);
    };

    onMounted(() => {
        animateArrows();
    });
</script>