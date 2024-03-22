<template>
    <Banner0 />
</template>

<script setup>
    import { onMounted } from 'vue';
    import { useHead } from '@vueuse/head';
    import Banner0 from '../components/Banner0.vue';
    import { APP_NAME, CANONICAL } from '../libs/constants'

    useHead({
        title: APP_NAME,
        meta: [
            { name: 'robots', content: 'index, follow' },
            { rel: 'canonical', href: CANONICAL },
        ],
    });

    onMounted(() => {
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
                setTimeout(animateArrows, 500);
            }, arrows.length * delayBetweenArrows + stayLitDuration);
        };

        animateArrows();
    });
</script>