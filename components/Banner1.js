import Link from 'next/link';
import Image from 'next/image';
export default function Banner1() {
    return (
        <div data-w-id="4fd1001e-0883-42e7-af04-a12016ec15d5" className="banner-section-photo">
            <div data-w-id="4fd1001e-0883-42e7-af04-a12016ec15d6" className="banner-content-container left-align">
                <div className="arrows-animated-wrapper">
                    <Image
                        src="/images/arrow-outlone.svg"
                        loading="lazy"
                        alt="icon"
                        className="arrow-animated"
                        width={67}
                        height={84}
                        style={{display: "inline-bloack"}}
                    />
                    <Image
                        src="/images/arrow-outlone.svg"
                        loading="lazy"
                        alt="icon"
                        className="arrow-animated-two"
                        width={67}
                        height={84}
                        style={{display: "inline-bloack"}}
                    />
                    <Image
                        src="/images/arrow-outlone.svg"
                        loading="lazy"
                        alt="icon"
                        className="arrow-animated-three"
                        width={67}
                        height={84}
                        style={{display: "inline-bloack"}}
                    />
                    <Image
                        src="/images/arrow-outlone.svg"
                        loading="lazy"
                        alt="icon"
                        className="arrow-animated-four"
                        width={67}
                        height={84}
                        style={{display: "inline-bloack"}}
                    />
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
                <Image
                    src="/images/arrow-outlone-w.svg"
                    loading="lazy"
                    alt="icon"
                    className="arrow-banner"
                    width={66}
                    height={84}
                    style={{display: "inline-bloack"}}
                />
                <Image
                    src="/images/arrow-outlone-w.svg"
                    loading="lazy"
                    alt="icon"
                    className="arrow-banner"
                    width={66}
                    height={84}
                    style={{display: "inline-bloack"}}
                />
                <Image
                    src="/images/arrow-outlone-w.svg"
                    loading="lazy"
                    alt="icon"
                    className="arrow-banner"
                    width={66}
                    height={84}
                    style={{display: "inline-bloack"}}
                />
            </div>
            <div className="arrows-banner-wrap-right">
                <Image
                    src="/images/arrow-outlone-w.svg"
                    loading="lazy"
                    alt="icon"
                    className="arrow-banner"
                    width={66}
                    height={84}
                    style={{display: "inline-bloack"}}
                />
                <Image
                    src="/images/arrow-outlone-w.svg"
                    loading="lazy"
                    alt="icon"
                    className="arrow-banner"
                    width={66}
                    height={84}
                    style={{display: "inline-bloack"}}
                />
                <Image
                    src="/images/arrow-outlone-w.svg"
                    loading="lazy"
                    alt="icon"
                    className="arrow-banner"
                    width={66}
                    height={84}
                    style={{display: "inline-bloack"}}
                />
                <Image
                    src="/images/arrow-outlone-w.svg"
                    loading="lazy"
                    alt="icon"
                    className="arrow-banner"
                    width={66}
                    height={84}
                    style={{display: "inline-bloack"}}
                />
                <Image
                    src="/images/arrow-outlone-w.svg"
                    loading="lazy"
                    alt="icon"
                    className="arrow-banner"
                    width={66}
                    height={84}
                    style={{display: "inline-bloack"}}
                />
            </div>
        </div>
    )
}