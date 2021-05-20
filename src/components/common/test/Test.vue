<template>
  <transition name="bounce">
    <div class="test" v-show="testShow">
      <span class="bot"></span>
      <span class="top"></span>
      {{test}}
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    test: {
      type: String,
      default() {
        return "CSS “边框法”实现气泡对话框效果二";
      },
    },
    testShow: {
      type: Boolean,
      default(){
        return false
      }
    }
  },
  computed: {
    // testShows(){
    //   if (this.testShow) {
    //     setTimeout( ()=> {
    //       console.log(this);
    //       return false
    //     },1000 )
    //     return true
    //   } else {
    //     return false
    //   }
    // }
  }
};
</script>

<style scoped>
.test {
  min-width: 220px;
  padding: 2px 5px;
  border-radius: 10px;
  border: 3px solid #beceeb;
  position: absolute;
  top: -40px;
  left: calc(50% - 110px);
  /* transform: translateX(-50%); */
  margin: 0 auto;
  text-align: center;
  color: #000;
  line-height: 16px;
  background-color: #fff;
}
.test span {
  width: 0;
  height: 0;
  font-size: 0;
  overflow: hidden;
  position: absolute;
}
.test span.bot {
  border-width: 10px;
  border-style: solid dashed dashed;
  border-color: #beceeb transparent transparent;
  left: 50%;
  margin-left: -10px;
  bottom: -23px;
}
.test span.top {
  border-width: 10px;
  border-style: solid dashed dashed;
  border-color: #ffffff transparent transparent;
  left: 50%;
  margin-left: -10px;
  bottom: -18px;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-out .5s;
  
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  
  100% {
    transform: scale(0);
    opacity: 0;
  }
}
</style>