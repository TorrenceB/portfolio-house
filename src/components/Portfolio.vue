<template>
  <v-container id="portfolio" class="mr-8 mb-4" fluid>
    <h1 class="text-left mb-2">{{ "The Works".toUpperCase() }}</h1>
    <v-row>
      <v-col>
        <v-hover v-slot="{ hover }">
          <v-carousel hide-delimiters height="setCarouselHeight">
            <v-carousel-item v-for="project in projects" :key="project.id">
              <v-img
                :alt="project.alt"
                :src="project.image"
                :min-height="setCarouselHeight"
              ></v-img>
              <v-fade-transition>
                <v-overlay
                  v-if="hover"
                  opacity="0.75"
                  class="px-14 text-left"
                  absolute
                >
                  <h2>{{ project.title }}</h2>
                  <p>
                    {{ project.text }}
                  </p>
                  <p v-if="project.link">
                    Check it out:
                    <a :href="project.link"> {{ project.title }}</a>
                  </p>
                </v-overlay>
              </v-fade-transition>
            </v-carousel-item>
          </v-carousel>
        </v-hover>
      </v-col>
    </v-row>
    <h4 class="text-left mt-2 hidden-sm-and-up">
      Tap to see description
    </h4>
  </v-container>
</template>

<script>
export default {
  name: "Portfolio",

  components: {},
  data: () => ({
    // TODO: Add alt properties to all objects
    projects: [
      {
        id: Math.floor(Math.random() * 1000),
        title: "Timekeeping Feature",
        text:
          "As the main focus for a summer internship, I was tasked with the responsibility of developing a mock up for what would eventually become the interface for an employee timekeeping feature of a company’s proprietary Content Management System. The mock ups were built exclusively with HTML, CSS and JavaScript and featured religious use of semantic HTML and CSS Flexbox. The stylesheet in particular was designed in a way that CSS classes were almost exclusively comprised of utility classes, rather than being content specific. This allowed for complete independence of the stylesheet, encouraging re-use and object composition. This feature went on to solve a long standing issue that the company had, effectively creating a single source of truth where contracted employees were able to enter hours worked by time period and these entries would allow for an administrator to review and approve hours accordingly.\
        Stack: HTML, CSS, JavaScript",
        link: "",
        image: require("@/assets/ss-1.png"),
        alt: "Timecard",
      },
      {
        id: Math.floor(Math.random() * 1000),
        title: "Hotel Operations Management System",
        text:
          "The first piece of a proprietary Hotel Operations Management System for an Upwork client, this project was accomplished alongside two developer friends in the scope of 30 days. Acting as the primary liaison between the client and our agency, a healthy rapport was established between myself and the client. This resulted in a polished and functional product which solved the client’s problem of needing a way to assign tickets to hotel staff. This application included ways to prioritize duties to specific staff members, to categorize and filter tickets depending on what Hotel department (e.g Housekeeping, Front Desk, etc.) and assign each ticket to a location of the hotel which service was required. In addition, this application gave the client the ability to dynamically add staff members and hotel rooms via an administrative view. All data entered, deleted and updated by client was persisted through a Firebase backend.\
        Stack: Vue.js, Vue Router, Vuex, Vuetify, Firebase.",
        image: require("@/assets/som_sample.png"),
        alt: "Oms",
      },
      {
        id: Math.floor(Math.random() * 1000),
        title: "Netflix Clone",
        text:
          "This application was built to demonstrate my abilities as a Frontend developer to design to code. There are many repeating elements on the Netflix landing view therefore I saw this as a great opportunity to incorporate a Frontend framework and to learn the useful features of a component based structure. The main techniques and paradigms implemented in this project are the use of React Hooks for state management, CSS Flexbox and the consumption of the The Movie Database Api via the Axios library.\
        Stack: React.js, Firebase",
        link: "https://netflix-clone-ceb9d.web.app/",
        image: require("@/assets/netflix_sample.png"),
        alt: "Netflix Clone",
      },
      {
        id: Math.floor(Math.random() * 1000),
        title: "Swandoola Practitioner Application",
        text:
          "I define this project as the first true application of my development skills to a real world project. My key responsibility was to design an interface for an application of which holistic Health Practitioners were able to maintain accountable relationships with their clients and manage client records. Stack: Flutter ",
        image: require("@/assets/amch_sample.png"),
        alt: "Practitioner App",
      },
    ],
  }),
  computed: {
    setCarouselHeight() {
      return this.$vuetify.breakpoint.xs ? "100vh" : "450";
    },
  },
};
</script>
