<template>
  <div class="login">
    <div class="row">
      <div class="col-lg-6">
        <div class="show">
          <h1>Welcome back! sign into your account any enjoy social and exciting experience...</h1>
          <p class="loginIcon" @click="$router.push({path: '/login'})">Login</p>
          <p class="signupIcon" @click="$router.push({path: '/signup'})">Signup</p>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="container">
          <div class="form">
            <form @submit.prevent="login">
              <h2>Sign into your account</h2>
              <div class="field">
                <label for="email"></label>
                <input type="text" placeholder="type your email address..." v-model="$store.state.email">
                <i class="far fa-user"></i>
              </div>
              <div class="field">
                <label for="email"></label>
                <input type="password" placeholder="type your password..." v-model="$store.state.password">
                <i class="fas fa-lock"></i>
              </div>
              <p style="color: red">{{$store.state.feedback}}</p>
              <div class="options">
                <input type="checkbox">
                <label for="">Remember me</label>
                <span>forgot password!?</span>
              </div>
              <button>Login</button>
            </form>
          </div>   
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login')
    }
  }
}
</script>