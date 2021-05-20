<template>
  <div class="goods-list-item" @click="goodsitemclick(item.iid)">
    <img :src="item.img" alt="">
    <div class="list-title">
      <p> {{item.title}}</p>
      <div>
        <span>{{item.price}}</span>
        <i class="iconfont">{{item.sale}}&#xe609; 
        </i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'GoodsListItem',
  props:{
    item:{
      type: Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    //获取商品的 iid,通过地址栏传入详情页
    goodsitemclick(iid){
      // console.log(iid);
      // console.log(this.$router);
      if(iid) {
        this.$router.push('/detail/' + iid)
      }
      
    }
  }
}
</script>

<style>
  .goods-list-item img{
    width: 100%;
    border-radius: 2px;
  }
  .list-title {
    padding: 6px;
  }
  .list-title> div {
    padding: 5px 0;
  }
  .list-title span {
    font-weight: 700;
  }
  .list-title i {
    float: right;
    font-size: 10px;
    margin-top: 4px;
  }
  .goods-list-item p {
    display: -webkit-box; 
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; 
    overflow: hidden;
    font-size: 12px;
    color: rgb(51, 51, 51); 
  }
</style>