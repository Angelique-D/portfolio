<script setup>
import { ref } from 'vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import SocialMedia from '@/components/SocialMedia.vue';

const years = ref([
  {
    bgcolor: 'dot-tertiary',
    year: '2014',
    title: 'Animatrice',
    text: 'Mon tout premier travail a été être animatrice dans un camp de vacance pour enfant.'
  },
  {
    bgcolor: 'dot-secondary',
    year: '2014-2015',
    title: 'Cuisinière',
    text: "Pendant ces 2 années, j'ai travaillé en restauration dans les cuisines."
  },
  {
    bgcolor: 'dot-tertiary',
    year: '2016-2021',
    title: 'Préposée aux bénéficiaires',
    text: "J'ai travaillé comme Préposée aux bénéficiaires (Aide-Soignante) et en juin 2021 je suis arrivé en France."
  },
  {
    bgcolor: 'dot-secondary',
    year: '2022',
    title: 'Autodidacte',
    text: "Je me suis intéressée au code et j'ai commencée regardé des vidéos sur OpenClassroom. J'ai participé à la Nurserie, un programme de découverte sur les métiers autour de l'informatique concu par M2i et l'Afpa."
  },
  {
    bgcolor: 'dot-tertiary',
    year: '2023-2024',
    title: 'Etudiante',
    text: "J'ai fait la formation pour le Titre Professionnel de Développeur Web et Web Mobile chez M2i. Actuellement, je suis à la recherche d'une alternance pour un bac+3/4."
  },
])

const skills = ref([
  {
    name: "HTML",
    logo: ""
  },
  {
    name: "CSS",
    logo: ""
  },
  {
    name: "JAVASCRIPT",
    logo: ""
  },
  {
    name: "VUEJS",
    logo: ""
  },
  {
    name: "PHP",
    logo: ""
  },
  {
    name: "NODEJS",
    logo: ""
  },
  {
    name: "NESTJS",
    logo: ""
  },
  {
    name: "JAVA",
    logo: ""
  },
  {
    name: "BOOTSTRAP",
    logo: ""
  },
  {
    name: "VUETIFY",
    logo: ""
  },
  {
    name: "DBEAVER",
    logo: ""
  },
  {
    name: "MONGODB",
    logo: ""
  },
  {
    name: "PHPMYADMIN",
    logo: ""
  },
  {
    name: "PRISMA",
    logo: ""
  },
  {
    name: "MONGOOSE",
    logo: ""
  },
])
</script>

<template>
  <Navbar />
  <v-container fluid>
    <div class="header-timeline ml-8 mt-10">
      <v-row>
        <v-col cols="10">
          <h3>╰┈➤ À propos de moi</h3>
          <p>Je suis une Québecoise qui cherche à faire sa place dans le monde l'informatique, en France.</p>
        </v-col>
      </v-row>
    </div>
    <div class="container-timeline">
      <v-timeline
      direction="horizontal">
        <v-timeline-item
        v-for="(year, i) in years"
        :key="i"
        :dot-color="year.bgcolor"
        size="small">
          <template v-slot:opposite>
            <div :class="`pt-1 headline font-weight-bold`" v-text="year.year"></div>
          </template>
          <div>
            <h2 :class="`mt-n1 headline font-weight-light mb-4 text-tertiary`" v-text="year.title"/>
            <div v-text="year.text" />
          </div>
        </v-timeline-item>
      </v-timeline>
    </div>
    <div class="container-myskills">
      <v-row>
        <v-col cols="10">
          <h3>╰┈➤ Mes skills</h3>
          <div
          class="skills"
          v-for="skill in skills">
          <v-col cols="2">
            <img :src="skill.logo" :alt="skill.name">
            <h4>{{ skill.name }}</h4>
          </v-col>
          </div>
        </v-col>
      </v-row>
    </div>
    <SocialMedia/>
  </v-container>
  <Footer />
</template>

<style scoped lang="scss">
@import "../styles/settings.scss";

.dot-secondary {
  background: #FFC1A3 !important;
}

.title-light {
    color: $secondary;
}

.dot-tertiary {
  background: #0B032F !important;
}

.text-tertiary {
    color: $secondary;
}

.v-container {
  font-family: 'ABeeZee', sans-serif;
  background-color: $primary;
  color: $tertiary;
  margin-top: 60px;
  display: flex;
  flex-direction: column;

  .header-timeline {
    margin-left: 350px;
  }

  .container-timeline {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
    margin: 25px;
    margin-bottom: 6px;
    height: 77.4vh;
    color: whitesmoke;
    background-color: $tertiary;
    width: 1350px;
    height: 600px;
    align-self: center;
    border-radius: 25px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
              0 6px 6px rgba(0, 0, 0, 0.23);
  }

  .container-myskills {
    display: flex;
    .skills {
      display: flex;
    }
  }
}
</style>
