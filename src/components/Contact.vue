<script setup>

</script>

<template>
    <ul class="flex gap-4">
      <!-- GitHub -->
      <li>
        <a href="https://github.com/ewenlogiciel" target="_blank" class="icon-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.16c-3.34.73-4.03-1.61-4.03-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.84 2.81 1.31 3.5 1 .11-.77.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.92 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.51.12-3.15 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.64.24 2.85.12 3.15.77.84 1.23 1.91 1.23 3.22 0 4.6-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.3c0 .32.22.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>
      </li>

      <li>
        <a href="https://www.linkedin.com/in/ewendavanzo/" target="_blank" class="icon-link" width="32" height="32" viewBox="0 0 24 24">
          <img src="../assets/logos/linkedin-svgrepo-com.svg" alt="LinkedIn" class="icon-img">
        </a>
      </li>

      <li>
        <a href="mailto:ewen.davanzo@gmail.com" class="icon-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M12 13.065l-11.707-7.065h23.414L12 13.065zM0 4v16h24V4H0zm22 2.435l-10 6.048-10-6.048V6l10 6.048L22 6v.435z"/>
          </svg>
        </a>
      </li>
    </ul>

</template>

<style scoped>
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
  /* transforme le SVG en blanc */
  filter: brightness(0) invert(1);
}

.flex.gap-4{
  position: fixed;
  list-style: none;
  top: 5vh;
  left: 88%;
}

li{
  margin-bottom: 2rem;
}
</style>