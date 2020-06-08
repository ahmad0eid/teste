import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userFound: null,
    email: '',
    password: '',
    repeatedPassword: '',
    nickname: '',
    user_id: '',
    feedback: '',
    posts: [],
    showLikesList: false,
    showLovesList: false
  },
  mutations: {
    signup(state) {
      if(state.email && state.password && state.nickname) {
        if(state.password.match(state.repeatedPassword) && state.repeatedPassword) {
          firebase.auth().createUserWithEmailAndPassword(state.email, state.password).then((cred) => {
            state.user_id = cred.user.uid
            firebase.firestore().collection('users').doc(state.user_id).set({
              email: state.email,
              nickname: state.nickname,
              user_id: state.user_id,
              imgURL: '',
              coverURL: '',
              city: '',
              country: ''
            })
            router.push({path: '/'})
            state.email = state.password = state.repeatedPassword = state.nickname = state.feedback = null;
          }).catch(error => {
            state.feedback = error.message;
          })
        } else {
          state.feedback = "password doesn't match"
        }
      } else {
        state.feedback = 'please fill all fields'
      }
    },
    login(state) {
      if(state.email && state.password) {
        firebase.auth().signInWithEmailAndPassword(state.email, state.password).then(() => {
          router.push({path: '/'})
          state.email = state.password = state.repeatedPassword = state.nickname = state.feedback = null;
        }).catch(error => {
          error.message = 'invalid username or password';
          state.feedback = error.message;
        })
      } else {
        state.feedback = 'please fill all fields!'
      }
    },
    logOut(state) {
      firebase.auth().signOut().then(() => {
        router.push({path: '/login'})
        state.posts = []
        state.email = state.password = state.repeatedPassword = state.nickname = state.feedback = null;
      })
    }
  },
  actions: {
    signup({commit}) {
      commit('signup');
    },
    logOut({commit}) {
      commit('logOut')
    },
    login({commit}) {
      commit('login')
    }
  },
  modules: {
  }
})
