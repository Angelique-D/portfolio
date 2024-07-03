<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import {mdiGithub, mdiLinkedin, mdiEmail, mdiHome} from "@mdi/js";

const route = useRoute();
const thisRouteNeedHome = computed(() => route.path === '/hangmangame');
</script>

<template>
  <div class="socialMediaContainer">
    <ul>
      <li>
        <a href="mailto:angelique.didillon@gmail.com" target="_blank" rel="noopener noreferrer">
          <v-icon :icon="mdiEmail"/>
        </a>
      </li>

      <li>
        <a href="https://github.com/Angelique-D" target="_blank" rel="noopener noreferrer">
          <v-icon :icon="mdiGithub"/>
        </a>
      </li>

      <li>
        <a href="https://www.linkedin.com/in/ang%C3%A9lique-didillon-76a445257/" target="_blank"
          rel="noopener noreferrer">
          <v-icon :icon="mdiLinkedin"/>
        </a>
      </li>

      <li v-if="thisRouteNeedHome">
        <router-link to="/">
          <v-icon :icon="mdiHome"/>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import "../styles/settings.scss";

.socialMediaContainer {
  position: fixed;
  z-index: 2;
  bottom: 10px;
  left: 5px;

  ul {
  list-style: none;

  li {
    a {
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
}


</style>
