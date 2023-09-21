<script setup>
import { ref } from 'vue'

const isOpen = ref(false);
const setIsOpen = () => {
   return isOpen.value = !isOpen.value;
}
const quality = ref([
    'Québecoise',
    'Curieuse',
    'Rigoureuse',
    'Persévérante',
    'Travaillante'
])

</script>

<template>
    <div class="main-container">
        
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
        <div class="questions">
            <p>Vous recherchez une développeuse <span class="quality">{{ quality[0] }}</span> ?</p> 
        </div>
        <!-- <div class="flower-banner"></div> -->
    </div>
</template>



<style scoped lang="scss">
@import "../styles/settings.scss";

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
