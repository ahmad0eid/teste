<template>
  <div class="settings">
    <div class="row">
      <div class="col-lg-3 profileInfoSectionMain">
        <div class="profileInfoSection">
          <i class="fas fa-times wrong"></i>
          <div class="imageP">
            <img :src="userObject.imgURL" alt="">
            <p class="online"></p>
          </div>
          <h6>{{userObject.nickname}}</h6>
          <p>civil engineer</p>
          <hr>
          <div class="profileOptions">
            <ul class="list-unstyled">
              <li data-choose='general' class="active"><i class="fas fa-clinic-medical"></i> General</li>
              <li data-choose='security'><i class="fas fa-lock"></i> Security</li>
              <li data-choose='account'><i class="fas fa-user"></i> Account</li>
              <hr>
              <li><i class="far fa-life-ring"></i> pages</li>
              <li><i class="far fa-life-ring"></i> Help</li>
              <hr>
              <li><i class="fas fa-sign-out-alt"></i> Logout</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-lg-8 col-md-9">
        <div class="setDataGeneral" id="general">
          <div class="show">
            <i class="fas fa-bars"></i>
          </div>
          <h5>General Settings</h5>
          <div class="field">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="edit">
                  <label for="">FIRST NAME:</label>
                  <input type="text" v-model="firstName">
                  <i class="far fa-user"></i>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="edit">
                  <label for="">LAST NAME:</label>
                  <input type="text" v-model="lastName">
                  <i class="far fa-user"></i>
                </div>
              </div>
              <div class="col-lg-9 col-md-9 col-sm-9">
                <div class="edit2">
                  <label for="">EMAIL:</label>
                  <input type="text" v-model="newEmail" placeholder="change your email">
                  <i class="far fa-envelope"></i>
                </div>
              </div>
              <div class="col-lg-10 col-md-10">
                <div class="inst">
                  <p>Type all your new data to update your general settings, your first or last name, your email and choose your country and city...</p>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="edit">
                  <label for="">CITY:</label>
                  <input type="text" v-model="city" placeholder="your city!">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="edit">
                  <label for="">COUNTRY:</label>
                  <input type="text" v-model="country" placeholder="your country!">
                  <i class="fas fa-globe-africa"></i>
                </div>
              </div>
              <button @click="saveChanges">save changes</button>
            </div>
          </div>
        </div>
        <div class="setDataSecurity" id="security">
          <div class="show">
            <i class="fas fa-bars"></i>
          </div>
          <h5>Security Settings</h5>
          <div class="field">
            <div class="row">
              <div class="col-lg-9 col-md-9 col-sm-9">
                <div class="edit">
                  <label for="">CURRENT PASSWORD:</label>
                  <input type="password" v-model="currentPassword" placeholder="verify your current password">
                  <i class="fas fa-user-lock"></i>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="edit2">
                  <label for="">NEW PASSWORD:</label>
                  <input type="password" v-model="newPassword" placeholder="your new password!">
                  <i class="fas fa-lock"></i>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="edit2">
                  <label for="">REPEAT PASSWORD:</label>
                  <input type="password" v-model="repeatedPassword" placeholder="repeat new password">
                  <i class="fas fa-lock"></i>
                </div>
              </div>
              <div class="col-lg-10">
                <p style="color: red; margin-left: 3%; margin-bottom: -20px; padding-top: 10px; text-align: left">{{feedback}}</p>
              </div>
              <div class="col-lg-10 col-md-10 col-sm-10">
                <div class="inst">
                  <p>Update your security settings, try to change your password to secure your account and use your phone number to protect your account...</p>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="edit3">
                  <label for="">PHONE NUMBER:</label>
                  <input type="number" v-model="phoneNumber" placeholder="secure with phone number!">
                  <i class="fas fa-mobile-alt"></i>
                </div>
              </div>
              <button @click="securityChanges">save changes</button>
            </div>
          </div>
        </div>
        <div class="account" id="account">
          <div class="show">
            <i class="fas fa-bars"></i>
          </div>
          <h5>Personal Settings</h5>
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="opt">
                <i class="far fa-user"></i>
                <h6>personal info</h6>
                <p>access your personal info</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="opt">
                <i class="fas fa-users"></i>
                <h6>friends</h6>
                <p>manage your friends list</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="opt">
                <i class="fas fa-camera-retro"></i>
                <h6>photos</h6>
                <p>add and delete photos</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="opt">
                <i class="fas fa-user-shield"></i>
                <h6>private</h6>
                <p>manage your private info</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="opt">
                <i class="fab fa-pagelines"></i>
                <h6>pages</h6>
                <p>easy access of your pages</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="opt">
                <i class="far fa-address-card"></i>
                <h6>posts</h6>
                <p>manage your own posts</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="opt">
                <i class="far fa-user-circle"></i>
                <h6>profile</h6>
                <p>manage your profile info</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="opt">
                <i class="fas fa-cloud-sun-rain"></i>
                <h6>cover</h6>
                <p>access your own cover info</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
              <div class="opt">
                <i class="fas fa-user-cog"></i>
                <h6>account</h6>
                <p>access your account settings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import $ from 'jquery'
