import React from 'react'
import Head from 'next/head'

import Theme2 from '@/layouts/Theme2'
import { APP_NAME, CANONICAL } from '@/data/config'
import Footer from '@/components/VHU/Footer'
import Loader from '@/components/VHU/Loader'

import Header from '@/components/VHU/Header'

const HeroSection = () => (
    <div data-w-id="c9bbefc0-551a-b2ec-08e3-689e7301dd75" className="hero-section-video">
        <div data-poster-url="/images/poster.png" data-video-urls="/videos/2.mp4" data-autoplay="true" data-loop="true" data-wf-ignore="true" className="background-video-2 w-background-video w-background-video-atom">
            <video id="ee278701-3cea-9f2b-9750-061ae6ddc88f-video" autoPlay="" loop="" style={{ backgroundImage: "url('/images/poster.png')" }} muted="" playsInline="" data-wf-ignore="true" data-object-fit="cover">
                <source src="/videos/2.mp4" data-wf-ignore="true" />
            </video>
            <div aria-live="polite">
                <button type="button" data-w-bg-video-control="true" aria-controls="ee278701-3cea-9f2b-9750-061ae6ddc88f-video" className="w-backgroundvideo-backgroundvideoplaypausebutton w-background-video--control">
                    <span>
                        <img alt="Pause video" src="/centre/images/pause.svg" />
                    </span>
                    <span hidden="">
                        <img alt="Play video" src="/centre/images/play.svg" />
                    </span>
                </button>
            </div>
        </div>
    </div>
)

const HeroContent = () => (
    <div data-w-id="b20d892d-8fd3-4053-07bc-ca51fec2ae82" className="hero-dark">
        <div className="wide-container stretch">
            <div className="hero-container for-home">
                <div className="hero-text-content">
                    <HeroTitle />
                    <HeroParagraph />
                    <HeroButton />
                </div>
                <HeroKeywords />
            </div>
        </div>
        <div className="image-wrapper no-pointer-events home powerhouse">
            <img src="/images/rn1.jpg" loading="eager" data-w-id="fb4f7fb3-913a-430a-3cd3-90ab1c2a3987" sizes="(max-width: 767px) 100vw, 90vw" alt="" className="image" />
        </div>
    </div>
)

const HeroTitle = () => (
    <>
        <div data-w-id="b20d892d-8fd3-4053-07bc-ca51fec2ae86" className="perspective-wrapper horizontal">
            <div className="wrapper"></div>
            <h1 className="heading-1-white">CENTRE</h1>
            <div className="wrapper">
                <h1 className="heading-1-white outlined-white">DE</h1>
            </div>
        </div>
        <div data-w-id="b20d892d-8fd3-4053-07bc-ca51fec2ae8d" className="perspective-wrapper">
            <div className="wrapper">
                <h1 className="heading-1-white">DEPOLLUTION</h1>
            </div>
        </div>
    </>
)

const HeroParagraph = () => (
    <div data-w-id="b20d892d-8fd3-4053-07bc-ca51fec2ae91" className="wrapper overflow-visible">
        <div className="hero-paragraph-container">
            <p className="paragraph-white">
                Bienvenue chez Castel Pièces Auto, votre destination privilégiée pour tous vos besoins automobiles.
                <span><br /></span>
            </p>
        </div>
    </div>
)

const HeroButton = () => (
    <a data-w-id="0d820513-e4d5-6073-caa5-30a6350ed556" className="secondary-button home-powerhouse w-inline-block">
        <div className="secondary-btn-text-wrapper-white">
            <div className="secondary-button-text for-footer white">
                Demander un devis
            </div>
            <div className="secondary-button-text for-footer absolute white">
                Demander un devis
            </div>
        </div>
        <div className="secondary-btn-arrow-wrapper-white for-footer-white white">
            <img src="/centre/images/arrow.webp" loading="lazy" alt="Arrow Right icon" className="arrow-right-white" />
            <img src="/centre/images/arrow.webp" loading="lazy" alt="Arrow Right icon" className="arrow-right-white translate-left" />
        </div>
        <div className="secondary-btn-text-wrapper-black">
            <div className="secondary-button-text for-footer black">
                Demander un devis
            </div>
            <div className="secondary-button-text for-footer absolute black">
                Demander un devis
            </div>
        </div>
        <div className="secondary-btn-arrow-wrapper-black for-footer-black black">
            <img src="/centre/images/arrow_dark.webp" loading="lazy" alt="Arrow Right icon" className="arrow-right-black" />
            <img src="/centre/images/arrow_dark.webp" loading="lazy" alt="Arrow Right icon" className="arrow-right-black translate-left" />
        </div>
    </a>
)

