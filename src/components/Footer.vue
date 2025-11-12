<script setup>

</script>

<template>
  <!--<div class="circle"></div>-->

  <footer>

    <div class="footer2">
      <p>© 2025 Ewen D'Avanzo | Tous droits réservés.</p>

      <p>ewen.davanzo@gmail.com</p>

    </div>

      <div class="footer-links">
        <a href="https://github.com/ewenlogiciel" target="_blank" class="icon-link mobile-only">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.16c-3.34.73-4.03-1.61-4.03-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.84 2.81 1.31 3.5 1 .11-.77.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.92 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.51.12-3.15 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.64.24 2.85.12 3.15.77.84 1.23 1.91 1.23 3.22 0 4.6-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.3c0 .32.22.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>

        <a href="https://www.linkedin.com/in/ewendavanzo/" target="_blank" class="icon-link mobile-only">
          <img src="../assets/logos/linkedin-svgrepo-com.svg" alt="LinkedIn" class="icon-img">
        </a>
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}

.footer-links {
  display: none;
  gap: 1rem;
}

.mobile-only {
  display: none;
}

.icon-link svg path {
  fill: gray;
  transition: fill 0.3s ease;
}

.icon-link:hover svg path {
  fill: white;
}

.icon-img {
  width: 24px;
  height: 24px;
  filter: grayscale(100%);
  transition: filter 0.3s ease;
}

.icon-link:hover .icon-img {
  filter: brightness(0) invert(1);
}

@media (max-width: 768px) {

  footer{
    flex-direction: column;
    align-items: center;
  }

  .footer2 {
    width: 90vw;
    flex-direction: row;
    gap: 1rem;
    padding: 1rem 0;
  }

  .footer-links {
    display: flex;
  }

  .mobile-only {
    display: block;
  }
}
</style>