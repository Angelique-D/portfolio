<script setup>
import { onMounted, ref } from 'vue'
import { mdiRestart, mdiHeart } from "@mdi/js";

const alphabet = ref(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
   'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y']);
const words = ref(['pomme', 'banane', 'poire', 'ananas', 'orange','melon', 'fraise', 'bleuet', 'bébé']);
const countTry = ref(5);
const isCharFound = ref(false);
const nbCharFound = ref(0);
const message = ref("");
const isDisabled = ref({});


function randomStringInArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

const word = ref(randomStringInArray(words.value));

console.log(word.value);

function getArrayOfChar(word) {
  let charIndex = 0;
  const arrayOfChar = [];
  while (charIndex <= word.value.length - 1) {
    if (charIndex === 0) {
      arrayOfChar.push(word.value[charIndex].toUpperCase());
      charIndex++;
    } else {
      arrayOfChar.push(word.value[charIndex]);
      charIndex++;
    }
  }
  return arrayOfChar;
}

// À refaire
function removeAccent(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const showChars = ref(getArrayOfChar(word))
const charVisibility = ref(showChars.value.map(() => false));

const toggleCharVisibility = (index) => {
  charVisibility.value[index] = !charVisibility.value[index];
}

function handlerBtn(value) {
  isCharFound.value = false;
  let index = 0;
  let charIndex = "";

  while (index <= showChars.value.length - 1) {
    charIndex = removeAccent(showChars.value[index].toLowerCase());

    if (value === charIndex) {
      if (nbCharFound.value === showChars.value.length - 1) {
        toggleCharVisibility(index);
        message.value = "Bravo vous avez gagné !";
        break;
    } else {
        isCharFound.value = true;
        nbCharFound.value++;
        toggleCharVisibility(index);
        message.value = `Vous avez trouvé ${nbCharFound.value} lettre.`
      }
    } else if (index === showChars.value.length - 1 && !isCharFound.value) {
      countTry.value--;
      if (countTry.value === 0) {
        message.value = "Vous avez perdu !";
      } else {
        message.value = "Pas de chance, essayez une autre lettre !";
      }
    }
    index++;
  }
  isDisabled.value[value] = true;

}

function restart() {
  word.value = randomStringInArray(words.value);

  countTry.value = 5;
  nbCharFound.value = 0;
  message.value = "";

  alphabet.value.forEach(char => {
    isDisabled.value[char] = false;
  });

  showChars.value = getArrayOfChar(word.value);
  charVisibility.value = showChars.value.map(() => false);
}


console.log(nbCharFound.value)
console.log(word.value.length)
console.log(showChars.value.length)

onMounted(() => {

});
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="height">
        <h3 class="title text-center">
          Jeux du pendu
        </h3>
      </v-col>

      <v-col cols="12" class="d-flex justify-center align-center">
        <div v-for="(heart, index) in countTry" :key="index" class="hearts-container">
          <v-icon class="heart-icon ml-2" :icon="mdiHeart"></v-icon>
        </div>
      </v-col>

      <v-col cols="12" class="d-flex align-center justify-center">
          <div
            class="borderChar"
            v-for="(char, index) in showChars"
            :key="index"
          >
            <div
              class="char"
              :class="{ hidden: !charVisibility[index] }"
              ref="char"
            >
            {{ char.valueOf() }}
            </div>
        </div>
      </v-col>
    </v-row>

    <div class="container-alphabet">
      <v-row class="justify-center">
        <v-col
          cols="12"
          md="8"
          class="d-flex flex-wrap justify-center align-center"
        >
          <div class="container-btn" v-for="(alpha, index) in alphabet" :key="index">
            <v-btn class="btn" @click="handlerBtn( alpha )" :disabled="isDisabled[alpha]">
              {{ alpha.valueOf() }}
            </v-btn>
          </div>
        </v-col>
        <v-col
          cols="12"
          class="d-flex flex-column justify-center align-center"
          v-if="countTry.valueOf() === 0 || message.valueOf() === 'Bravo vous avez gagné !'  "
        >
          <div>
            {{ message.valueOf() }}
          </div>
          <div>
            <v-btn @click="restart()" variant="tonal" :append-icon="mdiRestart">
              Recommencer
            </v-btn>
          </div>
        </v-col>
        <v-col
          cols="12"
          class="d-flex justify-center align-center"
          v-else
        >
            {{ message.valueOf() }}
        </v-col>
      </v-row>
    </div>

  </v-container>
</template>

<style scoped lang="scss">
.v-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 599px) {
    flex-direction: column;
  }

  .heart-icon {
    color: rgb( 175, 26, 80);
  }

  .hidden {
    visibility: hidden;
  }

  .borderChar {
    height: 38px;
    width: 38px;
    border-bottom: #0B032F solid 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;

    .char {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 35px;
      width: 35px;
      font-family: 'ABeeZee', sans-serif;
      font-size: 25px;
    }
  }

  .container-alphabet {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;

    .container-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 80px;
      width: 80px;
    }
  }
}


</style>
