import { useEffect } from 'react'
import Head from 'next/head'

import styles from "@/styles/VHU.module.css"
import { APP_NAME, CANONICAL } from '@/libs/constants'
import Header from '@/components/Header'
import Banner1 from '@/components/Banner1'
import SectionDevis from '@/components/SectionDevis'
import ServicesSection1 from '@/components/ScrollSection1'
import Footer from '@/components/Footer'

export default function CentreDeDepollution() {
    const customStyles = {
        WebkitTransform: "translate3d(0px, 0px, 0) scale3d(0.96, 0.96, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
        MozTransform: "translate3d(0px, 0px, 0) scale3d(0.96, 0.96, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
        msTransform: "translate3d(0px, 0px, 0) scale3d(0.96, 0.96, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
        transform: "translate3d(0px, 0px, 0) scale3d(0.96, 0.96, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
    }

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
                <title>{`Centre de dépollution - ${APP_NAME}`}</title>
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={`${CANONICAL}/centre-de-depollution`} />
            </Head>
            <Header type={1}/>
            <Banner1 />
            <ServicesSection1 />
            <div className="section light-style">
                <div className="base-container w-container">
                    <div data-w-id="bc04704d-d71c-ba15-06cc-f8a0fcfe9640" className="two-column-wrapper center">
                        <div data-w-id="bc04704d-d71c-ba15-06cc-f8a0fcfe9641" className="column-two">
                            <h2 className="in-section-title text-white">
                                Centre de dépollution agréé reprise véhicule hors d'usage
                            </h2>
                            <p className="no-margin">
                                Notre centre de dépollution agréé est au cœur de notre engagement envers l'environnement et la responsabilité sociale. Chez "Castel Pièces Auto", nous prenons en charge les véhicules hors d'usage avec une attention particulière pour la préservation de notre planète. Grâce à des processus éco-responsables, nous assurons la dépollution et le recyclage des composants de manière sécuritaire et conforme aux réglementations.
                            </p>
                            <div className="button-wrapper-main">
                                <a className="primary-button w-button">
                                    A propos de nous
                                </a>
                                <a className="primary-button style-two w-button">
                                    En savoir plus
                                </a>
                            </div>
                        </div>
                        <div data-w-id="bc04704d-d71c-ba15-06cc-f8a0fcfe9653" className="column-one">
                            <img src="/images/d.jpg" loading="lazy" sizes="(max-width: 479px) 87vw, (max-width: 767px) 92vw, (max-width: 991px) 94vw, (max-width: 1279px) 44vw, (max-width: 1919px) 535px, 635px" alt="photo" className="home-about-block-image with-icons" />
                            <div style={customStyles} className="clients-pics-wrapp">
                                <div className="avatars-wrapper">
                                    <img src="/images/651f2c08c5bd81eb296c18b0_Member-Photo-Close-up-10.jpg" loading="lazy" alt="avatars image" className="avatars-image" />
                                    <img src="/images/651f2c08c5bd81eb296c18bd_Member-Photo-Close-up-6.jpg" loading="lazy" alt="avatars image" className="avatars-image" />
                                    <img src="/images/651f2c08c5bd81eb296c18a9_Member-Photo-Close-up-3.jpg" loading="lazy" alt="avatars image" className="avatars-image" />
                                    <img src="/images/651f2c08c5bd81eb296c18a7_Member-Photo-Close-up-14.jpg" loading="lazy" alt="avatars image" className="avatars-image last-item" />
                                </div>
                                <div className="clients-subtitle">
                                    Respect de l'environnement
                                </div>
                            </div>
                            <div className="stars-wrapper">
                                <img src="/images/656115479c5ef45083727375_star.svg" loading="lazy" alt="icon" className="reviews-stars" />
                                <img src="/images/656115479c5ef45083727375_star.svg" loading="lazy" alt="icon" className="reviews-stars" />
                                <img src="/images/656115479c5ef45083727375_star.svg" loading="lazy" alt="icon" className="reviews-stars" />
                                <img src="/images/656115479c5ef45083727375_star.svg" loading="lazy" alt="icon" className="reviews-stars" />
                                <img src="/images/656115479c5ef45083727375_star.svg" loading="lazy" alt="icon" className="reviews-stars" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="base-container w-container">
                    <div data-w-id="15a152fe-c607-e392-7249-88fdb3dbd485"
                        className="section-two-side-title-wrapper">
                        <div>
                            <h2 className="section-title text-white">
                                Nos services<br />
                            </h2>
                            <p>
                                Explorez notre gamme complète de services dédiés à la longévité et à la performance de votre véhicule.<br />
                            </p>
                        </div>
                        <div>
                            <a className="primary-button w-button">
                                Voir tout
                            </a>
                        </div>
                    </div>
                    <div data-w-id="78acbbc5-686f-394c-4bfc-8fc1d49481c9"
                        className="collection-list-wrapper-services w-dyn-list">
                        <div role="list" className="features-wrapper w-dyn-items">
                            <div data-w-id="78acbbc5-686f-394c-4bfc-8fc1d49481cb" role="listitem" className={`features-wrap w-dyn-item ${styles.featuresWrap}`}>
                                <div className="services-info">
                                    <img loading="lazy" src="/images/s1.svg" height="60" alt="" className="features-image" />
                                    <a className="link-block w-inline-block">
                                        <h4 className="item-name-hover">
                                            Reprise de véhicule hors d'usage
                                        </h4>
                                    </a>
                                    <p>
                                        Transformez votre véhicule en fin de vie en une opportunité écologique avec notre service de reprise spécialisé.
                                    </p>
                                </div>
                            </div>
                            <div data-w-id="78acbbc5-686f-394c-4bfc-8fc1d49481cb" role="listitem" className={`features-wrap w-dyn-item ${styles.featuresWrap}`}>
                                <div className="services-info">
                                    <img loading="lazy" src="/images/s2.svg" height="60" alt="" className="features-image" />
                                    <a className="link-block w-inline-block">
                                        <h4 className="item-name-hover">
                                            Reprise de véhicule accidenté
                                        </h4>
                                    </a>
                                    <p>
                                        Bénéficiez de notre service de reprise pour les véhicules accidentés, assurant une gestion écologique et simplifiée de votre situation.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="bg-lines">
                    <div className="bg-lines-inside"></div>
                </div>
            </div>
            <SectionDevis />
            <Footer />
        </>
    )
}