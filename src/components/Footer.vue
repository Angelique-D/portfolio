<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <v-footer class="justify-center">
    {{ currentYear }} - Portfolio de Angélique Didillon
  </v-footer>
</template>

<style scoped lang="scss">
@import "../styles/settings.scss";
.v-footer {
  background-color: $primary;
  color: $secondary;
  font-family: 'ABeeZee', sans-serif;
  font-size: 14px;
}
</style>
