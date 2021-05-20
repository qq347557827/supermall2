<template>
  <div class="list-bar"
    :class="{'l-active':$store.getters.selectedAll}"
  >
    <i class="icon_select" @click="changeSelectAll">全选</i>
    <div class="total">
      <div class="t_detail">
        <p class="t_main">
          <span>总计：</span>
          <span class="t_price">{{$store.getters.t_price}}</span>
        </p>
      </div>
      <div class="buy" :class="{'buy-act':$store.getters.t_price>0}">去结算</div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      
    }
  },
  methods: {
    changeSelectAll() {
      this.$store.commit('changeSelectAll')
    }
  },
  computed: {
    
    
  }
};
</script>

<style scoped>
.list-bar {
  left: 0;
  right: 0;
  margin: 0 auto;
  height: 50px;
  background: hsla(0, 0%, 100%, 0.95);
  position: fixed;
  z-index: 9;
  bottom: 49px;
  padding-bottom: env(safe-area-inset-bottom);
  padding-left: 73px;
}
.list-bar::before {
  content: "";
  position: absolute;
  top: 0px;
  left: 0;
  right: 0;
  height: 1px;
  background-color: #ddd;
  transform: scaleY(0.5);
}
.icon_select {
  position: absolute;
  left: 0;
  top: 0;
  padding-left: 44px;
  line-height: 50px;
}
.icon_select::after {
  content: "";
  position: absolute;
  top: calc(50% - 8px);
  right: 34px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 0.5px solid #cccccc;
}
.l-active .icon_select::after {
  border: none;
  background:url('~@/assets/images/Selected3x.png') no-repeat center;
  background-size: cover;
}
.total {
  display: flex;
}
.t_detail {
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  height: 50px;
  position: relative;
  text-align: right;
  font-family: JDZH-Regular;
  font-display: swap;
}
.t_detail .t_main {
  line-height: 1;
}
.buy {
  margin: 6px 12px 0;
  font-weight: 700;
  /* display: block; */
  width: 113px;
  height: 38px;
  line-height: 38px;
  text-align: center;
  font-size: 13px;
  border-radius: 20px;
  background: linear-gradient(143deg, #FF6A00, #EE0979);
  color: #fff;
  opacity: .3;
}
.buy-act {
  opacity: 1
}
</style>