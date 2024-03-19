import { useEffect, useState } from 'react'
import Script from 'next/script'
import Cookies from 'js-cookie'
import ThemeSwitcher from '@/components/ThemeSwitcher'

export default function App({ Component, pageProps }) {
    const [theme, setTheme] = useState('dark')

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
        Cookies.set('theme', newTheme, { expires: 365 })
    }

    useEffect(() => {
        const savedTheme = Cookies.get('theme')
        if (savedTheme) {
            setTheme(savedTheme)
        } else {
            Cookies.set('theme', 'dark', { expires: 7 })
        }
    }, [])

    useEffect(() => {
        const themeStyleUrl = theme === 'dark' ? '/styles/Dark.css' : '/styles/Light.css'
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.id = 'theme-style'
        link.href = themeStyleUrl

        document.head.appendChild(link)

        return () => {
            const existingLink = document.getElementById('theme-style')
            if (existingLink) {
                document.head.removeChild(existingLink)
            }
        }
    }, [theme])

    return (
        <>
            <ThemeSwitcher toggleTheme={toggleTheme} theme={theme} />
            <Component {...pageProps} />
            <Script src="/js/all.min.js" />
            <Script src="/js/jquery.js" />
            <Script src="/js/wf.js" />
        </>
    )
}
