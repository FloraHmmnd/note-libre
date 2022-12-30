import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.page.vue"
import Play from "./pages/Play.page.vue"


const routes = [
    {
        path: '/',
        redirect: { name: "Home"}
    },
    {
        path: '/home',
        name: "Home",
        component: Home
    },
    {
        path: '/play',
        name: "Play",
        component: Play
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router