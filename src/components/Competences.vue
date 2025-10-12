<template>
<div class="competence_container">

  <h2>Compétences</h2>
  <div class="" style="width:50vw;">

    <div
        v-for="skill in skills"
        :key="skill"
        class="competence transition"
        style="
          border: 1px solid rgba(255, 255, 255, 0.3);
          width: fit-content;
          padding: 0.5rem;
          border-radius: 0.2rem;
      "
    >
      <img
          v-if="logos[skillKey(skill)]"
          :src="logos[skillKey(skill)]"
          :alt="skill + ' logo'"
          class="w-12 h-12 mb-2 object-contain"
      />
      <p class="text-white font-medium" style="margin: 0;">{{ skill }}</p>
    </div>
  </div>

</div>



</template>

<script setup>
// Liste des compétences
const skills = [
  'Symfony',
  'Vue.js',
  'Docker',
  'Javascript',
  'TailwindCSS',
  'PHP',
  'MySQL',
  'Figma',
  'Wordpress',
  'GraphQL'
]

// Import automatique de toutes les images du dossier assets/logos
// ⚠️ Chemin relatif au fichier courant
const logos = Object.fromEntries(
    Object.entries(import.meta.glob('@/assets/logos/*.{png,jpg,svg}', { eager: true }))
        .map(([path, module]) => {
          const fileName = path.split('/').pop().split('.')[0].toLowerCase()
          return [fileName, module.default]
        })
)

// Fonction utilitaire pour normaliser le nom (Symfony → symfony)
const skillKey = (name) => {
  return name.toLowerCase().replace('.', '').replace(/\s+/g, '')
}
</script>

<style scoped>

.competence_container{
  width: 60vw;
}

.competence {
  cursor: pointer;
  margin-bottom: 0.5rem;
}

.competence:hover {
  background-color: #262626;
  color: #ffffff;
}
</style>