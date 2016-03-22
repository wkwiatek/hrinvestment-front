import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

import App from './components/app/App'
import Home from './components/app/Home'
import Registration from './components/app/Registration'
import Form1 from './components/app/form/Form1'
import Form2 from './components/app/form/Form2'

import UberRouter from './UberRouter'
import Login from './components/app/auth/Login'

import Auth from './auth'
/* require styles from theme */
import './assets/vendor/css/bootstrap.css'
import './assets/vendor/css/font.css'
import './assets/vendor/css/font-awesome.css'
import './assets/vendor/css/simple-line-icons.css'
import './assets/vendor/css/app.css'

Vue.use(Router)
Vue.use(VueResource)

Auth.checkAuth()
Vue.http.options.root = 'http://hrinvestment.eu-west-1.elasticbeanstalk.com'
export var router = new Router({
  history: true,
  hashbang: false
})

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
    component: Login,
    permitAll: true
  }
})

router.redirect({
  '*': Auth.logged() ? '/app/home' : '/login'
})

 // TODO service expired token
 // TODO add info on redirect to login that you have no privileges
router.beforeEach((t) => {
  if (!t.to.permitAll && !Auth.logged()) {
    t.redirect('/login')
  } else {
    t.next()
  }
  window.scrollTo(0, 0)
})

router.start(UberRouter, '#app')
