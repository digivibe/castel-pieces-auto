import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Lenis from '@studio-freight/lenis';
gsap.registerPlugin(ScrollTrigger);

import styles from "@/styles/OfferSections.module.css"

export default function OfferSections() {
    const verticalLine4 = useRef(null);
    const verticalLine5 = useRef(null);
    const verticalLine6 = useRef(null);
    const verticalLine7 = useRef(null);
    const cube6 = useRef(null);
    const cube7 = useRef(null);
    const brandingTag = useRef(null);
    const strategyTag = useRef(null);
    const motionTag = useRef(null);
    const marketingTag = useRef(null);

    useEffect(() => {
        const lenis = new Lenis();
        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);

        if (typeof window !== "undefined") {
            const desktop = window.matchMedia("(min-width: 992px)");
            if (desktop.matches) {
                // Exemple d'animations GSAP pour le bureau
                gsap.to(verticalLine4.current, { height: "100vh", duration: 1 });
                gsap.to(verticalLine5.current, { height: "75vh", duration: 1.5 });
                gsap.to(verticalLine6.current, { height: "50vh", duration: 2 });
                gsap.to(verticalLine7.current, { height: "25vh", duration: 2.5 });

                gsap.fromTo(brandingTag.current, { opacity: 0 }, { opacity: 1, duration: 1, delay: 1 });
                gsap.fromTo(strategyTag.current, { opacity: 0 }, { opacity: 1, duration: 1.5, delay: 1.5 });
                gsap.fromTo(motionTag.current, { opacity: 0 }, { opacity: 1, duration: 2, delay: 2 });
                gsap.fromTo(marketingTag.current, { opacity: 0 }, { opacity: 1, duration: 2.5, delay: 2.5 });

                // Cube animations
                gsap.to(cube6.current, { scale: 1.5, duration: 1, delay: 3 });
                gsap.to(cube7.current, { scale: 1.5, duration: 1.5, delay: 3.5 });
            }
        }
    }, []);
    return (
        <div id="four" className={`${styles.four} lg:h-screen w-screen flex flex-col lg:sticky lg:top-0`}>
            <div className="px-4 pt-12 lg:pl-36 flex flex-col">
                <div className="relative md:mb-20 md:ml-10">
                    <span className="text-outline-gray text-transparent absolute top-3 lg:top-0 font-bold text-[7rem] md:text-[10rem] lg:text-[14rem] opacity-10 leading-none">Services</span>
                    <h2 className="text-[2.5rem] md:text-[3rem] lg:font-semibold py-10 lg:py-20 text-gray-700">Nos services</h2>
                </div>
                <div className="w-1/3 flex flex-col gap-5 lg:flex-row justify-around pr-16 lg:absolute lg:top-0 lg:right-0">
                    <div className="flex flex-col items-start lg:items-center gap-8 translate-x-[-16px] lg:translate-x-0">
                        <div className="flex lg:flex-col items-center lg:justify-center">
                            <div ref={verticalLine4} className="lg:w-[2px] lg:h-0 w-[10vw] md:w-[200px] h-[2px] bg-gray-700"></div>
                            <div className="w-3 h-3 bg-gray-700"></div>
                            <span ref={brandingTag} className="font-semibold lg:font-bold text-[1.5rem] md:text-[2rem] lg:text-[2rem] text-gray-700 text-center lg:opacity-0">Aide au déménagement</span>
                        </div>
                        <div className="flex lg:flex-col items-center lg:justify-center">
                            <div ref={verticalLine6} className="lg:w-[2px] lg:h-0 w-[30vw] md:w-[300px] h-[2px] bg-gray-700"></div>
                            <div ref={cube6} className="bg-gray-700 w-3 h-3 lg:h-0"></div>
                            <span ref={motionTag} className="font-semibold lg:font-bold text-[1.5rem] md:text-[2rem] lg:text-[2rem] text-gray-700 text-center lg:opacity-0">Débarras de locaux</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-start lg:items-center gap-8 translate-x-[-16px] lg:translate-x-0">
                        <div className="flex lg:flex-col items-center lg:justify-center">
                            <div ref={verticalLine5} className="lg:w-[2px] lg:h-0 w-[50vw] md:w-[400px] h-[2px] bg-gray-700"></div>
                            <div className="w-3 h-3 bg-gray-700"></div>
                            <span ref={strategyTag} className="font-semibold lg:font-bold text-[1.5rem] md:text-[2rem] lg:text-[2rem] text-gray-700 text-center lg:opacity-0">Vide maison</span>
                        </div>
                        <div className="flex lg:flex-col items-center lg:justify-center">
                            <div ref={verticalLine7} className="lg:w-[2px] lg:h-0 w-[65vw] md:w-[500px] h-[2px] bg-gray-700"></div>
                            <div ref={cube7} className="bg-gray-700 w-3 h-3 lg:h-0"></div>
                            <span ref={marketingTag} className="font-semibold lg:font-bold text-[1.5rem] md:text-[2rem] lg:text-[2rem] text-gray-700 text-center lg:opacity-0">Tri et Recyclage</span>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 px-4 lg:px-0 pb-16">
                    <span className="py-10 mt-4 text-lg block">Découvrez l'excellence avec Liquidimmo. Nous proposons des services de déménagement efficaces, de débarras professionnel, de tri et recyclage, et une assistance immobilière complète. Simplifiez votre transition avec notre expertise.</span>
                    <button className="bg-gray-700 text-lg text-white px-6 py-2 rounded-3xl font-bold">Découvrir</button>
                </div>
            </div>
        </div>
    )
}