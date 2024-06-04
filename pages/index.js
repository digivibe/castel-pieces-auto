import { useEffect } from 'react'
import Head from 'next/head'

import Theme1 from '@/layouts/Theme1'
import Banner0 from '@/components/Banner0'
import { APP_NAME, CANONICAL } from '@/data/config'

const Home = () => {
    useEffect(() => {
        const animateArrows = () => {
            const arrows = document.querySelectorAll('.arrows-animated-wrapper > img')
            const delayBetweenArrows = 200
            const stayLitDuration = 600

            arrows.forEach((arrow, index) => {
                setTimeout(() => {
                    arrow.style.animation = `fadeIn 0.5s forwards`
                }, index * delayBetweenArrows)
            })

            setTimeout(() => {
                arrows.forEach((arrow) => {
                    arrow.style.animation = `fadeOut 0.5s forwards`
                })
                setTimeout(animateArrows, 500)
            }, arrows.length * delayBetweenArrows + stayLitDuration)
        }

        animateArrows()
    }, [])

    return (
        <>
			<Theme1>
				<Head>
					<title>{APP_NAME}</title>
					<meta name="robots" content="index, follow" />
					<link rel="canonical" href={CANONICAL} />
				</Head>
				<Banner0 />
			</Theme1>
        </>
    )
}

export default Home