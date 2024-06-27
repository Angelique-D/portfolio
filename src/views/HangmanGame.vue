<script setup>
import { ref } from 'vue'
import { mdiRestart, mdiHeart } from "@mdi/js";
import words from "@/components/hangmanGame/listOfWords";
import NavBarGame from "@/components/NavBarGame.vue";

const alphabet = ref(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
   'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y']);
const countTry = ref(5);
const isCharFound = ref(false);
const nbCharFound = ref(0);
const message = ref("");
const isDisabled = ref({});

function randomStringInArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

const word = ref(randomStringInArray(words));

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

function removeAccent(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const arrayChars = ref(getArrayOfChar(word));
const charVisibility = ref(arrayChars.value.map(() => false));

const toggleCharVisibility = (index) => {
  charVisibility.value[index] = !charVisibility.value[index];
}

function handlerBtn(value) {
  isCharFound.value = false;
  let index = 0;
  let charIndex = "";

  while (index <= arrayChars.value.length - 1) {
    charIndex = removeAccent(arrayChars.value[index].toLowerCase());

    if (value === charIndex) {
      if (nbCharFound.value === arrayChars.value.length - 1) {
        toggleCharVisibility(index);
        message.value = "Bravo vous avez gagné !";
        break;
    } else {
        isCharFound.value = true;
        nbCharFound.value++;
        toggleCharVisibility(index);
        message.value = `Vous avez trouvé ${nbCharFound.value} lettre.`
      }
    } else if (index === arrayChars.value.length - 1 && !isCharFound.value) {
      countTry.value--;
      if (countTry.value === 0) {
        message.value = "Vous avez perdu !";
        charVisibility.value = arrayChars.value.map(() => true);
      } else {
        message.value = "Pas de chance, essayez une autre lettre !";
      }
    }
    index++;
  }
  isDisabled.value[value] = true;

}

function restart() {
  word.value = randomStringInArray(words);

  countTry.value = 5;
  nbCharFound.value = 0;
  message.value = "";

  alphabet.value.forEach(char => {
    isDisabled.value[char] = false;
  });

  arrayChars.value = word.value.split('');
  charVisibility.value = arrayChars.value.map(() => false);
}

</script>

<template>
  <v-container>
    <v-row class="maxHeightRow">
      <v-col cols="12" class="d-flex align-center justify-center maxHeight">
        <h3 class="title ">
          Jeux du pendu
        </h3>
      </v-col>

      <v-col cols="12" class="d-flex align-center justify-center maxHeight">
        <div v-for="(heart, index) in countTry" :key="index" class="hearts-container">
          <v-icon class="heart-icon ml-2" :icon="mdiHeart"></v-icon>
        </div>
      </v-col>

      <v-col cols="12" class="d-flex align-center justify-center maxHeight">
          <div
            class="borderChar"
            v-for="(char, index) in arrayChars"
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
      <v-row class="d-flex justify-center">
        <v-col
          cols="12"
          lg="10"
          md="11"
          sm="10"
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

  <NavBarGame></NavBarGame>
</template>

<style scoped lang="scss">
.v-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .maxHeight{
    @media (max-width: 958px) {
      max-height: 50px !important;
    }
  }

  .maxHeightRow{
    @media (max-width: 958px) {
      max-height: 200px !important;
    }
  }

  @media (max-width: 958px) {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
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

    @media (max-width: 599px) {
      width: 22px;
    }

    .char {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 35px;
      width: 35px;
      font-family: 'ABeeZee', sans-serif;
      font-size: 25px;

      @media (max-width: 599px) {
          width: 20px;
      }
    }
  }

  .container-alphabet {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;

    @media (max-width: 599px) {

    }
    .container-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 80px;
      width: 80px;

      @media (max-width: 599px) {
        height: 40px;
        width: 20px;
        margin: 12px;
      }

      .v-btn {
        @media (max-width: 958px) {
          min-width: 0 !important;
        }
      }
    }
  }
}

</style>
