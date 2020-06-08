<template>
  <div class="messenger">
    <div class="row">
      <div class="col-lg-3 main">
        <div class="chatItemsHead">
          <h4>Chats</h4>
          <input type="text" placeholder="Search for chat..">
          <i class="fas fa-cog"></i>
          <i class="fas fa-times"></i>
        </div>
        <div class="chatItems">
          <div class="chatItem">
            <img src="../assets/ahmad.jpg" alt="">
            <div class="chatItemInfo">
              <h6>ahmad eid</h6>
              <p>hello friend. where are you!?</p>
            </div>
          </div>
          <div class="chatItem">
            <img src="../assets/ahmad.jpg" alt="">
            <div class="chatItemInfo">
              <h6>ahmad eid</h6>
              <p>hello friend. where are you!?</p>
            </div>
          </div>
          <div class="chatItem">
            <img src="../assets/ahmad.jpg" alt="">
            <div class="chatItemInfo">
              <h6>ahmad eid</h6>
              <p>hello friend. where are you!?</p>
            </div>
          </div>
          <div class="chatItem">
            <img src="../assets/ahmad.jpg" alt="">
            <div class="chatItemInfo">
              <h6>ahmad eid</h6>
              <p>hello friend. where are you!?</p>
            </div>
          </div>
          <div class="chatItem">
            <img src="../assets/ahmad.jpg" alt="">
            <div class="chatItemInfo">
              <h6>ahmad eid</h6>
              <p>hello friend. where are you!?</p>
            </div>
          </div>
          <div class="chatItem">
            <img src="../assets/ahmad.jpg" alt="">
            <div class="chatItemInfo">
              <h6>ahmad eid</h6>
              <p>hello friend. where are you!?</p>
            </div>
          </div>
          <div class="chatItem">
            <img src="../assets/ahmad.jpg" alt="">
            <div class="chatItemInfo">
              <h6>ahmad eid</h6>
              <p>hello friend. where are you!?</p>
            </div>
          </div>
          <div class="chatItem">
            <img src="../assets/ahmad.jpg" alt="">
            <div class="chatItemInfo">
              <h6>ahmad eid</h6>
              <p>hello friend. where are you!?</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="chatArea">
          <div class="chatAreaHead">
            <img src="../assets/ahmad.jpg" alt="">
            <div class="chatAreaHeadInfo">
              <h6>ahmad eid</h6>
              <p class="online"></p>
              <p>online</p>
            </div>
            <i class="fas fa-bars"></i>
            <i class="fas fa-info"></i>
            <i class="fas fa-user"></i>
            <i class="fas fa-ellipsis-v"></i>
          </div>
          <div class="messages">
            <ul class='list-unstyled'>

            </ul>
          </div>
          <div class="newMessage">
            <i class="fas fa-microphone"></i>
            <i class="fas fa-camera"></i>
            <input type="text" placeholder="type your message..">
            <i class="fas fa-paper-plane"></i>
          </div>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="chatProfile">
          <div class="chatProfileHead">
            <img src="../assets/ahmad.jpg" alt="">
            <h4>ahmad eid</h4>
          </div>
          <div class="links">
            <i class="fas fa-user-plus"></i>
            <i class="fas fa-camera"></i>
            <i class="fas fa-cogs"></i>
          </div>
          <div class="chatProfileOptions">
            <div class="option">
              <h6>studied at</h6>
              <p>el shaheed abdel meneam ryad high school</p>
            </div>
            <div class="option">
              <h6>works at</h6>
              <p>future civil engineering company</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data() {
    return {
      
    }
  },
  mounted() {
    $('.fa-bars').on('click', function() {
      $('.chatItemsHead, .chatItems').css({
        width: '250px'
      })
      $('.main').css({
        marginLeft: 0
      })
    });
    $('.chatItemsHead i.fa-times').on('click', function() {
      $('.chatItemsHead, .chatItems').css({
        width: '0px'
      })
      $('.main').css({
        marginLeft: '-275px'
      })
    })
  }
}
</script>