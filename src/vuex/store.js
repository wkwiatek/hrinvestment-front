import Vue from 'vue'
import Vuex from 'vuex'

import alert from './modules/alert'
import auth from './modules/auth'
import forms from './modules/forms'
import recommendations from './modules/recommendations'
import middlewares from './middlewares'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)
Vue.config.debug = debug

export default new Vuex.Store({
  modules: {
    alert,
    auth,
    forms,
    recommendations
  },
  strict: debug,
  middlewares: middlewares
})
