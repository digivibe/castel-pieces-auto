// import '@/styles/Tailwind.css'
import { TemplateProvider } from '@/context/TemplateContext'

function MyApp({ Component, pageProps, initialTemplate }) {
    return (
        <TemplateProvider initialTemplate={initialTemplate}>
            <Component {...pageProps} />
        </TemplateProvider>
    )
}

MyApp.getInitialProps = async ({ ctx }) => {
    let initialTemplate = 'template1'

    if (ctx.pathname === '/centre-de-depollution') {
        initialTemplate = 'template2'
    }

    return { initialTemplate }
}

export default MyApp