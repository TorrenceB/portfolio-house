<template>
  <v-footer class="py-8">
    <v-row>
      <v-col>
        <h1 class="text-center mb-4">{{ "Contact".toUpperCase() }}</h1>
        <v-row>
          <v-col class="d-flex flex-column align-center">
            <v-row>
              <v-col>
                <v-avatar size="60" color="primary" class="white--text"
                  >TB</v-avatar
                >
                <h3 class="py-2">{{ "Torrence Brown".toUpperCase() }}</h3>
                <h4 class="pb-2">{{ "Frontend Engineer".toUpperCase() }}</h4>
                <h4 class="pb-2">
                  {{ "torrenceb90@gmail.com".toUpperCase() }}
                </h4>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="d-flex flex-column align-center">
            <v-row
              v-for="icon in icons"
              :key="icon.id"
              width="100%"
              class="d-flex flex-wrap "
            >
              <v-btn :href="icon.route">
                <v-img
                  :src="icon.iconUrl"
                  width="150"
                  height="35"
                  contain
                  class="mb-4"
                ></v-img>
              </v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Contact",
  data: () => ({
    icons: [
      {
        iconUrl: require("../assets/2021 Twitter logo - blue.png"),
        route: "https://twitter.com/TorrenceBrown4",
      },
      {
        iconUrl: require("../assets/GitHub_Logo.png"),
        route: "https://github.com/TorrenceB",
      },
      {
        iconUrl: require("../assets/Medium-Logo-White-RGB@4x.png"),
        route: "https://medium.com/@torrenceb90",
      },
      {
        iconUrl: require("../assets/LI-Logo.png"),
        route: "https://www.linkedin.com/in/torrencebrown/",
      },
    ],
  }),
};
</script>
