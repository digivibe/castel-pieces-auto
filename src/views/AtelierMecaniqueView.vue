<template>
    <Header :type="2" />
    <Banner2 />
    <Section2 />
    <Section3 />
    <SectionDevis />
    <Footer />
</template>

<script setup>
    import { useHead } from '@vueuse/head';
    import Header from '../components/Header.vue'
    import Banner2 from '../components/Banner2.vue'
    import Section2 from '../components/Section2.2.vue'
    import Section3 from '../components/Section2.3.vue'
    import SectionDevis from '../components/SectionDevis.vue'
    import Footer from '../components/Footer.vue'
    import { APP_NAME, CANONICAL } from '../libs/constants'

    const appName = APP_NAME;

    useHead({
        title: `Atelier Mécanique - ${appName}`,
        meta: [
            { name: 'robots', content: 'index, follow' },
            { name: 'canonical', href: `${CANONICAL}/garage-atelier-mecanique` },
        ],
    });
</script>