<script setup>
import { mdiGithub } from "@mdi/js";
import { mdiLinkedin } from "@mdi/js";
import { mdiEmail } from "@mdi/js";
</script>

<template>
  <ul>
    <li>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <v-icon :icon="mdiEmail"/>
      </a>
    </li>
    <li>
      <a href="https://github.com/Angelique-D" target="_blank" rel="noopener noreferrer">
        <v-icon :icon="mdiGithub"/>
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/ang%C3%A9lique-didillon-76a445257/" target="_blank" rel="noopener noreferrer">
        <v-icon :icon="mdiLinkedin"/>
      </a>
    </li>
  </ul>
</template>

<style scoped lang="scss">
@import "../styles/settings.scss";

ul {
  background-color: $primary;
  position: absolute;
  bottom: 0;
  left: 10px;
  z-index: 2;
  list-style: none;
  margin-bottom: 15px;

  li {
    margin-top: 5px;
    a{
      text-decoration: none;
      .v-icon {
          color: $secondary;
          font-size: 35px;
          transition: transform 0.5s ease;
          &:hover {
            color: $tertiary;
            transform: scale(1.3);
          }
      }

    }


  }
}
</style>
