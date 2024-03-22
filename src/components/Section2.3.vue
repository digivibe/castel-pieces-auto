<template>
    <div class="section">
        <div class="base-container w-container">
            <div data-w-id="15a152fe-c607-e392-7249-88fdb3dbd485" class="section-two-side-title-wrapper">
                <div>
                    <h2 class="section-title text-white">
                        Nos services<br />
                    </h2>
                    <p>
                        Explorez notre gamme complète de services dédiés à la longévité et à la performance de votre
                        véhicule.<br />
                    </p>
                </div>
                <div>
                    <router-link to="/" class="primary-button w-button">
                        Voir tout
                    </router-link>
                </div>
            </div>
            <div data-w-id="78acbbc5-686f-394c-4bfc-8fc1d49481c9" class="collection-list-wrapper-services w-dyn-list">
                <div role="list" class="features-wrapper w-dyn-items">
                    <div v-for="item in services" :key="item.id" data-w-id="78acbbc5-686f-394c-4bfc-8fc1d49481cb"
                        role="listitem" class="features-wrap w-dyn-item">
                        <div class="services-info">
                            <img :src="item.image" :alt="item.title" class="features-image" loading="lazy"
                                height="60" />
                            <router-link :to="item.link" class="link-block w-inline-block">
                                <h4 class="item-name-hover">{{ item.title }}</h4>
                            </router-link>
                            <p>{{ item.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-lines">
            <div class="bg-lines-inside"></div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const services = ref([
    {
        id: 1,
        title: "Vente pièce neuve",
        description: "Découvrez notre sélection de véhicules rigoureusement inspectés et prêts à prendre la route, répondant à tous les besoins et budgets.",
        image: "/images/s1.svg",
        link: "/#"
    },
    {
        id: 2,
        title: "Vente pièce d'occasion",
        description: "Trouvez la pièce qu'il vous faut à un prix avantageux parmi notre vaste inventaire de pièces d'occasion de qualité garantie.",
        image: "/images/s2.svg",
        link: "/#"
    },
    {
        id: 3,
        title: "Vente de véhicule",
        description: "Explorez notre gamme de pièces neuves pour tous les modèles et marques, offrant performance et fiabilité pour votre véhicule.",
        image: "/images/s3.svg",
        link: "/#"
    },
    {
        id: 4,
        title: "Rachat de véhicule d'occasion",
        description: "Donnez une nouvelle vie à votre ancienne voiture grâce à notre offre de rachat avantageuse et responsable.",
        image: "/images/s3.svg",
        link: "/#"
    }
]);
</script>