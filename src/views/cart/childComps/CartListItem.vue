<template>
  <div class="cart-list-item" >
    <i class="selected" @click="isSelected"
      :class="{'selected-acrive':itemData.selected}"  
    >
    </i>
    <div class="cart-img" >
      <div class="img">
        <img
          :src="'http:'+itemData.selectImg"
        />
      </div>
    </div>
    <div class="shop-sku" >
      
      <div class="shops">
        <img src="~@/assets/images/shop@3x.png" alt />
        <span class="shops-text">{{itemData.shopsName}}</span>
      </div>
      <div class="shop-name">
        <span>{{itemData.shopTitle}}</span>
      </div>
      <div class="sku">{{itemData.allSkuName}}</div>
      <div class="price_line">
        <div class="price">{{price}}</div>
        <div class="num_wrap">
          <span class="minus disabled" @click="minus(itemData.count)">-</span>

          <input type="tel" class="num" :value="itemData.count"
            @blur="nums($event.target.value)"
          />

          <span class="plus" @click="plus(itemData.count)">+</span>
          <test :testShow="this.testShow" :test="test"></test>
        </div>
      </div>
      <!-- <div class="del">
        <span>删除</span>
      </div> -->
    </div>
    
  </div>
</template>

<script>
import Test from '../../../components/common/test/Test.vue';
import { toTestShow } from "@/common/utils.js";
export default {
  components: { Test },
  name: 'CartListItem',
  props: {
    itemData: {
      type: Object
    },
    itemIndex: {
      type: Number
    }
  },
  data(){
    return {
      testShow :false,
      test: ''
    }
  },
  methods: {
    isSelected(){
      // console.log(this.itemIndex);
      this.$store.commit('isSelected', this.itemIndex)
    },
    minus(item){
      if(item <=1) {
        this.test = '最少一件了'
        this.testShow = true
        toTestShow(flg => {
          this.testShow = flg
        },1000)
      } else {
        this.$store.commit('minus',this.itemIndex)
      }
      
    },
    plus(){
      this.$store.commit('plus',this.itemIndex)
    },
    nums(event){
      console.log(event);
      this.$store.commit('nums', {
        value: event,
        index : this.itemIndex
      })
    }
  },
  computed: {
    price(){
      return this.itemData.currency + (this.itemData.selectPrice / 100).toFixed(2)
    }
  }
};
</script>

<style scoped>
.cart-list-item {
  display: flex;
  width: 342px;
  height: 153px;
  position: relative;
  margin: 10px auto 0;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 #e5e5ed;
}
.selected {
  position: absolute;
  right: 12px;
  top: 11px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: .5px solid #CCCCCC;
  z-index: 9;
}
.selected-acrive {
  border: none;
  background: url('~@/assets/images/Selected3x.png') no-repeat center;
  background-size: cover;
}
.cart-img {
  width: 153px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: pink; */
}
.img {
  width: 130px;
  height: 130px;
  overflow: hidden;
}
.img img {
  width: 100%;
  border-radius: 8px;
}
.shop-sku {
  width: 190px;
  position: relative;

  /* background-color: pink; */
}
.shops {
  margin-top: 11px;
  /* background-color: pink; */
}
.shops img {
  width: 14px;
  height: 12px;
  vertical-align: middle;
}
.shops-text {
  margin-left: 5px;
  color: #333;
  font-size: 14px;
}
.shop-name {
  margin-top: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.sku {
  margin-top: 8px;
  color: #999999;
  font-size: 12px;
  font-family: "SourceHanSansSC-Regular";
}
.price_line {
  margin-top: 5px;
}
.price {
  float: left;
  color: #fc5619;
  font-size: 18px;
}
.num_wrap {
  position: relative;
  min-width: 66px;
  float: right;
  margin-top: 3px;
  margin-right: 8px;
}
.num_wrap span {
  font-size: 16px;
}
.minus {
  padding-right: 12px;
}
.plus {
  padding-left: 12px;
}
.num {
  display: inline-block;
  width: 35px;
  -webkit-appearance: none;
  border: none;
  /* margin: 0 8px; */
  text-align: center;
  color: #262626;
  background-color: #f2f2f2;
}
.del span {
  position: absolute;
  bottom: 0;
  right: 5px;
  color: red;
}
</style>