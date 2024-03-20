import React, { useEffect, useRef } from 'react';
import gsap from 'gsap/dist/gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

import styles from '@/styles/AboutSection.module.css';

const AboutSection = () => {
    /* const sectionTwoRef = useRef(null);
    const verticalLine1Ref = useRef(null);
    const verticalLine2Ref = useRef(null);
    const verticalLine3Ref = useRef(null);
    const offersRef = useRef(null);
    const slideDownRef = useRef(null);
    const partnershipsRef = useRef(null);
    const eventsRef = useRef(null);

    useEffect(() => {
        const lenis = new Lenis();

        lenis.on('scroll', (e) => {
            console.log(e);
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
        gsap.registerPlugin(ScrollTrigger);

        const desktop = window.matchMedia('(min-width: 992px)');

        if (desktop.matches) {

            const timelines = [
                { element: verticalLine1Ref, height: '465px' },
                { element: verticalLine2Ref, height: '320px' },
                { element: verticalLine3Ref, height: '500px' },
            ];

            timelines.forEach(({ element, height }) => {
                gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionTwoRef.current,
                        start: 'top bottom',
                        end: 'bottom bottom',
                        scrub: true,
                        markers: false,
                    },
                }).to(element.current, { height });
            });

            gsap.to(offersRef.current, {
                scrollTrigger: {
                    trigger: sectionTwoRef.current,
                    start: 'top bottom',
                    end: 'bottom bottom',
                    scrub: true,
                    markers: false,
                    onUpdate: function (progress) {
                        const newValue = Math.round(progress.progress * 3);
                        // offersRef.current.innerHTML = newValue < 1 ? 1 : newValue;
                    },
                },
            });
        }
    }, []); */

    return (
        <>
        {/* <div
            ref={sectionTwoRef}
            id="two"
            className={`${styles.two} lg:h-screen w-screen flex flex-col overflow-x-hidden`}
        >

            <div className="px-4 pt-12 lg:pt-0 lg:pl-36 flex flex-col">
                <div className="relative md:mb-20 md:ml-10">
                    <span
                        className="text-transparent text-outline-white absolute top-3 lg:top-0 font-bold text-[7rem] md:text-[10rem] lg:text-[14rem] opacity-10 leading-none"
                    >About</span
                    >
                    <h2
                        className="text-[2.5rem] md:text-[3rem] lg:font-semibold py-10 lg:py-20 text-white"
                    >
                        À propos de nous
                    </h2>
                </div>
                <div
                    ref={slideDownRef}
                    className="w-1/2 flex flex-col gap-5 lg:flex-row justify-around pr-16 lg:absolute lg:top-0 lg:right-0"
                >
                    <div
                        className="w-fit flex lg:flex-col items-center text-white translate-x-[-20px] lg:translate-y-[-140px]"
                    >
                        <div className="flex lg:flex-col items-center">
                            <div
                                ref={verticalLine1Ref}
                                className="lg:w-[2px] lg:h-0 w-[40vw] md:w-[300px] h-[2px] bg-white"
                            ></div>
                            <div className="w-3 h-3 bg-white"></div>
                        </div>
                        <span
                            ref={offersRef}
                            id="offers"
                            className="lg:text-[6rem] w-[100px] text-center font-semibold number hidden lg:block"
                        >1</span
                        >
                        <span className="ml-4 text-[4rem] md:text-[5rem] number lg:hidden">3</span>
                        <span
                            className="font-bold md:text-xl lg:lg:opacity-0 opaque absolute lg:static bottom-[-10px] right-0"
                        >Offres personnalisables</span
                        >
                    </div>
                    <div
                        className="w-fit flex lg:flex-col items-center text-white translate-x-[-20px] lg:translate-y-[-150px]"
                    >
                        <div className="flex lg:flex-col items-center">
                            <div
                                ref={verticalLine2Ref}
                                className="lg:w-[2px] lg:h-0 w-[60vw] md:w-[450px] h-[2px] bg-white"
                            ></div>
                            <div className="w-3 h-3 bg-white"></div>
                        </div>
                        <span
                            ref={partnershipsRef}
                            id="partnerships"
                            className="lg:text-[6rem] w-[120px] text-center font-semibold number hidden lg:block"
                        >7</span
                        >
                        <span className="ml-4 text-[4rem] md:text-[5rem] number lg:hidden">21</span>
                        <span
                            className="font-bold md:text-xl lg:opacity-0 opaque absolute lg:static bottom-[-10px] right-0"
                        >Agences</span
                        >
                    </div>
                    <div
                        className="w-fit flex lg:flex-col items-center text-white translate-x-[-20px] lg:translate-y-[-130px]"
                    >
                        <div className="flex lg:flex-col items-center">
                            <div
                                ref={verticalLine3Ref}
                                className="lg:w-[2px] lg:h-0 w-[25vw] md:w-[375px] h-[2px] bg-white"
                            ></div>
                            <div className="w-3 h-3 bg-white"></div>
                        </div>
                        <span className="lg:text-[6rem] font-semibold w-[250px] text-center hidden lg:block"
                        ><span className="opaque">+</span
                        ><span ref={eventsRef} id="events" className="number">85</span></span
                        >
                        <span className="ml-4 text-[4rem] md:text-[5rem] lg:hidden"
                        ><span className="opaque">+</span><span className="number">800</span></span
                        >
                        <span
                            className="font-bold md:text-xl lg:opacity-0 opaque absolute lg:static bottom-[-10px] right-0"
                        >Déménagements accompagnés</span
                        >
                    </div>
                </div>
            </div>
            <div className="lg:w-1/2 px-4 md:px-8 lg:px-24 pb-16">
                <span className="py-10 mt-4 text-lg block font-thin text-white"
                ><span className="font-bold">Liquidimmo</span> , c'est une entreprise avant tout
                    humaine, qui souhaite rendre le processus de débarras ou de déménagement aussi
                    fluide et simple que possible. Avec une approche basée sur une logistique efficace
                    et optimale, nous sommes le net plus ultra des services de
                    <span className="font-bold">vide maison</span>.Grâce à une équipe dévouée, nous
                    planifions chaque étape avec précision, offrant des interfaces conviviales et des
                    informations complètes pour garantir une expérience sans souci.</span
                >
                <button className="bg-white text-lg text-black px-6 py-3 rounded-3xl font-bold">
                    En savoir plus
                </button>
            </div>
    </div> */}</>
    );
};

export default AboutSection;