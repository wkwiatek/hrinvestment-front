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
          <div class="form-group">
            <label class="col-sm-4 control-label">Uprawnienia</label>
            <div class="col-sm-8">
              <div class="checkbox" v-for="perm in perms">
                <label class="i-checks">
                  <input type="checkbox" v-model="perm.selected" value="perm.selected"><i></i>{{perm.name}}
                </label>
              </div>
            </div>
          </div>
        </div>
        {{ selectedPerms | json }}
        <button type="submit" class="btn btn-lg btn-primary btn-block">Rejestruj</button>
      </form>
    </div>
  </div>
</template>

<script>
import { sendRegisterUserForm } from '../../vuex/actions'
import auth from '../../api/auth'

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
  computed: {
    selectedPerms: function () {
      return this.perms
        .filter(function (box) {
          return box.selected
        })
        .map(function (box) {
          return box.name
        })
    }
  },
  data () {
    return {
      form: { name: '', surname: '', email: '', password: '' },
      perms: []
    }
  },
  ready: function () {
    var _this = this

    auth.availablePermissions().then(function (response) {
      for (var key in response.data) {
        _this.perms.push({
          name: response.data[key],
          selected: false
        })
      }
    })
  }
}
</script>
