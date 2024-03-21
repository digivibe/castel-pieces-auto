import styles from "@/styles/VHU.module.css"

export default function Section3() {
    return (
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
    )
}