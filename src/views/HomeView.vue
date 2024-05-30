<script setup>
import { ref } from 'vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

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
        <v-col cols="6">
          <div class="mt-16 font-weight-medium">
            <h3>Bienvenue,</h3>
            <h3>Je m'appelle <span class="myName">Angélique Didillon</span> </h3>
            <h3>Développeuse Web et Web Mobile</h3>
          </div>
        </v-col>
        <v-col cols="6">
          <div style="
            position: absolute;
            right: 0;
            top: 9vh;
            z-index: 2;"
          >
            <p @click="setIsOpen" class="mr-12 flex-end">
              <span class="point">.</span>
              <span class="point">.</span>
              <span class="point">.</span>
            </p>
            <v-fade-transition>
              <div class="description pa-4" v-show="isOpen">
                <p>
                  Je suis à la recherche d'une alternance pour le mois de septembre, si mon profil vous intéresse n'hésitez pas à me contacter
                </p>
              </div>
            </v-fade-transition>
          </div>
            <v-card
              class="mt-16"
              :class="[`elevation-${0}`, 'd-flex justify-center align-center bgPrimary']"
            >
              <div class="top-left corner"></div>
              <div class="bottom-right corner"></div>
              <div class="top-left-pink cornerPink"></div>
              <div class="bottom-right-pink cornerPink"></div>
              <v-card-text
                :class="['d-flex justify-center align-center font-weight-medium']"
                style="min-height: 200px; max-width: 600px; font-size: 1rem"
              >
                Bonjour, Je suis canadienne et j'ai découvert une passion pour le développement web et web mobile. Arrivé en France en 2021, je m'autoditacte pour transformer cette passion en métier.
              </v-card-text>
            </v-card>
        </v-col>

      </v-row>
    </div>

  </v-container>
  <Footer/>
</template>



<style scoped lang="scss">
@import "../styles/settings.scss";

.v-container {
  padding: 16px 0;
  font-family: 'ABeeZee', sans-serif;
  background-color: $primary;

  .head {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 12px;
    margin-bottom: 6px;
    height: 89vh;
    width: 100%;
    color: $secondary;

    h3 {
      .myName {
        font-family: 'Cookie', handwriting;
        font-size: 40px;
      }
    }
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

  .bgPrimary {
    background-color: $primary;
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
    background-color: $secondary;
    color: $primary;
  }

</style>
