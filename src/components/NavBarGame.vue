<script setup>
import {mdiGithub, mdiHome, mdiLinkedin, mdiMenu} from "@mdi/js";

</script>

<template>
  <div class="socialMedia">
    <v-speed-dial
      transition="slide-y-transition"
    >
      <template v-slot:activator="{ props: activatorProps }">
        <v-fab
          v-bind="activatorProps"
          location="top end"
          variant="tonal"
          :icon="mdiMenu"
          absolute
          class="mr-2"
          offset
        >
        </v-fab>
      </template>

      <router-link to="/">
        <v-btn key="1" :icon="mdiHome"></v-btn>
      </router-link>
      <a href="https://github.com/Angelique-D">
        <v-btn key="2" :icon="mdiGithub"></v-btn>
      </a>
      <a href="https://www.linkedin.com/in/ang%C3%A9lique-didillon-76a445257/">
        <v-btn key="3" :icon="mdiLinkedin"></v-btn>
      </a>
      <v-btn key="4" icon="$error"></v-btn>
    </v-speed-dial>
  </div>
</template>

<style scoped lang="scss">

</style>
