import Vue from 'vue'
import Router from 'vue-router'

import App from './components/app/App'
import Home from './components/app/Home'
import Registration from './components/app/Registration'
import Form1 from './components/app/form/Form1'
import Form2 from './components/app/form/Form2'

import UberRouter from './UberRouter'
import Login from './components/Login'

/* require styles from theme */
import './assets/vendor/css/bootstrap.css'
import './assets/vendor/css/font.css'
import './assets/vendor/css/font-awesome.css'
import './assets/vendor/css/simple-line-icons.css'
import './assets/vendor/css/app.css'

Vue.use(Router)

var router = new Router()

router.map({
  '/app': {
    component: App,
    subRoutes: {
      '/home': {
        component: Home
      },
      '/register': {
        component: Registration
      },
      '/form1': {
        component: Form1
      },
      '/form2': {
        component: Form2
      }
    }
  },
  '/login': {
    component: Login
  }
})

router.beforeEach(() => {
  window.scrollTo(0, 0)
})

router.start(UberRouter, '#app')
