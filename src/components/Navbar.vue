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
    scroll-behavior="hide"
    scroll-threshold="100"
   :elevation="0"
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
      <router-link to="/about">
        <div class="mr-10 link font-weight-bold">
          À propos
        </div>
      </router-link>

      <router-link to="#">
        <div class="mr-10 link font-weight-bold">
          Mes projets
        </div>
      </router-link>


      <div class="mr-10 link font-weight-bold">
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
  color: $secondary;
}

.title {
  font-family: 'Cookie', handwriting;
  font-size: 56px;

  .lastName {
    position: relative;
    left: 25px;
    top: -5px;
  }
}

.link {
  font-family: 'ABeeZee', sans-serif;
}

</style>
