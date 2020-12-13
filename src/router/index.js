import Vue from "vue";
import store from "../store";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Acceder from "../views/Acceder.vue";
import Registrarse from "../views/Registrarse.vue";
import Perfil from "../views/Perfil.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/acceder",
    name: "Acceder",
    component: Acceder,
    meta: { noRequireAuth: true },
  },
  {
    path: "/registrarse",
    name: "Registrarse",
    component: Registrarse,
    meta: { noRequireAuth: true },
  },
  {
    path: "/perfil",
    name: "Perfil",
    component: Perfil,
    meta: { requireAuth: true },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  saveScrollPosition: true,
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((route) => route.meta.requireAuth)) {
    if (store.state.user.auth) {
      return next();
    }
    return next("/");
  } else if (to.matched.some((route) => route.meta.noRequireAuth)) {
    if (store.state.user.auth == false) {
      return next();
    }
    // console.log("bb")
    return next("/");
  }
  return next();
});

export default router;
