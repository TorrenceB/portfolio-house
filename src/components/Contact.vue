<template>
  <v-footer class="py-8">
    <v-row>
      <v-col>
        <h1 class="text-center mb-4">{{ "Contact".toUpperCase() }}</h1>
        <v-row>
          <v-col class="d-flex flex-column align-center">
            <v-row>
              <v-col class="d-flex flex-column justify-center mr-n8">
                <v-avatar size="60" color="primary" class="white--text"
                  >TB</v-avatar
                >
              </v-col>
              <v-col>
                <h3 class="py-2">{{ "Torrence Brown".toUpperCase() }}</h3>
                <h4 class="pb-2">{{ "Frontend Engineer".toUpperCase() }}</h4>
                <h4 class="pb-2">
                  {{ "torrenceb90@gmail.com".toUpperCase() }}
                </h4>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="d-flex flex-column">
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
