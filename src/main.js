import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"
import XuUI from "@lib"
import '@common/style/index.css';
import "@lib/loading/index.js";
Vue.config.productionTip = false
Vue.use(XuUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
