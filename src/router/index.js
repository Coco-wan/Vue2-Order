import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Shop from '../pages/Shop'//首页
import Order from '../pages/Order'//订餐
import Detail from '../pages/Detail'//详情
import Ticket from '../pages/Ticket'//订单
import Info from '../pages/Info'//商家介绍

export default new Router({
  //mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    { path: '/shop/:id', component: Shop, name: 'shop', meta: {keepAlive: true} },
    { path: '/shop/:id/order', component: Order, name: 'order', meta: {keepAlive: true} },
    { path: '/shop/detail/:id', component: Detail, name: 'detail', meta: {keepAlive: false} },
    { path: '/shop/:id/ticket/', component: Ticket, name: 'ticket', meta: {keepAlive: false} },
    { path: '/shop/:id/info/', component: Info, name: 'info', meta: {keepAlive: false} }
  ]
})