<template>
  <div class="container w-xxl w-auto-xs">
    <div class="m-b-lg">
      <div class="wrapper text-center">
        <strong>{{ header }}</strong>
      </div>
      <form name="form" class="form-validation">
        <div class="text-danger wrapper text-center">

        </div>
        <div class="list-group list-group-sm">
          <div class="list-group-item">
            <input placeholder="Name" class="form-control no-border" required="">
          </div>
          <div class="list-group-item">
            <input type="email" placeholder="Email" class="form-control no-border" required="">
          </div>
          <div class="list-group-item">
             <input type="password" placeholder="Password" class="form-control no-border" required="">
          </div>
        </div>
        <div class="checkbox m-b-md m-t-none">
          <label class="i-checks">
            <input type="checkbox" required=""><i></i> Agree the <a href="">terms and policy</a>
          </label>
        </div>
        <button type="submit" class="btn btn-lg btn-primary btn-block">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      header: 'Register new user'
    }
  }
}
</script>
