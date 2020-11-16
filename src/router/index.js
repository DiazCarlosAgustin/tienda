import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Acceder from "../views/Acceder.vue"
import Registrarse from "../views/Registrarse.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path:"/acceder",
    name:"Acceder",
    component: Acceder
    
  },
  {
    path:"/registrarse",
    name:"Registrarse",
    component: Registrarse
    
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
