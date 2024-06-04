import React from 'react'

const Header = ({ type }) => {
    return (
        <div
            data-animation="over-left"
            className="navbar-fixed w-nav"
            data-easing2="ease"
            data-easing="ease"
            data-collapse="medium"
            data-w-id="310be704-be0c-862c-40a7-a2176037624e"
            role="banner"
            data-no-scroll="1"
            data-duration="400"
            data-doc-height="1"
        >
            <div className="nav-container w-container">
                <div className="nav-menu-wrapper">
                    <div className="nav-balancer">
                        <a href="/" className="brand w-nav-brand w--current">
                            <img src="/images/logo.svg" loading="lazy" alt="logo" width="150" height="30" className="logo" />
                        </a>
                    </div>
                    <nav role="navigation" className="nav-menu w-nav-menu">
                        <div className="tablet-menu">
                            <a href="/" className="brand-tablet w-nav-brand w--current">
                                <img src="/images/logo.svg" loading="lazy" alt="logo" width="150" height="30" className="logo" />
                            </a>
                            <div className="close-menu-button w-nav-button">
                                <img src="/images/close-btn-slim.svg" loading="lazy" alt="icon" width="17" height="16" className="nav-close-icon" />
                            </div>
                        </div>
                        <div className="menu-wrap">
                            <a href="/" className="nav-link w-nav-link">Accueil</a>
                            <a href="#" className="nav-link w-nav-link">Reprise véhicule hors d'usage</a>
                            <a href="#" className="nav-link w-nav-link">Rachat véhicule d'occasion</a>
                            <a href="#" className="nav-link w-nav-link">Boutique</a>
                        </div>
                    </nav>
                    <div className="search-shop-con">
                        <div className="menu-button w-nav-button">
                            <img src="/images/menu-btn-slim.svg" loading="lazy" alt="icon" className="image-burger" width="27" height="16" />
                        </div>
                        <a
                            href={type === 1 ? '/garage-atelier-mecanique' : '/centre-de-depollution'}
                            className={`primary-button nav-style w-button ${type > 2 ? 'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition ease-in-out duration-150' : ''}`}
                        >
                            {type === 1 ? 'Atelier Mécanique' : 'Centre de dépollution'}
                        </a>
                    </div>
                </div>
            </div>
            <div className="nav-shadow"></div>
        </div>
    )
}

export default Header