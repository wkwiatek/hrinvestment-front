<template>
  <div class="container w-xxl w-auto-xs">
    <div class="m-b-lg">
      <div class="wrapper text-center">
        <strong>{{ header }}</strong>
      </div>
      <form name="form" class="form-validation">
        <div class="text-danger wrapper text-center" ng-show="authError">

        </div>
        <div class="list-group list-group-sm">
          <div class="list-group-item">
            <input placeholder="Name" class="form-control no-border" ng-model="user.name" required="">
          </div>
          <div class="list-group-item">
            <input type="email" placeholder="Email" class="form-control no-border" ng-model="user.email" required="">
          </div>
          <div class="list-group-item">
             <input type="password" placeholder="Password" class="form-control no-border" ng-model="user.password" required="">
          </div>
        </div>
        <div class="checkbox m-b-md m-t-none">
          <label class="i-checks">
            <input type="checkbox" ng-model="agree" required=""><i></i> Agree the <a href="">terms and policy</a>
          </label>
        </div>
        <button type="submit" class="btn btn-lg btn-primary btn-block" ng-click="signup()" ng-disabled="form.$invalid">Sign up</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      header: 'Sign up to find interesting thing'
    }
  }
}
</script>
