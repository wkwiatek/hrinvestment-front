<template>
  <div class="fade-in-right-big smooth">
    <div class="container w-xxl w-auto-xs">
      <span class="navbar-brand block m-t">HR Ivestment</span>
      <div class="m-b-lg">
        <div class="text-danger wrapper text-center" v-if="error">
          Bad credentials. Try again
        </div>
        <!--TODO submit on enter-->
        <div class="list-group list-group-sm">
          <div class="list-group-item">
            <input placeholder="Email" class="form-control no-border" v-model="user.username">
          </div>
          <div class="list-group-item">
            <input type="password" placeholder="Password" class="form-control no-border" v-model="user.password">
          </div>
        </div>
        <button class="btn btn-lg btn-primary btn-block" @click="submit()">Log in</button>
        <div class="line line-dashed"></div>

      </div>
      <p class="ng-scope">
        <small class="text-muted">© 2016 HR Investment</small>
      </p>
    </div>
  </div>
</template>

<script>
  import auth from './../../../auth'

  export default {
    data () {
      return {
        user: {username: '', password: ''},
        error: ''
      }
    },
    methods: {
      submit () {
        var credentials = {
          username: this.user.username,
          password: this.user.password
        }
        auth.login(this, credentials, '/app/home')
      }
    }
  }
</script>
