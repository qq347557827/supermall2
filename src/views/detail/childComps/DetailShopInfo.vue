<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="'http:'+Shop.logo" alt="">
      <span> {{Shop.name}} </span>
    </div>
    <div class="shop-middle">
      <div class="Statistical">
        <div class="sale-count">
          <p class="count"> {{Shop.fans | showFans}} </p>
          <p class="text">总销量</p>
        </div>
        <div class="all-goods">
          <p class="count"> {{Shop.goodsCount}} </p>
          <p class="text">全部宝贝</p>
        </div>
      </div>
      <div class="shop-score">
        <ul v-for="(item,index) in Shop.score" :key="index">
          <li> {{item.name}} </li>
          <li :style="{color:item.isBetter?'#ff8198':'#68cd5b'}"> {{item.score}} </li>
          <li :style="{backgroundColor:item.isBetter?'#ff8198':'#68cd5b'}"> {{item.isBetter ?'高':'低'}} </li>
        </ul>
      </div>
    </div>
    <div class="come_shop">进店逛逛</div>
  </div>
</template>

<script>
export default {
  props:{
    Shop: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  filters: {
    showFans(count){
      if(count>10000 && count<10000000) {
        return (count/10000).toFixed(2) + '万'
      } else if(count>10000000) {
        return (count/10000000).toFixed(2) + '千万'
      } else {
        return count
      }
    }
  }
}
</script>

<style scoped>
  .shop-info {
    padding: 30px 20px;
  }
  .shop-top img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    vertical-align: middle;
  }
  .shop-top span {
    font-size: 18px;
    margin-left: 10px;
  }

  /* 信息相关 */
  .shop-middle {
    margin-top: 20px;
    display: flex;
  }
  .Statistical {
    position: relative;
    flex: 50%;
    /* background-color: pink; */
    /* border-right: 1px solid #f2f2f2; */
    display: flex;
  }
  .Statistical::before {
    position: absolute;
    right: 0;
    content: '';
    width: 1px;
    height: 50px;
    background-color: #f2f2f2;
  }
  .Statistical>div {
    flex: 50%;
    text-align: center;
  }
  .count {
    font-size: 20px;
  }
  .text {
    font-size: 14px;
    margin-top: 10px;
  }
  .shop-score {
    flex: 50%;
    /* background-color: yellow; */
  }
  .shop-score ul {
    display: flex;
    margin-bottom: 10px;
  }
  .shop-score li:nth-child(1) {
    flex: 50%;
    text-align: center;
  }
  .shop-score li:nth-child(2) {
    flex: 30%;
  }
  
  .come_shop {
    width: 6.4rem;
    height: 1.28rem;
    line-height: 1.28rem;
    text-align: center;
    border-radius: 0.42rem;
    background-color: rgba(128, 128, 128, 0.3);
    margin: 0 auto;
  }
 
</style>