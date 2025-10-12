<script setup>

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

</script>

<template>

  <Header/>

  <main>

    <router-link to="/"><- Retour à la page d'accueil</router-link>


    <h1>Kipelle</h1>

    <p>
      Dans ce projet en groupe, dont je me suis occupé de la partie back-end, nous avons dû concevoir un site web d'éco-jardinage dans lequel les utilisateurs peuvent s'inscrire, se connecter,
      modifier leur profil, proposer des parcelles de jardin ou en réserver.
    </p>

    <div class="screen">
      <img src="/projets/kipelle.png" alt="Agenda">
    </div>

    <a href="https://mmi23f04.sae202.ovh/" target="_blank" class="bouton"><img src="/projets/world-wide-web.png" alt="world wide web icon"><span>Voir le site</span> </a>

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