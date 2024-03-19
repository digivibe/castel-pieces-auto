import Head from 'next/head'
import Link from 'next/link'

import styles from "@/styles/Index.module.css"
import { APP_NAME, CANONICAL } from '../libs/constants'

function Home() {

    return (
        <>
            <Head>
                <title>{APP_NAME}</title>
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={CANONICAL} />
            </Head>
            <div className={styles.darkBackground}>
                <div className="pages-banner faq" style={{ backgroundImage: "url('/images/heros.jpg')", backgroundSize: "cover" }}>
                    <div className="base-container w-container">
                        <div data-w-id="bc04704d-d71c-ba15-06cc-f8a0fcfe9640" className="two-column-wrapper center">
                            <div data-w-id="bc04704d-d71c-ba15-06cc-f8a0fcfe9641" className={styles.columnTwo}>
                                <h2 className={`in-section-title text-white text-primary ${styles.metitle}`}>
                                    Centre de dépollution
                                </h2>
                                <p className="no-margin text-white">
                                    Préservez l'environnement et assurez la longévité de votre véhicule avec notre Centre de Dépollution, où les dernières technologies se rencontrent avec l'expertise pour un service de qualité supérieure.
                                </p>
                                <div className="button-wrapper-main">
                                    <Link href="/centre-de-depollution" className="primary-button w-button">
                                        Découvrez offre
                                    </Link>
                                </div>
                            </div>
                            <div data-w-id="bc04704d-d71c-ba15-06cc-f8a0fcfe9641" className={styles.columnTwo}>
                                <h2 className={`in-section-title text-white text-primary ${styles.metitle}`}>
                                    Garage & Atelier mécanique
                                </h2>
                                <p className="no-margin text-white">
                                    Fiez-vous à l'excellence de notre Garage & Atelier Mécanique pour tous vos besoins en entretien et réparation. Nos mécaniciens certifiés s'engagent à offrir des prestations irréprochables pour que votre véhicule soit toujours en parfait état de marche.
                                </p>
                                <div className="button-wrapper-main">
                                    <Link href="/garage-atelier-mecanique" className="primary-button w-button">
                                        Explorez garage
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home