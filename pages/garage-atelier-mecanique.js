import Head from 'next/head'
import Link from 'next/link'

import { APP_NAME, CANONICAL } from '@/libs/constants'
import Header from '@/components/Header'
import SectionDevis from '@/components/SectionDevis'
import Footer from '@/components/Footer'

export default function GarageAtelierMecanique() {
    return (
        <>
            <Head>
                <title>{`Centre de dépollution - ${APP_NAME}`}</title>
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={`${CANONICAL}/centre-de-depollution`} />
            </Head>
            <Header type={2} />
            <div className="pages-banner services barny" style={{ position: "relative", overflow: "hidden", zIndex: 0, padding: 0 }}>
                <video autoplay muted loop playsinline style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", zIndex: -1 }}>
                    <source src="/videos/1.mp4" type="video/mp4" />
                    Votre navigateur ne supporte pas les vidéos HTML5.
                </video>
                <div className="base-container w-container" style={{ position: "relative", zIndex: 1 }}>
                    <div className="banner-title-wrapper">
                        <h1 className="banner-title whity">
                            Atelier Mécanique Toutes Marques
                        </h1>
                    </div>
                </div>
            </div>
            
            <div className="section">
                <div className="base-container w-container">
                    <div data-w-id="1993f409-482a-68bc-927e-120e964ef559" className="section-title-wrapper">
                        <h2 className="section-title text-white">Découvrez nos services</h2>
                        <p className="paragraph-home-about">
                            Chaque véhicule a une histoire. Parcourez notre galerie pour découvrir comment nous donnons une nouvelle vie à votre automobile, avec des services allant de la reprise de véhicules hors d'usage à la vente de pièces de qualité.
                        </p>
                        <div className="home-buttom-wrapper-three-columns">
                            <Link href="/" className="primary-button w-button">
                                Demander un devis
                            </Link>
                        </div>
                    </div>
                    <div data-w-id="1993f409-482a-68bc-927e-120e964ef561" className="three-column-wrapper home-about">
                        <div className="three-columns">
                            <div className="about-block-image-wrapper">
                                <img className="about-block-images" src="/images/i1.jpg" alt="photo" sizes="(max-width: 479px) 94vw, (max-width: 767px) 45vw, (max-width: 991px) 28vw, (max-width: 1279px) 30vw, (max-width: 1919px) 362.6875px, 424.6875px" data-w-id="1993f409-482a-68bc-927e-120e964ef564" loading="lazy"/>
                                {/* <div className="text-card">
                                    <h5>Véhicule hors d'usage</h5>
                                    <p>
                                        Transformez votre véhicule hors d'usage en une opportunité écologique
                                    </p>
                                </div> */}
                            </div>
                        </div>
                        <div className="three-columns">
                            <div className="about-block-image-wrapper">
                                <img className="about-block-images middle" src="/images/i2.jpg" alt="photo" sizes="(max-width: 479px) 94vw, (max-width: 767px) 45vw, (max-width: 991px) 28vw, (max-width: 1279px) 30vw, (max-width: 1919px) 362.6875px, 424.6875px" data-w-id="1993f409-482a-68bc-927e-120e964ef566" loading="lazy"/>
                                {/* <div className="text-card">
                                    <h5>
                                        Véhicule accidenté
                                    </h5>
                                    <p>
                                        Bénéficiez de notre service de reprise pour les véhicules accidentés
                                    </p>
                                </div> */}
                            </div>
                        </div>
                        <div className="three-columns">
                            <div className="about-block-image-wrapper">
                                <img className="about-block-images" src="/images/i3.jpg" alt="photo" sizes="(max-width: 479px) 94vw, (max-width: 767px) 45vw, (max-width: 991px) 28vw, (max-width: 1279px) 30vw, (max-width: 1919px) 362.6875px, 424.6875px" data-w-id="1993f409-482a-68bc-927e-120e964ef569" loading="lazy"/>
                                {/* <div className="text-card">
                                    <h5>Véhicule d'occasion</h5>
                                    <p>
                                        Donnez une nouvelle vie à votre ancienne voiture
                                    </p>
                                </div> */}
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="bg-lines">
                    <div className="bg-lines-inside"></div>
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
                            <div data-w-id="78acbbc5-686f-394c-4bfc-8fc1d49481cb" role="listitem" className="features-wrap w-dyn-item">
                                <div className="services-info">
                                    <img loading="lazy" src="/images/s1.svg" height="60" alt="" className="features-image" />
                                    <a className="link-block w-inline-block">
                                        <h4 className="item-name-hover">
                                            Vente pièce neuve
                                        </h4>
                                    </a>
                                    <p>
                                        Découvrez notre sélection de véhicules rigoureusement inspectés et prêts à prendre la route, répondant à tous les besoins et budgets.
                                    </p>
                                </div>
                            </div>
                            <div data-w-id="78acbbc5-686f-394c-4bfc-8fc1d49481cb" role="listitem" className="features-wrap w-dyn-item">
                                <div className="services-info">
                                    <img loading="lazy" src="/images/s2.svg" height="60" alt="" className="features-image" />
                                    <a className="link-block w-inline-block">
                                        <h4 className="item-name-hover">
                                            Vente pièce d'occasion
                                        </h4>
                                    </a>
                                    <p>
                                        Trouvez la pièce qu'il vous faut à un prix avantageux parmi notre vaste inventaire de pièces d'occasion de qualité garantie.
                                    </p>
                                </div>
                            </div>
                            <div data-w-id="78acbbc5-686f-394c-4bfc-8fc1d49481cb" role="listitem" className="features-wrap w-dyn-item">
                                <div className="services-info">
                                    <img loading="lazy" src="/images/s3.svg" height="60" alt="" className="features-image" />
                                    <a className="link-block w-inline-block">
                                        <h4 className="item-name-hover">
                                            Vente de véhicule
                                        </h4>
                                    </a>
                                    <p>
                                        Explorez notre gamme de pièces neuves pour tous les modèles et marques, offrant performance et fiabilité pour votre véhicule.
                                    </p>
                                </div>
                            </div>
                            <div data-w-id="78acbbc5-686f-394c-4bfc-8fc1d49481cb" role="listitem" className="features-wrap w-dyn-item">
                                <div className="services-info">
                                    <img loading="lazy" src="/images/s3.svg" height="60" alt="" className="features-image" />
                                    <a className="link-block w-inline-block">
                                        <h4 className="item-name-hover">Rachat de véhicule d'occasion</h4>
                                    </a>
                                    <p>
                                        Donnez une nouvelle vie à votre ancienne voiture grâce à notre offre de rachat avantageuse et responsable.
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