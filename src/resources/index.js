import Vue from 'vue'
import VueResource from 'vue-resource'

import store from '../vuex/store'

Vue.use(VueResource)

Vue.http.options.root = 'http://hrinvestment.eu-west-1.elasticbeanstalk.com'

Vue.http.interceptors.push({
  request: function (request) {
    request.headers['x-auth-token'] = store.state.auth.token
    return request
  },

  response: function (response) {
    return response
  }
})

export const LoginResource = Vue.resource('login')
export const RecommendCompanyResource = Vue.resource('recommend/company')
export const RecommendWorkerResource = Vue.resource('recommend/worker')
