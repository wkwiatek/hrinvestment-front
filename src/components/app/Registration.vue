<template>
  <div class="container w-xxl w-auto-xs">
    <div class="m-b-lg">
      <div class="wrapper text-center">
        <strong>Zarejestruj nowego użytkownika</strong>
      </div>
      <form novalidate @submit.prevent="send()" class="form-validation">
        <div class="list-group list-group-sm">
          <div class="list-group-item">
            <input v-model="form.name" placeholder="Imię" class="form-control no-border" required="">
          </div>
          <div class="list-group-item">
            <input v-model="form.surname" placeholder="Nazwisko" class="form-control no-border" required="">
          </div>
          <div class="list-group-item">
            <input v-model="form.email" type="email" placeholder="Email" class="form-control no-border" required="">
          </div>
          <div class="list-group-item">
             <input v-model="form.password" type="password" placeholder="Hasło" class="form-control no-border" required="">
          </div>
        </div>
        <div class="checkbox m-b-md m-t-none">
          <label class="i-checks">
            <input type="checkbox" required=""><i></i> Akceptuję <a href="">zgody i warunki korzystania z serwisu</a>
          </label>
        </div>
        <button type="submit" class="btn btn-lg btn-primary btn-block">Rejestruj</button>
      </form>
    </div>
  </div>
</template>

<script>
import { sendRegisterUserForm } from '../../vuex/actions'

export default {
  vuex: {
    actions: {
      sendRegisterUserForm
    }
  },
  methods: {
    send () {
      this.$progress.start()
      this.sendRegisterUserForm(this.form)
      this.$progress.finish()
    }
  },
  data () {
    return {
      form: { name: '', surname: '', email: '', password: '' }
    }
  }
}
</script>
