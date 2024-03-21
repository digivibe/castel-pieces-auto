export default function Section2() {
    const customStyles = {
        WebkitTransform: "translate3d(0px, 0px, 0) scale3d(0.96, 0.96, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
        MozTransform: "translate3d(0px, 0px, 0) scale3d(0.96, 0.96, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
        msTransform: "translate3d(0px, 0px, 0) scale3d(0.96, 0.96, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
        transform: "translate3d(0px, 0px, 0) scale3d(0.96, 0.96, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
    }
    
    return (
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
    )
}