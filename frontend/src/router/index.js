import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/products",
        name: "Products",
        component: () =>
            import ("../views/Products.vue"),
    },
    {
        path: "/configurator",
        name: "Configurator",
        component: () =>
            import ("../views/Configurator.vue"),
    },
    {
        path: "/goal",
        name: "Our Goal",
        component: () =>
            import ("../views/Goal.vue"),
    },
    {
        path: "/about",
        name: "About Us",
        component: () =>
            import ("../views/About.vue"),
    },
    {
        path: "/imprint",
        name: "Imprint",
        component: () =>
            import ("../views/Imprint.vue"),
    },
    {
        path: "/cart",
        name: "Shopping Cart",
        component: () =>
            import ("../views/ShoppingCart.vue"),
    },
    {
        path: "/checkout",
        name: "Checkout",
        component: () =>
            import ("../views/Checkout.vue"),
    },
    {
        path: "/:pathMatch(.*)*",
        name: "Error 404",
        component: () =>
            import ("../views/404.vue"),
    },
    //POC -> Can be deleted before rollout
    {
        path: "/anim",
        name: "Animation",
        component: () =>
            import ("../views/POC/TestAnimation.vue"),
    },
    {
        path: "/i18n",
        name: "Internationalisierung",
        component: () =>
            import ("../views/POC/TestI18n.vue"),
    },
    {
        path: "/tailwind",
        name: "TailwindCSS",
        component: () =>
            import ("../views/POC/TestTailwind.vue"),
    },
    {
        path: "/bootstrap",
        name: "Bootstrap",
        component: () =>
            import ("../views/POC/TestBootstrap.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;