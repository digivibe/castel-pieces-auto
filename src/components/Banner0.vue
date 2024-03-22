<template>
    <div :class="`flex justify-center items-center h-screen ${darkBackground}`">
        <div class="flex flex-wrap items-center justify-center h-full md:justify-between">
            <div :class="`flex flex-col justify-center w-full md:w-1/2 md:items-center ${mm2} ${textleft}`">
                <h1 :class="`home-title mx-4 ${textright}`">
                    <a href="/centre-de-depollution" :class="textwhity">Centre de dépollution</a>
                </h1>
                <a href="/centre-de-depollution">
                    <div class="arrows-animated-wrapper">
                        <img src="/images/arrow-outlone.svg" loading="lazy" alt="icon"
                            :class="`arrow-animated ${reverseit}`" width="67" height="84"
                            style="display: inline-block;" />
                        <img src="/images/arrow-outlone.svg" loading="lazy" alt="icon"
                            :class="`arrow-animated-two ${reverseit}`" width="67" height="84"
                            style="display: inline-block;" />
                        <img src="/images/arrow-outlone.svg" loading="lazy" alt="icon"
                            :class="`arrow-animated-three ${reverseit}`" width="67" height="84"
                            style="display: inline-block;" />
                        <img src="/images/arrow-outlone.svg" loading="lazy" alt="icon"
                            :class="`arrow-animated-four ${reverseit}`" width="67" height="84"
                            style="display: inline-block;" />
                    </div>
                </a>
            </div>
            <div :class="`flex flex-col justify-center items-end w-full md:w-1/2 md:items-center ${mm2}`">
                <h1 :class="`home-title mx-4 ${textright}`">
                    <a href="/garage-atelier-mecanique" :class="`${textwhity}`">Atelier mécanique</a>
                </h1>
                <a href="/garage-atelier-mecanique">
                    <div class="arrows-animated-wrapper">
                        <img src="/images/arrow-outlone.svg" loading="lazy" alt="icon"
                            :class="`arrow-animated `" width="67" height="84"
                            style="display: inline-block;" />
                        <img src="/images/arrow-outlone.svg" loading="lazy" alt="icon"
                            :class="`arrow-animated-two`" width="67" height="84"
                            style="display: inline-block;" />
                        <img src="/images/arrow-outlone.svg" loading="lazy" alt="icon"
                            :class="`arrow-animated-three`" width="67" height="84"
                            style="display: inline-block;" />
                        <img src="/images/arrow-outlone.svg" loading="lazy" alt="icon"
                            :class="`arrow-animated-four`" width="67" height="84"
                            style="display: inline-block;" />
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { onMounted } from 'vue';
    import styles from '@/styles/Banner0.module.css';

    const { darkBackground, mm2, textleft, textwhity, reverseit, textright } = styles;

    onMounted(() => {
        const arrowContainers = document.querySelectorAll('.arrows-animated-wrapper');
        const delayBetweenArrows = 200;
        const stayLitDuration = 600;

        const animateArrows = (arrows, isReversed) => {
            const arrowsToAnimate = isReversed ? Array.from(arrows).reverse() : arrows;

            arrowsToAnimate.forEach((arrow, index) => {
                setTimeout(() => {
                    arrow.style.animation = `fadeIn 0.5s forwards`;
                }, index * delayBetweenArrows);
            });

            setTimeout(() => {
                arrowsToAnimate.forEach((arrow) => {
                    arrow.style.animation = `fadeOut 0.5s forwards`;
                });
                setTimeout(() => animateArrows(arrows, !isReversed), 500);
            }, arrowsToAnimate.length * delayBetweenArrows + stayLitDuration);
        };

        arrowContainers.forEach((container, index) => {
            const arrows = container.querySelectorAll('img');
            animateArrows(arrows, index % 2 === 0);
        });
    });
</script>