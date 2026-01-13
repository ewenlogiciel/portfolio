<script setup>

</script>

<template>
  <div id="projets" class="w-[60vw] mx-auto mb-[10vh] max-md:w-[90vw]">

    <h2>Projets</h2>

    <div class="grid grid-cols-2 gap-5 max-md:grid-cols-1" data-aos="fade-right">

      <router-link to="/cineverse" class="border border-white/30 rounded-[0.4rem] w-full transition-colors duration-300 p-4 block no-underline text-inherit hover:bg-[#191919] hover:cursor-pointer group">
        <h3 class="mt-0 mb-2 transition-colors duration-300 group-hover:text-white">Cineverse</h3>
        <p class="mt-0 transition-colors duration-300 group-hover:text-white mb-3">Plateforme de cinéma fullstack</p>
        <div class="flex flex-wrap gap-2">
          <div class="border border-white/30 p-2 rounded-sm hover:cursor-pointer">Vue.js</div>
          <div class="border border-white/30 p-2 rounded-sm hover:cursor-pointer">Symfony</div>
          <div class="border border-white/30 p-2 rounded-sm hover:cursor-pointer">TailwindCSS</div>
          <div class="border border-white/30 p-2 rounded-sm hover:cursor-pointer">GraphQL</div>

        </div>
      </router-link>

    <router-link to="/agenda" class="border border-white/30 rounded-[0.4rem] w-full transition-colors duration-300 p-4 block no-underline text-inherit hover:bg-[#191919] hover:cursor-pointer group">
      <h3 class="mt-0 mb-2 transition-colors duration-300 group-hover:text-white">Agenda</h3>
      <p class="mt-0 transition-colors duration-300 group-hover:text-white mb-3">Application web d'agenda collaboratif</p>
      <div class="flex flex-wrap gap-2">
        <div class="border border-white/30 p-2 rounded-sm hover:cursor-pointer">Nuxt</div>
        <div class="border border-white/30 p-2 rounded-sm hover:cursor-pointer">Tailwind CSS</div>
        <div class="border border-white/30 p-2 rounded-sm hover:cursor-pointer">Javascript</div>
        <div class="border border-white/30 p-2 rounded-sm hover:cursor-pointer">Prisma</div>
      </div>
    </router-link>

    <router-link to="/utopia" class="border border-white/30 rounded-[0.4rem] w-full transition-colors duration-300 p-4 block no-underline text-inherit hover:bg-[#191919] hover:cursor-pointer group">
      <h3 class="mt-0 mb-2 transition-colors duration-300 group-hover:text-white">Utopia</h3>
      <p class="mt-0 transition-colors duration-300 group-hover:text-white mb-3">Application web de cinéma</p>
      <div class="flex flex-wrap gap-2">
        <div class="border border-white/30 p-2 rounded-sm hover:cursor-pointer">Symfony</div>
        <div class="border border-white/30 p-2 rounded-sm hover:cursor-pointer">SCSS</div>
        <div class="border border-white/30 p-2 rounded-sm hover:cursor-pointer">Javascript</div>
        <div class="border border-white/30 p-2 rounded-sm hover:cursor-pointer">MySQL</div>
      </div>
    </router-link>

    <router-link to="/datavision" class="border border-white/30 rounded-[0.4rem] w-full transition-colors duration-300 p-4 block no-underline text-inherit hover:bg-[#191919] hover:cursor-pointer group">
      <h3 class="mt-0 mb-2 transition-colors duration-300 group-hover:text-white">DataVision</h3>
      <p class="mt-0 transition-colors duration-300 group-hover:text-white mb-3">Application web de dataviz</p>
      <div class="flex flex-wrap gap-2">
        <div class="border border-white/30 p-2 rounded-sm hover:cursor-pointer">SCSS</div>
        <div class="border border-white/30 p-2 rounded-sm hover:cursor-pointer">Chart.JS</div>
        <div class="border border-white/30 p-2 rounded-sm hover:cursor-pointer">Javascript</div>
      </div>
    </router-link>

    </div>

  </div>
</template>