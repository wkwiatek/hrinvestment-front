<template>
  <div class="app app-header-fixed">
    <editbar></editbar>
    <asidebar></asidebar>
    <div class="app-content" role="main">
      <div class="app-content-body">
        <div class="hbox hbox-auto-xs hbox-auto-sm">
          <alert
            :show.sync="alert.isVisible"
            :duration="3000"
            type="success"
            width="400px"
            placement="top-right"
            dismissable
          >
            <span class="icon-ok-circled alert-icon-float-left"></span>
            <strong>{{ alert.header }}</strong>
            <p>{{ alert.body }}</p>
          </alert>
          <router-view></router-view>
        </div>
      </div>
    </div>
    <footerbar></footerbar>
  </div>
</template>

<script>
import Asidebar from './menu/Asidebar'
import Editbar from './menu/Editbar'
import Footerbar from './menu/Footerbar'
import { alert } from '../../vuex/getters'
import { alert as Alert } from 'vue-strap'

export default {
  vuex: {
    getters: {
      alert
    }
  },
  components: {
    Alert, Asidebar, Editbar, Footerbar
  }
}
</script>

<style>

</style>
