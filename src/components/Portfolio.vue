<template>
  <v-container class="px-6 my-16" style="min-height: 75vh" fluid>
    <h1 class="text-left">{{ "Portfolio".toUpperCase() }}</h1>
    <v-row>
      <v-carousel hide-delimiters>
        <v-carousel-item v-for="project in projects" :key="project.id">
          <Project :title="project.title" :text="project.text" />
        </v-carousel-item>
      </v-carousel>
    </v-row>
  </v-container>
</template>

<script>
import Project from "@/components/Project";

export default {
  name: "Portfolio",

  components: {
    Project,
  },
  data: () => ({
    projects: [
      {
        id: Math.floor(Math.random() * 1000),
        title: "Hotel Operations Management System",
        text:
          "The first piece of a proprietary Hotel Operations Management System for an Upwork client, this project was accomplished alongside two developer friends in the scope of 30 days. Acting as the primary liaison between the client and our agency, a healthy rapport was established between myself and the client. This resulted in a polished and functional product which solved the client’s problem of needing a way to assign tickets to hotel staff. This application included ways to prioritize duties to specific staff members, to categorize and filter tickets depending on what Hotel department (e.g Housekeeping, Front Desk, etc.) and assign each ticket to a location of the hotel which service was required. In addition, this application gave the client the ability to dynamically add staff members and hotel rooms via an administrative view. All data entered, deleted and updated by client was persisted through a Firebase backend.\
        Stack: Vue.js, Vue Router, Vuex, Vuetify, Firebase.",
      },
      {
        id: Math.floor(Math.random() * 1000),
        title: "Netflix Clone",
        text:
          "This application was built to demonstrate my abilities as a Frontend developer to design to code. There are many repeating elements on the Netflix landing view therefore I saw this as a great opportunity to incorporate a Frontend framework and to learn the useful features of a component based structure. The main techniques and paradigms implemented in this project are the use of React Hooks for state management, CSS Flexbox and the consumption of the The Movie Database Api via the Axios library.\
        Stack: React.js, Firebase",
      },
      {
        id: Math.floor(Math.random() * 1000),
        title: "MyVoice Landing Page",
        text:
          "In addition to creating a mobile prototype for a Civil Engagement Start Up, I was tasked with developing a landing page to demonstrate our product. The main hurdles that I was able to overcome included form validation on the Front End, setting up user authentication with Firebase and handling user objects to send customized emails. Stack: React.js, Firebase",
      },
      {
        id: Math.floor(Math.random() * 1000),
        title: "Swandoola Practitioner Application",
        text:
          "I define this project as the first true application of my development skills to a real world project. My key responsibility was to design an interface for an application of which holistic Health Practitioners were able to maintain accountable relationships with their clients and manage client records. Stack: Flutter ",
      },
    ],
  }),
};
</script>
