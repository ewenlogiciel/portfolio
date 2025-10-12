<script setup>
import Competences from './components/Competences.vue'
import Apropos from "@/components/Apropos.vue";
import Contact from "@/components/Contact.vue";
import Accueil from "@/components/Accueil.vue";
import Projets from "@/components/Projets.vue";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";

</script>

<template>

  <Header/>

  <main>

    <Accueil/>

    <Competences />

    <Projets/>

    <Contact/>

    <Apropos/>

    <Footer/>

  </main>

</template>

<style scoped>

</style>