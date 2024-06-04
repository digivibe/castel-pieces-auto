import React from 'react'
import Link from 'next/link'

const Section2 = () => {
    return (
        <div className="section">
            <div className="base-container w-container">
                <div data-w-id="1993f409-482a-68bc-927e-120e964ef559" className="section-title-wrapper">
                    <h2 className="section-title text-white">Découvrez nos services</h2>
                    <p className="paragraph-home-about">
                        Chaque véhicule a une histoire. Parcourez notre galerie pour découvrir comment nous donnons une
                        nouvelle vie à votre automobile, avec des services allant de la reprise de véhicules hors d'usage à
                        la vente de pièces de qualité.
                    </p>
                    <div className="home-buttom-wrapper-three-columns">
                        <a href="/" className="primary-button w-button">
                            Demander un devis
                        </a>
                    </div>
                </div>
                <div data-w-id="1993f409-482a-68bc-927e-120e964ef561" className="three-column-wrapper home-about">
                    <div className="three-columns">
                        <div className="about-block-image-wrapper">
                            <img className="about-block-images" src="/images/i1.jpg" alt="photo"
                                sizes="(max-width: 479px) 94vw, (max-width: 767px) 45vw, (max-width: 991px) 28vw, (max-width: 1279px) 30vw, (max-width: 1919px) 362.6875px, 424.6875px"
                                data-w-id="1993f409-482a-68bc-927e-120e964ef564" loading="lazy" />
                        </div>
                    </div>
                    <div className="three-columns">
                        <div className="about-block-image-wrapper">
                            <img className="about-block-images middle" src="/images/i2.jpg" alt="photo"
                                sizes="(max-width: 479px) 94vw, (max-width: 767px) 45vw, (max-width: 991px) 28vw, (max-width: 1279px) 30vw, (max-width: 1919px) 362.6875px, 424.6875px"
                                data-w-id="1993f409-482a-68bc-927e-120e964ef566" loading="lazy" />
                        </div>
                    </div>
                    <div className="three-columns">
                        <div className="about-block-image-wrapper">
                            <img className="about-block-images" src="/images/i3.jpg" alt="photo"
                                sizes="(max-width: 479px) 94vw, (max-width: 767px) 45vw, (max-width: 991px) 28vw, (max-width: 1279px) 30vw, (max-width: 1919px) 362.6875px, 424.6875px"
                                data-w-id="1993f409-482a-68bc-927e-120e964ef569" loading="lazy" />
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

export default Section2