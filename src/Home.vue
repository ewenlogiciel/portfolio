<script setup>
import Competences from './components/Competences.vue'
import Apropos from "@/components/Apropos.vue";
import Contact from "@/components/Contact.vue";
import Accueil from "@/components/Accueil.vue";
import Projets from "@/components/Projets.vue";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import Site_cree from "@/components/site_cree.vue";

</script>

<template>

  <Header/>

  <main>

    <Accueil/>

    <Apropos/>

    <Competences />

    <Projets/>

    <Contact/>

    <site_cree/>

    <Footer/>

  </main>

</template>

<style scoped>

</style>