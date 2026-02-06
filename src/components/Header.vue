  <script setup>
  import { ref } from 'vue'

  const isMenuOpen = ref(false)

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
  }

  const closeMenu = () => {
    isMenuOpen.value = false
  }
  </script>

  <template>
    <header>
      <button class="hidden max-md:flex flex-col bg-transparent border-none cursor-pointer p-2.5 z-[1001] fixed top-[3vh] left-[5vw]" @click="toggleMenu" aria-label="Menu">
        <span :class="{ 'rotate-45 translate-y-[9px]': isMenuOpen }" class="w-[25px] h-[3px] bg-[#f2f2f2] my-[3px] transition-all duration-300 ease-in-out rounded-[3px]"></span>
        <span :class="{ 'opacity-0': isMenuOpen }" class="w-[25px] h-[3px] bg-[#f2f2f2] my-[3px] transition-all duration-300 ease-in-out rounded-[3px]"></span>
        <span :class="{ '-rotate-45 -translate-y-[9px]': isMenuOpen }" class="w-[25px] h-[3px] bg-[#f2f2f2] my-[3px] transition-all duration-300 ease-in-out rounded-[3px]"></span>
      </button>

      <nav :class="{ 'max-md:!flex': isMenuOpen }" class="fixed top-[5vh] left-1/2 -translate-x-1/2 border border-white/30 rounded-full p-[2%] whitespace-nowrap z-[1000] backdrop-blur-lg max-md:fixed max-md:top-0 max-md:left-0 max-md:w-screen max-md:h-screen max-md:bg-black max-md:hidden max-md:justify-center max-md:items-center max-md:border-none max-md:rounded-none max-md:p-0 max-md:backdrop-blur-none max-md:-translate-x-0">
        <ul class="list-none flex flex-nowrap items-center justify-center m-0 pr-6 pl-6 max-md:flex-col max-md:gap-12 max-md:p-0 max-md:w-full">
          
          <li class="flex items-center after:content-['·'] after:ml-4 after:mr-4 after:text-[#ababab] last:after:content-none max-md:w-auto max-md:m-0 max-md:after:hidden">
            <router-link to="/#apropos" @click="closeMenu" class="flex items-center text-[#f5f5f5] no-underline transition-colors duration-300 hover:text-[#ababab] max-md:text-[2rem]">À propos</router-link>
          </li>
          <li class="flex items-center after:content-['·'] after:ml-4 after:mr-4 after:text-[#ababab] last:after:content-none max-md:w-auto max-md:m-0 max-md:after:hidden">
            <router-link to="/#competences" @click="closeMenu" class="flex items-center text-[#f5f5f5] no-underline transition-colors duration-300 hover:text-[#ababab] max-md:text-[2rem]">Compétences</router-link>
          </li>
          <li class="flex items-center after:content-['·'] after:ml-4 after:mr-4 after:text-[#ababab] last:after:content-none max-md:w-auto max-md:m-0 max-md:after:hidden">
            <router-link to="/#parcours" @click="closeMenu" class="flex items-center text-[#f5f5f5] no-underline transition-colors duration-300 hover:text-[#ababab] max-md:text-[2rem]">Parcours</router-link>
          </li>
          <li class="flex items-center after:content-['·'] after:ml-4 after:mr-4 after:text-[#ababab] last:after:content-none max-md:w-auto max-md:m-0 max-md:after:hidden">
            <router-link to="/#projets" @click="closeMenu" class="flex items-center text-[#f5f5f5] no-underline transition-colors duration-300 hover:text-[#ababab] max-md:text-[2rem]">Projets</router-link>
          </li>

        </ul>
      </nav>
    </header>
  </template>