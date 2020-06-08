<template>
  <div class="Timeline">
    <div class="row">
      <div class="col-lg-3 profileInfoSectionMain">
        <div class="profileInfoSection">
          <div class="imageP">
            <img :src="userObject.imgURL" alt="">
            <p class="online"></p>
          </div>
          <h6>{{userObject.nickname}}</h6>
          <p>civil engineer</p>
          <div class="infoInfo">
            <div class="info1">
              <h6>FRIENDS</h6>
              <p>2.3K</p>
            </div>
            <div class="info2">
              <h6>POSTS</h6>
              <p>123</p>
            </div>
          </div>
            <div class="profileOptions">
              <ul class="list-unstyled">
                <li><i class="fas fa-globe-africa"></i> explore</li>
                <li><i class="far fa-bell"></i> notifications</li>
                <li><i class="far fa-comment-alt"></i> messages</li>
                <li><i class="fas fa-cart-arrow-down"></i> cart</li>
                <hr>
                <li><i class="fas fa-search"></i> search</li>
                <li><i class="fas fa-map-marked-alt"></i> maps</li>
                <li><i class="fas fa-user-secret"></i> privacy</li>
                <li><i class="far fa-life-ring"></i> help</li>
                <hr>
                <li @click="$router.push({path: '/settings'})"><i class="fas fa-cog"></i> settings</li>
              </ul>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-8">
        <div class="container">
          <div class="newPost">
            <div class="head">
              <p>Create New Post</p>
            </div>
            <div class="create">
              <img :src="userObject.imgURL" alt="">
              <textarea placeholder="write your post..." id="newPost" v-model="newpost.postContent"></textarea>
            </div>
            <div class="reviewPostImage" id="reviewPostImage">
              <h6>file review</h6>
              <div class="poImg">
                <img :src="newpost.postImg" alt="">
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
              <img :src="`${post.user.imgURL}`" alt="">
              <div class="infoo">
                <h6>{{post.user.nickname}}</h6>
                <p>October 11 2019, 3PM</p>
              </div>
            </div>
            <p class="content">{{post.content}}</p>
            <img class="postImg" :src='post.postImage' alt="">
            <div class="peopleReacted">
              <span class="peopleLiked" @click="toLikesList(post.postId)">{{post.likes.length}} likes</span>
              <span class="peopleLoved">0 loves</span>
              <span class="commentingCounter">{{post.comments.length}} comments</span>
            </div>
            <div class="react">
              <div class="dropdown-divider"></div>
              <i class="fas fa-thumbs-up" ref="like" @click="like($event, post.postId)"></i>
              <i class="fas fa-heart" @click="love"></i>
              <i class="far fa-comment-alt"></i>
            </div>
            <div class="comments">
              <input type="text" placeholder="write comment..." v-model="commentInfo">
              <button @click="comment(post.postId)"><i class="fas fa-paper-plane"></i></button>
              <div class="commentWrapper">
                <div class="comment" v-for="comment in post.comments" :key="comment.id">
                  <img :src="comment.imgURL" alt="">
                  <div class="commentInfo">
                    <h6>{{comment.nickname}}</h6>
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
      <div class="col-lg-3 col-md-4">
        <div class="others">
          <div class="otherHead">
            <p>Suggested Friends</p>
          </div>
          <div class="suggested">
            <div class="one">
              <img src="../assets/images/timeline/friends/one.jpg" alt="">
              <div class="suggestedInfo">
                <h6>Jana Michael</h6>
                <p>human doctor</p>
              </div>
              <i class="fas fa-user-plus"></i>
            </div>
            <div class="one">
              <img src="../assets/images/timeline/friends/two.jpg" alt="">
              <div class="suggestedInfo">
                <h6>Mick Nilson</h6>
                <p>civil engineer</p>
              </div>
              <i class="fas fa-user-plus"></i>
            </div>
            <div class="one">
              <img src="../assets/images/timeline/friends/three.jpg" alt="">
              <div class="suggestedInfo">
                <h6>Nana Wilson</h6>
                <p>dentist</p>
              </div>
              <i class="fas fa-user-plus"></i>
            </div>
            <div class="one">
              <img src="../assets/images/timeline/friends/four.jpg" alt="">
              <div class="suggestedInfo">
                <h6>Jhon Holmes</h6>
                <p>maneger</p>
              </div>
              <i class="fas fa-user-plus"></i>
            </div>
            <div class="one">
              <img src="../assets/images/timeline/friends/fife.jpg" alt="">
              <div class="suggestedInfo">
                <h6>Sara Bille</h6>
                <p>nurse</p>
              </div>
              <i class="fas fa-user-plus"></i>
            </div>
            <div class="one">
              <img src="../assets/images/timeline/friends/seven.jpg" alt="">
              <div class="suggestedInfo">
                <h6>Marie Lore</h6>
                <p>pharmasist</p>
              </div>
              <i class="fas fa-user-plus"></i>
            </div>
          </div>
          <div class="live">
            <div class="liveHead">
              <p>Live Videos</p>
            </div>
            <iframe width="90%" height="315" src="https://www.youtube.com/embed/X0-rCENFfec" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="90%" height="315" src="https://www.youtube.com/embed/0kJNDwcKtT0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
    <likesList v-if="$store.state.showLikesList" :postIdForReactsList= 'postIdForReactsList'></likesList>
    <!-- <lovesList></lovesList> -->
  </div>
</template>

<script>
import firebase from 'firebase'
import admin from 'firebase'
import likesList from '../components/LikesList'
// import lovesList from '../components/LovesList'
export default {
  data() {
    return {
      newpost: {
        username: '',
        postContent: '',
        postImg: ''
      },
      userObject: '',
      commentInfo: '',
      postIdForReactsList: ''
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
          postImage: this.newpost.postImg,
          user_id: doc.data().user_id,
          postId: 'a' + postID,
          comments: [],
          likes: [],
          loves: []
        })
        this.newpost.postContent = '';
        this.newpost.postImg = '';
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
          // userPhoto: this.userObject.imgURL,
          // userNickname: this.userObject.nickname
        })
      })
      this.commentInfo = '';
    },
    like(e, postId) {
      e.target.classList.toggle('likeClicked');
      firebase.firestore().collection('posts').doc(postId).get().then(doc => {
        if (doc.data().likes.length > 0) {
          doc.data().likes.forEach(like => {
            if(like.userId !== firebase.auth().currentUser.uid) {
              e.target.classList.add('likeClicked');
              firebase.firestore().collection('posts').doc(postId).update({
                likes: admin.firestore.FieldValue.arrayUnion({
                  userId: this.userObject.user_id
                })
              })
            } else {
              let likes = doc.data().likes
              e.target.classList.remove('likeClicked');
              firebase.firestore().collection('posts').doc(postId).update({
                likes: likes.filter(like => like.userId !== firebase.auth().currentUser.uid)
              })
            }
          })
        } else {
          firebase.firestore().collection('posts').doc(postId).update({
            likes: admin.firestore.FieldValue.arrayUnion({
              userId: this.userObject.user_id
            })
          })
        }
      })
    },
    love(e) {
      e.target.classList.toggle('loveClicked');
    },
    toLikesList(postId) {
      this.$store.state.showLikesList = true;
      this.postIdForReactsList = postId;
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


          if (doc.comments.length > 0) {
            doc.comments.forEach(async ({userId}, index) => {
              const user = await firebase.firestore().collection('users').doc(userId).get()
              doc.comments[index].user = user.data()
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
    likesList,
    // lovesList
  }
}
</script>