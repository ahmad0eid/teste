<template>
  <div class="profile">
    <!-- start section 1 -->
    <div class="coverSection">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="cover">
              <img :src="userData.coverURL" alt="">
              <span class="upcover">
                <i class="fas fa-camera"></i>
                <span class="info" @click="clicking2">upload cover photo</span>
                <input type="file" @change="coverPhoto" ref="uploadCover" style="display: none">
              </span>
              <div class="prief dropdown">
                <i class="dropdown-toggle fas fa-ellipsis-v" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <ul class="list-unstyled">
                    <li><i class="fas fa-stream"></i>timeline</li>
                    <li><i class="far fa-address-card"></i>about</li>
                    <li><i class="fas fa-users"></i>friends</li>
                    <li><i class="far fa-image"></i>photos</li>
                    <li><i class="far fa-user"></i>add friend</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4 col-md-4">
                <div class="leftBtns">
                  <button>Timeline</button>
                  <button>About</button>
                </div>
                <div class="friendsCount">
                  <p>2.3K</p>
                  <p class="bla">friends</p>
                </div>
              </div>
              <div class="col-lg-4 col-md-4">
                <div class="profilePicture">
                  <div class="profImg">
                    <img :src='userData.imgURL' alt="">
                    <i class="fas fa-plus" @click="clicking"></i>
                    <input type="file" ref="chooseButton" style="display: none" @change="getProfilePicture">
                  </div>
                  <div>
                    <h5>{{userData.nickname}}</h5>
                    <p>civil engineer</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4">
                <div class="rightBtns">
                  <button>Friends</button>
                  <button>Photos</button>
                </div>
                <div class="add">
                  <button><i class="fas fa-user"></i> add friend</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end section 1 -->
    <!-- start section 2 -->
    <div class="section2">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-4">
            <div class="basicInfo">
              <p>Basic info</p>
              <i class="fas fa-user-cog"></i>
            </div>
            <div class="info">
              <div class="one">
                <p>studied at</p>
                <p class="ans">civil engineering sohag university</p>
                <i class="fas fa-graduation-cap"></i>
              </div>
              <div class="dropdown-divider"></div>
              <div class="one">
                <p>married to</p>
                <p class="ans">not married yet</p>
                <i class="fas fa-heart"></i>
              </div>
              <div class="dropdown-divider"></div>
              <div class="one">
                <p>lives in</p>
                <p class="ans">sohag, egypt</p>
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div class="dropdown-divider"></div>
              <div class="one">
                <p>from</p>
                <p class="ans">sohag, egypt</p>
                <i class="fas fa-globe-africa"></i>
              </div>
            </div>
            <div class="photos">
              <p>photos</p>
              <i class="fas fa-image"></i>
            </div>
            <div class="userPhotos">
              <img src="../assets/images/profile/photos/one.jpg" alt="">
              <img src="../assets/images/profile/photos/two.jpg" alt="">
              <img src="../assets/images/profile/photos/three.jpg" alt="">
              <img src="../assets/images/profile/photos/four.jpg" alt="">
              <img src="../assets/images/profile/photos/five.jpg" alt="">
              <img src="../assets/images/profile/photos/six.jpg" alt="">
              <img src="../assets/images/profile/photos/seven.jpg" alt="">
              <img src="../assets/images/profile/photos/eight.jpg" alt="">
              <img src="../assets/images/profile/photos/nine.jpg" alt="">
              <img src="../assets/images/profile/photos/ten.jpg" alt="">
              <img src="../assets/images/profile/photos/eleven.jpg" alt="">
              <img src="../assets/images/profile/photos/twelve.jpg" alt="">
            </div>
            <div class="trips">
              <p>Trips</p>
            </div>
            <div class="cities">
              <div class="city">
                <img src="../assets/images/profile/trips/egypt.jpg" alt="">
                <div class="cityInfo">
                  <h6>Giza, Egypt</h6>
                  <p>giza pyramids...</p>
                </div>
              </div>
              <div class="dropdown-divider"></div>
              <div class="city">
                <img src="../assets/images/profile/trips/france.jpg" alt="">
                <div class="cityInfo">
                  <h6>Paris, France</h6>
                  <p>eiffel tower...</p>
                </div>
              </div>
              <div class="dropdown-divider"></div>
              <div class="city">
                <img src="../assets/images/profile/trips/italy.jpg" alt="">
                <div class="cityInfo">
                  <h6>Rome, Italy</h6>
                  <p>rome theatre...</p>
                </div>
              </div>
              <div class="dropdown-divider"></div>
              <div class="city">
                <img src="../assets/images/profile/trips/usa.jpg" alt="">
                <div class="cityInfo">
                  <h6>Newyork, USA</h6>
                  <p>newyork city...</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8 col-md-8">
            <div class="postHeader">
              <p>Recent Posts</p>
              <i class="fas fa-pen"></i>
            </div>
            <div class="userPosts" v-for="post in userPosts" :key="post.id">
              <div class="postSet dropdown">
                <i class="dropdown-toggle fas fa-ellipsis-v" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <ul class="list-unstyled">
                    <li><i class="fas fa-pen"></i> edit post</li>
                    <li><i class="fas fa-trash-alt"></i> delete post</li>
                  </ul>
                </div>
              </div>
              <div class="userInf">
                <img :src="userData.imgURL" alt="">
                <div class="infoo">
                  <h6>{{userData.nickname}}</h6>
                  <p>October 11 2019, 3PM</p>
                </div>
              </div>
              <p class="content">{{post.content}}</p>
              <img class="postImg" :src="post.postImage" alt="">
              <div class="react">
                <div class="dropdown-divider"></div>
                <i class="fas fa-thumbs-up"></i>
                <i class="fas fa-heart"></i>
                <i class="far fa-comment-alt"></i>
              </div>
              <div class="comments">
                <input type="text" placeholder="write comment..." v-model="commentInfo">
                <button @click="comment(post.postId)"><i class="fas fa-paper-plane"></i></button>
                <div class="commentWrapper">
                  <div class="comment" v-for="comment in post.comments" :key="comment.id">
                    <img :src="comment.userPhoto" alt="">
                    <div class="commentInfo">
                      <h6>{{comment.userNickname}}</h6>
                      <p>{{comment.commentText}}</p>
                      <div class="commentReact">
                        <i class="fas fa-thumbs-up"></i>
                        <i class="fas fa-reply"></i>
                      </div>
                      <div class="dropdown-divider"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end section 2 -->
  </div>
