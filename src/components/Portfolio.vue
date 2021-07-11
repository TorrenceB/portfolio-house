<template>
  <v-container>
    <h1>{{ "Portfolio".toUpperCase() }}</h1>
    <!--Project Component -->
    <v-row>
      <v-col
        ><v-card>{{ text }}</v-card></v-col
      >

      <v-col
        ><v-card>{{ text }}</v-card></v-col
      >
    </v-row>
    <v-row>
      <v-col
        ><v-card>{{ text }}</v-card></v-col
      >

      <v-col
        ><v-card>{{ text }}</v-card></v-col
      >
    </v-row>
    <v-row>
      <v-col
        ><v-card>{{ text }}</v-card></v-col
      >

      <v-col
        ><v-card>{{ text }}</v-card></v-col
      >
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Portfolio",
  data: () => ({
    text:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  }),
};
</script>