const HeroKeywords = () => (
    <div className="home-hero-keywords-container">
        <div className="keyword-text">Véhicules</div>
        <div className="keyword-circle"></div>
        <div className="keyword-text">Neufs</div>
        <div className="keyword-circle"></div>
        <div className="keyword-text">Véhicules</div>
        <div className="keyword-circle hidden-on-mobile"></div>
        <div className="keyword-text hidden-on-mobile">d'occasions</div>
    </div>
)

const AboutSection = () => (
    <div className="section home-about">
        <div data-w-id="12e63ebc-93d8-266c-b57a-88fae8e527c4" className="track">
            <div className="camera">
                <div data-w-id="b22ec29b-65f5-db22-0b7e-f67b3b7f822c" className="frame">
                    <div data-w-id="2ae985e7-ce51-2d02-10b0-52447b680a59" className="home-about-container">
                        <div className="home-about-inner-container">
                            <div className="full-height-text-container">
                                <AboutContent />
                            </div>
                            <ExperienceSection />
                        </div>
                    </div>
                    <ProjectsSection />
                </div>
            </div>
        </div>
    </div>
)

const AboutContent = () => (
    <div className="section-text-container">
        <div className="section-title-wrapper">
            <h2 className="heading-2 absolute colorprimary">A propos</h2>
            <div data-w-id="42b0e73b-faf8-70a7-c20c-5f4803ab6e3a" className="section-outlined-heading outlined">A propos</div>
            <div data-w-id="e0c0580b-8d22-a750-eeda-8bf33138ff58" className="section-outlined-heading-trigger"></div>
        </div>
        <div className="line-animations-container-mobile">
            <Benefit number="20" text="Années d'expérience" />
            <Benefit number="800" text="Clients fidèles" />
            <Benefit number="35" text="Partenaires" />
        </div>
        <div className="section-paragraph-wrapper center-on-tablet">
            <p className="paragraph">
                Centre De Dépollution Agréé Reprise Véhicule Hors D'usage
                <br />
                Notre centre de dépollution agréé est au cœur de notre engagement envers l'environnement et la responsabilité sociale. Chez "Castel Pièces Auto",
                nous prenons en charge les véhicules hors d'usage avec une attention
                particulière pour la préservation de notre planète. Grâce à des processus
                éco-responsables, nous assurons la dépollution et le recyclage des
                composants de manière sécuritaire et conforme aux réglementations.
            </p>
        </div>
        <a data-w-id="33356b5b-ef8d-880f-e0fa-9a881add0d85" href="/" className="primary-button w-inline-block">
            <div className="wrapper button">
                <div className="primary-button-text">En savoir plus</div>
                <div className="primary-button-text absolute">En savoir plus</div>
            </div>
        </a>
    </div>
)

const Benefit = ({ number, text }) => (
    <div data-w-id="79bbe164-8028-cf1e-3099-05e2bff7d7ba" className="benefit-mobile">
        <div className="wrapper horizontal align-center">
            <div className="benefit-line-mobile">
                <div className="benefit-horizontal-line"></div>
                <div className="benefit-circle"></div>
            </div>
            <div className="experience-wrapper">
                <div className="experience-number">{number}</div>
                <div className="experience-text">{text}</div>
            </div>
        </div>
    </div>
)

