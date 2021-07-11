`<template>
  <v-app>
    <!--App Bar -->
    <v-app-bar flat dense>
      <v-app-bar-title>Torrence Brown</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn depressed>Bio</v-btn>
      <v-btn depressed>Portfolio</v-btn>
      <v-btn depressed>Contact</v-btn>
    </v-app-bar>
    <v-row class="text-center">
      <v-col>
        <v-main>
          <!--Bio Component -->
          <Intro />
          <!--Portfolio Component -->
          <Portfolio />
          <!--Contact Component -->
          <Contact />
        </v-main>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import Intro from "@/components/Intro";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

export default {
  name: "App",

  components: {
    Intro,
    Portfolio,
    Contact,
  },

  data: () => ({
    //
  }),
};
</script>
