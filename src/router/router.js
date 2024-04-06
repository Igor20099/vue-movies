import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../pages/HomePage.vue";
import FavoritePage from "../pages/FavoritePage.vue";
import AboutPage from "../pages/AboutPage.vue";

const routes = [
  { path: "/", component: MainPage },
  { path: "/favorite", component: FavoritePage },
  { path: "/about", component: AboutPage },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
