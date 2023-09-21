<script setup>
import { ref } from 'vue'

const isOpen = ref(false);
const setIsOpen = () => {
   return isOpen.value = !isOpen.value;
}
const quality = ref([
    'québecoise',
    'curieuse',
    'rigoureuse',
    'persévérante',
    'travaillante'
])

</script>

<template>
    <div class="main-container">
        <p>Vous recherchez une développeuse {{ quality.value }} ?</p>
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
        <div class="flower-banner"></div>
    </div>
</template>



<style scoped lang="scss">
@import "../styles/settings.scss";


// .loader {
//   background-color: var(--main-color);
//   overflow: hidden;
//   width: 100%;
//   height: 100%;
//   position: fixed;
//   top: 0; left: 0;
//   display: flex;
//   align-items: center;
//   align-content: center; 
//   justify-content: center;  
// }


.main-container {
    display: flex;
    justify-content: flex-end;

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
        flex-direction: column;
        justify-content: center;
        height: 150px;
        width: 500px;
        border-bottom-left-radius: 50px;
        background-color: $tertiary;
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
