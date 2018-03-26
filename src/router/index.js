import Vue from 'vue'
import Router from 'vue-router'
import HomeMain from "../components/Home/HomeMain.vue"
import ExploreMain from "../components/Explore/ExploreMain.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      component: HomeMain
    },
    {
      path: "/explore",
      component: ExploreMain
    }
  ]
});
