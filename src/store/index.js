import Vue from "vue"
import Vuex from "vuex";
import ShoppingCar from "./shoppingCar"
Vue.use(Vuex);


const store = new Vuex.Store({
    modules:{
        ShoppingCar
    }
})


export default store;