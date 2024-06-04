import Script from 'next/script'

import '@/styles/Global.css'
import '@/styles/My.css'
import '@/styles/Tailwind.css'

function MyApp({ Component, pageProps }) {
   return (
        <>
            <Component {...pageProps} />
            <Script src="/js/theme1.jquery.js" strategy="beforeInteractive" />
            <Script src="/js/theme1.wf.js" strategy="afterInteractive" />
        </>
    )
}

export default MyApp