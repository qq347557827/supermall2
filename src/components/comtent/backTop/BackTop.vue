<template>
  <!-- <div class="back-top" @click="getDom" ref="back"> -->
  <transition name="backtop">
    <div class="back-top" :class="{'backtopactive':backShow}"
      @click="getDom" ref="getDom" v-show="backShow">
      <img src="~@/assets/images/backTop.svg" alt="">
    </div>
  </transition>
</template>

<script>
export default {
  // methods:{
  //   getDom(){
  //     console.log(this.$refs.back.offsetWidth);
  //     console.log(this.$refs.back1.scrollHeight);
  //   }
  // }
  data(){
    return {
      backShow: false
    }
  },
  mounted(){
    window.addEventListener('scroll', this.scrollToTop)
  },
  destroyed(){
    window.removeEventListener('scroll', this.scrollToTop)
  },
  methods: {
    getDom(){
      console.log(this.$refs.getDom.offsetTop);
      let backScrollTop = document.documentElement.scrollTop;
      let num = Math.floor(backScrollTop / 10);
      // console.log(document.documentElement.scrollTop);
      // document.documentElement.scrollTop = 0
      let timer = setInterval(()=>{
        // num = Math.floor(num/2);
        // num = num > 100 ? num -= 100 : 100;
        backScrollTop = backScrollTop > 800 ? backScrollTop-num :backScrollTop-50
        console.log(backScrollTop);
        document.documentElement.scrollTop = backScrollTop;
        if(backScrollTop <= 0 ){
          clearInterval(timer)
        }
      },20)
    },
    scrollToTop(){
      const that = this;
      let backScrollTop = document.documentElement.scrollTop;
      if(backScrollTop > 1000) {
        that.backShow = true;
      } else {
        that.backShow = false;
      }
    }
  }
}
</script>

<style>
  /* .back-top {
    opacity: 0.1;
    transition: all 2s;
  } */
  .back-top img{
    
    width: 100%;
    border-radius: 50%;
    background-color: #ff8198;
    
  }
  /* .backtopactive {
    opacity: 0.9!important;
    
  } */
  .backtop-enter-active, .backtop-leave-active {
    transition: all .5s;
  }
  .backtop-enter, .backtop-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(38px);
  }
</style>