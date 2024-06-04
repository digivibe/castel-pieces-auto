import React from 'react'
import Head from 'next/head'
import Script from 'next/script'

// import '@/styles/Theme2.css'

const Theme2 = ({ children }) => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="/css/Theme2.css" />
            </Head>
            {children}
            <Script src="/js/jquery.js" strategy="beforeInteractive"/>
            <Script src="/js/wf2.js" strategy="afterInteractive" />
            <Script src="/js/mex.js" strategy="beforeInteractive"/>
        </>
    )
}

export default Theme2