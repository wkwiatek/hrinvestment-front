import Vue from 'vue'
import VueResource from 'vue-resource'

import store from '../vuex/store'

Vue.use(VueResource)

Vue.http.options.root = 'http://hrinvestment.eu-west-1.elasticbeanstalk.com'
Vue.http.headers.common['x-auth-token'] = store.state.auth.token

export const LoginResource = Vue.resource('login')
export const RecommendCompanyResource = Vue.resource('recommend/company')
