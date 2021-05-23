<!-- 组件说明 -->
<template>
  <div class='list-bgc'>
    <div class="list-tab">
      <ul 
        @touchstart.stop="touchstarts($event)"
        @touchmove.stop="touchmoves($event)"
        @touchend.stop="touchends"
        :style="{top:touchmoveY+'px'}"
        :class="{'touchmoveY':isActice}"
      >
        <li v-for="(item,index) in categoryList" :key="index"
          @click="changeActive(index,item.maitKey,item.miniWallkey)"
          :class="{'cur':index === activeIndex}"
        >
          <a href="javascript:;">{{item.title}}</a> 
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  //import x from ''
  export default {
    components: {

    },
    data () {
      return {
        activeIndex: 0,
        touchstartY: 0,
        touchmoveY: 0,
        translateY: 0,
        maxMoveY: 0,
        isActice: false,
      };
    },
    props: {
      categoryList: {
        type: Array
      }
    },
    computed: {
      // translateY(){
      //   return += this.touchmoveY
      // }
      // isActices: {
      //   get(){
      //     // if(this.touchmoveY===0 || this.touchmoveY === this.maxMoveY){
      //     //   this.isActice = false ;
      //     //   // return false
      //     // } 
      //     return this.touchmoveY>0 || this.touchmoveY < this.maxMoveY
      //   }
        
      // }
    },
    methods: {
      changeActive(index, key, miniWallkey) {
        this.activeIndex = index
        this.$emit('selectedList', key, miniWallkey)
      },
      touchstarts(el){
        // console.log(el);
        this.isActice =false
        this.touchstartY = el.touches[0].clientY - el.path[2].offsetTop
        // console.log( el.path[3].offsetHeight,el.path[2].offsetHeight);
        this.maxMoveY = el.path[3].offsetHeight - el.path[2].offsetHeight
        // console.log(this.touchstartY);
      },
      touchmoves(el){
        this.touchmoveY = el.touches[0].clientY - this.touchstartY
        // console.log(el);
        // console.log(this.touchmoveY,this.maxMoveY);
        // this.translateY += this.touchmoveY
        this.touchmoveY = (this.touchmoveY >= (-150 + this.maxMoveY)) ? this.touchmoveY : (-150 + this.maxMoveY)
        this.touchmoveY = this.touchmoveY <= 150 ? this.touchmoveY : 150

      },
      touchends(){
        if(this.touchmoveY>0) {
          this.isActice = true
          this.touchmoveY = 0
        } else if (this.touchmoveY < this.maxMoveY) {
          // this.isActice = true
          this.isActice = true
          this.touchmoveY = this.maxMoveY
        } 
      }
    },
  }
</script>

<style scoped>
/* @import url() */
  .list-bgc {
    float: left;
    width: 90px;
    /* height: auto; */
    height: 100%;
    padding-top: 44px;
    padding-bottom: 49px;
    background-color: #f8f8f8;
  }
  .list-tab {
    position: relative;
    height: 100%;
    overflow: hidden;
  }
  .list-tab ul {
    position: absolute;
   
    /* height: 100%; */
    height: auto;
    width: 100%;
  }
  .list-tab li {
    height: 46px;
    line-height: 46px;
    text-align: center;
  }
  .list-tab a {
    display: block;
    width: 100%;
    height: 100%;
  }
  .cur {
    background-color: #fff;
    
  }
  .cur a {
    color: #ff5777;
    font-weight: 700;
  }
  .touchmoveY {
    transition: all .5s;
  }
</style>