<script setup>
import { ref } from 'vue';
import Navbar from '@/components/Navbar.vue';
import { mdiChevronDoubleDown } from '@mdi/js';

const isOpen = ref(false);
const setIsOpen = () => {
  return isOpen.value = !isOpen.value;
}
</script>

<template>
  <Navbar />
  <v-container fluid>
    <div class="notification">

    </div>
    <div class="head">
      <v-row>
        <v-col cols="12">
          <div class="container-wrapper">
            <p @click="setIsOpen" class="mr-12 flex-end">
              <span class="point">.</span>
              <span class="point">.</span>
              <span class="point">.</span>
            </p>
            <div class="description pa-4 mr-12" v-show="isOpen">
              <p>
                Recherche activement un stage pour la période du 27 novembre au 22 décembre
              </p>
            </div>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="5">
          <div style="position: relative;" class="mt-16">
            <h3>Bienvenue,</h3>
            <h3>Je m'appelle Angélique Didillon</h3>
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
            z-index: 9999;" class="mt-16">
            <v-img src="../assets/img/fleur.jpg" contain max-height="300" />
          </div>
        </v-col>
      </v-row>
    </div>
    <v-col cols="12" class="mt-16" id="about">
      <div>
        <v-row>
          <div class="egg"></div>
        </v-row>
      </div>
    </v-col>
  </v-container>
  <div class="main-container">

    <!-- <div class="container-wrapper">
      <p @click="setIsOpen" class="mr-12 flex-end">
        <span class="point">.</span>
        <span class="point">.</span>
        <span class="point">.</span>
      </p>
      <div class="description pa-4 mr-12" v-show="isOpen">
        <p>
          Recherche activement un stage pour la période du 27 novembre au 22 décembre
        </p>
      </div> -->

    <!-- </div>
    <div class="questions">
      <p>Vous recherchez une développeuse ?</p>
    </div>
    <div class="flower-banner"></div> -->
  </div>
</template>



<style scoped lang="scss">
@import "../styles/settings.scss";

.v-container {
  padding: 16px 0;

  .head {
    position: relative;
    text-align: center;
    padding: 12px;
    margin-bottom: 6px;
    height: 400px;
    width: 100%;
    color: white;
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

  .egg {
    display: block;
    margin-left: 100px;
    margin-top: 50px;
    width: 356px;
    height: 300px;
    background-color: $tertiary;
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  }
}


.main-container {
  display: block;

  .container-wrapper {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    height: 200px;

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

    .description {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 150px;
      width: 500px;
      border-bottom-left-radius: 50px;
      background-color: $tertiary;
    }
  }

  .questions {
    font-family: 'Allura', handwriting;
    font-size: 40px;
    color: $secondary;
    margin-left: 60px;

    .quality {
      font-size: 3em;
      text-shadow: .03em .03em 0 $tertiary;
    }
  }

  .flower-banner {
    position: absolute;
    bottom: 20vh;
    width: 100%;
    height: 200px;
    background-image: url(../assets/img/fleur.jpg);
    background-size: cover;
    background-position: center;
  }
}
</style>
