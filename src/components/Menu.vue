<template>
  <div class="menu">
    <h2>{{ msg }}</h2>
    <p>
      <a v-link="{ path: '/' }">Dashboard</a><br />
      <a v-link="{ path: '/login' }">Login</a><br/>
      <a v-link="{ path: '/register' }">Register</a>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Menu'
    }
  }
}
</script>
