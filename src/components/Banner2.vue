<template>
    <div class="relative overflow-hidden w-screen h-screen">
        <video autoplay muted loop playsinline class="absolute top-0 left-0 w-full h-full object-cover">
            <source src="/videos/1.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas les vidéos HTML5.
        </video>
        <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10">
            <div class="text-center">
                <h1 :class="`text-white text-5xl font-bold leading-tight ${textwhity}`">
                    Atelier Mécanique Toutes Marques
                </h1>
            </div>
        </div>
    </div>
</template>

<script setup>
    import styles from '@/styles/Banner0.module.css'

    const { textwhity } = styles;
</script>