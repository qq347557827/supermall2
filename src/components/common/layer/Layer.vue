<template>
  <transition name="slide-fade">
    <div class="layer" v-show="isShow">
      <div class="mask" @click="showMask"></div>
        <div class="core" >
          <i @click="showMask">
          </i>
          <slot></slot>
        </div>
    </div>
  </transition>
</template>

<script>
  export default {
    data(){
      return {
        isShow: false,
        
      }
    },
    methods: {
      showMask(){
        this.isShow = false;
        console.log(258);
      },
      showMasks(){
        console.log('x');
      }
    },
    mounted(){
      this.$bus.$on('isShow', ()=>{
        // console.log(123);
        this.isShow = true;
      })
    }
  }
</script>

<style scoped>
.layer {
  display: flex;
  position: fixed;
  z-index: 9900;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
.core > i {
  position: absolute;
  right: 0;
  top: 0;
  width: 40px;
  height: 40px;
  z-index: 9910;
}
.core > i::after {
    content: "";
    position: absolute;
    top: 10px;
    right: 10px;
    width: 20px;
    height: 20px;
    background-image: url('~@/assets/images/del.png');
    background-size: cover;

}
.mask {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 9901;
  background-color: rgba(0, 0, 0, 0.4);
}
.core {
  position: absolute;
  width: 100%;
  /* max-height: 80vh; */
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 9902;
  background-color: #fff;
  /* overflow: scroll; */
}
.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  /* transform: translateY(500px); */
  bottom: -500px;
  opacity: 0;
}

</style>