const ExperienceSection = () => (
    <div className="home-about-experience-container">
        <ExperienceItem number="16" text="Années d'expérience" />
        <ExperienceItem number="300" text="Clients fidèles" second />
        <ExperienceItem number="28" text="Partenaires" third />
    </div>
)

const ExperienceItem = ({ number, text, second, third }) => (
    <div className={`experience-item ${second ? 'second' : ''} ${third ? 'third' : ''}`}>
        <div className="experience-inner">
            <div className="wrapper center">
                <div className="vertical-line"></div>
                <div className="line-circle"></div>
            </div>
            <div className="experience-number-container">
                <div className="experience-number">{number}</div>
                <div data-w-id="03c81694-69e8-bc3f-acee-aaca329ef500" className="experience-number absolute first">{number + 1}</div>
                <div data-w-id="11c06db7-8984-1696-5cb4-c29340d5bc67" className="experience-number absolute">{number + 2}</div>
                <div data-w-id="aae52603-2e09-2c0a-7b4b-dcc719ae66fd" className="experience-number absolute">{number + 3}</div>
                <div data-w-id="a20f41ae-c1cd-1d1d-9b3e-90ce6d98cc0c" className="experience-number absolute">{number + 4}</div>
            </div>
        </div>
        <div className="experience-text">{text}</div>
    </div>
)

const ProjectsSection = () => (
    <div className="home-projects-container">
        <div className="projects-title-wrapper for-projects">
            <div className="section-title-wrapper for-projects">
                <h2 className="heading-2 absolute white">Dépollution</h2>
                <div data-w-id="e7c426b0-6c35-5e0b-0a4e-c65af650f484" className="section-outlined-heading outlined-white">Dépollution</div>
                <div data-w-id="c872fe96-76d2-6fad-22d4-b81ca24831f1" className="section-outlined-heading-trigger"></div>
            </div>
        </div>
        <div className="project-list-wrapper w-dyn-list">
            <ProjectItem href="/reprise-vehicules-accidentes" type="Reprise Véhicules" text="Accidentés" imgSrc="/images/acc.jpg" />
            <ProjectItem href="/reprise-vehicules-hors-d-usage" type="Reprise Véhicules" text="Hors d'Usage" imgSrc="/images/hs.jpg" />
            <ProjectItem href="/objectif-et-obligations-d-un-vhu" type="Objectif et obligations d'un" text="VHU" imgSrc="/images/p5.jpg" />
            <ProjectItem href="/prime-a-la-conversion" type="Prime à la" text="conversion" imgSrc="/images/p6.jpg" />
        </div>
        <AllProjects />
    </div>
)

const ProjectItem = ({ href, type, text, imgSrc }) => (
    <div role="listitem" className="project-item w-dyn-item">
        <div className="project">
            <div data-w-id="bbbcdae6-b49c-e838-623e-0525f7cd292a" className="project-outer-image-wrapper">
                <div className="project-image-wrapper">
                    <img alt="" loading="eager" data-w-id="557a5ce9-e630-d52c-3a3c-2b08852e9eca" src={imgSrc} sizes="(max-width: 479px) 100vw, (max-width: 767px) 71vw, (max-width: 991px) 62vw, (max-width: 1279px) 48vw, (max-width: 1439px) 45vw, (max-width: 1919px) 44vw, 35vw" className="project-image" />
                </div>
            </div>
            <div data-w-id="a231e3e3-31a8-ffb0-cd39-d1a716c7f70f" className="project-context">
                <div className="project-type">{type}</div>
                <div className="big-text">{text}</div>
                {href && (
                    <div className="secondary-button-wrapper">
                        <a href={href} data-w-id="9ed5b0ed-ebc1-8c5f-4668-d73c6dbcb917" className="secondary-button w-inline-block">
                            <div className="secondary-btn-text-wrapper-white">
                                <div data-w-id="9ed5b0ed-ebc1-8c5f-4668-d73c6dbcb919" className="secondary-button-text">Découvrir</div>
                                <div data-w-id="ee838423-0da4-0445-2f0d-9ca74729ef17" className="secondary-button-text absolute">Découvrir</div>
                            </div>
                            <div data-w-id="9ed5b0ed-ebc1-8c5f-4668-d73c6dbcb91d" className="secondary-btn-arrow-wrapper-white">
                                <img src="/centre/images/arrow_white.svg" loading="lazy" alt="Arrow Right icon" className="arrow-right-black white for-projects" />
                                <img src="/centre/images/arrow_dark.svg" loading="lazy" alt="Arrow Right icon" className="arrow-right-black translate-left for-projects" />
                            </div>
                        </a>
                    </div>
                )}
            </div>
        </div>
    </div>
)

