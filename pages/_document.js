import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        const currentPath = ctx.asPath.split('?')[0]

        let dataWfPage, dataWfSite

        const pageMappings = {
            '/centre-de-depollution': '632156d1693b92b5f94f0b60',
            '/mentions-legales': '6544c7ea2104d8e9b284a658',
            '/contactez-nous': '6544c7ea2104d8e9b284a654'
        }

        const slugMappings = {
            'reprise-vehicules-accidentes': '632156d1693b925a2b4f0b74',
            'reprise-vehicules-hors-d-usage': '632156d1693b925a2b4f0b74',
            'objectif-et-obligations-d-un-vhu': '632156d1693b925a2b4f0b74',
            'prime-a-la-conversion': '632156d1693b925a2b4f0b74',
            'centre-vhu': '632156d1693b925a2b4f0b74',
        }

        if (pageMappings[currentPath]) {
            dataWfPage = pageMappings[currentPath]
            dataWfSite = '62cbb076a33caa282db986ef'
        } else {
            const slug = currentPath.split('/')[1]
            dataWfPage = slugMappings[slug] || '6544c7ea2104d8e9b284a660'
            dataWfSite = slugMappings[slug] ? '62cbb076a33caa282db986ef' : '6544c7e92104d8e9b284a55b'
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