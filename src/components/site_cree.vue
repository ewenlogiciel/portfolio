<script setup>
const skills = [
  'Vue.js',
  'Javascript',
  'TailwindCSS',
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

<template>
  <div class="sitecree_container">

    <h2>Site web créé avec</h2>
    <div id="competences">

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

<style scoped>
.sitecree_container{
  width: 60vw;
  margin-bottom: 15vh;
}

#competences{
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
}

.competence:hover {
  background-color: #262626;
  color: #ffffff;
}

img{
  width: 1.5rem;
  margin-right: 0.5rem;
}
</style>