/* Set up using Vue 3 */
import { createApp } from 'vue'
import {createRouter, createWebHistory} from "vue-router"

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";

import Profile from "@/components/Profile/index.vue";
import MainPage from "@/components/MainPage/index.vue";

const routes = [
    {path: "/", component: MainPage},
    {path: "/profile", component: Profile},
]

const router = createRouter({history: createWebHistory() ,routes})
import App from './App.vue'


 
library.add(fas)

createApp(App).use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')