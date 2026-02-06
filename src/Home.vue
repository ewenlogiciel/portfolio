<script setup>
import Competences from './components/Competences.vue'
import Apropos from "@/components/Apropos.vue";
import Contact from "@/components/Contact.vue";
import Accueil from "@/components/Accueil.vue";
import Projets from "@/components/Projets.vue";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import Site_cree from "@/components/site_cree.vue";
import Parcours from "@/components/Parcours.vue";

</script>

<template>
  <div>
    <Header/>

    <main>

      <Accueil/>

      <Apropos/>

      <Competences />

      <Parcours/>

      <Projets/>

      <Contact/>

      <site_cree/>

      <Footer/>

    </main>
  </div>
</template>

<style scoped>

</style>