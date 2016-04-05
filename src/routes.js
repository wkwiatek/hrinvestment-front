import App from './components/app/App'
import Home from './components/app/Home'
import Registration from './components/app/Registration'
import RecommendCompanyForm from './components/app/form/RecommendCompanyForm'
import RecommendWorkerForm from './components/app/form/RecommendWorkerForm'
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
        '/form/recommend-company': {
          component: RecommendCompanyForm
        },
        '/form/recommend-worker': {
          component: RecommendWorkerForm
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
