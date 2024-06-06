export default function Footer() {
    return (
        <footer id="footer" className="footer">
            <div className="footer-container">
                <div className="upper-footer">
                    <div className="lets-talk-container">
                        <div className="big-text for-footer">VHU</div>
                        <div className="big-text for-footer relative"></div>
                        <div className="footer-secondary-button-wrapper">
                            <a data-w-id="33356b5b-ef8d-880f-e0fa-9a881add0d85" className="primary-button w-inline-block">
                                <div id="othherb" className="wrapper button">
                                    <div className="primary-button-text">Faire enlever votre VHU</div>
                                    <div className="primary-button-text absolute">Faire enlever votre VHU</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="footer-image-wrapper no-pointer-events for-mobile">
                        <img src="/images/dex.png" loading="eager" sizes="100vw" className="image" />
                    </div>
                    <div className="main-links">
                        <div className="footer-links-container">
                            <FooterLinkColumn />
                            <div className="footer-links-column secondary-column">
                                <FooterLink href="/mentions-legales" text="Mentions Légales" />
                            </div>
                        </div>
                        <SocialsAndNewsletter />
                    </div>
                </div>
            </div>
            <LowerFooter />
        </footer>
    )
}

const FooterLinkColumn = () => (
    <div className="footer-links-column sideline-on-mobile">
        <div className="footer-link title">Navigation</div>
        <FooterLink href="/" text="Accueil" />
        <FooterLink text="Centre de dépollution" current />
        <FooterLink href="/atelier-mecanique" text="Atelier mécanique" />
    </div>
)

const FooterLink = ({ href, text, current }) => (
    <a href={href} aria-current={current ? "page" : undefined} className={`footer-link-wrapper w-inline-block ${current ? 'w--current' : ''}`}>
        <div className="footer-link">{text}</div>
        <div className="footer-link absolute">{text}</div>
    </a>
)

const SocialsAndNewsletter = () => (
    <div className="socials-and-newsletter-container">
        <div className="socials">
            <a data-w-id="e30db50a-08bd-a1a0-86ad-25e43f75234f" className="social w-inline-block">
                <img src="/centre/images/facebook.svg" loading="lazy" alt="Facebook Icon" className="social-icon" />
            </a>
        </div>
        <Newsletter />
    </div>
)

const Newsletter = () => (
    <div className="newsletter-container">
        <div className="footer-link title-on-mobile">Newsletter</div>
        <div className="form-block w-form">
            <form className="newsletter-form">
                <input className="text-field w-input" maxLength="256" placeholder="Your email" type="email" id="mail-2" required="" />
                <div data-w-id="e30db50a-08bd-a1a0-86ad-25e43f75235b" className="newsletter-button-container">
                    <a className="primary-button light w-inline-block">
                        <div className="wrapper">
                            <div className="primary-button-text dark">Subscribe</div>
                            <div className="primary-button-text dark absolute">Subscribe</div>
                        </div>
                    </a>
                    <input type="submit" data-wait="Please wait..." className="hidden-submit w-button" value="" />
                </div>
            </form>
        </div>
    </div>
)

const LowerFooter = () => (
    <div className="lower-footer">
        <div className="footer-image-wrapper no-pointer-events">
            <img src="/images/dex.png" loading="eager" sizes="(max-width: 767px) 100vw, (max-width: 991px) 495.66668701171875px, 50vw" alt="David Perez and Haley Kerpan" className="image" />
        </div>
        <div id="w-node-e30db50a-08bd-a1a0-86ad-25e43f752368-3f752314" className="footer-line"></div>
        <div className="footer-link secondary smaller">
            Powered by <a href="https://digivibe.fr" target="_blank" style={{ color: "#fe46a0", fontWeight: "bold" }}>Digivibe</a>
        </div>
    </div>
)