<template>
  <v-container fluid class="d-flex" style="min-height: 75vh">
    <v-row class="pa-4 my-16 text-left">
      <v-col cols="6">
        <h1>
          {{
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry".toUpperCase()
          }}
        </h1>
        <p>
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Intro",
};
</script>