const AllProjects = () => (
    <div className="all-projects-container">
        <div className="project-context all-projects">
            <div className="project-type">
                Vous possédez un véhicule en fin de vie ? Obligation de s’adresser à un centre agréé VHU
            </div>
            <div className="big-text wider no-pointer-events">
                Centre de <br />Dépollution
            </div>
            <div className="secondary-button-wrapper no-margin">
                <a href="/centre-vhu" data-w-id="2b832c4a-cc2b-e9d6-9bac-4ae6983d6296" className="secondary-button w-inline-block">
                    <div className="secondary-btn-text-wrapper-white">
                        <div className="secondary-button-text for-footer white-on-mobile">Découvrir</div>
                        <div className="secondary-button-text for-footer absolute">Découvrir</div>
                    </div>
                    <div className="secondary-btn-arrow-wrapper-white for-footer white-on-mobile">
                        <img src="/centre/images/arrow_white.svg" loading="lazy" alt="Arrow Right icon" className="arrow-right-black white show-on-mobile" />
                        <img src="/centre/images/arrow_dark.svg" loading="lazy" alt="Arrow Right icon" className="arrow-right-black translate-left hide-on-mobile" />
                    </div>
                </a>
            </div>
        </div>
        <InfiniteSlider />
    </div>
)

const InfiniteSlider = () => (
    <div className="infinite-slider">
        <div className="outer-slider">
            <div data-w-id="ce1569fe-23ff-f4e8-06e6-b4d1f554cb0f" className="inner-slider">
                <SliderItem imgSrc="/images/p1.jpg" />
                <SliderItem imgSrc="/images/p2.jpg" />
                <SliderItem imgSrc="/images/p3.jpg" />
                <SliderItem imgSrc="/images/p4.jpg" />
                <SliderItem imgSrc="/images/p5.jpg" />
                <SliderItem imgSrc="/images/p6.jpg" />
            </div>
        </div>
    </div>
)

const SliderItem = ({ imgSrc }) => (
    <div role="listitem" className="w-dyn-item">
        <div className="project-image-wrapper no-rotate">
            <img alt="" loading="lazy" data-w-id="0e83b8ce-be38-af29-f1fa-c2d33febd882" src={imgSrc} sizes="(max-width: 479px) 100vw, (max-width: 991px) 56vw, (max-width: 1279px) 48vw, (max-width: 1439px) 45vw, (max-width: 1919px) 44vw, 35vw" className="project-image" />
        </div>
    </div>
)

const ServicesSection = () => (
    <div className="section desktop-no-padding-top">
        <div className="wide-container home-services">
            <div data-w-id="a13e6f8e-c99e-29e4-9fef-a2cff184e4f5" className="home-services-container">
                <div className="full-height-text-container">
                    <div className="section-text-container">
                        <div className="section-title-wrapper">
                            <h2 className="heading-2 absolute colorprimary">Services</h2>
                            <div data-w-id="0d4d7fe9-13c1-8a43-01bf-d63330775482" className="section-outlined-heading outlined">Services</div>
                            <div data-w-id="0d4d7fe9-13c1-8a43-01bf-d63330775484" className="section-outlined-heading-trigger"></div>
                        </div>
                        <div className="line-animations-container-mobile home-services">
                            <ServiceItem text="Enlèvement véhicule" />
                            <ServiceItem text="Dépollution des VHU" />
                            <ServiceItem text="Vente pièces" />
                            <ServiceItem text="Récyclage véhicule" />
                        </div>
                        <div className="section-paragraph-wrapper center-on-tablet">
                            <p className="paragraph">
                                Nos services incluent l'enlèvement de votre véhicule accidenté ou épave, la dépollution
                                des VHU selon les normes environnementales, la vente de pièces détachées auto garanties
                                et le recyclage de véhicules.
                            </p>
                        </div>
                        <a data-w-id="33356b5b-ef8d-880f-e0fa-9a881add0d85" className="primary-button w-inline-block">
                            <div className="wrapper button">
                                <div className="primary-button-text">Obtenir devis</div>
                                <div className="primary-button-text absolute">Obtenir devis</div>
                            </div>
                        </a>
                    </div>
                </div>
                <ServicesAnimation />
            </div>
        </div>
    </div>
)

