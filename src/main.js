import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import './quasar'
import routes from './routes.js'

Vue.config.productionTip = false
Vue.use(VueRouter)

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

