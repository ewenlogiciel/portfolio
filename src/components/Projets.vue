<script setup>

</script>

<template>
  <div id="projets">

    <h2>Projets</h2>

    <router-link to="/agenda" class="projet">
      <h3>Agenda</h3>
      <p>Application web d'agenda collaboratif</p>
      <div class="compt-container">
        <div class="comp">Vue.js</div>
        <div class="comp">Tailwind CSS</div>
        <div class="comp">Javascript</div>
        <div class="comp">Prisma</div>
      </div>
    </router-link>

    <router-link to="/utopia" class="projet">
      <h3>Utopia</h3>
      <p>Application web de cinéma</p>
      <div class="compt-container">
        <div class="comp">Symfony</div>
        <div class="comp">SCSS</div>
        <div class="comp">Javascript</div>
        <div class="comp">MySQL</div>
      </div>
    </router-link>

    <router-link to="/datavision" class="projet">
      <h3>DataVision</h3>
      <p>Application web de dataviz</p>
      <div class="compt-container">
        <div class="comp">SCSS</div>
        <div class="comp">Chart.JS</div>
        <div class="comp">Javascript</div>
      </div>
    </router-link>

    <router-link to="/oblivion_fest" class="projet">
      <h3>Oblivion Fest</h3>
      <p>Maquette pour un festival de musique</p>
      <div class="compt-container">
        <div class="comp">Figma</div>
      </div>
    </router-link>

    <router-link to="/kipelle" class="projet">
      <h3>Kipelle</h3>
      <p>Application web de cojardinage</p>
      <div class="compt-container">
        <div class="comp">PHP</div>
        <div class="comp">Javascript</div>
        <div class="comp">MySQL</div>
        <div class="comp">Docker</div>
      </div>
    </router-link>

  </div>
</template>

<style scoped>
#projets{
  width: 60vw;
}

.projet{
  border: 1px solid rgba(255, 255, 255, 0.3);
  width: fit-content;
  padding: 0.5rem;
  border-radius: 0.4rem;
  width: 100%;
  transition: background-color 0.3s;
  padding: 1rem;
  display: block;
  text-decoration: none;
  color: inherit;
  margin-bottom: 1rem;
}

.projet:hover{
  background-color: #191919;
  cursor: pointer;
}

.compt-container{
  display: flex;
}

.comp{
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.5rem;
  border-radius: 0.2rem;
  margin-right: 0.5rem;
}

.comp:hover{
  cursor: pointer;
}

h3{
  margin-top: 0;
  margin-bottom: 0.5rem;
}

p{
  margin-top: 0;
}
</style>