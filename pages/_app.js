import Script from 'next/script'

// import "@/styles/Tailwind.css"
import "@/styles/Global.css"
import "@/styles/My.css"

export default function App({ Component, pageProps }) {
    
    return (
        <>
            <Component {...pageProps} />
            <Script src="/js/all.min.js" />
            <Script src="/js/jquery.js" />
            <Script src="/js/wf.js" />
        </>
    )
}
