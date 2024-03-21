import React, { useEffect } from 'react'
import Image from 'next/image';

import styles from '@/styles/Banner0.module.css'

export default function Banner0() {
    useEffect(() => {
        const arrowContainers = document.querySelectorAll('.arrows-animated-wrapper');

        const delayBetweenArrows = 200;
        const stayLitDuration = 600;

        const animateArrows = (arrows, isReversed) => {
            // Inverser l'ordre des flèches si nécessaire
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
                setTimeout(() => animateArrows(arrows, isReversed), 500);
            }, arrowsToAnimate.length * delayBetweenArrows + stayLitDuration);
        };

        // Supposer que le premier groupe est le premier conteneur de flèches
        const firstGroupArrows = arrowContainers[0].querySelectorAll('img');
        // Supposer que le second groupe est le second conteneur de flèches
        const secondGroupArrows = arrowContainers[1].querySelectorAll('img');

        // Animer le premier groupe avec inversion
        animateArrows(firstGroupArrows, true);
        // Animer le second groupe sans inversion
        animateArrows(secondGroupArrows, false);
    }, [])

    return (
        <div className={`flex justify-center items-center h-screen ${styles.darkBackground}`}>
            <div className="flex flex-wrap items-center justify-center h-full md:justify-between">
                <div className={`flex flex-col justify-center w-full md:w-1/2 md:items-center ${styles.mm2} ${styles.textleft} mx-4`}>
                    <h1 data-w-id="4fd1001e-0883-42e7-af04-a12016ec15d7">
                        <a href="/centre-de-depollution" className={styles.textwhity}>Centre de dépollution</a>
                    </h1>
                    <a href="/centre-de-depollution">
                        <div className="arrows-animated-wrapper">
                            <Image
                                src="/images/arrow-outlone.svg"
                                loading="lazy"
                                alt="icon"
                                className={`arrow-animated ${styles.reverseit}`}
                                width={67}
                                height={84}
                                style={{display: "inline-bloack"}}
                            />
                            <Image
                                src="/images/arrow-outlone.svg"
                                loading="lazy"
                                alt="icon"
                                className={`arrow-animated-two ${styles.reverseit}`}
                                width={67}
                                height={84}
                                style={{display: "inline-bloack"}}
                            />
                            <Image
                                src="/images/arrow-outlone.svg"
                                loading="lazy"
                                alt="icon"
                                className={`arrow-animated-three ${styles.reverseit}`}
                                width={67}
                                height={84}
                                style={{display: "inline-bloack"}}
                            />
                            <Image
                                src="/images/arrow-outlone.svg"
                                loading="lazy"
                                alt="icon"
                                className={`arrow-animated-four ${styles.reverseit}`}
                                width={67}
                                height={84}
                                style={{display: "inline-bloack"}}
                            />
                        </div>
                    </a>
                </div>
                <div className={`flex flex-col justify-center items-end w-full md:w-1/2 md:items-center ${styles.mm2} mx-4`}>
                    <h1 data-w-id="4fd1001e-0883-42e7-af04-a12016ec15d7" className={`home-title ${styles.textright}`}>
                        <a href="/garage-atelier-mecanique" className={styles.textwhity}>Atelier mécanique</a>
                    </h1>
                    <a href="/garage-atelier-mecanique">
                        <div className="arrows-animated-wrapper">
                            <Image
                                src="/images/arrow-outlone.svg"
                                loading="lazy"
                                alt="icon"
                                className={`arrow-animated`}
                                width={67}
                                height={84}
                                style={{display: "inline-bloack"}}
                            />
                            <Image
                                src="/images/arrow-outlone.svg"
                                loading="lazy"
                                alt="icon"
                                className={`arrow-animated-two`}
                                width={67}
                                height={84}
                                style={{display: "inline-bloack"}}
                            />
                            <Image
                                src="/images/arrow-outlone.svg"
                                loading="lazy"
                                alt="icon"
                                className={`arrow-animated-three`}
                                width={67}
                                height={84}
                                style={{display: "inline-bloack"}}
                            />
                            <Image
                                src="/images/arrow-outlone.svg"
                                loading="lazy"
                                alt="icon"
                                className={`arrow-animated-four`}
                                width={67}
                                height={84}
                                style={{display: "inline-bloack"}}
                            />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
