import { createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import Authentication from "../components/Authentication/Authentication.vue";
import Start from "../components/Main/start/Start.vue";
import Home from "../components/Home/Home.vue";
import Main from "../components/Main/Main.vue";
import ForgotPassword from "../components/Home/ForgotPassword/ForgotPassword.vue";
import LoadingGoogleUser from "../components/LoadingGoolgeUser/LoadingGoogleUser.vue";

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
  { path: '/forgotPassword', name:'forgotPassword',component: ForgotPassword },
  { path:'/google/loading', name: 'googleLoading',component: LoadingGoogleUser}
];

const router = createRouter({
  history: createWebHistory('/adviser_alli'),
  routes,
});

export default router;
