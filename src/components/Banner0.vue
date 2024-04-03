<template>
    <div class="banner-section-photo">
        <div class="flex flex-wrap items-center justify-center h-full md:flex-nowrap md:justify-between">
            <div class="flex flex-col justify-center w-full px-4 md:w-1/2 md:items-center" :class="[mm2, textleft]">
                <h2 class="text-5xl font-bold leading-tight" :class="[textleft, 'w-full', 'textwhity']">
                    <a href="/centre-de-depollution" class="block">Centre<br />VHU</a>
                </h2>
                <p class="text-2xl mt-4">
                    <a href="/centre-de-depollution" class="textwhity">centre de dépollution agréé</a>
                </p>
                <a href="/centre-de-depollution" class="mt-8 flex justify-center md:justify-start">
                    <div class="arrows-animated-wrappr flex space-x-2">
                        <img src="/images/arrow-outlone.svg" loading="lazy" alt="icon" :class="`first ${reverseit}`" width="67" height="84" />
                        <img src="/images/arrow-outlone.svg" loading="lazy" alt="icon" :class="`second ${reverseit}`" width="67" height="84" />
                        <img src="/images/arrow-outlone.svg" loading="lazy" alt="icon" :class="`third ${reverseit}`" width="67" height="84" />
                        <img src="/images/arrow-outlone.svg" loading="lazy" alt="icon" :class="`fourth ${reverseit}`" width="67" height="84" />
                    </div>
                </a>
            </div>
            <div class="flex flex-col justify-center items-end w-full px-4 md:w-1/2 md:items-center" :class="mm2">
                <h2 class="text-5xl font-bold leading-tight" :class="[textright, 'w-full', 'textwhity']">
                    <a href="/garage-atelier-mecanique" class="block">Atelier mécanique</a>
                </h2>
                <p class="text-2xl mt-4">
                    <a href="/centre.html" class="textwhity">toutes marques</a>
                </p>
                <a href="/garage-atelier-mecanique" class="mt-8 flex justify-center md:justify-end">
                    <div class="arrows-animated-wrappr flex space-x-2">
                        <img src="/images/arrow-outlone.svg" loading="lazy" alt="icon" class="fourth" width="67" height="84" />
                        <img src="/images/arrow-outlone.svg" loading="lazy" alt="icon" class="third" width="67" height="84" />
                        <img src="/images/arrow-outlone.svg" loading="lazy" alt="icon" class="second" width="67" height="84" />
                        <img src="/images/arrow-outlone.svg" loading="lazy" alt="icon" class="first" width="67" height="84" />
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
    // import { onMounted } from 'vue';
    import styles from '@/styles/Banner0.module.css';

    const { darkBackground, mm2, textleft, textwhity, reverseit, textright } = styles;

    /*onMounted(() => {
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
    }); */
</script>

<style>
    .fourth {
        animation: fourthgo 1.5s infinite;
    }
    @keyframes fourthgo {
        0% {
            opacity: 0;
        }
        20% {
            opacity: 1;
        }
        40% {
            opacity: 1;
        }
        60% {
            opacity: 1;
        }
        80% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
    .third {
        animation: thirdgo 1.5s infinite;
    }
    @keyframes thirdgo {
        0% {
            opacity: 0;
        }
        20% {
            opacity: 0;
        }
        40% {
            opacity: 1;
        }
        60% {
            opacity: 1;
        }
        80% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
    .second {
        animation: secondgo 1.5s infinite;
    }
    @keyframes secondgo {
        0% {
            opacity: 0;
        }
        20% {
            opacity: 0;
        }
        40% {
            opacity: 0;
        }
        60% {
            opacity: 1;
        }
        80% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
    .first {
        animation: firstgo 1.5s infinite;
    }
    @keyframes firstgo {
        0% {
            opacity: 0;
        }
        20% {
            opacity: 0;
        }
        40% {
            opacity: 0;
        }
        60% {
            opacity: 0;
        }
        80% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
</style>