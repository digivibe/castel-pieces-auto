import React, { useEffect } from 'react'
import Head from 'next/head'

import { APP_NAME, CANONICAL } from '@/libs/constants'
import Banner0 from '@/components/Banner0'

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
    }, [])

    return (
        <>
            <Head>
                <title>{APP_NAME}</title>
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={`${CANONICAL}/centre-de-depollution`} />
            </Head>
            <Banner0 />
        </>
    )
}