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
  <div id="accueil" data-aos="fade-right" class="mt-[40vh] mb-[26vh] flex flex-col items-center w-[60vw] max-md:w-[90vw] max-md:mt-[20vh] max-md:mb-[15vh]">

    <h3 class="mt-0 mb-0 max-md:text-center">Bonjour, je m'appelle Ewen D'Avanzo, je suis</h3>
    <h1 class="mb-[2vh] text-[xxx-large] mt-0 max-md:text-center max-md:w-[70vw]">Développeur web fullstack junior</h1>

    <div class="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-500 text-[0.9rem] mb-4 max-md:mt-8">
      <span class="dot w-2 h-2 bg-green-500 rounded-full"></span>
      <span>Disponible pour de nouvelles opportunités</span>
    </div>

    <div class="mt-[5vh] flex gap-8 max-md:flex-col max-md:w-full max-md:gap-4 max-md:items-center max-md:mb-[5vh]">
      <a href="/mon-document.pdf" target="_blank" rel="noopener" class="cursor-pointer mb-2 flex border border-white/30 px-4 py-2 rounded-sm text-[#a5a5a5] items-center hover:bg-[#262626] hover:text-white transition-colors duration-300 max-md:justify-center max-md:w-fit group">
        <img :src="oeil" alt="oeil" class="w-6 h-6 mr-2 transition-[filter] duration-300 group-hover:brightness-200">
        <span>Voir mon CV</span>
      </a>

      <a href="#apropos" @click.prevent="scrollToSection('#apropos')" class="cursor-pointer mb-2 flex border border-white/30 px-4 py-2 rounded-sm text-[#a5a5a5] items-center hover:bg-[#262626] hover:text-white transition-colors duration-300 max-md:justify-center max-md:w-fit group">
        <img :src="arrow" alt="flèche" class="w-4 h-4 mr-2 transition-[filter] duration-300 group-hover:brightness-200">
       <span>En savoir plus</span>
      </a>
    </div>

  </div>
</template>

<style scoped>
@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
}

.dot {
  animation: blink 2s ease-in-out infinite;
}
</style>