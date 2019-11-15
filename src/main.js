import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import bulma from './assets/sass/main.scss'

Vue.config.productionTip = false
Vue.use(bulma);

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
