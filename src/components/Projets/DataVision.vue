<script setup>

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

</script>

<template>
  <div class="flex flex-col items-center w-full">
    <Header/>

    <main class="w-[60vw] flex items-baseline mt-[25vh] max-md:w-[90vw] max-md:mt-[15vh]">

      <router-link to="/" class="transition-colors duration-300 hover:text-[#ababab]"><- Retour à la page d'accueil</router-link>


      <h1 class="max-md:text-[x-large]">DataVision</h1>

      <p>
        Lors de ce projet en duo, j'ai créé avec mon collègue un site de Data Visualisation.
        J'ai fait usage de la librairie Chart.js afin d'exploiter les données mises à disposition sur le site de l'Open Data University en les transformant en graphiques interactifs permettant une meilleure visualisation et analyse des informations.
      </p>

      <div class="border border-white/30 w-fit p-4 rounded-lg mb-4 max-md:w-full">
        <img src="/projets/datavision.png" alt="Agenda" class="w-[60vw] max-md:w-full">
      </div>

      <a href="http://mmi23f04.mmi-troyes.fr/sae303/" target="_blank" class="border border-white/30 w-fit px-2 py-2 rounded-sm transition-colors duration-300 text-[#a5a5a5] mb-12 flex items-center hover:bg-[#262626] hover:text-white max-md:w-full max-md:justify-center group">
        <img src="/projets/world-wide-web.png" alt="world wide web icon" class="w-4 h-4 mr-2 transition-[filter] duration-300 group-hover:brightness-200">
        <span class="transition-colors duration-300">Voir le site</span>
      </a>

    </main>

    <Footer/>
  </div>
</template>