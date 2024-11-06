const WaButton = () => {
    const WA_LINK = `"https://chat.whatsapp.com/JxtTT4Io13s5FasZjFQS7B"`
    return (
        <a href={WA_LINK} target="_blank" className="bouton-discrod w-inline-block" title="Nous contacter sur WhatsApp">
            <div className="animation-discord">
                <img src="/images/whatsapp.png" className="logo-whatsapp" alt="Logo Whatsapp" />
            </div>
        </a>
    )
}

export default function App({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
        </>
    )
}