import Vue from 'vue'
import Router from 'vue-router'

import App from './App'
import Main from './components/Main'
import Login from './components/Login'
import Registration from './components/Registration'
import Form1 from './components/form/Form1'
import Form2 from './components/form/Form2'

/* require styles from theme */
import './assets/vendor/css/bootstrap.css'
import './assets/vendor/css/font.css'
import './assets/vendor/css/font-awesome.css'
import './assets/vendor/css/simple-line-icons.css'
import './assets/vendor/css/app.css'

Vue.use(Router)

var router = new Router()

router.map({
  '/': {
    component: Main
  },
  '/login': {
    component: Login
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
})

router.beforeEach(() => {
  window.scrollTo(0, 0)
})

router.start(App, '#app')
