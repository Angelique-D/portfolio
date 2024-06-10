<script setup>
import { ref } from 'vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import SocialMedia from '@/components/SocialMedia.vue';

const years = ref([
  {
    year: 2021,
    color: 'cyan'
  },
  {
    color: 'green',
    year: '1970',
  },
  {
    color: 'pink',
    year: '1980',
  },
  {
    color: 'amber',
    year: '1990',
  },
  {
    color: 'orange',
    year: '2000',
  },
])
</script>

<template>
  <Navbar />
  <v-container fluid>
    <div class="head">
      <p>bonjour</p>
      <v-timeline align="start" direction="horizontal">
        <v-timeline-item v-for="(year, i) in years" :key="i" :dot-color="year.color" size="small">
          <template v-slot:opposite>
            <div :class="`pt-1 headline font-weight-bold text-${year.color}`" v-text="year.year"></div>
          </template>
          <div>
            <h2 :class="`mt-n1 headline font-weight-light mb-4 text-${year.color}`">
              Lorem ipsum
            </h2>
            <div>
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod
              convenire
              principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi
              sententiae.
            </div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </div>
    <SocialMedia/>
  </v-container>
  <Footer />
</template>

<style scoped lang="scss">
@import "../styles/settings.scss";

.v-container {
  font-family: 'ABeeZee', sans-serif;
  background-color: $primary;

  .head {
    padding: 12px;
    margin-bottom: 6px;
    height: 89.7vh;
    color: $secondary;
  }
}
</style>
