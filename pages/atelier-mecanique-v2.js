import React from 'react'
import Head from 'next/head'


import { APP_NAME, CANONICAL } from '@/data/config'
import Theme1 from '@/layouts/Theme1'
import Header from '@/components/Header'
import Banner2 from '@/components/Banner2'
import Section2 from '@/components/Section2.2'
import Section3 from '@/components/Section2.3'
import SectionDevis from '@/components/SectionDevis'
import Footer from '@/components/Footer'
import FloatingHelpButton2 from "@/components/FloatBtn2"

const AtelierMecanique = () => {

    return (
        <>
            <Theme1>
                <Head>
                    <title>{`Atelier Mécanique - ${APP_NAME}`}</title>
                    <meta name="robots" content="index, follow" />
                    <link rel="canonical" href={`${CANONICAL}/atelier-mecanique`} />
                </Head>
                <Header type={2} />
                <Banner2 />
                <Section2 />
                <Section3 />
                <SectionDevis />
                <Footer />
                <FloatingHelpButton2 />
            </Theme1>
        </>
    )
}

export default AtelierMecanique