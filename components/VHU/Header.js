export default function Header() {
    return (
        <>
            <Navbar />
            <Menu />
        </>
    )
}
const Navbar = () => (
    <div className="navbar">
        <div className="navbar-inner">
            <a data-w-id="79a57036-0792-5d21-37c0-6f0e45ed6a76" href="/" aria-current="page" className="navbar-logo-container w-inline-block w--current">
                <img src="/images/logo.svg" loading="lazy" width="Auto" height="50" alt="Castel Pieces Auto Logo" className="logo-black" />
            </a>
            <div data-w-id="79a57036-0792-5d21-37c0-6f0e45ed6a79" className="menu-button">
                <div className="top-menu-line"></div>
                <div className="bottom-menu-line"></div>
            </div>
        </div>
    </div>
)

const Menu = () => (
    <div className="menu">
        <Navbar />
        <div className="menu-links-container">
            <MenuLink href="/" number="01" text="Centre de dépollution" imgSrc="/centre/images/img39.webp" />
            <MenuLink href="/atelier-mecanique" number="02" text="Atelier Mécanique" imgSrc="/centre/images/img15.webp" />
        </div>
        <div className="menu-underlay"></div>
    </div>
)

const MenuLink = ({ href, number, text, imgSrc }) => (
    <a data-w-id="b919e661-8b51-a329-cf4d-3b80ef57b752" href={href} className="menu-link w-inline-block">
        <div className="menu-number-wrapper">
            <div className="menu-number-text">{number}</div>
        </div>
        <div className="menu-link-text-wrapper">
            <div className="big-text for-menu">{text}</div>
        </div>
        <div className="menu-background-image">
            <img src={imgSrc} loading="lazy" sizes="100vw" alt="" className="image for-menu" />
        </div>
    </a>
)