const ServiceItem = ({ text }) => (
    <div data-w-id="0d4d7fe9-13c1-8a43-01bf-d63330775486" className="benefit-mobile smaller-margin">
        <div className="wrapper horizontal align-center">
            <div className="benefit-line-mobile">
                <div className="benefit-horizontal-line"></div>
                <div className="benefit-circle"></div>
            </div>
            <div className="experience-wrapper strategy">
                <div className="animation-item-text">{text}</div>
            </div>
        </div>
    </div>
)

const ServicesAnimation = () => (
    <div data-w-id="b9bbab72-6321-a9d4-62cf-02063ebd7fb4" className="home-services-animation-container">
        <div className="animation-line-column">
            <AnimationItem text="Enlèvement véhicule" />
            <AnimationItem text="Dépollution des VHU" short />
        </div>
        <div className="animation-line-column">
            <AnimationItem text="Vente pièces" long />
            <AnimationItem text="Récyclage véhicule" short />
        </div>
    </div>
)

const AnimationItem = ({ text, short, long }) => (
    <div className="animation-item">
        <div className="outer-line-wrapper">
            <div className={`line-wrapper ${short ? 'short' : ''} ${long ? 'long' : ''}`}>
                <div className="vertical-line"></div>
                <div className="line-circle"></div>
            </div>
        </div>
        <div className="animation-item-text">{text}</div>
    </div>
)


const WidgetButton = () => (
    <span className="envelopeb">
        <div id="widgetButton" className="widget-button">
            <img src="/centre/images/mex.svg" alt="Chat" /> Demander un enlèvement immédiat de votre VHU
        </div>
    </span>
)

const PopupBox = () => (
    <div id="popupBox" className="popup-box">
        <div>
            <div>
                <form>
                    <p>Formulaire de demande d'enlèvement immédiat de votre VHU</p>
                    <div>
                        <input className="form-field is-light-version w-input" placeholder="Nom complet" type="name" required />
                    </div>
                    <div>
                        <input className="form-field is-light-version w-input" placeholder="Email" type="email" required />
                    </div>
                    <div>
                        <input className="form-field is-light-version w-input" placeholder="Numéro tel" type="tel" required />
                    </div>
                    <div>
                        <label htmlFor="Budget-3" className="field-label">Votre véhicule est il roulant?</label>
                        <select id="Budget-3" className="select-field w-select">
                            <option value="1">OUI</option>
                            <option value="0">NON</option>
                        </select>
                    </div>
                    <br />
                    <button type="button" className="form-button w-button">Soumettre</button>
                </form>
            </div>
        </div>
    </div>
)

export default function CentreDeDepollution() {
    return (
        <>
            <Head>
                <title>{`Centre de dépollution - ${APP_NAME}`}</title>
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={`${CANONICAL}/centre-de-depollution`} />
            </Head>
            <Theme2 type={1}>
                <div className="body">
                    <div className="cursor">
                        <div className="cursor-inner"></div>
                    </div>
                    <Header />
                    <HeroSection />
                    <HeroContent />
                    <AboutSection />
                    <ServicesSection />
                    <Footer />
                    <Loader name="VHU" />
                    <WidgetButton />
                    <PopupBox />
                </div>
            </Theme2>
        </>
    )
}