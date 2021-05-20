<template>
  <div class="goods">
    <!-- <ul> -->
      <!-- <li v-for="(item,index) in goods.pop.list" :key="index">
        <img :src="item.show.img">
      </li>
    </ul> -->
    <goods-list-item 
      v-for="(item,index) in goodsList" 
      :key="index"
      :item="item"
      class="goods-list">
    </goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
  name: 'GoodsList',
  components: {
    GoodsListItem
  },
  props:{
    goodsList:{
      type: Array,
      default(){
        return []
      }
    },
    tabcontrolTop: {
      type: Number,
      default: 0
    }
  },
  computed:{
    // getGoodsList(){
    //   return 
    // }
  },
  // beforeupdated(){
  //   // console.log(this.tabcontrolTop);
  //   //点击tabcontrol切换goodlist数据,把滚动条初始到tabcontrol高度
  //   document.documentElement.scrollTop = document.documentElement.scrollTop > this.tabcontrolTop ? this.tabcontrolTop: document.documentElement.scrollTop

  // }
}
</script>

<style>
  .goods {
    display: flex;
    flex-wrap:wrap;
    justify-content:space-evenly;
    background-color: #f1f1f1;
  }
  .goods-list {
    width: 47%;
    margin: 5px 0;
    background-color: #fff;
  }

</style>