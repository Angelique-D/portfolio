<script setup>
import { onMounted, ref } from 'vue'

const alphabet = ref(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
   'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y']);
const words = ref(['pomme', 'banane', 'poire', 'ananas', 'orange','melon', 'fraise', 'bleuet', 'bébé']);
const countTry = ref(5);
const isCharFound = ref(false);
const message = ref("");
const isDisabled = ref({});

function randomStringInArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

const word = ref(randomStringInArray(words.value));

let getArrayOfChar = (word) => {
  let charIndex = 0;
  const arrayOfChar = [];
  while (charIndex < word.value.length) {
    if (charIndex === 0) {
      arrayOfChar.push(word.value[charIndex].toUpperCase());
      charIndex++;
    } else {
      arrayOfChar.push(word.value[charIndex]);
      charIndex++;
    }
  }
  return arrayOfChar;
};

const showChars = ref(getArrayOfChar(word))

function handlerBtn(value) {
  console.log(value);
  isCharFound.value = false;
  for (let i = 0; i < showChars.value.length; i++) {
    if ( value === showChars.value[i]) {
     isCharFound.value = true;
    }
    if (!isCharFound.value) {
      countTry.value--;
      if (countTry.value === 0) {
        message.value = "Vous avez perdu !";
      } else {
        message.value = "Veuillez essayer une autre lettre";
      }
    }
  }
  isDisabled.value[value] = true;
}

console.log(isDisabled.value);

onMounted(() => {
  getArrayOfChar();

  alphabet.value.forEach(char => {
    isDisabled.value[char] = false;
  });
});

</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <h3 class="title text-center">
          Jeux du pendu
        </h3>
      </v-col>
      <v-col cols="12" class="d-flex align-center justify-center">
          <div
            class="borderChar"
            v-for="(char, index) in showChars"
            :key="index"
          >
            <div
              class="char"
              :class="{'opacity100': isCharFound && charFound === char }"
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
            <v-btn class="btn" @click="handlerBtn('alpha')" :disabled="isDisabled[alpha]">
              {{ alpha.valueOf() }}
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12" class="d-flex justify-center align-center">
            {{ message.value }}
        </v-col>
      </v-row>
    </div>

  </v-container>
</template>

<style scoped lang="scss">
.v-container {
  height: 100vh;

  .opacity100 {
    opacity: 100;
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
      opacity: 0;
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
