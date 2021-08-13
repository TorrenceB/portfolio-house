<template>
  <v-container fluid class="d-flex" style="min-height: 75vh">
    <v-row class="pa-4 my-16 text-left">
      <v-col cols="6">
        <h1>
          {{ "Torrence ".toUpperCase() }}
        </h1>
        <p>Conversationalist by default, Web Designer by trade and Something by association.</p>
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
      <v-col>
        <h2>{{ "Frontend Developer".toUpperCase() }}</h2>
        <h2>{{ "Designer".toUpperCase() }}</h2>
        <h2>{{ "Digital Soldier of Fortune".toUpperCase() }}</h2>
        <v-avatar size="400"
          ><v-img
            height="100%"
            width="100%"
            src="../assets/torrenceb_icon.png"
          ></v-img
        ></v-avatar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Intro",
};
</script>
