<script setup>
import { ref } from 'vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { mdiChevronDoubleDown } from '@mdi/js';
import Egg from '@/assets/svg/Egg.svg';

const isOpen = ref(false);
const setIsOpen = () => {
  return isOpen.value = !isOpen.value;
}
</script>

<template>
  <Navbar />
  <v-container fluid>
    <div class="head">
      <v-row>
        <v-col cols="5">
          <div style="position: relative;" class="mt-16">
            <h3>Bienvenue,</h3>
            <h3>Je m'appelle <span class="myName">Angélique Didillon</span> </h3>
            <span>Développeuse Web et Web Mobile</span>
          </div>
        </v-col>
        <v-col cols="2">
          <div style="
              position: absolute;
              z-index: 9999;
              bottom: 0;
              margin-left: auto;
              margin-right: auto;
              left: 0;
              right: 0;
              text-align: center;">
            <v-icon :icon="mdiChevronDoubleDown" />
          </div>
        </v-col>
        <v-col cols="5">
          <div style="
            position: relative;
            z-index: 9999;"
            class="mt-10"
          >
            <p @click="setIsOpen" class="mr-12 flex-end">
              <span class="point">.</span>
              <span class="point">.</span>
              <span class="point">.</span>
            </p>
            <v-fade-transition>
              <div class="description pa-4" v-show="isOpen">
                <p>
                  Je travail actuellement sur des projets personnels, si mon profil vous intéresse n'hésitez pas à me contacter
                </p>
              </div>
            </v-fade-transition>
          </div>
        </v-col>
      </v-row>
    </div>

    <v-col cols="12" class="mt-16" id="about">
      <div>
        <v-row>
          <v-col cols="12" sm="6">
            <div class="egg"></div>
            <h5 class="title">À PROPOS DE MOI</h5>
          </v-col>

          <v-col cols="12" sm="6">
            <v-card
              class="mt-16"
              :class="[`elevation-${0}`, 'd-flex justify-center align-center']"
            >
              <div class="top-left corner"></div>
              <div class="bottom-right corner"></div>
              <div class="top-left-pink cornerPink"></div>
              <div class="bottom-right-pink cornerPink"></div>
              <v-card-text
                :class="['d-flex justify-center align-center']"
                style="min-height: 200px; max-width: 600px;"
              >
                Bonjour, Je suis canadienne et j'ai découvert une passion pour le développement web et web mobile. Arrivé en France en 2021, je m'autoditacte pour transformer cette passion en métier.
              </v-card-text>
            </v-card>

            <v-card>
              <v-card-text>
                <h4>Mon parcours</h4>
                <v-timeline direction="horizontal">

                </v-timeline>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-col>

    <v-col cols="12" class="mt-16" id="projects">
      <div>
        <v-row>
          <v-col cols="12" sm="6">
            <h5 class="title">MES PROJETS</h5>
          </v-col>
        </v-row>
      </div>
    </v-col>

    <v-col cols="12" class="mt-16" id="contact">
      <div>
        <v-row>
          <v-col cols="12" sm="6">
            <div class="egg"></div>
            <h5 class="title">ME CONTACTER</h5>
          </v-col>
          <v-col cols="12" sm="6">
            <v-form v-model="sendMail">
              <v-row>
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    :counter="20"
                    label="Nom"
                    required
                    hide-details
                  />
                </v-col>

                <v-col cols="12" md="5">
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    :counter="15"
                    label="Email"
                    required
                    hide-details
                  />
                </v-col>
              </v-row>

            </v-form>
          </v-col>
        </v-row>
      </div>
    </v-col>
  </v-container>
  <Footer/>
</template>



<style scoped lang="scss">
@import "../styles/settings.scss";

.v-container {
  padding: 16px 0;
  font-family: 'ABeeZee', sans-serif;

  .head {
    position: relative;
    text-align: center;
    padding: 12px;
    margin-bottom: 6px;
    height: 400px;
    width: 100%;
    color: $secondary;

    h3 {
      .myName {
        font-family: 'Cookie', handwriting;
        font-size: 40px;
      }
    }
  }

  .head::before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 50%;
    background: $primary;
    transform: skew(0deg, 6deg);
  }

  .head::after {
    content: " ";
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 50%;
    background: $primary;
    transform: skew(0deg, -6deg);
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

  .egg {
    position: relative;
    display: block;
    margin-left: 100px;
    margin-top: 50px;
    width: 356px;
    height: 300px;
    background-color: $tertiary;
    overflow: hidden;
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  }

  .egg::before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    background-image: url(../assets/img/fleur.jpg);
    background-position: 50% 0;
    background-size: cover;
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
    right: 0;
    margin-right: 50px;
    display: flex;
    align-items: center;
    width: 500px;
    border-bottom-left-radius: 50px;
    background-color: $tertiary;
    color: $primary;
  }

</style>
