<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper" v-if="topImages.length">
      <swiper-slide v-for="(item,index) in topImages" :key="index">
        <img :src="'http:'+item" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <swiper-slide>
        <img src="//s11.mogucdn.com/mlcdn/c45406/180811_1k5hfa6d803575df3lkb6j67l5j3c_640x960.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="//s11.mogucdn.com/mlcdn/c45406/180811_1k5hfa6d803575df3lkb6j67l5j3c_640x960.jpg" alt="">
      </swiper-slide> -->
    </swiper>
    <!-- <swiper v-else>
      <div class="onlyImg" >
      <img :src="topImages[0]" alt="">
    </div>
    </swiper> -->
    
  </div>
</template>

<script>
  import { swiper, swiperSlide } from "vue-awesome-swiper";
  import "swiper/dist/css/swiper.css";

  export default {
    components: {
      swiper,
      swiperSlide
    },
    props: {
      topImages: {
        type: Array,
        
      }
    },
    computed:{

    },
    data() {
      return {
        isswiperLoad:true,

        swiperOption: {
          loop: true,
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false
          },
          // 显示分页
          pagination: {
            el: ".swiper-pagination",
            clickable: true //允许分页点击跳转
          },
          // 设置点击箭头
          // navigation: {
          //   nextEl: ".swiper-button-next",
          //   prevEl: ".swiper-button-prev"
          // }
        }
      };
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper;
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      // console.log("this is current swiper instance object", this.swiper);
      // this.swiper.slideTo(3, 1000, false);
    }
  }
</script>

<style scoped>
  .recommendPage .swiper-container{
    position: relative;
    width: 100%;
    height: 200px;
    background: pink;
  }  
  .recommendPage .swiper-container .swiper-slide{
    width: 100%;
    line-height: 200px;
    background: yellowgreen;
    color: #000;
    font-size: 16px;
    text-align: center;
  }
  .swiper-slide>img, .onlyImg>img {
    width: 100%;
    height: 300px;
    
  }
</style>