<script setup>
import Competences from './components/Competences.vue'
import Apropos from "@/components/Apropos.vue";
import Parcours from "@/components/Parcours.vue";
import Contact from "@/components/Contact.vue";
import Accueil from "@/components/Accueil.vue";
import Projets from "@/components/Projets.vue";

</script>

<template>
  <header>
    <nav>
      <ul>
        <li><a href="#accueil" class="active">Accueil</a></li>
        <li><a href="#parcours">Parcours</a></li>
        <li><a href="#competences">Compétences</a></li>
        <li><a href="#projets">Projets</a></li>
        <li><a href="#apropos">À propos</a></li>
      </ul>
    </nav>
  </header>

  <main>

    <Accueil/>

    <Parcours/>

    <Competences />

    <Projets/>

    <Contact/>

    <Apropos/>

  </main>

  <footer>

    <div class="footer2">
    <p>© 2025 Ewen D'Avanzo | Tous droits réservés.</p>

    <p>ewen.davanzo@gmail.com</p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  display: flex;
  justify-content: center;
  border-top: 1px solid rgba(255, 255, 255, 0.3);;
}

.footer2{
  width: 60vw;
  display: flex
;
  justify-content: space-between;
}
</style>
