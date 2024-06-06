import Header from "./VHU/Header";
import Footer from "./VHU/Footer";
import Loader from "./VHU/Loader";

export default function Article({ data }) {
    return (
        <>
            <div className="cursor">
                <div className="cursor-inner"></div>
            </div>
            <Header />
            <div className="hero for-project">
                <div className="hero-container extra-top-padding for-project">
                    <div data-w-id="d0169e79-dcbb-7777-8d93-31a86f7eeac5" style={{ opacity: 0 /*"-webkit-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"*/ }} className="project-type-container">
                        <div className="project-type dark">
                            {data.first}
                        </div>
                    </div>
                    <div className="perspective-wrapper">
                        <div data-w-id="9d542101-01c5-ac24-d6f7-691cbe36acaa" style={{ opacity: "0" /*;-webkit-transform:translate3d(0, 50%, -2vw) scale3d(1, 1, 1) rotateX(-90deg) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 50%, -2vw) scale3d(1, 1, 1) rotateX(-90deg) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 50%, -2vw) scale3d(1, 1, 1) rotateX(-90deg) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 50%, -2vw) scale3d(1, 1, 1) rotateX(-90deg) rotateY(0) rotateZ(0) skew(0, 0);transform-style:preserve-3d"*/ }} className="wrapper project-title-wrapper for-project">
                            <h1 className="heading-1">
                                {data.second}
                            </h1>
                        </div>
                    </div>
                </div>
                <div data-w-id="6e4b0343-af79-b77a-3de4-bd94e000cc0e" className="project-main-image-container">
                    <img data-w-id="fcd151fd-500c-6a82-3ac3-83a882bb1c1c" loading="eager" style={{ /*-webkit-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);*/transform: "translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" }} src={data.image} alt={data.title} className="image main-project-image" /></div>
            </div>
            <div className="section overflow-hidden">
                <div className="wide-container">
                    <div data-w-id="97cf5e79-2a29-0a14-70fd-322d6cb984af" style={{ opacity: 0 }} className="overview-container">
                        <div className="section-title-wrapper center">
                            <div className="section-outlined-heading outlined">
                                Plus de détails
                            </div>
                            <h2 className="heading-2 absolute">
                                Plus de détails
                            </h2>
                            <div data-w-id="01be8859-019e-d01f-06c8-b771a0c40abd" className="section-outlined-heading-trigger">
                            </div>
                        </div>
                        <div className="section-paragraph-wrapper for-overview">
                            <p className="paragraph">
                                {data.text1}
                            </p>
                        </div><a data-w-id="0a59c5f7-0c65-1ab9-6dc7-ece741e17707" href="https://vimeo.com/showcase/9821811"
                            target="_blank" className="primary-button w-inline-block">
                            <div className="wrapper button">
                                <div data-w-id="7e926975-671f-28ac-bdbc-1ca643e2a850" className="primary-button-text">
                                    Enlèvement VHU    
                                </div>
                                <div data-w-id="7e926975-671f-28ac-bdbc-1ca643e2a852" className="primary-button-text absolute">
                                    Enlèvement VHU
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="section dark for-project-work">
                <div className="wide-container my-work-container">
                    <div data-w-id="f03e89b1-46e7-6720-28eb-e72790d5310f" className="work-container">
                        <div className="sticky-container">
                            <div className="section-title-wrapper vertical for-awards">
                                <div data-w-id="35c8c44b-3098-1e66-50f1-bb9a173616c4" className="section-outlined-heading outlined-white">
                                    Infos
                                </div>
                                <h2 className="heading-2 absolute white for-awards">
                                    Infos
                                </h2>
                                <div data-w-id="35c8c44b-3098-1e66-50f1-bb9a173616c8" className="section-outlined-heading-trigger">
                                </div>
                            </div>
                        </div>
                        <div className="line-animations-container-mobile for-awards">
                            <div data-w-id="e66a6fdb-957e-c534-7519-21fc559d28ea" className="benefit-mobile smaller-margin">
                                <div className="wrapper horizontal align-center">
                                    <div className="benefit-line-mobile line-3">
                                        <div className="benefit-horizontal-line white"></div>
                                        <div className="benefit-circle white"></div>
                                    </div>
                                    <div className="experience-wrapper">
                                        <div className="animation-item-text white">
                                            {data.line3}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-w-id="e66a6fdb-957e-c534-7519-21fc559d28f4" className="benefit-mobile smaller-margin">
                                <div className="wrapper horizontal align-center">
                                    <div className="benefit-line-mobile line-4">
                                        <div className="benefit-horizontal-line white"></div>
                                        <div className="benefit-circle white"></div>
                                    </div>
                                    <div className="experience-wrapper">
                                        <div className="animation-item-text white">
                                            {data.line2}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-w-id="e66a6fdb-957e-c534-7519-21fc559d28fe" className="benefit-mobile smaller-margin">
                                <div className="wrapper horizontal align-center">
                                    <div className="benefit-line-mobile line-6">
                                        <div className="benefit-horizontal-line white"></div>
                                        <div className="benefit-circle white"></div>
                                    </div>
                                    <div className="experience-wrapper">
                                        <div className="animation-item-text white">
                                            {data.line1}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-w-id="e66a6fdb-957e-c534-7519-21fc559d2908" className="benefit-mobile smaller-margin">
                                <div className="wrapper horizontal align-center">
                                    <div className="benefit-line-mobile line-2">
                                        <div className="benefit-horizontal-line white"></div>
                                        <div className="benefit-circle white"></div>
                                    </div>
                                    <div className="experience-wrapper">
                                        <div className="animation-item-text white">
                                            {data.line4}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-w-id="e66a6fdb-957e-c534-7519-21fc559d2912" className="benefit-mobile smaller-margin">
                                <div className="wrapper horizontal align-center">
                                    <div className="benefit-line-mobile">
                                        <div className="benefit-horizontal-line white"></div>
                                        <div className="benefit-circle white"></div>
                                    </div>
                                    <div className="experience-wrapper">
                                        <div className="animation-item-text white">
                                            {data.line5}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-w-id="e66a6fdb-957e-c534-7519-21fc559d291c" className="benefit-mobile smaller-margin">
                                <div className="wrapper horizontal align-center">
                                    <div className="benefit-line-mobile line-5">
                                        <div className="benefit-horizontal-line white"></div>
                                        <div className="benefit-circle white"></div>
                                    </div>
                                    <div className="experience-wrapper">
                                        <div className="animation-item-text white">
                                            {data.line6}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-w-id="03ed6f1d-bbc2-3f04-5ea0-26b1056c299c" className="awards-inner-container for-project">
                            <div className="animation-line-column">
                                <div className="animation-item">
                                    <div className="outer-line-wrapper">
                                        <div data-w-id="03ed6f1d-bbc2-3f04-5ea0-26b1056c29a0"
                                            className="line-wrapper awards-start-1">
                                            <div className="vertical-line white"></div>
                                            <div className="line-circle white"></div>
                                        </div>
                                    </div>
                                    <div data-w-id="03ed6f1d-bbc2-3f04-5ea0-26b1056c29a3" className="award-text-container">
                                        <div className="animation-item-text white">
                                            {data.line1}
                                        </div>
                                    </div>
                                </div>
                                <div className="animation-item">
                                    <div className="outer-line-wrapper">
                                        <div data-w-id="03ed6f1d-bbc2-3f04-5ea0-26b1056c29ab"
                                            className="line-wrapper awards-short-line">
                                            <div className="vertical-line white"></div>
                                            <div className="line-circle white"></div>
                                        </div>
                                    </div>
                                    <div data-w-id="03ed6f1d-bbc2-3f04-5ea0-26b1056c29ae" className="award-text-container">
                                        <div className="animation-item-text white">
                                            {data.line2}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="animation-line-column">
                                <div className="animation-item">
                                    <div className="outer-line-wrapper">
                                        <div data-w-id="03ed6f1d-bbc2-3f04-5ea0-26b1056c29c2"
                                            className="line-wrapper awards-start-2">
                                            <div className="vertical-line white"></div>
                                            <div className="line-circle white"></div>
                                        </div>
                                    </div>
                                    <div data-w-id="03ed6f1d-bbc2-3f04-5ea0-26b1056c29c5" className="award-text-container">
                                        <div className="animation-item-text white">
                                            {data.line3}
                                        </div>
                                    </div>
                                </div>
                                <div className="animation-item">
                                    <div className="outer-line-wrapper">
                                        <div data-w-id="03ed6f1d-bbc2-3f04-5ea0-26b1056c29cd"
                                            className="line-wrapper awards-medium-line">
                                            <div className="vertical-line white"></div>
                                            <div className="line-circle white"></div>
                                        </div>
                                    </div>
                                    <div data-w-id="03ed6f1d-bbc2-3f04-5ea0-26b1056c29d0" className="award-text-container">
                                        <div className="animation-item-text white">
                                            {data.line4}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="animation-line-column">
                                <div className="animation-item">
                                    <div className="outer-line-wrapper">
                                        <div data-w-id="03ed6f1d-bbc2-3f04-5ea0-26b1056c29e4"
                                            className="line-wrapper awards-start-3">
                                            <div className="vertical-line white"></div>
                                            <div className="line-circle white"></div>
                                        </div>
                                    </div>
                                    <div data-w-id="03ed6f1d-bbc2-3f04-5ea0-26b1056c29e7" className="award-text-container">
                                        <div className="animation-item-text white">
                                            {data.line5}
                                        </div>
                                    </div>
                                </div>
                                <div className="animation-item">
                                    <div className="outer-line-wrapper">
                                        <div data-w-id="03ed6f1d-bbc2-3f04-5ea0-26b1056c29ef"
                                            className="line-wrapper awards-long-line">
                                            <div className="vertical-line white"></div>
                                            <div className="line-circle white"></div>
                                        </div>
                                    </div>
                                    <div data-w-id="03ed6f1d-bbc2-3f04-5ea0-26b1056c29f2" className="award-text-container">
                                        <div className="animation-item-text white">
                                            {data.line6}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Loader name={data.title} />
        </>
    )
}