import { useEffect } from 'react'
import Head from 'next/head'

import { useTemplate } from '@/context/TemplateContext'
import { APP_NAME } from '@/data/config'

const Content = () => {
    useEffect(() => {
        const loadWebFont = () => {
            WebFont.load({
                google: {
                    families: [
                        'Poppins:300,regular,500,600,700,800,900',
                        'Manrope:200,300,regular,500,600,700,800'
                    ]
                }
            })
        }

        const script = document.createElement('script')
        script.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js'
        script.type = 'text/javascript'
        script.onload = loadWebFont
        document.head.appendChild(script)

        const additionalScript = document.createElement('script')
        additionalScript.type = 'text/javascript'
        additionalScript.innerHTML = `
            !function(o, c) {
                var n = c.documentElement, t = " w-mod-"
                n.className += t + "js"
                ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch")
            }(window, document)
        `
        document.head.appendChild(additionalScript)

        const mexScript = document.createElement('script')
        mexScript.src = '/js/mex.js'
        mexScript.type = 'text/javascript'
        document.body.appendChild(mexScript)

        const templateScript = document.createElement('script')
        templateScript.src = '/js/template2.wf.js'
        templateScript.type = 'text/javascript'
        document.body.appendChild(templateScript)

        return () => {
            document.head.removeChild(script)
            document.head.removeChild(additionalScript)
            document.body.removeChild(mexScript)
            document.body.removeChild(templateScript)
        }
    }, [])

    return (
        <>
            <Head>
                <title>{`Centre de dépollution - ${APP_NAME}`}</title>
                <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
            </Head>
            <noscript>
                <style>
                    {`
                        [data-wf-bgvideo-fallback-img] {
                            display: none
                        }
                        @media (prefers-reduced-motion: reduce) {
                            [data-wf-bgvideo-fallback-img] {
                                position: absolute
                                z-index: -100
                                display: inline-block
                                height: 100%
                                width: 100%
                                object-fit: cover
                            }
                        }
                    `}
                </style>
                <img data-wf-bgvideo-fallback-img="true" src="/images/poster.png" alt="" />
            </noscript>
            <body className="body">
                <div className="cursor">
                    <div className="cursor-inner"></div>
                </div>
                <div className="navbar">
                    <div className="navbar-inner">
                        <a data-w-id="79a57036-0792-5d21-37c0-6f0e45ed6a76" href="/" aria-current="page"
                            className="navbar-logo-container w-inline-block w--current">
                            <img src="/images/logo.svg" loading="lazy" width="Auto" height="50" alt="Castel Pieces Auto Logo"
                                className="logo-black" />
                        </a>
                        <div data-w-id="79a57036-0792-5d21-37c0-6f0e45ed6a79" className="menu-button">
                            <div className="top-menu-line"></div>
                            <div className="bottom-menu-line"></div>
                        </div>
                    </div>
                </div>
                <div className="menu">
                    <div className="navbar for-menu">
                        <div className="navbar-inner">
                            <a href="/" aria-current="page" className="navbar-logo-container w-inline-block w--current">
                                <img src="/images/logo.svg" loading="lazy" width="Auto" height="50" alt="Castel Pieces Auto Logo" className="logo-black" />
                            </a>
                            <div data-w-id="b919e661-8b51-a329-cf4d-3b80ef57b745" className="menu-button">
                                <div className="top-menu-line"></div>
                                <div className="bottom-menu-line"></div>
                            </div>
                        </div>
                    </div>
                    <div className="menu-links-container">
                        <a href="/" aria-current="page" className="menu-link w-inline-block w--current">
                            <div className="menu-number-wrapper">
                                <div className="menu-number-text">01</div>
                            </div>
                            <div className="menu-link-text-wrapper">
                                <div className="big-text for-menu">
                                    Centre de dépollution
                                </div>
                            </div>
                            <div className="menu-background-image">
                                <img src="/centre/images/img39.webp" loading="lazy" sizes="100vw" alt="" className="image for-menu" />
                            </div>
                        </a>
                        <a data-w-id="b919e661-8b51-a329-cf4d-3b80ef57b752" href="/garage-atelier-mecanique"
                            className="menu-link w-inline-block">
                            <div className="menu-number-wrapper">
                                <div className="menu-number-text">02</div>
                            </div>
                            <div className="menu-link-text-wrapper">
                                <div className="big-text for-menu">
                                    Atelier Mécanique
                                </div>
                            </div>
                            <div className="menu-background-image">
                                <img src="/centre/images/img15.webp" loading="lazy" sizes="100vw" alt="" className="image for-menu" />
                            </div>
                        </a>
                    </div>
                    <div className="menu-underlay"></div>
                </div>
                <div data-w-id="c9bbefc0-551a-b2ec-08e3-689e7301dd75" className="hero-section-video">
                    <div data-poster-url="/images/poster.png" data-video-urls="/videos/2.mp4" data-autoplay="true" data-loop="true" data-wf-ignore="true" className="background-video-2 w-background-video w-background-video-atom">
                        <video id="ee278701-3cea-9f2b-9750-061ae6ddc88f-video" autoplay="" loop=""
                            style={{ backgroundImage: "url('/images/poster.png')" }} muted="" playsinline="" data-wf-ignore="true"
                            data-object-fit="cover">
                            <source src="/videos/2.mp4" data-wf-ignore="true" />
                        </video>

                        <div aria-live="polite">
                            <button type="button" data-w-bg-video-control="true"
                                aria-controls="ee278701-3cea-9f2b-9750-061ae6ddc88f-video"
                                className="w-backgroundvideo-backgroundvideoplaypausebutton w-background-video--control">
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
                <div data-w-id="b20d892d-8fd3-4053-07bc-ca51fec2ae82" className="hero-dark">
                    <div className="wide-container stretch">
                        <div className="hero-container for-home">
                            <div className="hero-text-content">
                                <div data-w-id="b20d892d-8fd3-4053-07bc-ca51fec2ae86" className="perspective-wrapper horizontal">
                                    <div className="wrapper"></div>
                                    <h1 className="heading-1-white">
                                        CENTRE
                                    </h1>
                                    <div className="wrapper">
                                        <h1 className="heading-1-white outlined-white">DE</h1>
                                    </div>
                                </div>
                                <div data-w-id="b20d892d-8fd3-4053-07bc-ca51fec2ae8d" className="perspective-wrapper">
                                    <div className="wrapper">
                                        <h1 className="heading-1-white">DEPOLLUTION</h1>
                                    </div>
                                </div>
                                <div data-w-id="b20d892d-8fd3-4053-07bc-ca51fec2ae91" className="wrapper overflow-visible">
                                    <div className="hero-paragraph-container">
                                        <p className="paragraph-white">
                                            Bienvenue chez Castel Pièces Auto, votre destination privilégiée pour tous vos besoins
                                            automobiles.
                                            <span><br /></span>
                                        </p>
                                        <a data-w-id="0d820513-e4d5-6073-caa5-30a6350ed556"
                                            className="secondary-button home-powerhouse w-inline-block">
                                            <div className="secondary-btn-text-wrapper-white">
                                                <div className="secondary-button-text for-footer white">
                                                    Demander un devis
                                                </div>
                                                <div className="secondary-button-text for-footer absolute white">
                                                    Demander un devis
                                                </div>
                                            </div>
                                            <div className="secondary-btn-arrow-wrapper-white for-footer-white white">
                                                <img src="/centre/images/arrow.webp" loading="lazy" alt="Arrow Right icon"
                                                    className="arrow-right-white" />
                                                <img src="/centre/images/arrow.webp" loading="lazy" alt="Arrow Right icon"
                                                    className="arrow-right-white translate-left" />
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
                                                <img src="/centre/images/arrow_dark.webp" loading="lazy" alt="Arrow Right icon"
                                                    className="arrow-right-black" />
                                                <img src="/centre/images/arrow_dark.webp" loading="lazy" alt="Arrow Right icon"
                                                    className="arrow-right-black translate-left" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="home-hero-keywords-container">
                                <div className="keyword-text">Véhicules</div>
                                <div className="keyword-circle"></div>
                                <div className="keyword-text">Neufs</div>
                                <div className="keyword-circle"></div>
                                <div className="keyword-text">Véhicules</div>
                                <div className="keyword-circle hidden-on-mobile"></div>
                                <div className="keyword-text hidden-on-mobile">d'occasions</div>
                            </div>
                        </div>
                    </div>
                    <div className="image-wrapper no-pointer-events home powerhouse">
                        <img src="/images/rn1.jpg" loading="eager" data-w-id="fb4f7fb3-913a-430a-3cd3-90ab1c2a3987"
                            sizes="(max-width: 767px) 100vw, 90vw" alt="" className="image" />
                    </div>
                </div>
                <div className="section home-about">
                    <div data-w-id="12e63ebc-93d8-266c-b57a-88fae8e527c4" className="track">
                        <div className="camera">
                            <div data-w-id="b22ec29b-65f5-db22-0b7e-f67b3b7f822c" className="frame">
                                <div data-w-id="2ae985e7-ce51-2d02-10b0-52447b680a59" className="home-about-container">
                                    <div className="home-about-inner-container">
                                        <div className="full-height-text-container">
                                            <div className="section-text-container">
                                                <div className="section-title-wrapper">
                                                    <h2 className="heading-2 absolute colorprimary">
                                                        A propos
                                                    </h2>
                                                    <div data-w-id="42b0e73b-faf8-70a7-c20c-5f4803ab6e3a"
                                                        className="section-outlined-heading outlined">A propos</div>
                                                    <div data-w-id="e0c0580b-8d22-a750-eeda-8bf33138ff58"
                                                        className="section-outlined-heading-trigger"></div>
                                                </div>
                                                <div className="line-animations-container-mobile">
                                                    <div data-w-id="a35d48a6-3796-6347-4ed0-6ac8396fca29" className="benefit-mobile">
                                                        <div className="wrapper horizontal align-center">
                                                            <div className="benefit-line-mobile">
                                                                <div className="benefit-horizontal-line"></div>
                                                                <div className="benefit-circle"></div>
                                                            </div>
                                                            <div className="experience-wrapper">
                                                                <div className="experience-number">20</div>
                                                                <div className="experience-text">
                                                                    Années d'expérience
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div data-w-id="79bbe164-8028-cf1e-3099-05e2bff7d7ba" className="benefit-mobile">
                                                        <div className="wrapper horizontal align-center">
                                                            <div className="benefit-line-mobile line-2">
                                                                <div className="benefit-horizontal-line"></div>
                                                                <div className="benefit-circle"></div>
                                                            </div>
                                                            <div className="experience-wrapper">
                                                                <div className="experience-number">800</div>
                                                                <div className="experience-text">
                                                                    Clients fidèles
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div data-w-id="3abc3743-2645-aa72-f147-34de31ec6334" className="benefit-mobile">
                                                        <div className="wrapper horizontal align-center">
                                                            <div className="benefit-line-mobile line-3">
                                                                <div className="benefit-horizontal-line"></div>
                                                                <div className="benefit-circle"></div>
                                                            </div>
                                                            <div className="experience-wrapper">
                                                                <div className="experience-number">35</div>
                                                                <div className="experience-text">
                                                                    Partenaires
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="section-paragraph-wrapper center-on-tablet">
                                                    <p className="paragraph">
                                                        Centre De Dépollution Agréé Reprise Véhicule Hors D'usage
                                                        <br />
                                                        Notre centre de dépollution agréé est au cœur de notre engagement envers
                                                        l'environnement et la responsabilité sociale. Chez "Castel Pièces Auto",
                                                        nous prenons en charge les véhicules hors d'usage avec une attention
                                                        particulière pour la préservation de notre planète. Grâce à des processus
                                                        éco-responsables, nous assurons la dépollution et le recyclage des
                                                        composants de manière sécuritaire et conforme aux réglementations.
                                                    </p>
                                                </div>
                                                <a data-w-id="33356b5b-ef8d-880f-e0fa-9a881add0d85" href="/"
                                                    className="primary-button w-inline-block">
                                                    <div className="wrapper button">
                                                        <div className="primary-button-text">En savoir plus</div>
                                                        <div className="primary-button-text absolute">En savoir plus</div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="home-about-experience-container">
                                            <div id="w-node-_06be7ace-7d9b-3d58-ffee-e91ca4a04f32-f94f0b60" className="experience-item">
                                                <div className="experience-inner">
                                                    <div className="wrapper center">
                                                        <div className="vertical-line"></div>
                                                        <div className="line-circle"></div>
                                                    </div>
                                                    <div className="experience-number-container">
                                                        <div className="experience-number">16</div>
                                                        <div data-w-id="03c81694-69e8-bc3f-acee-aaca329ef500"
                                                            className="experience-number absolute first">17</div>
                                                        <div data-w-id="11c06db7-8984-1696-5cb4-c29340d5bc67"
                                                            className="experience-number absolute">18</div>
                                                        <div data-w-id="aae52603-2e09-2c0a-7b4b-dcc719ae66fd"
                                                            className="experience-number absolute">19</div>
                                                        <div data-w-id="a20f41ae-c1cd-1d1d-9b3e-90ce6d98cc0c"
                                                            className="experience-number absolute">20</div>
                                                    </div>
                                                </div>
                                                <div className="experience-text">Années d'expérience</div>
                                            </div>
                                            <div id="w-node-e339b12f-da8f-ceec-f705-d7aec9f4b1c3-f94f0b60"
                                                className="experience-item second">
                                                <div className="experience-inner">
                                                    <div className="wrapper center">
                                                        <div className="vertical-line"></div>
                                                        <div className="line-circle"></div>
                                                    </div>
                                                    <div className="experience-number-container">
                                                        <div className="experience-number">300</div>
                                                        <div data-w-id="109db3fe-b981-c16b-f464-e9ee71887132"
                                                            className="experience-number absolute first">400</div>
                                                        <div data-w-id="4ac7950c-48fe-7b47-2085-e4d0b8375131"
                                                            className="experience-number absolute">500</div>
                                                        <div data-w-id="37e4954b-9ee7-155c-db9f-1cd6c0620f24"
                                                            className="experience-number absolute">600</div>
                                                        <div data-w-id="aa8dc6fe-9908-f2ac-101f-deeffbe1c268"
                                                            className="experience-number absolute">700</div>
                                                        <div data-w-id="322a82d8-255b-8112-4979-8c2c69b53457"
                                                            className="experience-number absolute">800</div>
                                                    </div>
                                                </div>
                                                <div className="experience-text">
                                                    Clients fidèles
                                                </div>
                                            </div>
                                            <div id="w-node-_9a00fc5d-1d03-ef98-e895-4b7080f90fa6-f94f0b60"
                                                className="experience-item third">
                                                <div className="experience-inner">
                                                    <div className="wrapper center">
                                                        <div className="vertical-line"></div>
                                                        <div className="line-circle"></div>
                                                    </div>
                                                    <div className="experience-number-container">
                                                        <div className="experience-number">28</div>
                                                        <div data-w-id="2f0a320c-c16d-01d1-9229-e6329160dc4a"
                                                            className="experience-number absolute first">29</div>
                                                        <div data-w-id="ff1efa1b-56ef-b080-af2a-e1f5b18b27d5"
                                                            className="experience-number absolute">30</div>
                                                        <div data-w-id="6c1fb806-5a02-21a3-f9d4-ca4583a784c6"
                                                            className="experience-number absolute">31</div>
                                                        <div data-w-id="5f700dac-7430-9b9c-061c-30eb854754bb"
                                                            className="experience-number absolute">32</div>
                                                        <div data-w-id="43e0ad74-e80e-de9e-0e47-48385f61114d"
                                                            className="experience-number absolute">33</div>
                                                        <div data-w-id="1fe47cbc-c921-7fe8-722c-d12bb32aee2c"
                                                            className="experience-number absolute">34</div>
                                                        <div data-w-id="779a9b64-7ec1-52f4-d025-8fee64fab35b"
                                                            className="experience-number absolute">35<br />‍</div>
                                                    </div>
                                                </div>
                                                <div className="experience-text">
                                                    Partenaires
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="home-projects-container">
                                    <div className="projects-title-wrapper for-projects">
                                        <div className="section-title-wrapper for-projects">
                                            <h2 className="heading-2 absolute white">
                                                Dépollution
                                            </h2>
                                            <div data-w-id="e7c426b0-6c35-5e0b-0a4e-c65af650f484"
                                                className="section-outlined-heading outlined-white">
                                                Dépollution</div>
                                            <div data-w-id="c872fe96-76d2-6fad-22d4-b81ca24831f1"
                                                className="section-outlined-heading-trigger"></div>
                                        </div>
                                    </div>
                                    <div className="project-list-wrapper w-dyn-list">
                                        <div role="list" className="project-collection-list w-dyn-items">
                                            <div role="listitem" className="project-item w-dyn-item">
                                                <div className="project">
                                                    <div data-w-id="bbbcdae6-b49c-e838-623e-0525f7cd292a"
                                                        className="project-outer-image-wrapper">
                                                        <div className="project-image-wrapper">
                                                            <img alt="" loading="eager"
                                                                data-w-id="557a5ce9-e630-d52c-3a3c-2b08852e9eca"
                                                                src="/images/acc.jpg"
                                                                sizes="(max-width: 479px) 100vw, (max-width: 767px) 71vw, (max-width: 991px) 62vw, (max-width: 1279px) 48vw, (max-width: 1439px) 45vw, (max-width: 1919px) 44vw, 35vw"
                                                                className="project-image" />
                                                        </div>
                                                    </div>
                                                    <div data-w-id="a231e3e3-31a8-ffb0-cd39-d1a716c7f70f" className="project-context">
                                                        <div className="project-type">
                                                            Reprise Véhicules
                                                        </div>
                                                        <div className="big-text">
                                                            Accidentés
                                                        </div>
                                                        <div className="secondary-button-wrapper">
                                                            <a data-w-id="9ed5b0ed-ebc1-8c5f-4668-d73c6dbcb917"
                                                                className="secondary-button w-inline-block">
                                                                <div className="secondary-btn-text-wrapper-white">
                                                                    <div data-w-id="9ed5b0ed-ebc1-8c5f-4668-d73c6dbcb919"
                                                                        className="secondary-button-text">
                                                                        Découvrir
                                                                    </div>
                                                                    <div data-w-id="ee838423-0da4-0445-2f0d-9ca74729ef17"
                                                                        className="secondary-button-text absolute">
                                                                        Découvrir
                                                                    </div>
                                                                </div>
                                                                <div data-w-id="9ed5b0ed-ebc1-8c5f-4668-d73c6dbcb91d"
                                                                    className="secondary-btn-arrow-wrapper-white">
                                                                    <img src="/centre/images/arrow_white.svg" loading="lazy"
                                                                        alt="Arrow Right icon"
                                                                        className="arrow-right-black white for-projects" />
                                                                    <img src="/centre/images/arrow_dark.svg" loading="lazy"
                                                                        alt="Arrow Right icon"
                                                                        className="arrow-right-black translate-left for-projects" />
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div role="listitem" className="project-item w-dyn-item">
                                                <div className="project">
                                                    <div data-w-id="bbbcdae6-b49c-e838-623e-0525f7cd292a"
                                                        className="project-outer-image-wrapper">
                                                        <div className="project-image-wrapper">
                                                            <img alt="" loading="eager"
                                                                data-w-id="557a5ce9-e630-d52c-3a3c-2b08852e9eca"
                                                                src="/images/hs.jpg"
                                                                sizes="(max-width: 479px) 100vw, (max-width: 767px) 71vw, (max-width: 991px) 62vw, (max-width: 1279px) 48vw, (max-width: 1439px) 45vw, (max-width: 1919px) 44vw, 35vw"
                                                                className="project-image" />
                                                        </div>
                                                    </div>
                                                    <div data-w-id="a231e3e3-31a8-ffb0-cd39-d1a716c7f70f" className="project-context">
                                                        <div className="project-type">
                                                            Reprise Véhicules
                                                        </div>
                                                        <div className="big-text">
                                                            Hors d'Usage
                                                        </div>
                                                        <div className="secondary-button-wrapper">
                                                            <a data-w-id="9ed5b0ed-ebc1-8c5f-4668-d73c6dbcb917"
                                                                className="secondary-button w-inline-block">
                                                                <div className="secondary-btn-text-wrapper-white">
                                                                    <div data-w-id="9ed5b0ed-ebc1-8c5f-4668-d73c6dbcb919"
                                                                        className="secondary-button-text">
                                                                        Découvrir
                                                                    </div>
                                                                    <div data-w-id="ee838423-0da4-0445-2f0d-9ca74729ef17"
                                                                        className="secondary-button-text absolute">
                                                                        Découvrir
                                                                    </div>
                                                                </div>
                                                                <div data-w-id="9ed5b0ed-ebc1-8c5f-4668-d73c6dbcb91d"
                                                                    className="secondary-btn-arrow-wrapper-white">
                                                                    <img src="/centre/images/arrow_white.svg" loading="lazy"
                                                                        alt="Arrow Right icon"
                                                                        className="arrow-right-black white for-projects" />
                                                                    <img src="/centre/images/arrow_dark.svg" loading="lazy"
                                                                        alt="Arrow Right icon"
                                                                        className="arrow-right-black translate-left for-projects" />
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div role="listitem" className="project-item w-dyn-item">
                                                <div className="project">
                                                    <div data-w-id="bbbcdae6-b49c-e838-623e-0525f7cd292a"
                                                        className="project-outer-image-wrapper">
                                                        <div className="project-image-wrapper">
                                                            <img alt="" loading="eager"
                                                                data-w-id="557a5ce9-e630-d52c-3a3c-2b08852e9eca"
                                                                src="/images/p5.jpg"
                                                                sizes="(max-width: 479px) 100vw, (max-width: 767px) 71vw, (max-width: 991px) 62vw, (max-width: 1279px) 48vw, (max-width: 1439px) 45vw, (max-width: 1919px) 44vw, 35vw"
                                                                className="project-image" />
                                                        </div>
                                                    </div>
                                                    <div data-w-id="a231e3e3-31a8-ffb0-cd39-d1a716c7f70f" className="project-context">
                                                        <div className="project-type">
                                                            Objectif et obligations d’un
                                                        </div>
                                                        <div className="big-text">
                                                            VHU
                                                        </div>
                                                        <p style={{ color: "white", fontSize: "14px" }}>
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro adipisci
                                                            tempora quaerat. Facere maiores dolor nulla odio repellendus sapiente.
                                                            Ex pariatur sapiente iste in asperiores odio est fugit nisi nihil.
                                                        </p>
                                                        <div className="secondary-button-wrapper">
                                                            <a data-w-id="9ed5b0ed-ebc1-8c5f-4668-d73c6dbcb917"
                                                                className="secondary-button w-inline-block">
                                                                <div className="secondary-btn-text-wrapper-white">
                                                                    <div data-w-id="9ed5b0ed-ebc1-8c5f-4668-d73c6dbcb919"
                                                                        className="secondary-button-text">
                                                                        Découvrir
                                                                    </div>
                                                                    <div data-w-id="ee838423-0da4-0445-2f0d-9ca74729ef17"
                                                                        className="secondary-button-text absolute">
                                                                        Découvrir
                                                                    </div>
                                                                </div>
                                                                <div data-w-id="9ed5b0ed-ebc1-8c5f-4668-d73c6dbcb91d"
                                                                    className="secondary-btn-arrow-wrapper-white">
                                                                    <img src="/centre/images/arrow_white.svg" loading="lazy"
                                                                        alt="Arrow Right icon"
                                                                        className="arrow-right-black white for-projects" />
                                                                    <img src="/centre/images/arrow_dark.svg" loading="lazy"
                                                                        alt="Arrow Right icon"
                                                                        className="arrow-right-black translate-left for-projects" />
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div role="listitem" className="project-item w-dyn-item">
                                                <div className="project">
                                                    <div data-w-id="bbbcdae6-b49c-e838-623e-0525f7cd292a"
                                                        className="project-outer-image-wrapper">
                                                        <div className="project-image-wrapper">
                                                            <img alt="" loading="eager"
                                                                data-w-id="557a5ce9-e630-d52c-3a3c-2b08852e9eca"
                                                                src="/images/p6.jpg"
                                                                sizes="(max-width: 479px) 100vw, (max-width: 767px) 71vw, (max-width: 991px) 62vw, (max-width: 1279px) 48vw, (max-width: 1439px) 45vw, (max-width: 1919px) 44vw, 35vw"
                                                                className="project-image" />
                                                        </div>
                                                    </div>
                                                    <div data-w-id="a231e3e3-31a8-ffb0-cd39-d1a716c7f70f" className="project-context">
                                                        <div className="project-type">
                                                            Prime à la
                                                        </div>
                                                        <div className="big-text">
                                                            conversion
                                                        </div>
                                                        <p style={{ color: "white", fontSize: "14px" }}>
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro adipisci
                                                            tempora quaerat. Facere maiores dolor nulla odio repellendus sapiente.
                                                            Ex pariatur sapiente iste in asperiores odio est fugit nisi nihil.
                                                        </p>
                                                        <div className="secondary-button-wrapper">
                                                            <a data-w-id="9ed5b0ed-ebc1-8c5f-4668-d73c6dbcb917"
                                                                className="secondary-button w-inline-block">
                                                                <div className="secondary-btn-text-wrapper-white">
                                                                    <div data-w-id="9ed5b0ed-ebc1-8c5f-4668-d73c6dbcb919"
                                                                        className="secondary-button-text">
                                                                        Découvrir
                                                                    </div>
                                                                    <div data-w-id="ee838423-0da4-0445-2f0d-9ca74729ef17"
                                                                        className="secondary-button-text absolute">
                                                                        Découvrir
                                                                    </div>
                                                                </div>
                                                                <div data-w-id="9ed5b0ed-ebc1-8c5f-4668-d73c6dbcb91d"
                                                                    className="secondary-btn-arrow-wrapper-white">
                                                                    <img src="/centre/images/arrow_white.svg" loading="lazy"
                                                                        alt="Arrow Right icon"
                                                                        className="arrow-right-black white for-projects" />
                                                                    <img src="/centre/images/arrow_dark.svg" loading="lazy"
                                                                        alt="Arrow Right icon"
                                                                        className="arrow-right-black translate-left for-projects" />
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="all-projects-container">
                                        <div className="project-context all-projects">
                                            <div className="project-type">
                                                Vous possédez un véhicule en fin de vie ? Obligation de s’adresser à un centre agréé
                                                VHU
                                            </div>
                                            <div className="big-text wider no-pointer-events">
                                                Centre de <br />Dépollution
                                            </div>
                                            <div className="secondary-button-wrapper no-margin">
                                                <a data-w-id="2b832c4a-cc2b-e9d6-9bac-4ae6983d6296"
                                                    className="secondary-button w-inline-block">
                                                    <div className="secondary-btn-text-wrapper-white">
                                                        <div className="secondary-button-text for-footer white-on-mobile">
                                                            Découvrir
                                                        </div>
                                                        <div className="secondary-button-text for-footer absolute">Découvrir</div>
                                                    </div>
                                                    <div className="secondary-btn-arrow-wrapper-white for-footer white-on-mobile">
                                                        <img src="/centre/images/arrow_white.svg" loading="lazy"
                                                            alt="Arrow Right icon" className="arrow-right-black white show-on-mobile" />
                                                        <img src="/centre/images/arrow_dark.svg" loading="lazy"
                                                            alt="Arrow Right icon"
                                                            className="arrow-right-black translate-left hide-on-mobile" />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="infinite-slider">
                                            <div className="outer-slider">
                                                <div data-w-id="ce1569fe-23ff-f4e8-06e6-b4d1f554cb0f" className="inner-slider">
                                                    <div className="slider-1 w-dyn-list">
                                                        <div role="list" className="slider-list w-dyn-items">
                                                            <div role="listitem" className="w-dyn-item">
                                                                <div className="project-image-wrapper no-rotate">
                                                                    <img alt="" loading="lazy"
                                                                        data-w-id="0e83b8ce-be38-af29-f1fa-c2d33febd882"
                                                                        src="/images/p1.jpg"
                                                                        sizes="(max-width: 479px) 100vw, (max-width: 991px) 56vw, (max-width: 1279px) 48vw, (max-width: 1439px) 45vw, (max-width: 1919px) 44vw, 35vw"
                                                                        className="project-image" />
                                                                </div>
                                                            </div>
                                                            <div role="listitem" className="w-dyn-item">
                                                                <div className="project-image-wrapper no-rotate">
                                                                    <img alt="" loading="lazy"
                                                                        data-w-id="0e83b8ce-be38-af29-f1fa-c2d33febd882"
                                                                        src="/images/p2.jpg"
                                                                        sizes="(max-width: 479px) 100vw, (max-width: 991px) 56vw, (max-width: 1279px) 48vw, (max-width: 1439px) 45vw, (max-width: 1919px) 44vw, 35vw"
                                                                        className="project-image" />
                                                                </div>
                                                            </div>
                                                            <div role="listitem" className="w-dyn-item">
                                                                <div className="project-image-wrapper no-rotate">
                                                                    <img alt="" loading="lazy"
                                                                        data-w-id="0e83b8ce-be38-af29-f1fa-c2d33febd882"
                                                                        src="/images/p3.jpg"
                                                                        sizes="(max-width: 479px) 100vw, (max-width: 991px) 56vw, (max-width: 1279px) 48vw, (max-width: 1439px) 45vw, (max-width: 1919px) 44vw, 35vw"
                                                                        className="project-image" />
                                                                </div>
                                                            </div>
                                                            <div role="listitem" className="w-dyn-item">
                                                                <div className="project-image-wrapper no-rotate">
                                                                    <img alt="" loading="lazy"
                                                                        data-w-id="0e83b8ce-be38-af29-f1fa-c2d33febd882"
                                                                        src="/images/p4.jpg"
                                                                        sizes="(max-width: 479px) 100vw, (max-width: 991px) 56vw, (max-width: 1279px) 48vw, (max-width: 1439px) 45vw, (max-width: 1919px) 44vw, 35vw"
                                                                        className="project-image" />
                                                                </div>
                                                            </div>
                                                            <div role="listitem" className="w-dyn-item">
                                                                <div className="project-image-wrapper no-rotate">
                                                                    <img alt="" loading="lazy"
                                                                        data-w-id="0e83b8ce-be38-af29-f1fa-c2d33febd882"
                                                                        src="/images/p5.jpg"
                                                                        sizes="(max-width: 479px) 100vw, (max-width: 991px) 56vw, (max-width: 1279px) 48vw, (max-width: 1439px) 45vw, (max-width: 1919px) 44vw, 35vw"
                                                                        className="project-image" />
                                                                </div>
                                                            </div>
                                                            <div role="listitem" className="w-dyn-item">
                                                                <div className="project-image-wrapper no-rotate">
                                                                    <img alt="" loading="lazy"
                                                                        data-w-id="0e83b8ce-be38-af29-f1fa-c2d33febd882"
                                                                        src="/images/p6.jpg"
                                                                        sizes="(max-width: 479px) 100vw, (max-width: 991px) 56vw, (max-width: 1279px) 48vw, (max-width: 1439px) 45vw, (max-width: 1919px) 44vw, 35vw"
                                                                        className="project-image" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section desktop-no-padding-top">
                    <div className="wide-container home-services">
                        <div data-w-id="a13e6f8e-c99e-29e4-9fef-a2cff184e4f5" className="home-services-container">
                            <div className="full-height-text-container">
                                <div className="section-text-container">
                                    <div className="section-title-wrapper">
                                        <h2 className="heading-2 absolute colorprimary">Services</h2>
                                        <div data-w-id="0d4d7fe9-13c1-8a43-01bf-d63330775482"
                                            className="section-outlined-heading outlined">Services</div>
                                        <div data-w-id="0d4d7fe9-13c1-8a43-01bf-d63330775484"
                                            className="section-outlined-heading-trigger"></div>
                                    </div>
                                    <div className="line-animations-container-mobile home-services">
                                        <div data-w-id="0d4d7fe9-13c1-8a43-01bf-d63330775486" className="benefit-mobile smaller-margin">
                                            <div className="wrapper horizontal align-center">
                                                <div className="benefit-line-mobile">
                                                    <div className="benefit-horizontal-line"></div>
                                                    <div className="benefit-circle"></div>
                                                </div>
                                                <div className="experience-wrapper strategy">
                                                    <div className="animation-item-text">Enlèvement véhicule</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-w-id="0d4d7fe9-13c1-8a43-01bf-d63330775490" className="benefit-mobile smaller-margin">
                                            <div className="wrapper horizontal align-center">
                                                <div className="benefit-line-mobile line-4">
                                                    <div className="benefit-horizontal-line"></div>
                                                    <div className="benefit-circle"></div>
                                                </div>
                                                <div className="experience-wrapper branding">
                                                    <div className="animation-item-text">
                                                        Dépollution des VHU
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-w-id="0d4d7fe9-13c1-8a43-01bf-d6333077549a" className="benefit-mobile smaller-margin">
                                            <div className="wrapper horizontal align-center">
                                                <div className="benefit-line-mobile line-3">
                                                    <div className="benefit-horizontal-line"></div>
                                                    <div className="benefit-circle"></div>
                                                </div>
                                                <div className="experience-wrapper marketing">
                                                    <div className="animation-item-text">
                                                        Vente pièces
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-w-id="bed8845e-fdd5-6e68-7c12-054246a2511d" className="benefit-mobile smaller-margin">
                                            <div className="wrapper horizontal align-center">
                                                <div className="benefit-line-mobile line-5">
                                                    <div className="benefit-horizontal-line"></div>
                                                    <div className="benefit-circle"></div>
                                                </div>
                                                <div className="experience-wrapper motion">
                                                    <div className="animation-item-text">
                                                        Récyclage véhicule
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
                            <div data-w-id="b9bbab72-6321-a9d4-62cf-02063ebd7fb4" className="home-services-animation-container">
                                <div className="animation-line-column">
                                    <div className="animation-item">
                                        <div className="outer-line-wrapper">
                                            <div data-w-id="b6714f69-e323-ce76-469c-d164e3dcfbd9" className="line-wrapper">
                                                <div className="vertical-line"></div>
                                                <div className="line-circle"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="animation-item">
                                        <div data-w-id="6db5f478-c38d-8122-cc7e-a1f68f044300" className="animation-item-text">
                                            Enlèvement véhicule
                                        </div>
                                    </div>
                                    <div className="animation-item">
                                        <div className="outer-line-wrapper">
                                            <div data-w-id="ffc14b4b-0d52-3c23-11ab-f75b62b28145" className="line-wrapper short">
                                                <div className="vertical-line"></div>
                                                <div className="line-circle"></div>
                                            </div>
                                        </div>
                                        <div data-w-id="ffc14b4b-0d52-3c23-11ab-f75b62b28148" className="animation-item-text">
                                            Dépollution des VHU
                                        </div>
                                    </div>
                                </div>
                                <div className="animation-line-column">
                                    <div className="animation-item">
                                        <div className="outer-line-wrapper">
                                            <div data-w-id="14ba737c-b2e8-2816-27e0-c97d20b119d5" className="line-wrapper long">
                                                <div className="vertical-line"></div>
                                                <div className="line-circle"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="animation-item">
                                        <div data-w-id="8e3841df-a826-1c65-41eb-9ff49d72f2ab" className="animation-item-text">
                                            Vente pièces
                                        </div>
                                    </div>
                                    <div className="animation-item">
                                        <div className="outer-line-wrapper">
                                            <div data-w-id="dddebbaa-84aa-c2b1-3933-d7be13d56c3e" className="line-wrapper short">
                                                <div className="vertical-line"></div>
                                                <div className="line-circle"></div>
                                            </div>
                                        </div>
                                        <div data-w-id="dddebbaa-84aa-c2b1-3933-d7be13d56c41" className="animation-item-text">
                                            Récyclage véhicule
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                                    <div className="footer-links-column sideline-on-mobile">
                                        <div className="footer-link title">Navigation</div><a href="/"
                                            className="footer-link-wrapper w-inline-block w--current">
                                            <div className="footer-link">Accueil</div>
                                            <div className="footer-link absolute">Accueil</div>
                                        </a><a aria-current="page" className="footer-link-wrapper w-inline-block">
                                            <div className="footer-link">Centre de dépollution</div>
                                            <div className="footer-link absolute">Centre de dépollution</div>
                                        </a><a href="/garage-atelier-mecanique" className="footer-link-wrapper w-inline-block">
                                            <div className="footer-link">Atelier mécanique</div>
                                            <div className="footer-link absolute">Atelier mécanique</div>
                                        </a>
                                    </div>
                                    <div className="footer-links-column secondary-column">
                                        <a href="/mentions-legales" className="footer-link-wrapper w-inline-block">
                                            <div className="footer-link">Mentions Légales</div>
                                            <div className="footer-link absolute">Mentions Légales</div>
                                        </a>
                                    </div>
                                </div>
                                <div className="socials-and-newsletter-container">
                                    <div className="socials">
                                        <a data-w-id="e30db50a-08bd-a1a0-86ad-25e43f75234f" className="social w-inline-block">
                                            <img src="/centre/images/facebook.svg" loading="lazy" alt="Facebook Icon"
                                                className="social-icon" />
                                        </a>
                                    </div>
                                    <div className="newsletter-container">
                                        <div className="footer-link title-on-mobile">Newsletter</div>
                                        <div className="form-block w-form">
                                            <form className="newsletter-form">
                                                <input className="text-field w-input" maxlength="256" placeholder="Your email" type="email" id="mail-2" required="" />
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
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lower-footer">
                        <div className="footer-image-wrapper no-pointer-events">
                            <img src="/images/dex.png" loading="eager" sizes="(max-width: 767px) 100vw, (max-width: 991px) 495.66668701171875px, 50vw" alt="David Perez and Haley Kerpan" className="image" />
                        </div>
                        <div id="w-node-e30db50a-08bd-a1a0-86ad-25e43f752368-3f752314" className="footer-line"></div>
                        <div className="footer-link secondary smaller">
                            Powered by <a href="https://digivibe.fr" target="_blank" style={{ color: "#fe46a0", fontWeight: "bold" }}>Digivibe</a>
                        </div>
                    </div>
                </footer>
                <div className="loader">
                    <div className="wide-container loader">
                        <div className="section-title-wrapper for-loader">
                            <h2 className="heading-2 absolute white">Accueil</h2>
                            <div className="section-outlined-heading outlined-white">Accueil</div>
                        </div>
                    </div>
                </div>
                <span className="envelopeb">
                    <div id="widgetButton" className="widget-button">
                        <img src="/centre/images/mex.svg" alt="Chat" /> Demander un enlèvement immédiat de votre VHU
                    </div>
                </span>
                <div id="popupBox" className="popup-box">
                    <div>
                        <div>
                            <form>
                                <p>
                                    Formulaire de demande d'enlèvement immédiat de votre VHU
                                </p>
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
                                    <label for="Budget-3" className="field-label">
                                        Votre véhicule est il roulant?
                                    </label>
                                    <select id="Budget-3" className="select-field w-select">
                                        <option value="1">
                                            OUI
                                        </option>
                                        <option value="0">
                                            NON
                                        </option>
                                    </select>
                                </div>
                                <br />
                                <button type="button" className="form-button w-button">
                                    Soumettre
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </body>
        </>
    )
}

const CentreDeDepollution = () => {
    const { setTemplate } = useTemplate()

    useEffect(() => {
        setTemplate('template2')
    }, [setTemplate])

    return <Content />
}

export default CentreDeDepollution