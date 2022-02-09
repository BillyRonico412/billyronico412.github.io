import {createRouter, createWebHistory} from "vue-router";

import List from "../views/List.vue";
import Detail from "../views/Detail.vue";

const routes = [
    {
        name: "List",
        path: "/",
        component: List
    }, {
        name: "Detail",
        path: "/detail/:id",
        component: Detail,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
