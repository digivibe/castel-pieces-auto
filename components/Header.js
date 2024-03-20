import Link from "next/link"
import Image from "next/image"

export default function Header({ type }) {
    return (
        <div data-animation="over-left" className="navbar-fixed w-nav" data-easing2="ease" data-easing="ease" data-collapse="medium" data-w-id="310be704-be0c-862c-40a7-a2176037624e" role="banner" data-no-scroll="1" data-duration="400" data-doc-height="1">
            <div className="nav-container w-container">
                <div className="nav-menu-wrapper">
                    <div className="nav-balancer">
                        <Link href="/" aria-current="page" className="brand w-nav-brand w--current">
                            <Image
                                src="/images/logo.svg"
                                loading="lazy"
                                alt="logo"
                                width={150}
                                height={30}
                                className="logo"
                            />
                        </Link>
                    </div>
                    <nav role="navigation" className="nav-menu w-nav-menu">
                        <div className="tablet-menu">
                            <Link href="/" aria-current="page" className="brand-tablet w-nav-brand w--current">
                                <Image
                                    src="/images/logo.svg"
                                    loading="lazy"
                                    alt="logo"
                                    width={150}
                                    height={30}
                                    className="logo"
                                />
                            </Link>
                            <div className="close-menu-button w-nav-button">
                                <Image
                                    src="/images/close-btn-slim.svg"
                                    loading="lazy"
                                    alt="icon"
                                    width={17}
                                    height={16}
                                    className="nav-close-icon"
                                />
                            </div>
                        </div>
                        <div className="menu-wrap">
                            <Link href="/" className="nav-link w-nav-link active">
                                Accueil
                            </Link>
                            <a className="nav-link w-nav-link">
                                Reprise véhicule hors d'usage
                            </a>
                            <a className="nav-link w-nav-link">
                                Rachat véhicule d'occasion
                            </a>
                            <a className="nav-link w-nav-link">
                                Boutique
                            </a>
                        </div>
                    </nav>
                    <div className="search-shop-con">
                        <div className="cart-nav-wrapper">
                            <div data-open-product="" data-wf-cart-type="modal" data-wf-page-link-href-prefix="" className="w-commerce-commercecartwrapper" data-node-type="commerce-cart-wrapper">
                                <Link className="w-commerce-commercecartopenlink cart-button w-inline-block" role="button" aria-haspopup="dialog" aria-label="Open cart" data-node-type="commerce-cart-open-link" href="#">
                                    <Image
                                        src="/images/cart-slim-w.svg"
                                        loading="lazy"
                                        alt="icon"
                                        width={21}
                                        height={20}
                                    />
                                    <div  data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D" className="w-commerce-commercecartopenlinkcount cart-quantity">0</div>
                                </Link>
                            </div>
                            <div className="menu-button w-nav-button">
                                <Image
                                    src="/images/menu-btn-slim.svg"
                                    loading="lazy"
                                    alt="icon"
                                    className="image-burger"
                                    width={27}
                                    height={16}
                                />
                            </div>
                        </div>
                        {
                            type === 1 ? (
                                <Link href="/garage-atelier-mecanique" className="primary-button nav-style w-button">
                                    Atelier Mécanique
                                </Link>
                            ): (
                                <Link href="/centre-de-depollution" className="primary-button nav-style w-button">
                                    Centre de dépollution
                                </Link>
                            )
                        }
                        
                    </div>
                </div>
            </div>
            <div data-w-id="a4197fd5-6c47-5bff-10ea-9d658ffd9c5b" className="nav-shadow"></div>
        </div>
    )
}