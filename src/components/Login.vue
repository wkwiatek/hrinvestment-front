<template>
  <div class="fade-in-right-big smooth">
    <div class="container w-xxl w-auto-xs">
      <a v-link="{ path: '/app/home'}" class="navbar-brand block m-t">HR Ivestment</a>
      <div class="m-b-lg">
        <div class="wrapper text-center">
          <strong>Log in</strong>
        </div>
        <validator name="validation">
          <form novalidate @submit.prevent="login()" name="form" class="form-validation" >
            <div class="list-group list-group-sm">
              <div class="list-group-item">
                <input
                  v-model="user.email"
                  v-validate:email="['required']"
                  type="text"
                  placeholder="Email"
                  inital="off"
                  class="form-control no-border" aria-required="true" aria-invalid="true"
                >
              </div>
              <div v-if="$validation.email.touched && $validation.email.invalid" class="text-center">
                <small class="text-danger" v-show="$validation.email.required">Należy podać adres e-mail</small>
              </div>
              <div class="list-group-item">
                <input
                  v-model="user.password"
                  v-validate:password="['required']"
                  type="password"
                  placeholder="Hasło"
                  class="form-control no-border" required="" aria-required="true" aria-invalid="true"
                >
              </div>
              <div v-if="$validation.password.touched && $validation.password.invalid" class="text-center">
                <small class="text-danger" v-show="$validation.password.required">Należy podać hasło</small>
              </div>
            </div>
            <button type="submit" class="btn btn-lg btn-primary btn-block" aria-disabled="true" :disabled="!$validation.valid">Zaloguj</button>
            <div class="line line-dashed"></div>
          </form>
        </validatior>
      </div>
      <p class="ng-scope">
        <small class="text-muted">© 2016 HR Investment</small>
      </p>
    </div>
  </div>
</template>

<style>

</style>

<script>
import { authorize } from '../vuex/actions/auth'
export default {
  vuex: {
    actions: {
      authorize
    }
  },
  methods: {
    login () {
      this.$progress.start()
      this.authorize({
        email: this.user.email,
        password: this.user.password
      })
      this.$progress.finish()
    }
  },
  data () {
    return {
      user: { email: '', password: '' },
      header: 'Sign in to get in touch'
    }
  }
}
</script>
