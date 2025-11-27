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
        <span class="w-[25px] h-[3px] bg-[#f2f2f2] my-[3px] transition-all duration-300 ease-in-out rounded-[3px]"></span>
        <span class="w-[25px] h-[3px] bg-[#f2f2f2] my-[3px] transition-all duration-300 ease-in-out rounded-[3px]"></span>
        <span class="w-[25px] h-[3px] bg-[#f2f2f2] my-[3px] transition-all duration-300 ease-in-out rounded-[3px]"></span>
      </button>

      <nav :class="{ 'menu-open': isMenuOpen }">
        <ul>
          <li><router-link to="/#accueil" @click="closeMenu">Accueil</router-link></li>
          <li><router-link to="/#competences" @click="closeMenu">Compétences</router-link></li>
          <li><router-link to="/#projets" @click="closeMenu">Projets</router-link></li>
          <li><router-link to="/#apropos" @click="closeMenu">À propos</router-link></li>
        </ul>
      </nav>
    </header>
  </template>

  <style scoped>
  @media (max-width: 768px) {
    nav {
      position: fixed !important;
      top: 0 !important;
      left: 0 !important;
      width: 100vw !important;
      height: 100vh !important;
      background-color: black !important;
      display: none;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      border: none !important;
      border-radius: 0 !important;
      padding: 0 !important;
      backdrop-filter: none !important;
      transform: none !important;
    }

    nav.menu-open {
      display: flex !important;
    }

    nav ul {
      list-style: none !important;
      display: flex !important;
      flex-direction: column !important;
      align-items: center !important;
      gap: 3rem !important;
      padding: 0 !important;
      margin: 0 !important;
      width: 100% !important;
    }

    nav li {
      width: auto !important;
      margin: 0 !important;
    }

    nav li:not(:last-child)::after {
      display: none !important;
      content: none !important;
    }

    nav a {
      font-size: 2rem !important;
      color: #f2f2f2 !important;
      text-decoration: none !important;
      transition: color 0.3s ease !important;
    }

    nav a:hover {
      color: #ababab !important;
    }
  }
  </style>