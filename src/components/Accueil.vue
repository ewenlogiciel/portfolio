<script setup>
import oeil from '@/assets/logos/oeil.png'
import arrow from '@/assets/logos/arrow.png'

const scrollToSection = (sectionId) => {
  const element = document.querySelector(sectionId)
  if (element) {
    const elementRect = element.getBoundingClientRect()
    const absoluteElementTop = elementRect.top + window.pageYOffset
    const middle = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2)

    window.scrollTo({
      top: middle,
      behavior: 'smooth'
    })
  }
}
</script>

<template>
  <div id="accueil" data-aos="fade-right">


    <h3>Bonjour, je m'appelle Ewen D'Avanzo, je suis</h3>
    <h1>Développeur web fullstack junior</h1>

    <div class="badge-disponible">
      <span class="dot"></span>
      <span>Disponible pour de nouvelles opportunités</span>
    </div>

    <div class="boutons">
      <a href="/mon-document.pdf" target="_blank" rel="noopener">
        <img :src="oeil" alt="oeil">
        <span>Voir mon CV</span>
      </a>

      <a href="#apropos" @click.prevent="scrollToSection('#apropos')">
        <img :src="arrow" alt="flèche" style="width: 1rem;">
       <span>En savoir plus</span>
      </a>
    </div>

  </div>
</template>

<style scoped>

#accueil{
  margin-top: 40vh;
  margin-bottom: 26vh;
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

.badge-disponible {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 100px;
  color: #22c55e;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.dot {
  width: 0.5rem;
  height: 0.5rem;
  background-color: #22c55e;
  border-radius: 50%;
  animation: blink 2s ease-in-out infinite;
}

@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
}

.boutons{
  margin-top: 5vh;
  display: flex;
  gap: 2rem;
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
  color: white;
}

a:hover img {
  filter: brightness(2);
}

img {
  width: 1.5rem;
  margin-right: 0.5rem;
  transition: filter 0.3s ease;
}

@media (max-width: 768px) {
  #accueil {
    width: 90vw;
    margin-top: 20vh;
    margin-bottom: 15vh;
  }

  h1 {
    text-align: center;
    width: 70vw;
  }

  h3 {
    text-align: center;
  }

  .badge-disponible{
    margin-top: 2rem;
  }

  .boutons {
    flex-direction: column;
    width: 100%;
    gap: 1rem;
    align-items: center;
    margin-bottom: 5vh;
  }

  a {
    justify-content: center;
    width: fit-content;
  }
}
</style>