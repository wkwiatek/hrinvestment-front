import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/logger'

import alert from './modules/alert'
import auth from './modules/auth'
import forms from './modules/forms'
import recommendations from './modules/recommendations'

Vue.use(Vuex)
Vue.config.debug = true

const debug = !(process.env.NODE_ENV === 'production')

export default new Vuex.Store({
  modules: {
    alert,
    auth,
    forms,
    recommendations
  },
  strict: debug,
  middlewares: debug ? [createLogger()] : []
})
