<script setup>

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

</script>

<template>

  <Header/>

  <main>

    <router-link to="/"><- Retour à la page d'accueil</router-link>


    <h1>Agenda</h1>

    <p>Dans le cadre d’un projet de cours en équipe, nous avons développé un agenda collaboratif pour aider les étudiants à organiser et partager leurs travaux à rendre sur l’année scolaire.</p>

    <div class="screen">
      <img src="/projets/agenda.png" alt="Agenda">
    </div>

    <a href="https://sae401.beauget.fr/" target="_blank" class="bouton"><img src="/projets/world-wide-web.png" alt="world wide web icon"><span>Voir le site</span> </a>

  </main>



  <Footer/>

</template>

<style scoped>
  main{
    width: 60vw;
    display: flex;
    align-items: baseline;
    margin-top: 25vh;
  }

  #app{
    justify-content: start;
  }

  a{
    transition: color 0.3s ease;

  }

  a:hover {
    color: #ababab;
  }

  .bouton{
    border: 1px solid rgba(255, 255, 255, 0.3);
    width: fit-content;
    padding: 0.5rem;
    border-radius: 0.2rem;
    transition: color 0.3s ease;
    color: #a5a5a5;
    margin-bottom: 3rem;
    display: flex;
    align-items: center;
  }

  .screen{
    border: 1px solid rgba(255, 255, 255, 0.3);
    width: fit-content;
    padding: 0.5rem;
    border-radius: 0.5rem;
    transition: color 0.3s ease;
    padding: 1rem;
    padding: 1rem;
    margin-bottom: 1rem;
  }

  .bouton:hover{
    background-color: #262626;
  }

  .bouton img{
    width: 16px;
    height: 16px;
    margin-right: 0.5rem;
  }

  img{
    width: 60vw;
  }

</style>