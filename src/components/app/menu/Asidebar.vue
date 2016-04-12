<template>
  <aside class="app-aside hidden-xs bg-black">
    <div class="aside-wrap">
      <div class="navi-wrap">
        <nav ui-nav="" class="navi clearfix">
            <ul class="nav">
              <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">
                <span>Formularze</span>
              </li>

              <li>
                <a v-link="{ path: '/app/form/recommend-company' }">
                  <i class="fa fa-edit icon text-info-dker"></i>
                  <span>Poleć firmę</span>
                </a>
              </li>

              <li>
                <a v-link="{ path: '/app/form/recommend-worker' }">
                  <i class="fa fa-edit icon text-info-dker"></i>
                  <span>Poleć pracownika</span>
                </a>
              </li>

              <li class="line dk hidden-folded"></li>

              <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">
                <span>Użytkownicy</span>
              </li>

              <li>
                <a v-link="{ path: '/app/register' }">
                  <i class="icon-user-follow icon text-success"></i>
                  <span>Rejestracja</span>
                </a>
              </li>
              <li>
                <a @click="logout()">
                  <i class="icon-logout icon text-danger"></i>
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
import { invalidate } from '../../../vuex/actions'

export default {
  vuex: {
    actions: {
      invalidate
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
