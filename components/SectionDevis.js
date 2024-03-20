import Image from "next/image"

export default function SectionDevis() {
    return (
        <div className="section book-cta" style={{ marginBottom: 25 }}>
            <div className="base-container w-container">
                <div data-w-id="ea49eaf7-3117-f0ef-355a-9dfbdcbe7110" className="cta-info-wrapper">
                    <div>
                        <h2 className="in-section-title text-white">
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
                    <span data-w-id="52671318-bdf0-e29a-1903-e7cdb6e3a214" className="video-button w-inline-block w-lightbox">
                        <div className="video-hover-button">
                            <div style={{ backgroundColor: "rgba(255,255,255,0.2)" }} className="video-icon-wrapper">
                                <Image
                                    src="/images/play-icon.svg"
                                    loading="lazy"
                                    width={16}
                                    height={16}
                                    style={{ filter: "invert(0%)" }}
                                    alt="icon"
                                    className="video-icon"
                                />
                            </div>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    )
}