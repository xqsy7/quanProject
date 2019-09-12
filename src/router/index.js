import Vue from "vue";
import VueRouter from "vue-router";
import mine from "./mine";
import home from "./home";
import sort from "./sort";
import menu from "./menu";
import feedback from "./feedback";
import collection from "./collection";
import service from "./service";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "hash",
    routes: [
        {
            path: '/',
            redirect: "/home",
        },
        home,
        mine,
        sort,
        collection,
        menu,
        feedback,
        service,
    ]
})

export default router;
