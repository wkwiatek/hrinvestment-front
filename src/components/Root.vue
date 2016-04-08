<template>
  <div>
    <progress :percent.sync="myProgress.percent" :options="myProgress.options"> </progress>
    <alert
      :show.sync="alert.isVisible"
      :duration="3000"
      :type="alert.type"
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
</template>

<script>
import store from '../vuex/store'
import progress from 'vue-progressbar/vue-progressbar.vue'
import { alert } from '../vuex/getters'
import { alert as Alert } from 'vue-strap'

export default {
  name: 'App',
  store: store,
  vuex: {
    getters: {
      alert
    }
  },
  data () {
    return {
      myProgress: {
        percent: 0,
        options: {
          show: true,
          canSuccess: true,
          color: 'rgb(143, 255, 199)',
          failedColor: 'red',
          height: '2px'
        }
      }
    }
  },
  components: {
    Alert, progress
  },
  ready () {
    this.$progress.setHolder(this.myProgress)
  }
}
</script>

<style>
.alert.top-right {
  top: 80px!important;
  right: 30px!important;
}
</style>
