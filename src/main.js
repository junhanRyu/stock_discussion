import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import './quasar'

Vue.config.productionTip = false
Vue.use(VueRouter)

import Main from "./components/Main.vue";
import Post from "./components/Post.vue";
import Search from "./components/Search.vue";


const routes = [
  { path: "/main", component: Main },
  { path: "/post", component: Post },
  { path: "/search", component: Search },
];

const router = new VueRouter({
  routes, // short for `routes: routes`
});


new Vue({
  router,
  render: h => h(App),
  mounted: function () {
    this.$nextTick(function () {
      this.$router.push('/main')
    })
  }
}).$mount('#app')

