import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "landing",
      component: () => import("@/components/Landing"),
    },
    {
      path: "/screenshot",
      name: "screenshot",
      component: () => import("@/components/ScreenshotContainer"),
    },
  ],
});

export { router };
