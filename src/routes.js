import App from './components/app/App'
import Home from './components/app/Home'
import Registration from './components/app/Registration'
import Form1 from './components/app/form/Form1'
import Form2 from './components/app/form/Form2'
import Login from './components/Login'

const createRouter = (router) => {
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

  router.redirect({
    '*': '/login'
  })
}

export default createRouter
