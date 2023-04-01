import { createRouter, createWebHistory } from "vue-router";
import HeaderView from "../views/Header.vue";
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "header",
			component: HeaderView,
		},
		{
			path: "/signup/about",
			name: "about",
			component: () => import("../views/AboutView.vue"),
		},
	],
});

export default router;
