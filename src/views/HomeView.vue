<script setup>
import { ref } from 'vue';
import { useDisplay } from 'vuetify';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import SocialMedia from '@/components/SocialMedia.vue';

const { md } = useDisplay();

const isOpen = ref(false);
const setIsOpen = () => {
  return isOpen.value = !isOpen.value;
}
</script>

<template>
  <Navbar/>
  <v-container class="fill-height" fluid>
      <v-row>
        <v-col
          cols="12"
          md="6"
          class="d-flex align-center justify-center">
          <div class="container-text">
            <h4>Bienvenue,</h4>
            <p>Je m'appelle <span class="myName">Angélique Didillon</span></p>
            <p>Développeuse Web et Web Mobile</p>
          </div>
        </v-col>

        <v-col
          cols="12"
          md="6"
          :class="[$vuetify.display.md ? '' : 'mt-5', 'd-flex', 'justify-center']"
          >
          <div class="container-situation">
            <p @click="setIsOpen" class="mr-12 flex-end">
              <span class="point">.</span>
              <span class="point">.</span>
              <span class="point">.</span>
            </p>
            <v-fade-transition>
              <div class="description pa-4" v-show="isOpen">
                <v-row>
                  <v-col cols="12" class="d-flex">
                    <p>
                      Je suis à la recherche d'une alternance pour le mois de septembre, si mon profil vous intéresse
                      n'hésitez pas à me contacter
                    </p>
                  </v-col>
                </v-row>
              </div>
            </v-fade-transition>
          </div>

          <v-card
            :class="[`elevation-${0}`, 'bgPrimary']"
          >
            <div class="top-left corner"></div>
            <div class="bottom-right corner"></div>
            <div class="top-left-pink cornerPink"></div>
            <div class="bottom-right-pink cornerPink"></div>
            <v-card-text
              :class="['d-flex ml-5 mr-5 mt-5 mb-5 justify-center align-center font-weight-medium text-center text-tertiary']"
              style="min-height: 200px; max-width: 580px; font-size: 1rem"
            >
              Je suis motivée à travailler sur des projets innovants et à continuer d'apprendre et de m'adapter aux
              nouvelles technologies. Mon objectif est de contribuer de manière significative à des équipes de
              développement dynamiques et de créer des solutions web de qualité.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <SocialMedia style="position: absolute;"/>
  </v-container>


  <Footer/>
</template>


<style scoped lang="scss">
@import "../styles/settings.scss";

.v-container {
  padding: 16px 0;
  font-family: 'ABeeZee', sans-serif;
  background-color: $primary;
  color: $secondary;


 .container-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  font-weight: bold;

  .myName {
    font-family: 'Cookie', handwriting;
    font-size: 40px;
  }
 }


  .container-situation {
    position: absolute;
    right: 0;
    top: 9vh;
    z-index: 3;
  }

  .point {
    font-size: 40px;
    color: $secondary;
    cursor: pointer;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;

    & {
      border-radius: 100%;
      border: var(--size) solid var(-&-color);
      margin: 1.5px;
    }

    &:nth-child(1) {
      animation: preloader .6s ease-in-out alternate infinite;

    }

    &:nth-child(2) {
      animation: preloader .6s ease-in-out alternate .2s infinite;
    }

    &:nth-child(3) {
      animation: preloader .6s ease-in-out alternate .4s infinite;
    }

    @keyframes preloader {
      100% {
        transform: scale(2);
        color: $point-color;
      }
    }
  }

  .title {
    position: relative;
    left: 300px;
    bottom: 130px;
    font-size: 55px;
    color: $primary;
    font-family: 'Cookie', handwriting;
  }

  .corner {
    position: absolute;
    background: none;
    height: 40%;
    width: 30%;
  }

  .cornerPink {
    position: absolute;
    background: none;
    height: 35%;
    width: 28%;
  }

  .top-left {
    top: 0;
    left: 0;
    border-radius: 5px 0 0;
    border-top: 6px solid $tertiary;
    border-left: 6px solid $tertiary;
  }

  .top-left-pink {
    top: 8px;
    left: 8px;
    border-radius: 5px 0 0;
    border-top: 6px solid $secondary;
    border-left: 6px solid $secondary;
  }

  .bottom-right {
    bottom: 0;
    right: 0;
    border-radius: 0 0 0 5px;
    border-bottom: 6px solid $tertiary;
    border-right: 6px solid $tertiary;
  }

  .bottom-right-pink {
    bottom: 8px;
    right: 8px;
    border-radius: 0 0 0 5px;
    border-bottom: 6px solid $secondary;
    border-right: 6px solid $secondary;
  }

}

.description {
  position: absolute;
  right: 50px;
  width: 500px;
  align-items: center;
  padding: 10px;
  border-bottom-left-radius: 50px;
  background-color: $secondary;
  color: $primary;

  @media (max-width: 599px) {
    width: 300px;
  }
}

</style>
