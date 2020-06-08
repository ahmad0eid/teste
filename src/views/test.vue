<template>
  <div class="Timeline">
    <div class="row">
      <div class="col-lg-6 col-md-8">
        <div class="container">
          <div class="newPost">
            <div class="head">
              <p>Create New Post</p>
            </div>
            <div class="create">
              <textarea placeholder="write your post..." id="newPost" v-model="newpost.postContent"></textarea>
            </div>
            <div class="reviewPostImage" id="reviewPostImage">
              <h6>file review</h6>
              <div class="poImg">
              </div>
            </div>
            <hr>
            <div class="buttons">
              <button @click="clicking"><i class="fas fa-camera"></i> Media</button>
              <input type="file" @change="postImage" style="display: none" ref="uploadPostImage">
              <button class="post" @click="userPost">Post</button>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="TimelinePost" v-for="post in posts" :key="post.id">
            <div class="userInf">
              <div class="infoo">
                <h6>{{post.user.nickname}}</h6>
                <p>October 11 2019, 3PM</p>
              </div>
            </div>
            <p class="content">{{post.content}}</p>
            <div class="peopleReacted">
              <span class="peopleLiked">{{post.likes.length}} likes</span>
              <span class="peopleLoved">0 loves</span>
              <span class="commentingCounter">0 comments</span>
              <ul>
                <li v-for="like in post.likes" :key="like.user_id">{{like.nickname}}</li>
              </ul>
            </div>
            <div class="react">
              <div class="dropdown-divider"></div>
              <i class="fas fa-thumbs-up" ref="like" @click="like(post.postId)"></i>
              <i class="fas fa-heart" @click="love"></i>
              <i class="far fa-comment-alt"></i>
            </div>
            <div class="comments">
              <input type="text" placeholder="write comment..." v-model="commentInfo">
              <button @click="comment(post.postId)"><i class="fas fa-paper-plane"></i></button>
              <div class="commentWrapper">
                <div class="comment" v-for="comment in post.comments" :key="comment.id">
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
    <!-- <likesList></likesList> -->
    <!-- <lovesList></lovesList> -->
  </div>
</template>

<style scoped>
.Timeline {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999999999999999999999999999;
    height: 100%;
    width: 100%;
    background-color: #fff;
}
</style>

<script>
import firebase from 'firebase'
import admin from 'firebase'
// import likesList from '../components/LikesList'
// import lovesList from '../components/LovesList'
export default {
  data() {
    return {
      newpost: {
        username: '',
        postContent: ''
      },
      userObject: '',
      commentInfo: ''
    }
  },
  computed: {
    posts () {
      return this.$store.state.posts
    }
  },
  methods: {
    userPost() {
      var postID = Math.floor(Math.random() * 1000000000000)
      var userInfo = firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid);
      userInfo.get().then(doc => {
        firebase.firestore().collection('posts').doc('a' + postID).set({
          content: this.newpost.postContent,
          user_id: doc.data().user_id,
          postId: 'a' + postID,
          comments: [],
          likes: [],
          loves: []
        })
        this.newpost.postContent = '';
      });
      document.getElementById('reviewPostImage').style.display = 'none';
    },
    clicking() {
      this.$refs['uploadPostImage'].click();
    },
    postImage(e) {
      var postImg = e.target.files[0];
      var uploadPostImage = firebase.storage().ref('postImages/' + postImg.name).put(postImg);
      uploadPostImage.then(res => {
        if(res.state == 'success') {
          firebase.storage().ref('postImages/' + postImg.name).getDownloadURL().then(URL => {
            this.newpost.postImg = URL
            console.log(this.newpost)
          })
        }
      })
      document.getElementById('reviewPostImage').style.display = 'block';
    },
    comment(postId) {
      firebase.firestore().collection('posts').doc(postId).update({
        comments: admin.firestore.FieldValue.arrayUnion({
          commentText: this.commentInfo,
          userId: this.userObject.user_id,
          userPhoto: this.userObject.imgURL,
          userNickname: this.userObject.nickname
        })
      })
      this.commentInfo = '';
    },
    like(postId) {
      // e.target.classList.toggle('likeClicked');
      firebase.firestore().collection('posts').doc(postId).get().then(doc => {
        if (doc.data().likes.length > 0) {
          doc.data().likes.forEach(like => {
            if(like.userId !== firebase.auth().currentUser.uid) {
              firebase.firestore().collection('posts').doc(postId).update({
                likes: admin.firestore.FieldValue.arrayUnion({
                  userId: this.userObject.user_id
                })
              }).then(() => {
                // e.target.classList.add('likeClicked');
              })
            } else {
              let likes = doc.data().likes
              firebase.firestore().collection('posts').doc(postId).update({
                likes: likes.filter(like => like.userId !== firebase.auth().currentUser.uid)
              }).then(() => {
                // e.target.classList.remove('likeClicked');
              })
            }
          })
        } else {
          firebase.firestore().collection('posts').doc(postId).update({
            likes: admin.firestore.FieldValue.arrayUnion({
              userId: this.userObject.user_id
            })
          }).then(() => {
            // e.target.classList.add('likeClicked');
          })
        }
      })
    },
    love(e) {
      e.target.classList.toggle('loveClicked');
    }
  },
  created() {
    /* listening for new post */
    let ref = firebase.firestore().collection('posts');
    ref.get().then(snapshot => {
      this.$store.state.posts = [];
      snapshot.docs.forEach(document => {
        let doc = document.data();
        var userInfo = firebase.firestore().collection('users').doc(doc.user_id);
        userInfo.get().then(userDoc => {
          doc.user = userDoc.data()
          if (doc.likes.length > 0) {
            doc.likes.forEach(async ({userId}, index) => {
              const user = await firebase.firestore().collection('users').doc(userId).get()
              doc.likes[index] = user.data()
            })
          }
          this.$store.state.posts.push(doc);
        });
      })
      ref.onSnapshot(snp => {
        snp.docChanges().forEach(chng => {
          const post = chng.doc.data()
          const POSTS = this.$store.state.posts
          var index = POSTS.findIndex(Post => post.postId == Post.postId)
          var userInfo = firebase.firestore().collection('users').doc(post.user_id);
          userInfo.get().then(userDoc => {
            post.user = userDoc.data()
            if (index == -1) {
              POSTS.push(post) // index== -1 means it doesn't exist...
            }
            else {
              post.likes.forEach(async ({userId}, index) => {
                const user = await firebase.firestore().collection('users').doc(userId).get()
                post.likes[index] = user.data()
              })
              POSTS[index] = post 
            }
          });
        })
      })
    })
    /* listening for new posts */
    /* getting current user data */
    let currentUserInfo = firebase.auth().currentUser.uid;
    firebase.firestore().collection('users').doc(currentUserInfo).get().then(doc => {
      this.userObject = doc.data();
    })
    /* getting current user data */
  },
  components: {
    // likesList,
    // lovesList
  }
}
</script>