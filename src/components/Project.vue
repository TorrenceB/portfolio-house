<template>
  <v-card
    ><v-row class="px-5"
      ><v-card-title>{{ title }}</v-card-title
      ><v-spacer></v-spacer><v-icon>mdi-dialpad</v-icon></v-row
    ><v-card-text>{{ text }}</v-card-text></v-card
  >
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
