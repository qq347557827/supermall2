<template>
  <div class="footbar">
    <div class="footbar-left">
      <div>
        <i class="iconfont">&#xe655;</i>
        <span>店铺</span>
      </div>
      <div class="customer">
        <i class="iconfont">&#xe60a;</i>
        <span class="customer-text">客服</span>
      </div>
      <div>
        <i class="iconfont">&#xe629;</i>
        <span>收藏</span>
      </div>
    </div>
    <div class="footbar-right">
      <div class="btn-pink" @click="isShow">加入购物车</div>
      <div class="btn-red">立即购买</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    isShow(){
      this.$bus.$emit('isShow')
    }
  }
};
</script>

<style scoped>
.footbar {
  display: flex;
  
  text-align: center;
}
.footbar > div {
  flex: 1;
  display: flex;
}
.footbar-left {
  border-top:1px solid #ededed ;
}
.footbar-left > div {
  flex: 1;
}

.footbar-left i {
  display: block;
  margin-top: 5px;
}
.footbar-left span {
  display: block;
  color: #666;
  font-size: 12px;
}
.footbar-left .customer {
  color: #ff5777 !important;
  border-left:1px solid #ededed ;
  border-right:1px solid #ededed ;
}
.footbar-left .customer-text {
  color: #ff5777;

}
.footbar-right > div {
  flex: 1;
  line-height: 50px;
}
.btn-pink {
  color: #ff5777;
  background-color: #ffe6e8;
}
.btn-red {
  color: #fff;
  background: -webkit-linear-gradient(left, #ff5777, #ff468f);
  background: linear-gradient(90deg, #ff5777, #ff468f);
}
</style>