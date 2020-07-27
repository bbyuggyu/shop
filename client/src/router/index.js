import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main'
import Shop from '../components/shop/Main'
import ShopDetail from '../components/shop/detail/Main'

Vue.use(Router)

let router = new Router({
  routes: [
    { path: '/', component: Main },
    { path: '/shop', component: Shop },
    { path: '/shop/:id', component: ShopDetail },
  ]
})

export default router
