<template>
    <div class="section light-style">
        <div class="base-container w-container">
            <div class="two-column-wrapper center">
                <div class="column-two">
                    <h2 class="in-section-title text-white">
                        Centre de dépollution agréé reprise véhicule hors d'usage
                    </h2>
                    <p class="no-margin">
                        Notre centre de dépollution agréé est au cœur de notre engagement envers l'environnement et la
                        responsabilité sociale. Chez "Castel Pièces Auto", nous prenons en charge les véhicules hors
                        d'usage avec une attention particulière pour la préservation de notre planète. Grâce à des
                        processus éco-responsables, nous assurons la dépollution et le recyclage des composants de
                        manière sécuritaire et conforme aux réglementations.
                    </p>
                    <div class="button-wrapper-main">
                        <a class="primary-button w-button">
                            A propos de nous
                        </a>
                        <a class="primary-button style-two w-button">
                            En savoir plus
                        </a>
                    </div>
                </div>
                <div class="column-one">
                    <img src="/images/d.jpg" alt="photo" class="home-about-block-image with-icons" />
                    <div :style="customStyles" class="clients-pics-wrapp">
                        <div class="avatars-wrapper">
                            <img src="/images/651f2c08c5bd81eb296c18b0_Member-Photo-Close-up-10.jpg" alt="avatars image"
                                class="avatars-image" />
                            <img src="/images/651f2c08c5bd81eb296c18bd_Member-Photo-Close-up-6.jpg" alt="avatars image"
                                class="avatars-image" />
                            <img src="/images/651f2c08c5bd81eb296c18a9_Member-Photo-Close-up-3.jpg" alt="avatars image"
                                class="avatars-image" />
                            <img src="/images/651f2c08c5bd81eb296c18a7_Member-Photo-Close-up-14.jpg" alt="avatars image"
                                class="avatars-image last-item" />
                        </div>
                        <div class="clients-subtitle">
                            Respect de l'environnement
                        </div>
                    </div>
                    <div class="stars-wrapper">
                        <img src="/images/656115479c5ef45083727375_star.svg" alt="icon" class="reviews-stars" />
                        <img src="/images/656115479c5ef45083727375_star.svg" alt="icon" class="reviews-stars" />
                        <img src="/images/656115479c5ef45083727375_star.svg" alt="icon" class="reviews-stars" />
                        <img src="/images/656115479c5ef45083727375_star.svg" alt="icon" class="reviews-stars" />
                        <img src="/images/656115479c5ef45083727375_star.svg" alt="icon" class="reviews-stars" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const customStyles = {
        WebkitTransform: "translate3d(0px, 0px, 0) scale3d(0.96, 0.96, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
        MozTransform: "translate3d(0px, 0px, 0) scale3d(0.96, 0.96, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
        msTransform: "translate3d(0px, 0px, 0) scale3d(0.96, 0.96, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
        transform: "translate3d(0px, 0px, 0) scale3d(0.96, 0.96, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
    }
</script>