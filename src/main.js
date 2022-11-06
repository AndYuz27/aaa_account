import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import Profile from "@/components/Profile";
import Home from "@/components/Home";
import Auth from "@/components/Auth";
import Test from "@/components/Test";

const routes = [
    {path: "/", component: Home},
    {path: "/test", component: Test},
    {path: "/profile", component: Profile},
    {path: "/auth", component: Auth, props: {type: "login"}},
    {path: "/signup", component: Auth, props: {type: "signup"}},
    {path: "/change-pwd", component: Auth, props: {type: "pwd"}},
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

import App from "./App.vue";


createApp(App).use(router).mount("#app");
