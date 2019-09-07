import Vue from "vue";
import VueRouter from "vue-router";
import mine from "./mine";
import home from "./home";
import collection from "./collection"

Vue.use(VueRouter);

const router = new VueRouter({
    mode:"hash",
    routes:[
        {
            path:'/',
            redirect:"/home",
        },
        home,
        mine,
        collection,

    ]
})

export default router;
