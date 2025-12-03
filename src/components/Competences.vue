<template>
<div id="competences" class="w-[60vw] mb-[10vh] max-md:w-[90vw]">

  <h2>Compétences</h2>
  <div class="w-[60vw] flex gap-x-[0.5vw] flex-wrap max-md:w-[90vw]" data-aos="fade-right">

    <div
        v-for="skill in skills"
        :key="skill"
        class="cursor-pointer mb-2 flex border border-white/30 p-2 rounded-sm items-center transition-colors duration-300 hover:bg-[#262626] group"
    >
      <img
          v-if="logos[skillKey(skill)]"
          :src="logos[skillKey(skill)]"
          :alt="skill + ' logo'"
          class="w-6 h-auto mr-2 transition-[filter] duration-300 group-hover:brightness-[1.3]"
      />
      <p class="text-[#a5a5a5] font-medium m-0 transition-colors duration-300 group-hover:text-white">{{ skill }}</p>
    </div>
  </div>

</div>

</template>

<script setup>

const skills = [
  'HTML',
  'CSS',
  'PHP',
  'Javascript',
  'Vue.js',
  'Nuxt',
  'Symfony',
  'TailwindCSS',
  'Docker',
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