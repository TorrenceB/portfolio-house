<template>
  <v-footer>
    <v-row class="pa-4">
      <v-col>
        <h1 class="text-center mb-4">{{ "Contact".toUpperCase() }}</h1>
        <v-row>
          <v-col>
            <v-avatar size="56" color="primary" class="white--text"
              >TB</v-avatar
            >
            <h3>{{ "Torrence Brown".toUpperCase() }}</h3>
            <h4>{{ "Frontend Engineer".toUpperCase() }}</h4>
            <h4>{{ "torrenceb90@gmail.com".toUpperCase() }}</h4>
          </v-col>
          <v-col>
            <v-row>
              <v-col>Github</v-col>
              <v-col>Linkedin</v-col>
            </v-row>
            <v-row>
              <v-col>Twitter</v-col>
              <v-col>Medium</v-col>
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
};
</script>
