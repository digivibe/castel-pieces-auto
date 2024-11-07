import React from 'react'
import Head from 'next/head'


import { APP_NAME, CANONICAL } from '@/data/config'
import Theme1 from '@/layouts/Theme1'
import Header from '@/components/Header'
import AllContactUs from '@/components/AllContactUs'
import Footer from '@/components/Footer'

const ContactezNous = () => {

    return (
        <>
            <Theme1>
                <Head>
                    <title>{`Atelier Mécanique - ${APP_NAME}`}</title>
                    <meta name="robots" content="index, follow" />
                    <link rel="canonical" href={`${CANONICAL}/atelier-mecanique`} />
                </Head>
                <Header type={2} />
                <AllContactUs />
                <Footer />
            </Theme1>
        </>
    )
}

export default ContactezNous