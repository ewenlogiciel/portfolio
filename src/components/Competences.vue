<template>
<div id="competences" class="competence_container">

  <h2>Compétences</h2>
  <div class="competences_grid" data-aos="fade-right">

    <div
        v-for="skill in skills"
        :key="skill"
        class="competence"
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

const skills = [
  'Vue.js',
  'Symfony',
  'Docker',
  'Javascript',
  'TailwindCSS',
  'PHP',
  'MySQL',
  'Figma',
  'Wordpress',
  'GraphQL',
  'Unity'
]

const logos = Object.fromEntries(
    Object.entries(import.meta.glob('@/assets/logos/*.{png,jpg,svg}', { eager: true }))
        .map(([path, module]) => {
          const fileName = path.split('/').pop().split('.')[0].toLowerCase()
          return [fileName, module.default]
        })
)

const skillKey = (name) => {
  return name.toLowerCase().replace('.', '').replace(/\s+/g, '')
}
</script>

<style scoped>

.competence_container{
  width: 60vw;
  margin-bottom: 10vh;
}

.competences_grid{
  width: 45vw;
  display: flex;
  column-gap: 0.5vw;
  flex-wrap: wrap;
}

.competence {
  cursor: pointer;
  margin-bottom: 0.5rem;
  display: flex;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.5rem;
  border-radius: 0.2rem;
  align-items: center;
  transition: background-color 0.3s ease;
}

.competence:hover {
  background-color: #262626;
}

.competence:hover p {
  color: white;
}

.competence:hover img {
  filter: brightness(1.3);
}

img{
  width: 1.5rem;
  margin-right: 0.5rem;
  transition: filter 0.3s ease;
}

p {
  transition: color 0.3s ease;
}

@media (max-width: 768px) {
  .competence_container {
    width: 90vw;
  }

  .competences_grid {
    width: 90vw;
  }
}
</style>