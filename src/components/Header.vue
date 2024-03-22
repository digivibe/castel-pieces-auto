<template>
    <div data-animation="over-left" class="navbar-fixed w-nav" data-easing2="ease" data-easing="ease"
        data-collapse="medium" data-w-id="310be704-be0c-862c-40a7-a2176037624e" role="banner" data-no-scroll="1"
        data-duration="400" data-doc-height="1">
        <div class="nav-container w-container">
            <div class="nav-menu-wrapper">
                <div class="nav-balancer">
                    <RouterLink to="/" class="brand w-nav-brand w--current">
                        <img src="/images/logo.svg" loading="lazy" alt="logo" width="150" height="30" class="logo" />
                    </RouterLink>
                </div>
                <nav role="navigation" class="nav-menu w-nav-menu">
                    <div class="tablet-menu">
                        <RouterLink to="/" class="brand-tablet w-nav-brand w--current">
                            <img src="/images/logo.svg" loading="lazy" alt="logo" width="150" height="30"
                                class="logo" />
                        </RouterLink>
                        <div class="close-menu-button w-nav-button">
                            <img src="/images/close-btn-slim.svg" loading="lazy" alt="icon" width="17" height="16"
                                class="nav-close-icon" />
                        </div>
                    </div>
                    <div class="menu-wrap">
                        <RouterLink to="/" class="nav-link w-nav-link">Accueil</RouterLink>
                        <a class="nav-link w-nav-link">Reprise véhicule hors d'usage</a>
                        <a class="nav-link w-nav-link">Rachat véhicule d'occasion</a>
                        <a class="nav-link w-nav-link">Boutique</a>
                    </div>
                </nav>
                <div class="search-shop-con">
                    <div class="menu-button w-nav-button">
                        <img src="/images/menu-btn-slim.svg" loading="lazy" alt="icon" class="image-burger" width="27"
                            height="16" />
                    </div>
                    <RouterLink :to="type === 1 ? '/garage-atelier-mecanique' : '/centre-de-depollution'"
                        class="primary-button nav-style w-button"
                        :class="{ 'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition ease-in-out duration-150': type > 2 }">
                        {{ type === 1 ? 'Atelier Mécanique' : 'Centre de dépollution' }}
                    </RouterLink>
                </div>
            </div>
        </div>
        <div class="nav-shadow"></div>
    </div>
</template>

<script setup>
    import { RouterLink } from 'vue-router'

    defineProps({
        type: {
            type: Number,
            default: 0,
        },
    });
</script>