import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
  },
  icons: {
    iconFont: "fa",
  },
  values: {
    hamburger: "fas fa-hamburger",
  },
});
