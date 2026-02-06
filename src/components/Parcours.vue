<template>
  <div id="parcours" class="w-[60vw] mx-auto mb-[10vh] max-md:w-[90vw]">
    <h2>Parcours</h2>

    <div class="relative" data-aos="fade-right">
      <div class="absolute left-[7px] top-0 bottom-0 w-[2px] bg-white/50"></div>

      <div
        v-for="(item, index) in parcours"
        :key="index"
        class="relative pl-10 pb-10 last:pb-0 group"
      >
        <div
          class="absolute left-0 top-1 w-4 h-4 rounded-full border-2 border-white/50 bg-black transition-all duration-300 group-hover:border-white"
        ></div>

        <div
          class="border border-white/30 rounded-[0.4rem] p-5 transition-all duration-300 hover:bg-[#191919] hover:border-white/50"
        >
          <div class="flex flex-wrap items-center gap-3 mb-3">
            <span class="text-xs font-mono text-white/60 tracking-wider">{{ item.periode }}</span>
            <span
              class="text-xs px-2 py-1 rounded-sm border transition-colors duration-300"
              :class="typeClasses[item.type]"
            >
              {{ item.type }}
            </span>
          </div>

          <h3 class="mt-0 mb-2 text-white/90 transition-colors duration-300 group-hover:text-white">
            {{ item.titre }}
          </h3>

          <p class="mt-0 mb-3 text-[#a5a5a5] text-sm flex items-center gap-2">
            <svg class="w-4 h-4 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            {{ item.lieu }}
          </p>

          <p class="mt-0 mb-0 text-[#a5a5a5] text-sm leading-relaxed transition-colors duration-300 group-hover:text-white/70">
            {{ item.description }}
          </p>

          <div v-if="item.tags && item.tags.length" class="flex flex-wrap gap-2 mt-4">
            <span
              v-for="tag in item.tags"
              :key="tag"
              class="text-xs px-2 py-1 border border-white/20 rounded-sm text-white/50 transition-colors duration-300 hover:border-white/40 hover:text-white/70"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const parcours = [
  {
    periode: '2023 — en cours',
    type: 'Formation',
    titre: 'BUT MMI — Métiers du Multimédia et de l\'Internet',
    lieu: 'IUT de Troyes',
    description: 'Spécialité développement web et dispositifs interractifs',
    tags: ['Développement Web', 'Design', 'Gestion de projet', 'Communication']
  },
  {
    periode: '2020 - 2023',
    type: 'Diplôme',
    titre: 'Baccalauréat Général',
    lieu: 'Lycée Anna-Judic',
    description: 'Spécialités Anglais Monde Contemporain et Sciences Économiques et Sociales.',
  }
]

const typeClasses = {
  'Formation': 'border-blue-500/50 text-blue-400/80 hover:border-blue-400 hover:text-blue-300',
  'Diplôme': 'border-emerald-500/50 text-emerald-400/80 hover:border-emerald-400 hover:text-emerald-300',
  'Stage': 'border-amber-500/50 text-amber-400/80 hover:border-amber-400 hover:text-amber-300',
  'Expérience': 'border-purple-500/50 text-purple-400/80 hover:border-purple-400 hover:text-purple-300'
}
</script>
