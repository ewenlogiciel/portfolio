<script setup>

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

</script>

<template>
  <div class="flex flex-col items-center w-full">
    <Header/>

    <main class="w-[60vw] flex items-baseline mt-[25vh] max-md:w-[90vw] max-md:mt-[15vh]">

      <router-link to="/" class="transition-colors duration-300 hover:text-[#ababab]"><- Retour à la page d'accueil</router-link>


      <h1 class="max-md:text-[x-large]">Nexus</h1>

      <p>
        Jeu de tir en VR dans un style Cyberpunk réalisé avec Unity. Jouable sur Meta Quest 2 et 3.
      </p>

      <div class="border border-white/30 w-fit p-4 rounded-lg mb-4 max-md:w-full">
        <img src="/projets/nexus.png" alt="Nexus" class="w-[60vw] max-md:w-full">
      </div>

      <a href="https://ewenlogiciel.github.io/nexus-website/" target="_blank" class="border border-white/30 w-fit px-2 py-2 rounded-sm transition-colors duration-300 text-[#a5a5a5] mb-12 flex items-center hover:bg-[#262626] hover:text-white max-md:w-full max-md:justify-center group">
        <img src="/projets/world-wide-web.png" alt="world wide web icon" class="w-4 h-4 mr-2 transition-[filter] duration-300 group-hover:brightness-200">
        <span class="transition-colors duration-300">Voir le site</span>
      </a>

    </main>

    <Footer/>
  </div>
</template>