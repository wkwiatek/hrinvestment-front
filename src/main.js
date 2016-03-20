import Vue from 'vue'
import Router from 'vue-router'

import App from './App'
import Login from './components/Login'
import Registration from './components/Registration'

/* require styles from theme */
import './assets/vendor/css/bootstrap.css'
import './assets/vendor/css/font.css'
import './assets/vendor/css/font-awesome.css'
import './assets/vendor/css/simple-line-icons.css'
import './assets/vendor/css/app.css'

Vue.use(Router)

var router = new Router()

router.map({
  '/login': {
    component: Login
  },
  '/register': {
    component: Registration
  }
})

router.beforeEach(() => {
  window.scrollTo(0, 0)
})

router.start(App, '#app')
