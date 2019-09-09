import Vue from "vue";
import VueRouter from "vue-router";
import mine from "./mine";
import home from "./home";
import collection from "./collection"
import shoppingCar from "./shoppingCar"
import login from "./login"
import register from "./register"

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
        shoppingCar,
        login,
        register
    ]
})

export default router;
