<script setup>
import {mdiGithub, mdiHome, mdiLinkedin, mdiMenu} from "@mdi/js";

</script>

<template>
  <div class="socialMedia">
    <v-speed-dial
      location="top center"
      transition="fade-transition"
    >
      <template v-slot:activator="{ props: activatorProps }">
        <v-fab
          v-bind="activatorProps"
          size="large"
          variant="tonal"
          :icon="mdiMenu"
        >
        </v-fab>
      </template>

      <router-link to="/">
        <v-btn key="1" :icon="mdiHome"></v-btn>
      </router-link>
      <v-btn key="2" :icon="mdiGithub"></v-btn>
      <v-btn key="3" :icon="mdiLinkedin"></v-btn>
      <v-btn key="4" icon="$error"></v-btn>
    </v-speed-dial>
  </div>
</template>

<style scoped lang="scss">
.socialMedia {
   position: sticky;
   bottom: 25px;
   left: 2px;
}
</style>
