import Head from 'next/head'
/* import React, { useEffect } from 'react'
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap/dist/gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger'*/

import { APP_NAME, CANONICAL } from '@/libs/constants'
import Header from '@/components/Header'
import Banner2 from '@/components/Banner2'
import Section2 from '@/components/Section2.2'
import Section3 from '@/components/Section2.3'
import SectionDevis from '@/components/SectionDevis'
import Footer from '@/components/Footer'

export default function GarageAtelierMecanique() {
    /*useEffect(() => {
        const lenis = new Lenis({
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
        };
    }, [])*/

    return (
        <>
            <Head>
                <title>{`Centre de dépollution - ${APP_NAME}`}</title>
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={`${CANONICAL}/centre-de-depollution`} />
            </Head>
            <Header type={2} />
            <Banner2 />
            <Section2 />
            <Section3 />
            <SectionDevis />
            <Footer />
        </>
    )
}