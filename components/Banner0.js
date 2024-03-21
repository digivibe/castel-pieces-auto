import React, { useEffect } from 'react'
import Image from 'next/image';

import styles from '@/styles/Banner0.module.css'

export default function Banner0() {
    useEffect(() => {
        const arrows = document.querySelectorAll('.arrows-animated-wrapper > img');
        const delayBetweenArrows = 200;
        const stayLitDuration = 600;

        const animateArrows = () => {
            arrows.forEach((arrow, index) => {
                setTimeout(() => {
                    arrow.style.animation = `fadeIn 0.5s forwards`;
                }, (arrows.length - 1 - index) * delayBetweenArrows);
            });

            setTimeout(() => {
                arrows.forEach((arrow, index) => {
                    arrow.style.animation = `fadeOut 0.5s forwards`;
                });
                setTimeout(animateArrows, 500);
            }, arrows.length * delayBetweenArrows + stayLitDuration);
        };

        animateArrows()
    }, [])

    return (
        <div className={`flex justify-center items-center h-screen ${styles.darkBackground}`}>
            <div className="flex flex-wrap items-center justify-center h-full md:justify-between">
                <div className={`flex flex-col justify-center items-end w-full md:w-1/2 md:items-center ${styles.mm2}`}>
                    <h1 data-w-id="4fd1001e-0883-42e7-af04-a12016ec15d7" className={` ${styles.textleft}`}>
                        <a href="/centre-de-depollution" className={styles.textwhity}>Centre de dépollution</a>
                    </h1>
                    <div className="arrows-animated-wrapper">
                        <a href="/centre-de-depollution">
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
                        </a>
                    </div>
                </div>
                <div className={`flex flex-col justify-center items-end w-full md:w-1/2 md:items-center ${styles.mm2}`}>
                    <h1 data-w-id="4fd1001e-0883-42e7-af04-a12016ec15d7" className={`home-title ${styles.textright}`}>
                        <a href="/garage-atelier-mecanique" className={styles.textwhity}>Atelier mécanique</a>
                    </h1>
                    <div className="arrows-animated-wrapper">
                        <a href="/garage-atelier-mecanique">
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
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
