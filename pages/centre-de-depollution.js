import React, { useEffect } from 'react'
import Head from 'next/head'
/*import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap/dist/gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger'*/

import { APP_NAME, CANONICAL } from '@/libs/constants'
import Header from '@/components/Header'
import Banner1 from '@/components/Banner1'
import Section2 from '@/components/Section1.2'
import Section3 from '@/components/Section1.3'
import SectionDevis from '@/components/SectionDevis'
import Footer from '@/components/Footer'

export default function CentreDeDepollution() {

    useEffect(() => {
        const arrows = document.querySelectorAll('.arrows-animated-wrapper > img');
        const delayBetweenArrows = 200;
        const stayLitDuration = 600;

        const animateArrows = () => {
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

        animateArrows()
        /*const lenis = new Lenis({
            lerp: 0.1,
            smooth: true,
        })

        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.scrollerProxy(document.body, {
            scrollTop(value) {
                return arguments.length ? lenis.scrollTo(value) : lenis.scrollY;
            },
            getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            },
        })

        lenis.on('scroll', ScrollTrigger.update);
        ScrollTrigger.addEventListener('refresh', () => lenis.resize())

        gsap.from('.section', {
            opacity: 0,
            duration: 1,
            y: 100,
            stagger: 0.3,
            scrollTrigger: {
                trigger: '.section',
                start: 'top 80%',
                end: 'bottom 20%',
                scrub: true,
            },
        })

        return () => {
            ScrollTrigger.removeEventListener('refresh', lenis.resize);
        };*/
    }, [])

    return (
        <>
            <Head>
                <title>{`Centre de dépollution - ${APP_NAME}`}</title>
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={`${CANONICAL}/centre-de-depollution`} />
            </Head>
            <Header type={1} />
            <Banner1 />
            <Section2 />
            <Section3 />
            <SectionDevis />
            <Footer />
        </>
    )
}