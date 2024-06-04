import React from 'react'
import Head from 'next/head'
import Script from 'next/script'

// import '@/styles/Theme1.css'

const Theme1 = ({ children }) => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="/css/Theme1.css" />
                <script src="https://cdn.tailwindcss.com"></script>
            </Head>
            {children}
            <Script src="/js/all.min.js" strategy="beforeInteractive"/>
            <Script src="/js/jquery.js" strategy="beforeInteractive"/>
            <Script src="/js/wf1.js" strategy="afterInteractive" />
        </>
    )
}

export default Theme1