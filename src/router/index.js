import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Jobs from "@/views/Jobs.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    alias: '/position'
  },
   {
      name:'job',
        path: '/job',
        component: Jobs,
    }
  

];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
