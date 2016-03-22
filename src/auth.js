import {router} from './main'
const LOGIN_URL = 'http://hrinvestment.eu-west-1.elasticbeanstalk.com/login'
import Vue from 'vue'

export default {
  user: {authenticated: false},
  xAutToken: 'x-auth-token',
  login (ctx, data, state) {
    ctx.$http.post(LOGIN_URL, data).then((data) => {
      localStorage.setItem(this.xAutToken, data.headers()[this.xAutToken])
      this.checkAuth()
      router.go(state)
    }
    ).catch(() => {
      ctx.error = true
    })
  },

  logout () {
    localStorage.removeItem(this.xAutToken)
    this.user.authenticated = false
    router.go('/login')
  },

  logged () {
    return this.user.authenticated
  },

  checkAuth () {
    Vue.http.headers.common[this.xAutToken] = localStorage.getItem(this.xAutToken)
    this.user.authenticated = !!localStorage.getItem(this.xAutToken)
  }
}