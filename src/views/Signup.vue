<template>
  <div class="signup">
    <div class="row">
      <div class="col-lg-6">
        <div class="show">
          <h1>Welcome! signup with new account any enjoy social and exciting experience...</h1>
          <p class="loginIcon" @click="$router.push({path: '/login'})">Login</p>
          <p class="signupIcon" @click="$router.push({path: '/signup'})">Signup</p>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="container">
          <div class="form">
            <form @submit.prevent="signup">
              <h2>Signup with new account</h2>
              <div class="field">
                <label for="email"></label>
                <input type="text" placeholder="type your email address..." v-model="$store.state.email">
                <i class="far fa-user"></i>
              </div>
              <div class="field">
                <input type="text" name="nickname" placeholder="type your nickname" v-model="$store.state.nickname">
                <i class="fas fa-signature"></i>
              </div>
              <div class="field">
                <label for="email"></label>
                <input type="password" placeholder="type your password..." v-model="$store.state.password">
                <i class="fas fa-lock"></i>
              </div>
              <div class="field">
                <label for="email"></label>
                <input type="password" placeholder="repeat your password..." v-model="$store.state.repeatedPassword">
                <i class="fas fa-lock"></i>
              </div>
              <p style="color: red">{{$store.state.feedback}}</p>
              <button>Signup</button>
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
    signup() {
      this.$store.dispatch('signup');
    }
  },
}
</script>