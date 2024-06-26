import React from 'react'

import { APP_NAME, EMAIL, PHONE } from '@/data/config'

const Footer = () => {
    return (
        <div className="footer">
            <div className="base-container w-container">
                <div className="footer-wrapper-main">
                    <div className="footer-brand-wrapper-main">
                        <div className="footer-logo-wrapper-main">
                            <a href="/" className="footer-brand-2 w-nav-brand">
                                <img src="/images/logo.svg" loading="lazy" alt="logo" height="30" className="footer-logo" />
                            </a>
                        </div>
                        <p className="footer-brand-description-main">
                            Chez {APP_NAME}, nous équipons votre trajet d'excellence et innovons pour votre sérénité
                            sur la route.
                        </p>
                        <div className="footer-contact-wrapper div-block-15">
                            <div className="footer-contact-icon">
                                <div>
                                    
                                </div>
                            </div>
                            <a href={`mailto:${EMAIL}`} className="footer-link-main">
                                {EMAIL}
                            </a>
                        </div>
                    </div>
                    <div className="footer-links-wrapper-main">
                        <h6 className="white-text mb-15">
                            Présentation
                        </h6>
                        <a href="/centre-de-depollution" aria-current="page" className="footer-link-main w--current">
                            Centre de dépollution
                        </a>
                        <a href="/atelier-mecanique" className="footer-link-main">
                            Garagiste / Atelier Mécanique
                        </a>
                    </div>
                    <div className="footer-links-wrapper-cta">
                        <a href={`tel:${PHONE}`} className="footer-link-main primary">
                            {PHONE}
                        </a>
                        <p className="footer-brand-description-main">
                            Disponible 24/7 Appelez nous à n'importe quel moment!
                        </p>
                        <div className="button-wrapper-footer">
                            <a href="/centre-de-depollution" className="primary-button w-button">
                                Demander votre devis maintenant
                            </a>
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
                        <div className="footer-copyrigh-main">
                            &copy; 2024 {APP_NAME}. Tous les droits sont réservés.
                        </div>
                        <div className="footer-rights-main">
                            Powered by <a href="https://digivibe.fr" target="_blank" style={{ color: '#fe46a0', fontWeight: 'bold' }}>Digivibe</a>.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer