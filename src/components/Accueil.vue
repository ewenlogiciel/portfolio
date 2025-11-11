<script setup>
import oeil from '@/assets/logos/oeil.png'
import arrow from '@/assets/logos/arrow.png'
</script>

<template>
  <div id="accueil" data-aos="fade-right">


    <h3>Bonjour, je m'appelle Ewen D'Avanzo, je suis</h3>
    <h1>Développeur web fullstack junior</h1>

    <div class="boutons">
      <a href="/mon-document.pdf" target="_blank" rel="noopener">
        <img :src="oeil" alt="oeil">
        <span>Voir mon CV</span>
      </a>

      <a href="/mon-document.pdf" target="_blank" rel="noopener">
        <img :src="arrow" alt="flèche" style="width: 1rem;">
       <span>En savoir plus</span>
      </a>
    </div>

  </div>
</template>

<style scoped>

#accueil{
  margin-top: 40vh;
  margin-bottom: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60vw;
}

h1{
  margin-bottom: 2vh;
  font-size: xxx-large;
  margin-top: 0;
}

h3{
  margin-top: 0;
  margin-bottom: 0;
}

.boutons{
  margin-top: 5vh;
  display: flex;
  gap: 1rem;
}

a{
  cursor: pointer;
  margin-bottom: 0.5rem;
  display: flex;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding-right: 1rem;
  padding-left: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-radius: 0.2rem;
  color: #a5a5a5;
  display: flex;
  align-items: center;
}

a:hover{
  background-color: #262626;
  color: #ffffff;
}

img {
  width: 1.5rem;
  margin-right: 0.5rem;
}
</style>