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
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      },
      {
        id: Math.floor(Math.random() * 1000),
        title: "Netflix Clone",
        text:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      },
      {
        id: Math.floor(Math.random() * 1000),
        title: "MyVoice Landing Page",
        text:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      },
      {
        id: Math.floor(Math.random() * 1000),
        title: "Swandoola Practitioner Application",
        text:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      },
    ],
  }),
};
</script>
