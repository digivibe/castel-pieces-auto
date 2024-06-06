import React from 'react'
import Head from 'next/head'
import Script from 'next/script'

const Theme2 = ({ children, type }) => {
    return (
        <>
            <Head>
                {
                    type === 1 ? (
                        <link rel="stylesheet" href="/css/Theme2.css" />
                    ) : (
                        <link rel="stylesheet" href="/css/Theme2.1.css" />
                    )
                }
            </Head>
            {children}
            <Script src="/js/jquery.js" strategy="beforeInteractive" />
            {
                type === 1 ? (
                    <>
                        <Script src="/js/wf2.js" strategy="afterInteractive" />
                        <Script src="/js/mex.js" strategy="beforeInteractive" />
                    </>
                ) : (
                    <Script src="/js/wf2.1.js" strategy="beforeInteractive" />
                )
            }
            
        </>
    )
}

export default Theme2