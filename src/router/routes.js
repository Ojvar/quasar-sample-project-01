const routes = [
    {
        path: "/",
        component: () => import("src/layouts/login-layout.vue"),
        children: [
            {
                path: "/",
                component: () => import("pages/auth/login.vue"),
                name: "login",
            },
            {
                path: "/profile/:id",
                component: () => import("pages/profile.vue"),
                name: "profile",
            },
            {
                path: "/contact",
                component: () => import("pages/global/contact.vue"),
                name: "contact",
            },
            {
                path: "/about",
                component: () => import("pages/global/about.vue"),
                name: "about",
            },
        ],
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: "/:catchAll(.*)*",
        component: () => import("pages/Error404.vue"),
    },
];

export default routes;
