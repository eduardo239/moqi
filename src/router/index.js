import { createRouter, createWebHistory } from "vue-router";

import GameView from "../views/GameView.vue";
import Login from "../component/Login.vue";
import Register from "../component/Register.vue";
import ProfileView from "../views/ProfileView.vue";
import ListView from "../views/ListView.vue";

const routes = [
  { path: "/", component: ListView },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/game/:id", component: GameView },
  { path: "/profile/:id", component: ProfileView },
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
