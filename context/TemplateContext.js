import { createContext, useState, useContext, useLayoutEffect } from 'react'
import Script from 'next/script'

const TemplateContext = createContext()

export const TemplateProvider = ({ children, initialTemplate }) => {
    const [template, setTemplate] = useState(initialTemplate)

    useLayoutEffect(() => {
        const style = document.createElement('link')
        style.rel = 'stylesheet'
        style.href = `/css/${template}.css`
        document.head.appendChild(style)

        return () => {
            document.head.removeChild(style)
        }
    }, [template])

    return (
        <TemplateContext.Provider value={{ template, setTemplate }}>
            {children}
            <ScriptLoader template={template} />
        </TemplateContext.Provider>
    )
}

const ScriptLoader = ({ template }) => {
    return (
        <>
            <Script src={`/js/${template}.jquery.js`} strategy="beforeInteractive" />
            <Script src={`/js/${template}.wf.js`} strategy="afterInteractive" />
            { template === 'template1' && (<Script src="https://cdn.tailwindcss.com" />) }
        </>
    )
}

export const useTemplate = () => useContext(TemplateContext)