export default {
  data() {
    return {
      userObject: '',
      firstName: '',
      lastName: '',
      newEmail: '',
      city: '',
      country: '',
      currentPassword: '',
      newPassword: '',
      repeatedPassword: '',
      phoneNumber: '',
      feedback: ''
    }
  },
  methods: {
    saveChanges() {
      let currentUser = firebase.auth().currentUser.uid;
      firebase.firestore().collection('users').doc(currentUser).update({
        nickname: this.firstName + ' ' + this.lastName,
        email: this.newEmail,
        city: this.city,
        country: this.country
      }).then(() => {
        firebase.firestore().collection('users').doc(currentUser).get().then(doc => {
          this.userObject = doc.data();
        })
      })
    },
    securityChanges(newPassword, currentPassword) {
      newPassword = this.newPassword;
      currentPassword = this.currentPassword;
      let currentUser = firebase.auth().currentUser;
      var credential = firebase.auth.EmailAuthProvider.credential(currentUser.email, currentPassword);
      if(credential != null) {
        if(this.newPassword.match(this.repeatedPassword)) {
          firebase.auth().currentUser.reauthenticateWithCredential(credential).then(() => {
            firebase.auth().currentUser.updatePassword(newPassword).then(() => {
              console.log('password updated');
              var currentUserUID = firebase.auth().currentUser.uid;
              firebase.firestore().collection('users').doc(currentUserUID).update({
                phoneNumber: this.phoneNumber
              })
            })
          }).catch(() => {
            this.feedback = 'The current password you entered is invalid.'
          })
        } else {
          this.feedback = "new password does't match!";
        }
      } else {
        console.log('wrong password');
      }
    }
  },
  mounted() {
    /* start jquery functions of navigation */
    $('.profileOptions li').on('click', function() {
      $(this).addClass('active').siblings().removeClass('active');
      $('#' + $(this).attr('data-choose')).css({display: 'block'}).siblings().css({display: 'none'})
      $('i.wrong').click();
    })
    /* end jquery functions of navigation */
    /* start show bar */
    $('.show i').on('click', function() {
      $('.profileInfoSection').toggleClass('side');
    })
    $('i.wrong').on('click', function() {
      $('.profileInfoSection').toggleClass('side')
    })
    /* end show bar */

    var name = 'ahmad eid';
    console.log(name.split(' ')[0]);

  },
  created() {
    let currentUser = firebase.auth().currentUser.uid;
    firebase.firestore().collection('users').doc(currentUser).get().then(doc => {
      this.userObject = doc.data();
      this.firstName = doc.data().nickname.split(' ')[0];
      this.lastName = doc.data().nickname.split(' ')[1];
      this.newEmail = doc.data().email;
      this.city = doc.data().city;
      this.country = doc.data().country;
    })
    console.log(this.city)
  }
}
</script>