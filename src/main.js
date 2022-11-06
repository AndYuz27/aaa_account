import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";


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

library.add(fas)

createApp(App).use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')