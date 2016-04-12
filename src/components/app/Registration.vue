<template>
  <div class="container w-xxl w-auto-xs">
    <div class="m-b-lg">
      <div class="wrapper text-center">
        <strong>Zarejestruj nowego użytkownika</strong>
      </div>
      <validator name="registerValidator">
        <form novalidate @submit.prevent="send()" class="form-validation">
          <div class="list-group list-group-sm">
            <div class="list-group-item">
              <input v-model="form.name" placeholder="Imię" class="form-control no-border" v-validate:name="['required']" required="true">
            </div>
            <div v-if="$registerValidator.name.touched && $registerValidator.name.invalid" class="text-center">
              <small class="text-danger" v-show="$registerValidator.name.required">Należy podać imię</small>
            </div>
            <div class="list-group-item">
              <input v-model="form.surname" placeholder="Nazwisko" class="form-control no-border" v-validate:surname="['required']" required="true">
            </div>
            <div v-if="$registerValidator.surname.touched && $registerValidator.surname.invalid" class="text-center">
              <small class="text-danger" v-show="$registerValidator.surname.required">Należy podać nazwisko</small>
            </div>
            <div class="list-group-item">
              <input v-model="form.email" type="email" placeholder="Email" class="form-control no-border" v-validate:email="['required']" required="true">
            </div>
            <div v-if="$registerValidator.email.touched && $registerValidator.email.invalid" class="text-center">
              <small class="text-danger" v-show="$registerValidator.email.required">Należy podać adres e-mail</small>
            </div>
            <div class="list-group-item">
               <input v-model="form.password" type="password" placeholder="Hasło" class="form-control no-border" v-validate:password="['required']" required="true">
            </div>
            <div v-if="$registerValidator.password.touched && $registerValidator.password.invalid" class="text-center">
              <small class="text-danger" v-show="$registerValidator.password.required">Należy podać hasło</small>
            </div>
            <div class="form-group">
              <label class="col-sm-4 control-label">Uprawnienia:</label>
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
          <button type="submit" class="btn btn-lg btn-primary btn-block" :disabled="!$registerValidator.valid">Rejestruj</button>
        </form>
      </validator>
    </div>
  </div>
</template>

<script>
import { sendRegisterUserForm } from '../../vuex/actions'
import auth from '../../api/auth'
import {PERMISSIONS} from '../../utils/translations.js'
import { auth as authState } from '../../vuex/getters'

export default {
  route: {
    activate: function (transition) {
      if (!this.authState.permissions.includes('ADD_USER')) {
        transition.abort()
      }
      transition.next()
    }
  },
  vuex: {
    actions: {
      sendRegisterUserForm
    },
    getters: {
      authState
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
        .filter(box => box.selected)
        .map(box => box.value)
    }
  },
  data () {
    return {
      form: { name: '', surname: '', email: '', password: '' },
      perms: []
    }
  },
  ready: function () {
    auth.availablePermissions().then(response => {
      Object.keys(response.data).forEach((key) => {
        this.perms.push({
          name: PERMISSIONS.get(response.data[key]),
          value: response.data[key],
          selected: false
        })
      })
    })
  }
}
</script>
