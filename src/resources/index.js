import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.http.options.root = 'http://hrinvestment.eu-west-1.elasticbeanstalk.com'

export const LoginResource = Vue.resource('login')
