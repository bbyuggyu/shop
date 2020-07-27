import Vue from 'vue'
import Vuex from 'vuex'
import product from '@/store/product'

Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  modules: {
    product
  }
})

export default store
