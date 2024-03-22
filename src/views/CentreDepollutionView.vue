<template>
    <main class="w-full h-full">
        <Header :type="1" />
        <Banner1 />
        <div id="scrollContainer" class="lg:w-[500vw] lg:h-[100vh] flex flex-col lg:flex-row lg:flex-nowrap">
            <section class="lg:h-[100vh] bg-gray-700 h-scroll-section">
                <AboutSection />
                <div ref="indicator1" class="w-3 h-3 bg-transparent hidden lg:block"></div>
            </section>
            <OfferSections />
        </div>
        <section class="lg:h-[201vh]">
            <div ref="sectionFour" id="four" class="lg:h-screen w-screen flex flex-col lg:sticky lg:top-0">
                <div class="px-4 pt-12 lg:pl-36 flex flex-col">
                    <div class="relative md:mb-20 md:ml-10">
                        <span class="text-outline-gray text-transparent absolute top-3 lg:top-0 font-bold text-[7rem] md:text-[10rem] lg:text-[14rem] opacity-10 leading-none">Services</span>
                        <h2 class="text-[2.5rem] md:text-[3rem] lg:font-semibold py-10 lg:py-20 whity">
                            Nos services
                        </h2>
                    </div>
                    <div
                        class="w-1/3 flex flex-col gap-5 lg:flex-row justify-around pr-16 lg:absolute lg:top-0 lg:right-0">
                        <div
                            class="flex flex-col items-start lg:items-center gap-8 translate-x-[-16px] lg:translate-x-0">
                            <div class="flex lg:flex-col items-center lg:justify-center">
                                <div ref="verticalLine4"
                                    class="lg:w-[2px] lg:h-0 w-[10vw] md:w-[200px] h-[2px] bg-gray-700"></div>
                                <div class="w-3 h-3 bg-gray-700"></div>
                                <span ref="brandingTag"
                                    class="font-semibold whity">Aide
                                    au déménagement</span>
                            </div>
                            <div class="flex lg:flex-col items-center lg:justify-center">
                                <div ref="verticalLine6"
                                    class="lg:w-[2px] lg:h-0 w-[30vw] md:w-[300px] h-[2px] bg-gray-700"></div>
                                <div ref="cube6" class="bg-gray-700 w-3 h-3 lg:h-0"></div>
                                <span ref="motionTag"
                                    class="font-semibold whity">Débarras
                                    de locaux</span>
                            </div>
                        </div>
                        <div
                            class="flex flex-col items-start lg:items-center gap-8 translate-x-[-16px] lg:translate-x-0">
                            <div class="flex lg:flex-col items-center lg:justify-center">
                                <div ref="verticalLine5"
                                    class="lg:w-[2px] lg:h-0 w-[50vw] md:w-[400px] h-[2px] bg-gray-700"></div>
                                <div class="w-3 h-3 bg-gray-700"></div>
                                <span ref="strategyTag"
                                    class="font-semibold whity">Vide
                                    maison</span>
                            </div>
                            <div class="flex lg:flex-col items-center lg:justify-center">
                                <div ref="verticalLine7"
                                    class="lg:w-[2px] lg:h-0 w-[65vw] md:w-[500px] h-[2px] bg-gray-700"></div>
                                <div ref="cube7" class="bg-gray-700 w-3 h-3 lg:h-0"></div>
                                <span ref="marketingTag"
                                    class="font-semibold whity">Tri
                                    et Recyclage</span>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-1/2 px-4 lg:px-0 pb-16">
                        <span class="py-10 mt-4 text-lg block">Découvrez l'excellence avec Liquidimmo. Nous proposons
                            des services de
                            déménagement efficaces, de débarras professionnel, de tri et recyclage, et
                            une assistance immobilière complète. Simplifiez votre transition avec notre
                            expertise.
                        </span>
                        <button class="bg-gray-700 text-lg text-white px-6 py-2 rounded-3xl font-bold">
                            Découvrir
                        </button>
                    </div>
                </div>
            </div>
            <div ref="indicator2" class="w-3 h-3 bg-transparent hidden lg:block"></div>
        </section>
        <Section2 />
        <Section3 />
        <SectionDevis />
        <Footer />
    </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
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
import AboutSection from "../components/c/AboutSection.vue";
import OfferSections from "../components/c/OfferSections.vue";

import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


const sectionFour = ref(null);
const verticalLine4 = ref(null);
const verticalLine5 = ref(null);
const verticalLine6 = ref(null);
const verticalLine7 = ref(null);
const cube6 = ref(null);
const cube7 = ref(null);
const brandingTag = ref(null);
const strategyTag = ref(null);
const motionTag = ref(null);
const marketingTag = ref(null);
const indicator2 = ref(null);


const desktop = window.matchMedia("(min-width: 992px)");

