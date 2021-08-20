`<template>
  <v-app app>
    <v-navigation-drawer app v-model="menuIsOpen">
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
      <v-app-bar-nav-icon @click.stop="toggleMenu" class="d-md-none"
        ><v-icon size="40">mdi-hamburger</v-icon></v-app-bar-nav-icon
      >
      <v-app-bar-title class="d-none d-md-flex">Torrence Brown</v-app-bar-title>
      <v-spacer></v-spacer>
      <div class="d-none d-md-flex">
        <v-btn depressed @click="$vuetify.goTo('#bio')">Bio</v-btn>
        <v-btn depressed @click="$vuetify.goTo('#portfolio')">Portfolio</v-btn>
        <v-btn depressed @click="$vuetify.goTo('#contact')">Contact</v-btn>
      </div>
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
