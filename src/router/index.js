import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "../views/HomeView.vue";
import LoginPage from "../component/LoginPage.vue";
import RegisterPage from "../component/RegisterPage.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/login", component: LoginPage },
  { path: "/register", component: RegisterPage },
  {
    path: "/:pathMatch(.*)*",
    redirect: () => "/",
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
