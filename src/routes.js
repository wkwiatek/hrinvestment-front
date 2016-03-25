import App from './components/app/App'
import Home from './components/app/Home'
import Registration from './components/app/Registration'
import Form1 from './components/app/form/Form1'
import Form2 from './components/app/form/Form2'
import Login from './components/Login'

import store from './vuex/store'

const createRouter = (router) => {
  router.map({
    '/app': {
      component: App,
      auth: true,
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

  router.redirect({
    '*': '/login',
    auth: false
  })

  router.beforeEach(function (transition) {
    if (transition.to.auth && !store.state.auth.token) {
      transition.redirect('/login')
    } else {
      transition.next()
    }
  })
}

export default createRouter
