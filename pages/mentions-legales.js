import Head from "next/head"

import { APP_NAME, CANONICAL } from "@/data/config"
import Theme1 from "@/layouts/Theme1"
import Header from "@/components/Header"
import MentionsLegalesContent from "@/components/MentionsLegales"
import Footer from "@/components/Footer"

export default function MentionsLegales() {
    return (
        <>
            <Theme1>
                <Head>
                    <title>{`Mentions Légales - ${APP_NAME}`}</title>
					<meta name="robots" content="index, follow" />
					<link rel="canonical" href={`${CANONICAL}/mentions-legales`} />
                </Head>
                <Header type={2} />
                <MentionsLegalesContent />
                <Footer />
            </Theme1>
        </>
    )
}