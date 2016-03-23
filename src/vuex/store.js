import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import createLogger from 'vuex/logger'

Vue.use(Vuex)
Vue.config.debug = true

const debug = true

export default new Vuex.Store({
  modules: {
    auth
  },
  strict: debug,
  middlewares: debug ? [createLogger()] : []
})
