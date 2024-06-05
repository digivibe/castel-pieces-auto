import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        const currentPath = ctx.pathname

        let dataWfPage, dataWfSite
        if (currentPath === '/centre-de-depollution') {
            if ( currentPath === '/reprise-vehicules-accidentes' || currentPath === '/reprise-vehicules-hors-d-usage' || currentPath === '/objectif-et-obligations-d-un-vhu' || currentPath === '/prime-a-la-conversion' || currentPath === '/centre-vhu' ) {
                dataWfPage = '632156d1693b925a2b4f0b74'
            }
            else {
                dataWfPage = '632156d1693b92b5f94f0b60'
            }
            dataWfSite = '62cbb076a33caa282db986ef'
        } else {
            if ( currentPath === '/mentions-legales' ) {
                dataWfPage = '6544c7ea2104d8e9b284a658'
            }
            else {
                dataWfPage = '6544c7ea2104d8e9b284a660'
            }
            dataWfSite = '6544c7e92104d8e9b284a55b'
        }

        return { ...initialProps, dataWfPage, dataWfSite }
    }

    render() {
        const { dataWfPage, dataWfSite } = this.props
        return (
            <Html data-wf-page={dataWfPage} data-wf-site={dataWfSite} lang="fr">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument