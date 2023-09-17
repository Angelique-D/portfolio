<script setup>
import Header from './components/Header.vue';
</script>

<template>
  <v-app>
    <Header />
    <div style="margin-top: 100px;">
      <router-view />
    </div>
  </v-app>
</template>

