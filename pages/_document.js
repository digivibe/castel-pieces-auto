import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends React.Component {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        const currentPath = ctx.pathname
        
        let dataWfPage, dataWfSite
        if (currentPath === '/centre-de-depollution') {
            dataWfPage = '632156d1693b92b5f94f0b60'
            dataWfSite = '62cbb076a33caa282db986ef'
        } else {
            dataWfPage = ''
            dataWfSite = ''
        }

        return { ...initialProps, dataWfPage }
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