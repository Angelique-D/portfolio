<script setup>
import { ref } from 'vue';
import { mdiDownload } from '@mdi/js';

const listProjects = ref([
  {
    title: 'GamesShop',
    link: '/'
  },
]);

</script>

<template>
  <v-app-bar
    absolute
   :elevation="0"
   :height="90"
  >
    <router-link to="/">
      <v-app-bar-title class="title" :class="{
        'ml-15': $vuetify.display.smAndUp,
        'ml-5': $vuetify.display.smAndDown
      }">
        <p class="firstName">
          A
        </p>
        <p class="lastName">
          D
        </p>
      </v-app-bar-title>
    </router-link>

    <template v-slot:append>
      <div class="mr-10 listNav font-weight-bold">
        <a href="#">À propos</a>
      </div>
      <div class="mr-10 listNav font-weight-bold">
        <a href="#">Mes projets</a>
      </div>

      <div class="mr-10 listNav font-weight-bold">
        <a href="#">Contact</a>
      </div>

      <div class="mr-10 listNav font-weight-bold">
        <a href="./src/assets/pdf/CV-AngeliqueDidillon.pdf" download>
          Mon cv
          <v-icon :icon="mdiDownload" />
        </a>
      </div>
    </template>
  </v-app-bar>
</template>

<style scoped lang="scss">
@import "../styles/settings.scss";

a {
  text-decoration: none;
  .title {
    font-family: 'Cookie', handwriting;
    font-size: 56px;

    .lastName {
      position: relative;
      left: 25px;
      top: -5px;
      color: $tertiary;
    }

    .firstName {
      color: $tertiary
    }
  }
}

.listNav {
  font-family: 'ABeeZee', sans-serif;

  a {
    text-decoration: none;
    color: $tertiary;
  }
}

</style>
