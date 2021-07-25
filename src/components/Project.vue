<template>
  <v-sheet height="100%">
    <v-row class="px-5 fill-height" align="center" justify="center">
      <v-col cols="6">
        <v-row justify="space-between" class="pb-6">
          <h2>{{ title }}</h2>
          <v-icon>mdi-dialpad</v-icon>
        </v-row>
        <p class="text-left">{{ text }}</p>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  name: "Project",

  props: {
    title: {
      type: String,
    },
    text: {
      type: String,
    },
  },
};
</script>