</template>

<script>
import firebase from 'firebase'
import admin from 'firebase'
export default {
  data() {
    return {
      userData: {},
      userPosts: [],
      commentInfo: ''
    }
  },
  methods: {
    clicking() {
      this.$refs['chooseButton'].click();
    },
    getProfilePicture(e) {
      let image = e.target.files[0];
      firebase.storage().ref('profilePictures/' + image.name).put(image)
      .then(res => {
        if(res.state == 'success') {
          firebase.storage().ref('profilePictures/' + image.name).getDownloadURL().then(URL => {
            this.userData.imgURL = URL;
            console.log(this.userData)
            let curUser = firebase.auth().currentUser.uid;
            firebase.firestore().collection('users').doc(curUser).update({
              imgURL: URL
            })
          })
        }
      })
    },
    clicking2() {
      this.$refs['uploadCover'].click();
    },
    coverPhoto(e) {
      let coverImage = e.target.files[0];
      firebase.storage().ref('coverPhotos/' + coverImage.name).put(coverImage).then(res => {
        if(res.state == 'success') {
          firebase.storage().ref('coverPhotos/' + coverImage.name).getDownloadURL().then(URL => {
            this.userData.coverURL = URL
            console.log(this.userData);
            let currentUserUID = firebase.auth().currentUser.uid;
            firebase.firestore().collection('users').doc(currentUserUID).update({
              coverURL: URL
            })
          })
        }
      })
    },
    comment(postId) {
      firebase.firestore().collection('posts').doc(postId).update({
        comments: admin.firestore.FieldValue.arrayUnion({
          commentText: this.commentInfo,
          userId: this.userData.user_id,
          userPhoto: this.userData.imgURL,
          userNickname: this.userData.nickname
        })
      })
      this.commentInfo = '';
    }
  },
  created() {
    // getting current user data..
    var data = firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid);
    data.get().then(doc => {
      this.userData = doc.data()
    })
    // getting current user data..
    // getting current user posts in profile page..
    let currentUserFound = firebase.auth().currentUser.uid;
    firebase.firestore().collection('posts').get().then(docs => {
      docs.forEach(doc => {
        if(doc.data().user_id == currentUserFound) {
          this.userPosts.push(doc.data());
        }
      })
    })
    // getting current user posts in profile page..
  }
}
</script>