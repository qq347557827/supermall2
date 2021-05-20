<template>
  <div class="goods-info" v-if="Object.keys(detailInfo).length>0">
    <div class="desc">
      <div class="desc-start lineBar">
        <i></i>
      </div>
      <div class="text">{{detailInfo.desc}} </div>
      <div class="desc-end lineBar">
        <i class="right"></i>
      </div>
    </div>
    <div class="detail-img" >
      <div class="item-title">图文详情</div>
      <!-- <div class="item-desc" v-if="Object.keys(detailInfo).length>0"> {{detailInfo.detailImage[0].desc}} </div> -->
      <ul v-for="(item,index) in detailInfo.detailImage" :key="index">
        <li class="list"  
                          v-for="(items,indexs) in item.list" :key="indexs">
          <img :src="'http:'+items" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DetailGoodsInfo',
  props: {
    detailInfo: {
      type: Object,
      default(){
        return {
          detailImage:[]
        }
      }
    }
  },
  created(){
    // this.detailInfo.detailImage.lenght
    // console.log('123',this.detailInfo.detailImage);
  }
}

</script>

<style scoped>
  .goods-info {
    padding: 10px 0;
  }
  .desc {
    margin: 10px 0;
    padding: 0 15px;
  }
  .lineBar {
    position: relative;
    width: 5.5rem;
    height: 1px;
    background-color: #a3a3a5;
  }
  .desc-start {
    float: left;
  }
  .desc-end {
    float: right;
  }
  .text {
    padding: 20px 0;
  }
  .lineBar i {
    position: absolute;
    top: -2px;
    /* bottom: 2px; */
    width: 5px;
    height: 5px;
    background-color: #000;
    border-radius: 50%;
  }
  .right {
    right: 0;
  }
  .item-title {
    padding: 10px 0 10px 15px;
  }
  .list img {
    width: 100%;
  }
</style>