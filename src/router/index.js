import { createRouter, createWebHistory } from "vue-router";

import GameView from "../views/GameView.vue";
import Login from "../component/Login.vue";
import Register from "../component/Register.vue";
import Game from "../component/Game.vue";

const routes = [
  { path: "/", component: GameView },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/game/:id", component: Game },
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
