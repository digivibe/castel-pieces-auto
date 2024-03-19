import { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import styles from "@/styles/VHU.module.css"
import { APP_NAME, CANONICAL } from '../libs/constants'
// import ServicesSection from '../components/ScrollSection'

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
            <div data-animation="over-left" className="navbar-fixed w-nav" data-easing2="ease" data-easing="ease" data-collapse="medium" data-w-id="310be704-be0c-862c-40a7-a2176037624e" role="banner" data-no-scroll="1" data-duration="400" data-doc-height="1">
                <div className="nav-container w-container">
                    <div className="nav-menu-wrapper">
                        <div className="nav-balancer">
                            <Link href="/" aria-current="page" className="brand w-nav-brand w--current">
                                <img src="/images/logo.svg" loading="lazy" alt="logo" height="30" className="logo" />
                            </Link>
                        </div>
                        <nav role="navigation" className="nav-menu w-nav-menu">
                            <div className="tablet-menu">
                                <Link href="/" aria-current="page" className="brand-tablet w-nav-brand w--current">
                                    <img src="/images/logo.svg" loading="lazy" alt="logo" height="30" className="logo" />
                                </Link>
                                <div className="close-menu-button w-nav-button">
                                    <img src="/images/6561674b332c7603e8c060de_close-btn-slim.svg" loading="lazy" alt="icon" className="nav-close-icon" />
                                </div>
                            </div>
                            <div className="menu-wrap">
                                <Link href="/" className="nav-link w-nav-link active">
                                    Accueil
                                </Link>
                                <a className="nav-link w-nav-link">
                                    Reprise véhicule hors d'usage
                                </a>
                                <a className="nav-link w-nav-link">
                                    Rachat véhicule d'occasion
                                </a>
                                <a className="nav-link w-nav-link">
                                    Boutique
                                </a>
                            </div>
                        </nav>
                        <div className="search-shop-con">
                            <div className="cart-nav-wrapper">
                                <div data-open-product="" data-wf-cart-type="modal" data-wf-page-link-href-prefix="" className="w-commerce-commercecartwrapper" data-node-type="commerce-cart-wrapper">
                                    <Link className="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart" data-node-type="commerce-cart-open-link" href="#">
                                        <img src="/images/65616037c7d1f8d7a39b7125_cart-slim-w.svg" loading="lazy" alt="icon" />
                                        <div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" className="w-commerce-commercecartopenlinkcount cart-quantity">0</div>
                                    </Link>
                                </div>
                                <div className="menu-button w-nav-button">
                                    <img src="/images/6561674b39802fe6b6a1e0ab_menu-btn-slim.svg" loading="lazy" alt="icon" height="16" className="image-burger" />
                                </div>
                            </div>
                            <Link href="/" className="primary-button nav-style w-button">
                                Demander un devis
                            </Link>
                        </div>
                    </div>
                </div>
                <div data-w-id="a4197fd5-6c47-5bff-10ea-9d658ffd9c5b" className="nav-shadow"></div>
            </div>
            <div data-w-id="4fd1001e-0883-42e7-af04-a12016ec15d5" className="banner-section-photo">
                <div data-w-id="4fd1001e-0883-42e7-af04-a12016ec15d6" className="banner-content-container left-align">
                    <div className="arrows-animated-wrapper">
                        <img src="/images/65613c8f332c7603e8a4649e_arrow-outlone.svg" loading="lazy" alt="icon" className="arrow-animated" />
                        <img src="/images/65613c8f332c7603e8a4649e_arrow-outlone.svg" loading="lazy" alt="icon" className="arrow-animated-two" />
                        <img src="/images/65613c8f332c7603e8a4649e_arrow-outlone.svg" loading="lazy" alt="icon" className="arrow-animated-three" />
                        <img src="/images/65613c8f332c7603e8a4649e_arrow-outlone.svg" loading="lazy" alt="icon" className="arrow-animate-four" />
                    </div>
                    <h1 data-w-id="4fd1001e-0883-42e7-af04-a12016ec15d7" className="home-title">
                        Votre Solution Automobile Tout-en-un
                    </h1>
                    <p data-w-id="4fd1001e-0883-42e7-af04-a12016ec15d9" className="home-main-banner-discription">
                        Castel Pièces Auto : Expertise, Qualité et Service sur-mesure pour votre véhicule, neuf ou d'occasion.
                    </p>
                    <div data-w-id="4fd1001e-0883-42e7-af04-a12016ec15db" className="buttons-wrapper">
                        <Link href="/" className="primary-button w-button">
                            Demander un devis
                        </Link>
                    </div>
                </div>
                <div className="arrows-banner-wrap">
                    <img src="/images/65613d08450333206061d1a2_arrow-outlone-w.svg" loading="lazy" alt="icon" className="arrow-banner" />
                    <img src="/images/65613d08450333206061d1a2_arrow-outlone-w.svg" loading="lazy" alt="icon" className="arrow-banner" />
                    <img src="/images/65613d08450333206061d1a2_arrow-outlone-w.svg" loading="lazy" alt="icon" className="arrow-banner" />
                </div>
                <div className="arrows-banner-wrap-right">
                    <img src="/images/65613d08450333206061d1a2_arrow-outlone-w.svg" loading="lazy" alt="icon" className="arrow-banner" />
                    <img src="/images/65613d08450333206061d1a2_arrow-outlone-w.svg" loading="lazy" alt="icon" className="arrow-banner" />
                    <img src="/images/65613d08450333206061d1a2_arrow-outlone-w.svg" loading="lazy" alt="icon" className="arrow-banner" />
                    <img src="/images/65613d08450333206061d1a2_arrow-outlone-w.svg" loading="lazy" alt="icon" className="arrow-banner" />
                    <img src="/images/65613d08450333206061d1a2_arrow-outlone-w.svg" loading="lazy" alt="icon" className="arrow-banner" />
                </div>
            </div>
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
            {/* <ServicesSection /> */}
            <div className="section book-cta" style={{ marginBottom: 25 }}>
                <div className="base-container w-container">
                    <div data-w-id="ea49eaf7-3117-f0ef-355a-9dfbdcbe7110" className="cta-info-wrapper">
                        <div>
                            <h2 className="in-section-title text-white whity">
                                Demander votre devis<br />
                            </h2>
                            <p className="cta-description">
                                Getting started is easy. Simply use our online booking or give us a call,
                                and we&#x27;ll take care of the rest.
                            </p>
                            <div className="button-wrapper-main">
                                <a className="primary-button w-button">
                                    Contactez-nous
                                </a>
                            </div>
                        </div>
                        <Link href="#" data-w-id="52671318-bdf0-e29a-1903-e7cdb6e3a214" className="video-button w-inline-block w-lightbox">
                            <div className="video-hover-button">
                                <div style={{ backgroundColor: "rgba(255,255,255,0.2)" }} className="video-icon-wrapper">
                                    <img src="/images/6545419129e8c3546fde8f9d_play-icon.svg" loading="lazy" width="16" style={{ filter: "invert(0%)" }} alt="icon" className="video-icon" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="base-container w-container">
                    <div className="footer-wrapper-main">
                        <div className="footer-brand-wrapper-main">
                            <div className="footer-logo-wrapper-main">
                                <Link href="/" className="footer-brand-2 w-nav-brand">
                                    <img src="/images/logo.svg" loading="lazy" alt="logo" height="30" className="footer-logo" />
                                </Link>
                            </div>
                            <p className="footer-brand-description-main">
                                Chez Castel Pièces Auto, nous équipons votre trajet d'excellence et innovons pour votre sérénité sur la route.
                            </p>
                            <div className="footer-contact-wrapper div-block-15">
                                <div className="footer-contact-icon">
                                    <div>
                                        
                                    </div>
                                </div>
                                <Link href="mailto:hello@castel-pieces-auto.netlify.app" className="footer-link-main">
                                    castel-pieces-auto.netlify.app
                                </Link>
                            </div>
                        </div>
                        <div className="footer-links-wrapper-main">
                            <h6 className="white-text mb-15">
                                Présentation
                            </h6>
                            <Link href="/" aria-current="page" className="footer-link-main w--current">
                                Centre de dépollution
                            </Link>
                            <Link href="/" className="footer-link-main">
                                Garagiste / Atelier Mécanique
                            </Link>
                        </div>
                        <div className="footer-links-wrapper-cta">
                            <Link href="tel:(33)XXXXXXXX" className="footer-link-main primary">
                                (33)XXXXXXXX
                            </Link>
                            <p className="footer-brand-description-main">
                                Disponible 24/7 Appelez nous à n'importe quel moment!
                            </p>
                            <div className="button-wrapper-footer">
                                <Link href="/" className="primary-button w-button">
                                    Demander votre devis maintenant
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom-wrapper-main">
                        <div className="footer-social-icons-wrapper-main">
                            <a className="footer-social-icon-main"></a>
                            <a className="footer-social-icon-main"></a>
                            <a className="footer-social-icon-main"></a>
                        </div>
                        <div className="footer-rights-wrapper-main">
                            <div className="footer-copyright-main">
                                &copy; 2024 Castel Pieces Auto. Tous les droits sont réservés.
                            </div>
                            <div className="footer-rights-main">
                                Powered by <Link href="https://digivibe.fr" target="_blank" style={{ color: "#fe46a0", fontWeight: "bold" }}>Digivibe</Link>.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}