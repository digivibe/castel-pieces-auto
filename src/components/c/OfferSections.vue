<template>
    <div ref="sectionThree" id="three"
        class="lg:h-screen w-screen flex flex-col lg:flex-row items-center gap-[50px] lg:gap-[300px] bg-gray-900 h-scroll-section border-b-2 border-gray-700">
        <div class="lg:pl-36 mt-10 relative">
            <h2 class="text-white text-[2.5rem] lg:text-[3rem] font-bold m-12 lg:m-24">
                Nos offres
            </h2>
            <span
                class="text-black text-outline-white absolute top-[-50px] font-bold text-[5rem] lg:text-[10rem] opacity-10 leading-none m-12 hidden lg:block">Nos
                offres</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            class="w-20 lg:w-32 rotate-90 lg:rotate-0 text-white opacity-40 mb-8">
            <path fill-rule="evenodd"
                d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z"
                clip-rule="evenodd" />
        </svg>
    </div>
    <div
        class="h-screen w-screen flex flex-col gap-16 lg:flex-row bg-gray-900 h-scroll-section offer border-b-2 border-gray-700">
        <div class="pt-8 md:pt-16 lg:pt-36 px-4 md:px-8 lg:pl-36 relative offer-desc">
            <span
                class="text-transparent text-outline-white absolute lg:top-[100px] w-[200px] font-bold text-[7rem] lg:text-[10rem] opacity-10 leading-none lg:m-12 hidden lg:block">Nos
                offres</span>
            <div class="lg:m-20">
                <h2 class="text-white text-[2.5rem] font-bold">Basique</h2>
                <span class="text-lg block font-thin text-white lg:w-[500px]">Déchargez-vous du stress du déménagement
                    avec notre forfait tout compris.
                    Emballage, transport sécurisé, et déballage dans votre nouveau lieu de vie.
                    Profitez d'une transition sans souci.</span>
                <button
                    class="bg-gray-700 hover:bg-white hover:text-transparent text-lg text-white px-6 my-4 py-2 rounded-3xl font-bold">
                    Découvrir
                </button>
            </div>
        </div>
        <div class="grid items-center offer-illus">
            <img src="https://i.imgur.com/ZUbtoSc.jpg"
                class="w-[60vw] lg:w-[400px] mx-auto rotate-12 opacity-20 lg:opacity-40 hover:lg:opacity-100 offer-illus-img"
                alt="" />
        </div>
    </div>
    <div
        class="h-screen w-screen flex flex-col gap-16 lg:flex-row bg-gray-900 h-scroll-section offer border-b-2 border-gray-700">
        <div class="pt-8 md:pt-16 lg:pt-36 px-4 md:px-8 lg:pl-36 relative offer-desc">
            <span
                class="text-transparent text-outline-white absolute lg:top-[100px] w-[200px] font-bold text-[7rem] lg:text-[10rem] opacity-10 leading-none lg:m-12 hidden lg:block">Nos
                offres</span>
            <div class="lg:m-20">
                <h2 class="text-white text-[2.5rem] font-bold">Débarras Express</h2>
                <span class="text-lg block font-thin text-white lg:w-[500px]">Besoin de libérer de l'espace rapidement ?
                    Optez pour notre Pack Débarras
                    Express. Une équipe dédiée se charge du débarras en un temps record,
                    laissant votre espace immaculé.
                </span>
                <button
                    class="bg-gray-700 hover:bg-white hover:text-transparent text-lg text-white px-6 my-4 py-2 rounded-3xl font-bold">
                    Découvrir
                </button>
            </div>
        </div>
        <div class="grid items-center offer-illus">
            <img src="https://i.imgur.com/bfQ9Vzh.jpg"
                class="w-[60vw] lg:w-[400px] mx-auto rotate-12 opacity-20 lg:opacity-40 hover:lg:opacity-100 offer-illus-img"
                alt="" />
        </div>
    </div>
    <div class="h-screen w-screen flex flex-col gap-16 lg:flex-row bg-gray-900 h-scroll-section offer">
        <div class="pt-8 md:pt-16 lg:pt-36 px-4 md:px-8 lg:pl-36 relative">
            <span
                class="text-transparent text-outline-white absolute lg:top-[100px] w-[200px] font-bold text-[7rem] lg:text-[10rem] opacity-10 leading-none lg:m-12 hidden lg:block">Nos
                offres</span>
            <div class="lg:m-20">
                <h2 class="text-white text-[2.5rem] font-bold">Sur mesure</h2>
                <span class="text-lg block font-thin text-white lg:w-[500px]">Profitez d'un accompagnement complet
                    quelque soit les service dont vous
                    avez-besoin. Une équipe vous est dédiée pour vous satisfaire en un temps
                    record.
                </span>
                <button
                    class="bg-gray-700 hover:bg-white hover:text-transparent text-lg text-white px-6 my-4 py-2 rounded-3xl font-bold">
                    Découvrir
                </button>
            </div>
        </div>
        <div class="grid items-center offer-illus">
            <img src="https://i.imgur.com/kyla46E.jpg"
                class="w-[60vw] lg:w-[400px] mx-auto rotate-12 opacity-20 lg:opacity-40 hover:lg:opacity-100 offer-illus-img"
                alt="" />
        </div>
    </div>
</template>

<script setup></script>

<style scoped>
@media (max-width: 992px) {
    .offer {
        align-items: center;
        justify-content: center;
        height: 60vh;
    }

    .offer-illus {
        position: absolute;
    }

    .offer-illus-img {
        z-index: 10;
    }

    .offer-desc {
        z-index: 20;
    }

    #four {
        overflow-x: hidden;
    }
}
</style>