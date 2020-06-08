<template>
  <div class="likesComponent">
    <div class="container">
      <div class="likesList">
        <i class="fas fa-times" @click="$store.state.showLikesList = false"></i>
        <div class="head">
          <i class="fas fa-thumbs-up"></i> <span>120</span><h5>people reacted like</h5>
        </div>
        <div class="dropdown-divider"></div>
        <div class="likesContainer">
          <div class="whoLiked" v-for="like in likesArray" :key="like.userId">
            <div class="whoLikedImg">
              <i class="fas fa-thumbs-up"></i>
              <img :src="like.imgURL" alt="">
            </div>
            <div class="whoLikedDetails">
              <h6>{{like.nickname}}</h6>
              <p>3 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import firebase from 'firebase'
export default {
  data() {
    return {
      likesArray: []
    }
  },
  created() {
    firebase.firestore().collection('posts').doc(this.postIdForReactsList).get().then(doc => {
      doc.data().likes.forEach(async ({userId}, index) => { // userId => is the data inside the likes object..
        let user = await firebase.firestore().collection('users').doc(userId).get() // user (userId) to get user object.
        doc.data().likes[index] = user.data(); // this idea you get user object's data not some data...
        this.likesArray.push(user.data())
      })
    })
  },
  props: ['postIdForReactsList']
}
</script>