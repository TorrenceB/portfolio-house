<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <Intro />
        <Portfolio />
        <Contact />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Intro from "@/components/Intro";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

export default {
  name: "Landing",

  components: {
    Intro,
    Portfolio,
    Contact,
  },
};
</script>
