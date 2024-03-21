export default function Banner2() {
    return (
        <div className="pages-banner services barny" style={{ position: "relative", overflow: "hidden", zIndex: 0, padding: 0 }}>
            <video autoplay muted loop playsinline style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", zIndex: -1 }}>
                <source src="/videos/1.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas les vidéos HTML5.
            </video>
            <div className="base-container w-container" style={{ position: "relative", zIndex: 1 }}>
                <div className="banner-title-wrapper">
                    <h1 className="banner-title whity">
                        Atelier Mécanique Toutes Marques
                    </h1>
                </div>
            </div>
        </div>
    )
}