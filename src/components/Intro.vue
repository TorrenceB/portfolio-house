<template>
  <v-container fluid class="pa-4 my-8" style="min-height: 75vh" id="bio">
    <v-row class="text-left d-flex flex-column">
      <v-col md="8" class="d-flex flex-column">
        <h1 class="pb-2">
          {{ "Torrence ".toUpperCase() }}
        </h1>
        <p>
          Conversationalist by default, Web Designer by trade and Ambitionist by
          association.
        </p>
        <p>
          A developer from Montana, rooted in his ways of wanting to acheive
          great things alongside other like-minded individuals. Torrence has
          over two years of professional experience in developing Single Page
          Applications, conceptualizing and designing interfaces for Mobile
          Content Management Systems and writing HTML, CSS and JavaScript code
          to provide utility and outstanding interactions for users.
        </p>
        <p>
          A humble approach and strong attention to detail with every project he
          engages with, living by the philosophy that everything begins with
          thoughful conversation to gather as much information as possible about
          the problem at hand.
        </p>
        <p>
          In addition to FrontEnd Development, he's also pursuing a discipline
          in Copywriting, as many of his interests are driven by countless hours
          spent with pen and paper, all in the name of striving to become better
          at his craft and help make the world a better place.
        </p>
      </v-col>
      <v-col class="py-2" md="10" sm="8">
        <h2 class="pb-4">
          <v-icon>mdi-arrow-top-right-thick</v-icon
          >{{ "Frontend Developer".toUpperCase() }}
        </h2>
        <h2 class="pb-4">
          <v-icon>mdi-arrow-top-right-thick</v-icon
          >{{ "Designer".toUpperCase() }}
        </h2>
        <h2 class="pb-4">
          <v-icon>mdi-arrow-top-right-thick</v-icon
          >{{ "Digital Soldier of Fortune".toUpperCase() }}
        </h2>
        <v-avatar :size="setLogoSize" class="text-center"
          ><v-img
            height="100%"
            width="100%"
            src="../assets/torrenceb_icon.png"
            alt="Torrence Brown"
          ></v-img
        ></v-avatar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Intro",
  computed: {
    setLogoSize() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "80%";
        case "sm":
          return "60%";
        case "md":
          return "35%";
        default:
          return "25%";
      }
    },
  },
};
</script>
