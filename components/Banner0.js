import React, { useEffect } from 'react'
import styles from '@/styles/part1/Banner0.module.css'

const { mm2, textleft, textwhity, reverseit, textright } = styles

const Banner0 = () => {
    useEffect(() => {
        const arrowContainers = document.querySelectorAll('.arrows-animated-wrapper')
        const delayBetweenArrows = 200
        const stayLitDuration = 600

        const animateArrows = (arrows, isReversed) => {
            const arrowsToAnimate = isReversed ? Array.from(arrows).reverse() : arrows

            arrowsToAnimate.forEach((arrow, index) => {
                setTimeout(() => {
                    arrow.style.animation = `fadeIn 0.5s forwards`
                }, index * delayBetweenArrows)
            })

            setTimeout(() => {
                arrowsToAnimate.forEach((arrow) => {
                    arrow.style.animation = `fadeOut 0.5s forwards`
                })
                setTimeout(() => animateArrows(arrows, !isReversed), 500)
            }, arrowsToAnimate.length * delayBetweenArrows + stayLitDuration)
        }

        arrowContainers.forEach((container, index) => {
            const arrows = container.querySelectorAll('img')
            animateArrows(arrows, index % 2 === 0)
        })
    }, [])

    return (
        <div className="banner-section-photo">
            <div className="flex flex-wrap items-center justify-center h-full md:flex-nowrap md:justify-between">
                <div className={`flex flex-col justify-center w-full px-4 md:w-1/2 md:items-center ${mm2} ${textleft}`}>
                    <h2 className={`text-5xl font-bold leading-tight w-full ${textleft} textwhity`}>
                        <a href="/centre-de-depollution" className="block textwhity">Centre<br />VHU</a>
                    </h2>
                    <p className="text-2xl mt-4">
                        <a href="/centre-de-depollution" className="textwhity">centre de dépollution agréé</a>
                    </p>
                    <a href="/centre-de-depollution" className="mt-8 flex justify-center md:justify-start">
                        <div className="arrows-animated-wrapper flex space-x-2">
                            <img src="/images/arrow-outlone.svg" loading="lazy" alt="icon" className={`first ${reverseit}`} width="67" height="84" />
                            <img src="/images/arrow-outlone.svg" loading="lazy" alt="icon" className={`second ${reverseit}`} width="67" height="84" />
                            <img src="/images/arrow-outlone.svg" loading="lazy" alt="icon" className={`third ${reverseit}`} width="67" height="84" />
                            <img src="/images/arrow-outlone.svg" loading="lazy" alt="icon" className={`fourth ${reverseit}`} width="67" height="84" />
                        </div>
                    </a>
                </div>
                <div className={`flex flex-col justify-center items-end w-full px-4 md:w-1/2 md:items-center ${mm2}`}>
                    <h2 className={`text-5xl font-bold leading-tight w-full ${textright} textwhity`}>
                        <a href="/atelier-mecanique" className="block textwhity">Atelier mécanique</a>
                    </h2>
                    <p className="text-2xl mt-4">
                        <a href="/atelier-mecanique" className="textwhity">toutes marques</a>
                    </p>
                    <a href="/atelier-mecanique" className="mt-8 flex justify-center md:justify-end">
                        <div className="arrows-animated-wrapper flex space-x-2">
                            <img src="/images/arrow-outlone.svg" loading="lazy" alt="icon" className="fourth" width="67" height="84" />
                            <img src="/images/arrow-outlone.svg" loading="lazy" alt="icon" className="third" width="67" height="84" />
                            <img src="/images/arrow-outlone.svg" loading="lazy" alt="icon" className="second" width="67" height="84" />
                            <img src="/images/arrow-outlone.svg" loading="lazy" alt="icon" className="first" width="67" height="84" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Banner0