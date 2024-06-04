import React from 'react'

import styles from '@/styles/part1/Banner0.module.css'

const Banner2 = () => {
    const { textwhity } = styles

    return (
        <div className="relative overflow-hidden w-screen h-screen">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/videos/1.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas les vidéos HTML5.
            </video>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10">
                <div className="text-center">
                    <h1 className={`text-white text-5xl font-bold leading-tight ${textwhity}`}>
                        Atelier Mécanique Toutes Marques
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Banner2