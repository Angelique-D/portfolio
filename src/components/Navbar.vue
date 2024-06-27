<script setup>
import {computed, ref} from 'vue';
import {mdiDownload, mdiMenu} from '@mdi/js';
import {useDisplay} from "vuetify";

const {smAndUp, smAndDown, sm, xs} = useDisplay();

const listProjects = ref([
  {
    title: 'GamesShop',
    link: '/'
  },
]);

const listOfGames = ref([
  {
    title: 'Jeux du Pendu',
    link: '/hangmangame'
  },
]);

const titleClass = computed(() => ({
  'title': true,
  'ml-15': smAndUp.value,
  'ml-5': smAndDown.value,
}));

const isXsBreakpoint = computed(() => sm.value || xs.value);
const drawer = ref(false);
</script>

<template>
  <v-app-bar
    scroll-behavior="hide"
    scroll-threshold="100"
    :elevation="0"
  >
    <router-link to="/">
      <v-app-bar-title
        :class="titleClass">
        <p class="firstName">
          A
        </p>
        <p class="lastName">
          D
        </p>
      </v-app-bar-title>
    </router-link>

    <template v-slot:append v-if="isXsBreakpoint">
      <v-btn :icon="mdiMenu" @click="drawer = !drawer" class="text-light">
      </v-btn>
    </template>

    <template v-slot:append v-else>
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

      <v-menu
        transition="slide-y-transition"
      >
        <template v-slot:activator="{ props }">
          <div
            v-bind="props"
            class="mr-10 link font-weight-bold"
          >
            Mes jeux
          </div>
        </template>
        <v-list>
          <v-list-item
            v-for="(game, i) in listOfGames"
            :key="i"
          >
            <v-list-item-title>{{ game.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>


      <div class="mr-10 link font-weight-bold">
        <a href="./src/assets/pdf/CV-AngeliqueDidillon.pdf" download>
          Mon cv
          <v-icon :icon="mdiDownload"/>
        </a>
      </div>
    </template>


  </v-app-bar>

  <v-navigation-drawer
    class="bgTertiary"
    v-model="drawer"
    temporary
    right
  >
    <v-list>
      <v-list-item>
        <v-list-item-title>
          <router-link to="/about" @click="drawer = false">
            À propos
          </router-link>
        </v-list-item-title>
      </v-list-item>

      <v-list-item>
        <v-list-item-title>
          <router-link to="#" @click="drawer = false">
            Mes projets
          </router-link>
        </v-list-item-title>
      </v-list-item>

      <v-list-group value="myGames" style="width: 100% !important;">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            title="Mes jeux"
            class="text-light"
          ></v-list-item>
        </template>

        <v-list-item
          v-for="(game, i) in listOfGames"
          :key="i"
          :value="game.title"
          class="text-light"
        >
          <v-list-item-title>
            <router-link to="/hangmangame" @click="drawer = false">
              {{ game.title }}
            </router-link>
          </v-list-item-title>
        </v-list-item>
      </v-list-group>


      <v-list-item :append-icon="mdiDownload" class="text-white">
        <v-list-item-title>
          <a href="./src/assets/pdf/CV-AngeliqueDidillon.pdf" download="CV-AngéliqueDidillon" target="_blank"
             @click="drawer = false">
            Mon CV
          </a>
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped lang="scss">
@import "../styles/settings.scss";

a {
  color: $secondary;
}

.title {
  font-family: 'Cookie', handwriting;
  font-size: 56px;

  .firstName {
    position: relative;
    top: 6px;
  }

  .lastName {
    position: relative;
    left: 24px;
    top: 0px;
  }
}

.link {
  font-family: 'ABeeZee', sans-serif;
  cursor: pointer;
  color: $secondary;
}

</style>
