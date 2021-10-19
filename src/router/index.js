import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [{
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
            import ( /* webpackChunkName: "about" */ "../views/About.vue"),
    },
    {
        path: "/anim",
        name: "Animation",
        component: () =>
            import ("../views/TestAnimation.vue"),
    },
    {
        path: "/i18n",
        name: "i18n Internationalisierung",
        component: () =>
            import ("../views/TestI18n.vue"),
    },
    {
        path: "/tailwind",
        name: "TailwindCSS",
        component: () =>
            import ("../views/TestTailwind.vue"),
    },
    {
        path: "/bootstrap",
        name: "Bootstrap",
        component: () =>
            import ("../views/TestBootstrap.vue"),
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;