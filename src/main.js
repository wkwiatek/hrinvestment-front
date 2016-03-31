import Vue from 'vue'
import VueRouter from 'vue-router'
import VueValidator from 'vue-validator'
import { sync } from 'vuex-router-sync'

import Root from './components/Root'
import store from './vuex/store'
import configRouter from './routes'

/* require styles from theme */
import './assets/vendor/css/bootstrap.css'
import './assets/vendor/css/font.css'
import './assets/vendor/css/font-awesome.css'
import './assets/vendor/css/simple-line-icons.css'
import './assets/vendor/css/app.css'

Vue.use(VueRouter)
Vue.use(VueValidator)

var router = new VueRouter({
  history: true,
  saveScrollPosition: true
})

configRouter(router)
sync(store, router)
router.start(Root, '#root')
