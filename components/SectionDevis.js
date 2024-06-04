import React from 'react'

const SectionDevis = () => {
    return (
        <div className="section book-cta" style={{ marginBottom: '25px' }}>
            <div className="base-container w-container">
                <div className="cta-info-wrapper">
                    <div>
                        <h2 className="in-section-title text-white">
                            Demander votre devis<br />
                        </h2>
                        <p className="cta-description">
                            Getting started is easy. Simply use our online booking or give us a call,
                            and we'll take care of the rest.
                        </p>
                        <div className="button-wrapper-main">
                            <a className="primary-button w-button">
                                Contactez-nous
                            </a>
                        </div>
                    </div>
                    <span className="video-button w-inline-block w-lightbox">
                        <div className="video-hover-button">
                            <div className="video-icon-wrapper" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
                                <img
                                    src="/images/play-icon.svg"
                                    loading="lazy"
                                    width="16"
                                    height="16"
                                    style={{ filter: 'invert(0%)' }}
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

export default SectionDevis