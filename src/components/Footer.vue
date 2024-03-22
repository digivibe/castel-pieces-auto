<template>
    <div class="footer">
        <div class="base-container w-container">
            <div class="footer-wrapper-main">
                <div class="footer-brand-wrapper-main">
                    <div class="footer-logo-wrapper-main">
                        <RouterLink to="/" class="footer-brand-2 w-nav-brand">
                            <img src="/images/logo.svg" loading="lazy" alt="logo" height="30" class="footer-logo" />
                        </RouterLink>
                    </div>
                    <p class="footer-brand-description-main">
                        Chez Castel Pièces Auto, nous équipons votre trajet d'excellence et innovons pour votre sérénité
                        sur la route.
                    </p>
                    <div class="footer-contact-wrapper div-block-15">
                        <div class="footer-contact-icon">
                            <div>
                                
                            </div>
                        </div>
                        <a href="mailto:hello@castel-pieces-auto.netlify.app" class="footer-link-main">
                            castel-pieces-auto.netlify.app
                        </a>
                    </div>
                </div>
                <div class="footer-links-wrapper-main">
                    <h6 class="white-text mb-15">
                        Présentation
                    </h6>
                    <RouterLink to="/" aria-current="page" class="footer-link-main w--current">
                        Centre de dépollution
                    </RouterLink>
                    <RouterLink to="/" class="footer-link-main">
                        Garagiste / Atelier Mécanique
                    </RouterLink>
                </div>
                <div class="footer-links-wrapper-cta">
                    <a href="tel:(33)XXXXXXXX" class="footer-link-main primary">
                        (33)XXXXXXXX
                    </a>
                    <p class="footer-brand-description-main">
                        Disponible 24/7 Appelez nous à n'importe quel moment!
                    </p>
                    <div class="button-wrapper-footer">
                        <RouterLink to="/" class="primary-button w-button">
                            Demander votre devis maintenant
                        </RouterLink>
                    </div>
                </div>
            </div>
            <div class="footer-bottom-wrapper-main">
                <div class="footer-social-icons-wrapper-main">
                    <a class="footer-social-icon-main"></a>
                    <a class="footer-social-icon-main"></a>
                    <a class="footer-social-icon-main"></a>
                </div>
                <div class="footer-rights-wrapper-main">
                    <div class="footer-copyrigh-main">
                        &copy; 2024 Castel Pieces Auto. Tous les droits sont réservés.
                    </div>
                    <div class="footer-rights-main">
                        Powered by <a href="https://digivibe.fr" target="_blank"
                            style="color: #fe46a0; font-weight: bold;">Digivibe</a>.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>