`<template>
  <v-app app>
    <v-navigation-drawer app fixed v-model="menuIsOpen">
      <v-list>
        <v-list-item @click="goToSelectedSection('#bio')">
          <v-list-item-content>
            <v-list-item-title>Bio</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="goToSelectedSection('#portfolio')">
          <v-list-item-content>
            <v-list-item-title>Portfolio</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="goToSelectedSection('#contact')">
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar flat dense fixed>
      <v-app-bar-nav-icon @click.stop="toggleMenu"
        ><v-icon size="40">mdi-hamburger</v-icon></v-app-bar-nav-icon
      >
      <v-spacer></v-spacer>
      <v-app-bar-title>Torrence Brown</v-app-bar-title>
      <!-- <v-spacer></v-spacer>
      <v-btn depressed>Bio</v-btn>
      <v-btn depressed>Portfolio</v-btn>
      <v-btn depressed>Contact</v-btn> -->
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    menuIsOpen: false,
  }),

  methods: {
    toggleMenu() {
      this.menuIsOpen = !this.menuIsOpen;
    },
    goToSelectedSection(selector) {
      this.$vuetify.goTo(selector);

      this.toggleMenu();
    },
  },
};
</script>

<style scoped>
* {
  font-family: "EB Garamond", serif;
}
</style>
