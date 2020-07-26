import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BootstrapVue from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap'
import 'bootstrap-vue/dist/bootstrap-vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
