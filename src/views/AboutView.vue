<script setup>
import { ref, computed } from 'vue';
import { useDisplay } from 'vuetify'
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import SocialMedia from '@/components/SocialMedia.vue';

const { xs } = useDisplay();

const years = ref([
  {
    year: '2014',
    title: 'Animatrice',
    text: 'Mon tout premier travail a été être animatrice dans un camp de vacance pour enfant.'
  },
  {
    year: '2014-2015',
    title: 'Cuisinière',
    text: "Pendant ces 2 années, j'ai travaillé en restauration dans les cuisines."
  },
  {
    year: '2016-2021',
    title: 'Préposée aux bénéficiaires',
    text: "J'ai travaillé comme Préposée aux bénéficiaires (Aide-Soignante) et en juin 2021 je suis arrivé en France."
  },
  {
    year: '2022',
    title: 'Autodidacte',
    text: "Je me suis intéressée au code et j'ai commencée regardé des vidéos sur OpenClassroom. J'ai participé à la Nurserie, un programme de découverte sur les métiers autour de l'informatique concu par M2i et l'Afpa."
  },
  {
    year: '2023-2024',
    title: 'Etudiante',
    text: "J'ai fait la formation pour le Titre Professionnel de Développeur Web et Web Mobile chez M2i. Actuellement, je suis à la recherche d'une alternance pour un bac+3/4."
  },
])

const skills = ref([
  {
    name: "HTML",
    logo: "src/assets/img/skills/html.png"
  },
  {
    name: "CSS",
    logo: "src/assets/img/skills/css.png"
  },
  {
    name: "JAVASCRIPT",
    logo: "src/assets/img/skills/js.png"
  },
  {
    name: "VUEJS",
    logo: "src/assets/img/skills/vuejs.png"
  },
  {
    name: "PHP",
    logo: "src/assets/img/skills/php.png"
  },
  {
    name: "NODEJS",
    logo: "src/assets/img/skills/nodejs.png"
  },
  {
    name: "NESTJS",
    logo: "src/assets/img/skills/nestjs.png"
  },
  {
    name: "JAVA",
    logo: "src/assets/img/skills/java.png"
  },
  {
    name: "BOOTSTRAP",
    logo: ""
  },
  {
    name: "VUETIFY",
    logo: "src/assets/img/skills/vuetify.png"
  },
  {
    name: "DBEAVER",
    logo: "src/assets/img/skills/dbeaver.png"
  },
  {
    name: "MONGODB",
    logo: "src/assets/img/skills/mongodb.png"
  },
  {
    name: "PHPMYADMIN",
    logo: "src/assets/img/skills/phpmyadmin.png"
  },
  {
    name: "PRISMA",
    logo: "src/assets/img/skills/prisma.png"
  },
  {
    name: "MONGOOSE",
    logo: ""
  },
]);

const isActive = computed(() => xs.value);
</script>

<template>
  <Navbar />
  <v-container fluid>
    <div class="header-timeline">
      <v-row class="d-flex justify-center">
        <v-col cols="8"
        md="8"
        sm="12"
        xs="12"
        :class="[isActive ? ['minWidth', 'titleh3Underline::after' ] : '']">
          <v-card :class="[`elevation-${0}`, 'bgPrimary mt-8 mb-8 text-tertiary']">
            <v-card-title>
              <h3 class="titleh3Underline mt-5 mb-5">╰┈➤ À propos de moi</h3>
            </v-card-title>
            <v-card-text class="text-light style-text">
              <p>
                Bonjour, je m'appelle Angélique et je suis développeuse web. Originaire du Canada,
                j'ai découvert une véritable passion pour le développement web. En 2021, après avoir déménagé en France,
                j'ai commencé à suivre des cours en ligne sur OpenClassrooms et YouTube.
                Grâce à ces ressources et à des formations,
                j'ai pu approfondir mes compétences et transformer cette passion en une carrière professionnelle.
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <div class="container-timeline">
      <v-timeline direction="horizontal" class="hidden-sm-and-down" style="max-width: 1150px;">
        <v-timeline-item v-for="(year, i) in years" :key="i" size="small">
          <template v-slot:opposite>
            <div :class="`pt-1 headline font-weight-bold`" v-text="year.year"></div>
          </template>
          <div>
            <h2 :class="`mt-n1 headline font-weight-light mb-4 text-light`" v-text="year.title" />
            <div v-text="year.text" />
          </div>
        </v-timeline-item>
      </v-timeline>

      <v-timeline class="hidden-md-and-up" direction="vertical">
        <v-timeline-item v-for="(year, i) in years" :key="i" size="small">
          <template v-slot:opposite>
            <div :class="`pt-1 headline font-weight-bold`" v-text="year.year"></div>
          </template>
          <div>
            <h2 :class="`mt-n1 headline font-weight-light mb-4 title-light`" v-text="year.title" />
            <div v-text="year.text"></div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </div>

    <div class="header-skills">
      <v-row class="d-flex justify-center">
        <v-col
        cols="8"
        md="8"
        sm="12"
        xs="12"
        :class="[isActive ? ['minWidth', 'titleh3Underline::after' ] : '']">
          <h3 class="skills-title titleh3Underline mt-15 mb-5">╰┈➤ Mes compétences</h3>
        </v-col>
      </v-row>
    </div>

    <div class="container-myskills d-flex justify-center">
      <v-row
      class="d-flex justify-center flex-wrap"
      style="max-width: 1150px;">
        <v-col cols="auto" v-for="skill in skills" :key="skill.name"
          class="d-flex flex-wrap justify-center align-center">
          <v-card class="d-flex justify-center align-center bgPrimary mt-8 mb-8 text-tertiary cardStyle">
            <v-card-item class="w-100 h-100">
              <div class="image">
                <img
                :src="skill.logo"
                :alt="skill.name"
                class="skill-logo mb-2">
              </div>
              <div class="name">
                <p class="text-center">
                  {{ skill.name }}
                </p>
              </div>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <SocialMedia />
  </v-container>
  <Footer />
</template>

<style scoped lang="scss">
@import "../styles/settings.scss";

.v-container {
  font-family: 'ABeeZee', sans-serif;
  background-color: $primary;
  color: $tertiary;
  margin-top: 60px;
  display: flex;
  flex-direction: column;

  .container-timeline {
    padding: 12px;
    margin: 25px 25px 6px;
    color: whitesmoke;
    background-color: $tertiary;
    align-self: center;
    border-radius: 25px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
      0 6px 6px rgba(0, 0, 0, 0.23);
  }

  .container-myskills {
    .cardStyle {
      height: 150px;
      width: 150px;
      background-color: $secondary;
      color: $tertiary;

      @media (max-width: 599px) {
        width: 85px;
        height: 85px;
        font-size: 8px;
      }

      .image {
        display: flex;
        justify-content: center;
        align-items: center;


      }
      .skill-logo {
        object-fit: cover;
        max-height: 80px;
        max-width: 80px;

        @media (max-width: 599px) {
          max-width: 40px;
          max-height: 40px;
        }
      }


    }

  }
}

.minWidth {
 min-width: 100% !important;
 text-align: center;
}
</style>
