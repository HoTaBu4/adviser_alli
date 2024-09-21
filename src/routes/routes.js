import { createRouter, createWebHashHistory } from "vue-router";
import Authentication from "../components/Authentication/Authentication.vue";
import Start from "../components/Main/start/Start.vue";
import Home from "../components/Home/Home.vue";
import Main from "../components/Main/Main.vue";
const routes = [
    {
        path: "/",
        name: "main",
        component: Main,
        children: [
            { path: "", name: "default", component: Start },
            {
                path: "Authentication/:type",
                name: "authentication",
                component: Authentication,
            },
        ],
    },
    { path: "/Home", name: "Home", component: Home },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;
