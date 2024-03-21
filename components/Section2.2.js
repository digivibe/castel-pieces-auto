import Link from "next/link"

export default function Section2() {
    return (
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
    )
}