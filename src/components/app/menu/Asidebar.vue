<template>
  <aside class="app-aside hidden-xs bg-black">
    <div class="aside-wrap">
      <div class="navi-wrap">
        <nav ui-nav="" class="navi clearfix">
            <ul class="nav">
              <li v-if="auth.permissions.includes('SHOW_RECOMMENDATIONS')">
                <a v-link="{ path: '/app/recommendations' }">
                  <i class="fa fa-bars icon text-success"></i>
                  <span>Rekomendacje</span>
                </a>
              </li>
              <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">
                <span>Formularze</span>
              </li>

              <li v-if="auth.permissions.includes('RECOMMEND_COMPANY')">
                <a v-link="{ path: '/app/recommend/company' }">
                  <i class="fa fa-edit icon text-info-dker"></i>
                  <span>Poleć firmę</span>
                </a>
              </li>

              <li v-if="auth.permissions.includes('RECOMMEND_WORKER')">
                <a v-link="{ path: '/app/recommend/worker' }">
                  <i class="fa fa-edit icon text-info-dker"></i>
                  <span>Poleć pracownika</span>
                </a>
              </li>

              <li class="line dk hidden-folded"></li>

              <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">
                <span>Użytkownicy</span>
              </li>

              <li v-if="auth.permissions.includes('ADD_USER')">
                <a v-link="{ path: '/app/register' }">
                  <i class="fa fa-user icon text-success"></i>
                  <span>Rejestracja</span>
                </a>
              </li>
              <li>
                <a @click="logout()">
                  <i class="fa fa-sign-out icon text-danger"></i>
                  <span>Wyloguj</span>
                </a>
              </li>
            </ul>
          </nav>
      </div>
    </div>
  </aside>

</template>

<script>
import { invalidate } from '../../../vuex/actions/auth'
import { auth } from '../../../vuex/getters'

export default {
  vuex: {
    actions: {
      invalidate
    },
    getters: {
      auth
    }
  },
  methods: {
    logout () {
      this.invalidate()
    }
  },
  data () {
    return {
      msg: 'Menu'
    }
  }
}
</script>
<style>
.v-link-active {
  background-color: #32374a;
  color:  #ffffff!important;
}
</style>
