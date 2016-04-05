<template>
  <div>
    <progress :percent.sync="myProgress.percent" :options="myProgress.options"> </progress>
    <router-view></router-view>
  </div>
</template>

<script>
import store from '../vuex/store'
import progress from 'vue-progressbar/vue-progressbar.vue'

export default {
  name: 'App',
  store: store,
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
    progress
  },
  ready () {
    this.$progress.setHolder(this.myProgress)
  }
}
</script>
