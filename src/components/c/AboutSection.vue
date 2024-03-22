<template>
    <div ref="sectionTwo" id="two" class="lg:h-screen w-screen flex flex-col overflow-x-hidden">
        <div class="px-4 pt-12 lg:pt-0 lg:pl-36 flex flex-col">
            <div class="relative md:mb-20 md:ml-10">
                <span
                    class="text-transparent text-outline-white absolute top-3 lg:top-0 font-bold text-[7rem] md:text-[10rem] lg:text-[14rem] opacity-10 leading-none">About</span>
                <h2 class="text-[2.5rem] md:text-[3rem] lg:font-semibold py-10 lg:py-20 text-white">
                    À propos de nous
                </h2>
            </div>
            <div ref="slideDown"
                class="w-1/2 flex flex-col gap-5 lg:flex-row justify-around pr-16 lg:absolute lg:top-0 lg:right-0">
                <div class="w-fit flex lg:flex-col items-center text-white translate-x-[-20px] lg:translate-y-[-140px]">
                    <div class="flex lg:flex-col items-center">
                        <div ref="verticalLine1" class="lg:w-[2px] lg:h-0 w-[40vw] md:w-[300px] h-[2px] bg-white"></div>
                        <div class="w-3 h-3 bg-white"></div>
                    </div>
                    <span ref="offers" id="offers"
                        class="lg:text-[6rem] w-[100px] text-center font-semibold number hidden lg:block">1</span>
                    <span class="ml-4 text-[4rem] md:text-[5rem] number lg:hidden">3</span>
                    <span
                        class="font-bold md:text-xl lg:lg:opacity-0 opaque absolute lg:static bottom-[-10px] right-0">Offres
                        personnalisables</span>
                </div>
                <div class="w-fit flex lg:flex-col items-center text-white translate-x-[-20px] lg:translate-y-[-150px]">
                    <div class="flex lg:flex-col items-center">
                        <div ref="verticalLine2" class="lg:w-[2px] lg:h-0 w-[60vw] md:w-[450px] h-[2px] bg-white"></div>
                        <div class="w-3 h-3 bg-white"></div>
                    </div>
                    <span ref="partnerships" id="partnerships"
                        class="lg:text-[6rem] w-[120px] text-center font-semibold number hidden lg:block">7</span>
                    <span class="ml-4 text-[4rem] md:text-[5rem] number lg:hidden">21</span>
                    <span
                        class="font-bold md:text-xl lg:opacity-0 opaque absolute lg:static bottom-[-10px] right-0">Agences</span>
                </div>
                <div class="w-fit flex lg:flex-col items-center text-white translate-x-[-20px] lg:translate-y-[-130px]">
                    <div class="flex lg:flex-col items-center">
                        <div ref="verticalLine3" class="lg:w-[2px] lg:h-0 w-[25vw] md:w-[375px] h-[2px] bg-white"></div>
                        <div class="w-3 h-3 bg-white"></div>
                    </div>
                    <span class="lg:text-[6rem] font-semibold w-[250px] text-center hidden lg:block"><span
                            class="opaque">+</span><span ref="events" id="events" class="number">85</span></span>
                    <span class="ml-4 text-[4rem] md:text-[5rem] lg:hidden"><span class="opaque">+</span><span
                            class="number">800</span></span>
                    <span
                        class="font-bold md:text-xl lg:opacity-0 opaque absolute lg:static bottom-[-10px] right-0">Déménagements
                        accompagnés</span>
                </div>
            </div>
        </div>
        <div class="lg:w-1/2 px-4 md:px-8 lg:px-24 pb-16">
            <span class="py-10 mt-4 text-lg block font-thin text-white"><span class="font-bold">Liquidimmo</span> ,
                c'est une entreprise avant tout
                humaine, qui souhaite rendre le processus de débarras ou de déménagement aussi
                fluide et simple que possible. Avec une approche basée sur une logistique efficace
                et optimale, nous sommes le net plus ultra des services de
                <span class="font-bold">vide maison</span>.Grâce à une équipe dévouée, nous
                planifions chaque étape avec précision, offrant des interfaces conviviales et des
                informations complètes pour garantir une expérience sans souci.</span>
            <button class="bg-white text-lg text-black px-6 py-3 rounded-3xl font-bold">
                En savoir plus
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const sectionTwo = ref(null);
const verticalLine1 = ref(null);
const verticalLine2 = ref(null);
const verticalLine3 = ref(null);
const offers = ref(null);
const partnerships = ref(null);
const events = ref(null);

const desktop = window.matchMedia("(min-width: 992px)");

onMounted(() => {
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

    if (desktop.matches) {
        const timeline4 = gsap.timeline({
            scrollTrigger: {
                trigger: sectionTwo.value,
                start: "top bottom",
                end: "bottom bottom",
                scrub: true,
                markers: false,
            },
        });

        timeline4.to(verticalLine1.value, { height: "465px" });

        const timeline5 = gsap.timeline({
            scrollTrigger: {
                trigger: sectionTwo.value,
                start: "top bottom",
                end: "bottom bottom",
                scrub: true,
                markers: false,
            },
        });

        timeline5.to(verticalLine2.value, { height: "320px" });

        const timeline6 = gsap.timeline({
            scrollTrigger: {
                trigger: sectionTwo.value,
                start: "top bottom",
                end: "bottom bottom",
                scrub: true,
                markers: false,
            },
        });

        timeline6.to(verticalLine3.value, { height: "500px" });

        gsap.to(offers.value, {
            scrollTrigger: {
                trigger: sectionTwo.value,
                start: "top bottom",
                end: "bottom bottom",
                scrub: true,
                markers: false,
                onUpdate: function (progress) {
                    const newValue = Math.round(progress.progress * 3);
                    if (newValue < 1) {
                        newValue = 1;
                    }
                    offers.value.innerHTML = newValue;
                },
            },
        });

        gsap.to(partnerships.value, {
            scrollTrigger: {
                trigger: sectionTwo.value,
                start: "top bottom",
                end: "bottom bottom",
                scrub: true,
                markers: false,
                onUpdate: function (progress) {
                    const newValue = Math.round(progress.progress * 21);
                    if (newValue < 7) {
                        newValue = 7;
                    }
                    partnerships.value.innerHTML = newValue;
                },
            },
        });

        gsap.to(events.value, {
            scrollTrigger: {
                trigger: sectionTwo.value,
                start: "top bottom",
                end: "bottom bottom",
                scrub: true,
                markers: false,
                onUpdate: function (progress) {
                    const newValue = Math.round(progress.progress * 800);
                    if (newValue < 85) {
                        newValue = 85;
                    }
                    events.value.innerHTML = newValue;
                },
            },
        });

        gsap.to(".opaque", {
            scrollTrigger: {
                trigger: sectionTwo.value,
                start: "top bottom",
                end: "bottom bottom",
                scrub: true,
                markers: false,
            },
            opacity: 1,
        });
    }
});
</script>

<style scoped>
#two {
    z-index: 3;
}
</style>
