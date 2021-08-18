<template>
  <v-sheet height="100%">
    <v-row class="px-5 fill-height" align="center" justify="center">
      <v-col cols="10">
        <v-row justify="space-between" class="pb-6">
          <h2>{{ title }}</h2>
          <v-icon>mdi-dialpad</v-icon>
        </v-row>
        <p class="text-left">{{ text }}</p>
        <p v-if="link" class="text-left">
          Check it out:
          <a :href="link">{{ title }}</a>
        </p>
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
    link: {
      type: String,
    },
  },
};
</script>
