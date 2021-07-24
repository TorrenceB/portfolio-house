<template>
  <v-container>
    <h1 class="text-left ml-6">{{ "Portfolio".toUpperCase() }}</h1>
    <v-row class="ma-6">
      <v-carousel>
        <v-carousel-item v-for="project in projects" :key="project.id">
          <Project :title="project.title" :text="project.text" />
        </v-carousel-item>
      </v-carousel>
      <!-- <v-col v-for="project in projects" :key="project.id" cols="6">
        <Project :title="project.title" :text="project.text" />
      </v-col> -->
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
        title: "Project 1",
        text:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      },
      {
        id: Math.floor(Math.random() * 1000),
        title: "Project 2",
        text:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      },
      {
        id: Math.floor(Math.random() * 1000),
        title: "Project 3",
        text:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      },
      {
        id: Math.floor(Math.random() * 1000),
        title: "Project 4",
        text:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      },
      {
        id: Math.floor(Math.random() * 1000),
        title: "Project 5",
        text:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      },
      {
        id: Math.floor(Math.random() * 1000),
        title: "Project 6",
        text:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      },
    ],
  }),
};
</script>
