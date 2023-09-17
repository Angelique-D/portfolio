<script setup>
import Header from './components/Header.vue';
</script>

<template>
  <v-app>
    <Header />
    <div style="margin-top: 120px;">
      <router-view />
    </div>
  </v-app>
</template>

