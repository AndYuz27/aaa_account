/* Set up using Vue 3 */
import { createApp } from 'vue'
import {createRouter, createWebHistory} from "vue-router"

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";

import Profile from "@/components/Profile/index.vue";
import MainPage from "@/components/MainPage/index.vue";
// import Register from "@/components/Register/index.vue";
import Auth from "@/components/Auth/index.vue";
import ForgotPassword from "@/components/ForgotPassword/index.vue";
import Test from "@/components/Test/index.vue"

const routes = [
    {path: "/", component: MainPage},
    {path: "/profile", component: Profile},
    {path: "/test", component: Test},
    {path: "/auth", component: Auth, props: {type: "login"}},
    {path: "/signup", component: Auth, props: {type: "signup"}},
    {path: "/change-pwd", component: Auth, props: {type: "pwd"}},
]
//    
const router = createRouter({history: createWebHistory() ,routes})
import App from './App.vue'


 
library.add(fas)

createApp(App).use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')