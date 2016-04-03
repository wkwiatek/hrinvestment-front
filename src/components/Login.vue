<template>
  <div class="fade-in-right-big smooth">
    <div class="container w-xxl w-auto-xs">
      <a v-link="{ path: '/app/home'}" class="navbar-brand block m-t">HR Ivestment</a>
      <div class="m-b-lg">
        <div class="wrapper text-center">
          <strong>Log in</strong>
        </div>
        <validator name="validation">
          <form novalidate @submit.prevent="login($signinValidation)" name="form" class="form-validation" >
            <div class="list-group list-group-sm">
              <div class="list-group-item">
                <input
                  v-model="user.username"
                  v-validate:username="['required']"
                  type="text"
                  placeholder="Email"
                  inital="off"
                  class="form-control no-border" aria-required="true" aria-invalid="true"
                >
              </div>
              <div v-if="$validation.username.touched && $validation.username.invalid">
                <small class="text-danger" v-show="$validation.username.required">Username cannot be empty</small>
              </div>
              <div class="list-group-item">
                <input
                  v-model="user.password"
                  v-validate:password="['required']"
                  type="password"
                  placeholder="Password"
                  class="form-control no-border" required="" aria-required="true" aria-invalid="true"
                >
              </div>
              <div v-if="$validation.password.touched && $validation.password.invalid">
                <small class="text-danger" v-show="$validation.password.required">Password cannot be empty</small>
              </div>
            </div>
            <button type="submit" class="btn btn-lg btn-primary btn-block" aria-disabled="true" :disabled="!$validation.valid">Log in</button>
            <div class="line line-dashed"></div>
          </form>
        </validatior>
      </div>
      <p class="ng-scope">
        <small class="text-muted">Web app framework base on Bootstrap and AngularJS<br>© 2014</small>
      </p>
    </div>
  </div>
</template>

<style>

</style>

<script>
import { authorize } from '../vuex/actions'
export default {
  vuex: {
    actions: {
      authorize
    }
  },
  methods: {
    login () {
      this.authorize({
        username: this.user.username,
        password: this.user.password
      })
    }
  },
  data () {
    return {
      user: { username: '', password: '' },
      header: 'Sign in to get in touch'
    }
  }
}
</script>
