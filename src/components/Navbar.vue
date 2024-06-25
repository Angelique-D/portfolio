<script setup>
import {computed, ref} from 'vue';
import { mdiDownload, mdiMenu } from '@mdi/js';
import { useDisplay } from "vuetify";

const { smAndUp, smAndDown, xs } = useDisplay();

const listProjects = ref([
  {
    title: 'GamesShop',
    link: '/'
  },
]);

const titleClass = computed(() => ({
  'title': true,
  'ml-15': smAndUp.value,
  'ml-5': smAndDown.value,
}));

const isXsBreakpoint = computed(() => xs.value);
const drawer = ref(false);
</script>

<template>
  <v-app-bar
    scroll-behavior="hide"
    scroll-threshold="100"
   :elevation="0"
    color="primary"
    dark
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
      <v-btn icon @click="drawer = !drawer" class="text-light">
        <v-icon :icon="mdiMenu"/>
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


      <div class="mr-10 link font-weight-bold">
        <a href="./src/assets/pdf/CV-AngeliqueDidillon.pdf" download>
          Mon cv
          <v-icon :icon="mdiDownload" />
        </a>
      </div>
    </template>

    <v-navigation-drawer
    v-model="drawer"
    temporary
    right
    >
      <v-list>
        <v-list-item>
          <v-list-item-title>
            <router-link to="/about" @click="drawer = false">
              À propos de moi
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

        <v-list-item>
          <v-list-item-title>
            <a href="./src/assets/pdf/CV-AngeliqueDidillon.pdf" download="CV-AngéliqueDidillon" target="_blank" @click="drawer = false">
              Mon CV
              <v-icon>mdi-download</v-icon>
            </a>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
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
}

</style>
