<template>
    <div class="banner-section-photo">
        <div class="flex flex-wrap items-center justify-center h-full md:flex-nowrap md:justify-between">
            <div class="flex flex-col justify-center w-full px-4 md:w-1/2 md:items-center" :class="[mm2, textleft]">
                <h2 class="text-5xl font-bold leading-tight" :class="[textleft, 'w-full', 'textwhity']">
                    <a href="/centre.html" class="block">Centre<br />VHU</a>
                </h2>
                <p class="text-2xl mt-4">
                    <a href="/centre.html" class="textwhity">centre de dépollution agréé</a>
                </p>
                <a href="/centre-de-depollution" class="mt-8 flex justify-center md:justify-start">
                    <div class="arrows-animated-wrapper flex space-x-2">
                        <img src="/images/arrow-outlone.svg" loading="lazy" alt="icon"
                            :class="`arrow-animated ${reverseit}`" width="67" height="84" />
                        <img src="/images/arrow-outlone.svg" loading="lazy" alt="icon"
                            :class="`arrow-animated-two ${reverseit}`" width="67" height="84" />
                        <img src="/images/arrow-outlone.svg" loading="lazy" alt="icon"
                            :class="`arrow-animated-three ${reverseit}`" width="67" height="84" />
                        <img src="/images/arrow-outlone.svg" loading="lazy" alt="icon"
                            :class="`arrow-animated-four ${reverseit}`" width="67" height="84" />
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
                    <div class="arrows-animated-wrapper flex space-x-2">
                        <img src="/images/arrow-outlone.svg" loading="lazy" alt="icon" class="arrow-animated" width="67" height="84" />
                        <img src="/images/arrow-outlone.svg" loading="lazy" alt="icon" class="arrow-animated-two" width="67" height="84" />
                        <img src="/images/arrow-outlone.svg" loading="lazy" alt="icon" class="arrow-animated-three" width="67" height="84" />
                        <img src="/images/arrow-outlone.svg" loading="lazy" alt="icon" class="arrow-animated-four" width="67" height="84" />
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
@keyframes animateArrowRight {
  0% {
    transform: translateX(-50px);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateX(0px);
    opacity: 0;
  }
}

@keyframes animateArrowLeft {
  0% {
    transform: translateX(50px);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateX(0px);
    opacity: 0;
  }
}

.arrow-animated {
  animation: animateArrowRight 2s infinite;
}

.arrow-animated-reverse {
  animation: animateArrowLeft 2s infinite;
}

</style>