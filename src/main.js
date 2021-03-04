import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import './quasar'
import routes from './routes.js'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.use(VueRouter)

const router = new VueRouter({
  routes, // short for `routes: routes`
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