onMounted(() => {
    //Lenis smooth scroll

    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
        console.log(e);
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    //gsap scroll trigger part
    gsap.registerPlugin(ScrollTrigger);

    const hSrollSections = gsap.utils.toArray(".h-scroll-section");


    //Desktop scrollTrigger animations

    if (desktop.matches) {
        gsap.to(hSrollSections, {
            xPercent: -100 * (hSrollSections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: "#scrollContainer",
                pin: true,
                scrub: true,
                // snap: 1 / (hSrollSections.length - 1),
                end: () => "+=" + document.querySelector("#scrollContainer").offsetWidth,
            },
        });

        const timeline11 = gsap.timeline({
            scrollTrigger: {
                trigger: sectionFour.value,
                start: "top 75%",
                end: "top top",
                scrub: true,
                markers: false,
            },
        });

        const timeline12 = gsap.timeline({
            scrollTrigger: {
                trigger: sectionFour.value,
                start: "top 75%",
                end: "top top",
                scrub: true,
                markers: false,
            },
        });

        const timeline13 = gsap.timeline({
            scrollTrigger: {
                trigger: indicator2.value,
                start: "top bottom",
                end: "top 80%",
                scrub: true,
                markers: false,
            },
        });

        const timeline14 = gsap.timeline({
            scrollTrigger: {
                trigger: indicator2.value,
                start: "top 79%",
                end: "top 60%",
                scrub: true,
                markers: false,
            },
        });

        const timeline15 = gsap.timeline({
            scrollTrigger: {
                trigger: indicator2.value,
                start: "top 79%",
                end: "top 60%",
                scrub: true,
                markers: false,
            },
        });

        const timeline16 = gsap.timeline({
            scrollTrigger: {
                trigger: indicator2.value,
                start: "top 79%",
                end: "top 60%",
                scrub: true,
                markers: false,
            },
        });

        const timeline17 = gsap.timeline({
            scrollTrigger: {
                trigger: indicator2.value,
                start: "top 79%",
                end: "top 40%",
                scrub: true,
                markers: false,
            },
        });

        const timeline18 = gsap.timeline({
            scrollTrigger: {
                trigger: indicator2.value,
                start: "top 59%",
                end: "top 55%",
                scrub: true,
                markers: false,
            },
        });

        const timeline19 = gsap.timeline({
            scrollTrigger: {
                trigger: indicator2.value,
                start: "top 59%",
                end: "top 55%",
                scrub: true,
                markers: false,
            },
        });

        const timeline20 = gsap.timeline({
            scrollTrigger: {
                trigger: indicator2.value,
                start: "top 58%",
                end: "top 40%",
                scrub: true,
                markers: false,
            },
        });

        const timeline21 = gsap.timeline({
            scrollTrigger: {
                trigger: indicator2.value,
                start: "top 58%",
                end: "top 40%",
                scrub: true,
                markers: false,
            },
        });

        const timeline22 = gsap.timeline({
            scrollTrigger: {
                trigger: indicator2.value,
                start: "top 58%",
                end: "top 40%",
                scrub: true,
                markers: false,
            },
        });

        const timeline23 = gsap.timeline({
            scrollTrigger: {
                trigger: indicator2.value,
                start: "top 58%",
                end: "top 40%",
                scrub: true,
                markers: false,
            },
        });

        const timeline24 = gsap.timeline({
            scrollTrigger: {
                trigger: indicator2.value,
                start: "top 39%",
                end: "top top",
                scrub: true,
                markers: false,
            },
        });

        const timeline25 = gsap.timeline({
            scrollTrigger: {
                trigger: indicator2.value,
                start: "top 39%",
                end: "top top",
                scrub: true,
                markers: false,
            },
        });

        const timeline26 = gsap.timeline({
            scrollTrigger: {
                trigger: indicator2.value,
                start: "top 39%",
                end: "top top",
                scrub: true,
                markers: false,
            },
        });

        const timeline27 = gsap.timeline({
            scrollTrigger: {
                trigger: indicator2.value,
                start: "top 39%",
                end: "top top",
                scrub: true,
                markers: false,
            },
        });

        timeline11.to(verticalLine4.value, { height: "103vh" });

        timeline12.to(verticalLine5.value, { height: "92vh" });

        timeline13.to(verticalLine5.value, { height: "103vh" });

        timeline14.to(verticalLine4.value, { height: "92vh" });

        timeline15.to(verticalLine5.value, { height: "71vh" });

        timeline16.to(brandingTag.value, { opacity: 1 });

        timeline17.to(strategyTag.value, { opacity: 1 });

        timeline18.to(cube6.value, { height: "12px" });

        timeline19.to(cube7.value, { height: "12px" });

        timeline20.to(verticalLine4.value, { height: "70vh" });

        timeline21.to(verticalLine6.value, { height: "22vh" });

        timeline22.to(verticalLine5.value, { height: "49vh" });

        timeline23.to(verticalLine7.value, { height: "22vh" });

        timeline24.to(verticalLine4.value, { height: "40vh" });

        timeline25.to(verticalLine5.value, { height: "19vh" });

        timeline26.to(motionTag.value, { opacity: 1 });

        timeline27.to(marketingTag.value, { opacity: 1 });
    }
});
</script>

<style scoped>
@media (max-width: 992px) {

    #four {
        overflow-x: hidden;
    }
}
</style>