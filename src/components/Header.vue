<script setup>
import { ref } from 'vue'
import vuetify from '@/plugins/vuetify';

const listProjects = ref([
  {
    title: 'GamesShop',
    link: '/'
  },
]);

</script>

<template>
    <v-app-bar :elevation="0" :height="100" class="bg-perso">
        <router-link to="/">
            <v-app-bar-title class="ml-15 title">
                <p class="firstName">
                    {{ $vuetify.display.smAndDown ? "A" : "Angélique" }}
                </p> 
                <p class="lastName" :style="[$vuetify.display.smAndDown ? {'left': '30px'} : {'left' : '150px'}]">
                    {{ $vuetify.display.smAndDown ? "D" : "Didillon" }}
                </p>
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
                            <v-list-item-title>
                                <RouterLink :to="item.link">{{ item.title }}</RouterLink>
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>

            <div class="mr-10 listNav font-weight-bold">
                <a href="#">Contact</a>
            </div>
        </template>
    </v-app-bar>
</template>

<style scoped lang="scss">
@import "../styles/settings.scss";
.bg-perso {
    background-color: $primary !important;
}
a {
  text-decoration: none;
  .title {
        font-family: 'Allura', handwriting;
        color: $secondary;
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
  color: $secondary;

  a {
    text-decoration: none;
    color: $secondary;
  }
}

</style>