<template>
    <div class="d-flex justify-center">
        <div class="w-70">
            <v-row>
                <v-col cols="4" v-for="item in items">
                    <v-img src="@/assets/img/cult_card.jpg" />
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([
    "../assets/img/cult_card.jpg",
    "../assets/img/cult_card.jpg",
    "../assets/img/cult_card.jpg",
    "../assets/img/cult_card.jpg",
    "../assets/img/cult_card.jpg",
    "../assets/img/cult_card.jpg",
    "../assets/img/cult_card.jpg",
    "../assets/img/cult_card.jpg",
    "../assets/img/cult_card.jpg",
    "../assets/img/cult_card.jpg",
    "../assets/img/cult_card.jpg",
    "../assets/img/cult_card.jpg",
    "../assets/img/cult_card.jpg",
]);

</script>

<style scoped>
.w-70 {
    width: 70%;
}
</style>