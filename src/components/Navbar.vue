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
  <v-app-bar :elevation="0" :height="100">

    <router-link to="/">
      <v-app-bar-title class="title" :class="{
        'ml-15': $vuetify.display.smAndUp,
        'ml-5': $vuetify.display.smAndDown
      }">
        <p class="firstName">
          {{ $vuetify.display.smAndDown ? "A" : "Angélique" }}
        </p>
        <p class="lastName" :style="[$vuetify.display.smAndDown ? { 'left': '30px' } : { 'left': '150px' }]">
          {{ $vuetify.display.smAndDown ? "D" : "Didillon" }}
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
        <a href="#">Mon cv <v-icon :icon="mdiDownload" /></a>
      </div>
    </template>
  </v-app-bar>
</template>

<style scoped lang="scss">
@import "../styles/settings.scss";

a {
  text-decoration: none;
  .title {
    font-family: 'Allura', handwriting;
    color: $tertiary;
    font-size: 56px;

    .lastName {
      position: relative;

      &::first-letter {
        color: $tertiary;
      }
    }

    .firstName {
      &::first-letter {
        color: $tertiary
      }
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
