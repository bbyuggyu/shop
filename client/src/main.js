import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import '@/plugins/ui-framework'
import '@/plugins/input-autowidth'
import '@/plugins/router-sync'

import vuetify from '@/plugins/ui-framework';

Vue.config.productionTip = false
Vue.router = router

new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  render: h => h(App)
})
