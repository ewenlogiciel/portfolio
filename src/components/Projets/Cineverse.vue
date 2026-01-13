<script setup>

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

</script>

<template>
  <div class="flex flex-col items-center w-full">
    <Header/>

    <main class="w-[60vw] flex items-baseline mt-[25vh] max-md:w-[90vw] max-md:mt-[15vh]">

      <router-link to="/" class="transition-colors duration-300 hover:text-[#ababab]"><- Retour à la page d'accueil</router-link>


      <h1 class="max-md:text-[x-large]">Cineverse</h1>

      <p>Ce projet simule une plateforme cinématographique reposant sur une architecture découplée.
        Le frontend, développé avec Vue.js, communique avec une API Symfony via GraphQL (API Platform).<br><br>
        L'application propose un catalogue dynamique de films, alimenté par des données générées via Faker, et intègre plusieurs fonctionnalités : moteur de recherche avec filtres, système d'authentification et gestion des commentaires.<br><br>
        Un backoffice accessible réservé aux administrateurs permet une administration des ressources (films, acteurs, catégories, commentaires, utilisateurs) grâce à un CRUD centralisé.</p>

      <div class="border border-white/30 w-fit p-4 rounded-lg mb-4 max-md:w-full bg-black">
        <img src="/projets/cineverse.png" alt="Agenda" class="w-[60vw] max-md:w-full">
      </div>

      <div class="flex">

      <a href="https://cineverse.ewendavanzo.fr/" target="_blank" class="border border-white/30 w-fit px-2 py-2 rounded-sm transition-colors duration-300 text-[#a5a5a5] mb-12 flex items-center hover:bg-[#262626] hover:text-white max-md:w-full max-md:justify-center group">
        <img src="/projets/world-wide-web.png" alt="world wide web icon" class="w-4 h-4 mr-2 transition-[filter] duration-300 group-hover:brightness-200">
        <span class="transition-colors duration-300">Voir le site</span>
      </a>

      <a href="https://github.com/ewenlogiciel/cineverse" target="_blank" class="border border-white/30 w-fit px-2 py-2 rounded-sm transition-colors duration-300 text-[#a5a5a5] mb-12 ml-4 flex items-center hover:bg-[#262626] hover:text-white max-md:w-full max-md:justify-center group">
        <img src="/projets/links.png" alt="world wide web icon" class="w-5 h-5 mr-2 transition-[filter] duration-300 group-hover:brightness-200">
        <span class="transition-colors duration-300">Voir le repository</span>
      </a>

      </div>

    </main>

    <Footer/>
  </div>
</template>