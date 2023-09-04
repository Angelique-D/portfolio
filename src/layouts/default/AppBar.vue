<script setup>
import { ref } from 'vue'
import Dropdown from '@/components/Dropdown.vue';

const listProjects = ref([
  {
    title: 'GamesShop',
    link: '/games'
  },
]);
</script>

<template>
  <v-app-bar :elevation="0" :height="100" class="bg-perso">
    <router-link to="/">
      <v-app-bar-title class="ml-15 title">
        Angélique Didillon
      </v-app-bar-title>
    </router-link>
    <template v-slot:append>
      <div class="mr-10 listNav font-weight-bold">
        <a href="#">Mon cv</a>
      </div>
      <div class="mr-10 listNav font-weight-bold">
        <v-menu transition="slide-y-transition">
      <template v-slot:activator="{ props }">
        <a v-bind="props">
          Mes Projets
        </a>
      </template>
      <v-list>
        <v-list-item v-for="(item, i) in listProjects" :key="i">
          <v-list-item-title><RouterLink :to="item.link">{{ item.title }}</RouterLink></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
      </div>
      
      <div class="mr-10 listNav font-weight-bold">
        <a href="#">Mes jeux</a>
      </div>
    </template>
  </v-app-bar>
</template>

<style scoped lang="scss">
.bg-perso {
  background-color: #091644;
}
a {
  text-decoration: none;
  .title {
    font-family: 'Vibur', display;
    color: #fff;
    font-size: 56px;
    rotate: -2deg;
    text-shadow:
    0 0 7px #fff,
    0 0 10px #fff,
    0 0 21px #fff,
    0 0 42px #465fb9,
    0 0 82px #465fb9,
    0 0 92px #465fb9,
    0 0 102px #465fb9,
    0 0 130px #465fb9;
  }
}


.listNav {
  font-family: 'Vibur', handwriting;
  color: #fff;
  font-size: 25px;
  
  text-shadow:
    0 0 7px #fff,
    0 0 10px #fff,
    0 0 21px #fff,
    0 0 42px #465fb9,
    0 0 82px #465fb9,
    0 0 92px #465fb9,
    0 0 102px #465fb9,
    0 0 130px #465fb9;

  
  a {
    text-decoration: none;
    color: white;
  }
}
.listNav:hover {
  animation: pulsate 0.11s ease-in-out infinite alternate;
    
}

@keyframes pulsate {
  100% {
    text-shadow:
      0 0 4px #fff,
      0 0 11px #fff,
      0 0 19px #fff,
      0 0 40px #465fb9,
      0 0 80px #465fb9,
      0 0 90px #465fb9,
      0 0 100px #465fb9,
      0 0 135px #465fb9;
  }
 0% {
    text-shadow:
      0 0 4px #fff,
      0 0 10px #fff,
      0 0 18px #fff,
      0 0 38px #465fb9,
      0 0 73px #465fb9,
      0 0 80px #465fb9,
      0 0 94px #465fb9,
      0 0 120px #465fb9;
  }
}
</style>