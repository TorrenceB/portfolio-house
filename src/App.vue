`<template>
  <v-app app>
    <v-navigation-drawer app fixed v-model="menuIsOpen">
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Bio</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Portfolio</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar flat dense>
      <v-app-bar-nav-icon @click.stop="toggleMenu"
        ><v-icon size="40">mdi-hamburger</v-icon></v-app-bar-nav-icon
      >
      <v-app-bar-title>Torrence Brown</v-app-bar-title>
      <!-- <v-spacer></v-spacer>
      <v-btn depressed>Bio</v-btn>
      <v-btn depressed>Portfolio</v-btn>
      <v-btn depressed>Contact</v-btn> -->
    </v-app-bar>
    <v-row class="text-center">
      <v-col>
        <v-main>
          <Intro />
          <Portfolio />
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
    menuIsOpen: false,
  }),

  methods: {
    toggleMenu() {
      this.menuIsOpen = !this.menuIsOpen;
    },
  },
};
</script>

<style scoped>
* {
  font-family: "EB Garamond", serif;
}
</style>
