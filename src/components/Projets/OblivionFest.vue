<script setup>

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

</script>

<template>

  <Header/>

  <main>

    <router-link to="/"><- Retour à la page d'accueil</router-link>


    <h1>OblivionFest</h1>

    <p>
      Dans ce projet individuel, j'ai conçu la maquette d'un site fictif de festival sur l'univers du métal. Pour cela, j'ai réalisé une moodboard, une wireframe, puis la maquette finale à l'aide du logiciel Figma.
    </p>

    <div class="screen">
      <img src="/projets/oblivionfest.png" alt="Agenda">
    </div>

    <a href="https://www.figma.com/design/vRQyK449Bhjz9iNLOvAHCp/D'AVANZO_Ewen_WR309?node-id=1-3&t=YyoTi0Ly4IqjqW5Y-1" target="_blank" class="bouton"><img src="/projets/world-wide-web.png" alt="world wide web icon"><span>Voir le site</span> </a>

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

  .bouton:hover img {
    filter: brightness(2);
  }

  .bouton:hover span {
    color: white;
  }

  .bouton img{
    width: 16px;
    height: 16px;
    margin-right: 0.5rem;
    transition: filter 0.3s ease;
  }

  .bouton span {
    transition: color 0.3s ease;
  }

  img{
    width: 60vw;
  }

  @media (max-width: 768px) {
    main {
      width: 90vw;
      margin-top: 15vh;
    }

    h1 {
      font-size: x-large;
    }

    .screen {
      width: 100%;
    }

    img {
      width: 100%;
    }

    .bouton {
      width: 100%;
      justify-content: center;
    }
  }

</style>