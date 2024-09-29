import { createRouter, createWebHistory } from "vue-router";

import MovieView from "../views/MovieView.vue";
import Login from "../component/Login.vue";
import Register from "../component/Register.vue";
import Game from "../component/Game.vue";

const routes = [
  { path: "/", component: MovieView },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/movie/:id", component: Game },
  {
    path: "/:pathMatch(.*)*",
    redirect: () => "/",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
