<template>
  <div class="item">
    <div class="item-user">
      <img :src="item.user.avatar" alt="">
      <span>{{item.user.uname}}</span>
    </div>
    <div class="content"> {{item.content}} </div>
    <div class="atts">
      <span>{{item.created | todate}}</span>
    </div>
    <div class="rate-img"
          v-if="item.images">  
      <div v-for="(itemImg,index) in item.images" :key="index">
        <img :src="itemImg">
        <!-- 123 -->
      </div>
    </div>
    <div class="extra-info">
      <span v-for="(itemInfo,index) in item.extraInfo" :key="index"> {{itemInfo}} </span>
    </div>
  </div>
</template>

<script>
import { Format } from "@/common/utils";
export default {
  props: {
    item: {

    }
  },
  filters: {
    todate(date){
      return Format(date*1000)('yy-MM-dd');
    }
  }
}
</script>

<style scoped>
  .item {
    padding: 12px 0;
  }
  .item-user {
    height: 40px;
  }
  .item-user img {
    height: 100%;
    border-radius: 50%;
    vertical-align: middle;
  }
  .item-user span {
    margin-left: 10px;
  }
  .content {
    margin-top: 10px;
    color: #727272;
  }
  .atts {
    margin-top: 5px;
  }
  .atts span {
    font-size: 12px;
  }
  .rate-img {
    margin-top: 5px;
    /* width: 80px; */
  }
  .rate-img div {   
    /* float: left; */
    display: inline-block;
    width: 80px;  
    /* height: 120px; */
    padding: 5px;
  }
  .rate-img img {
    /* display: inline-block; */
    max-height: 100px;
    width: 100%;
    margin-right: 5px;
  }
  .extra-info span {
    font-size: 12px;
    color: #999;;
  }
</style>