<template>
  <div>
    <layer v-if="skuInfo.skus">
      <template>
        <div>
          <div class="main-info">
            <img :src="'http:'+info.img" alt />
            <div class="right-origin">
              <div class="now-price">
                <span>{{info.priceRange}}</span>
              </div>
              <div>库存{{info.Stock}}件</div>
              <div
                class="sku-text"
                v-if="Object.keys(skuInfo.props).length!==Object.keys(showItemidx).length"
              >
                请选择:
                <span>{{skulabel}}</span>
              </div>
              <div class="sku-text" v-else>
                已选择
                <span class="btn-reduce">{{skulabel}}</span>
                <span class="btn-reduce">{{viewValue}}件</span>
              </div>
              <!-- <div>{{skulabel}}</div> -->
            </div>
          </div>

          <div class="scroll-view">
            <div v-for="(item,index) in skuInfo.props">
              <div class="label">{{item.label}}</div>
              <ul>
                <li
                  v-for="(item2,index2) in item.list"
                  :key="index2"
                  @click="changeActive(index,item2.index,item2.name,item2)"
                  :class="{'active':showItemidx[index] == item2.index}"
                >{{item2.name}}</li>
              </ul>
            </div>
            <div>
              <div class="label">
                数量
                <span class="number-tip"></span>
              </div>
              <div class="number-calculator">
                <span class="btn-reduce" :class="{'disabled':viewValue<=1}" @click="btnReduce">-</span>
                <span class="view-value">{{viewValue}}</span>
                <span class="btn-add" :class="{'disabled':viewValue>=10}" @click="btnAdd">+</span>
              </div>
            </div>
          </div>

          <div class="buy-cart" @click="buyCart">
            确定
            <test :test="test" :testShow="testShow"></test>
          </div>
        </div>
      </template>
    </layer>
  </div>
</template>

<script>
import Layer from "../../../components/common/layer/Layer.vue";
import Test from "../../../components/common/test/Test.vue";
export default {
  components: { Layer, Test },
  data() {
    return {
      viewValue: 1,
      showIdx: 0,
      showItemidx: {},
      showItem: {},
      showActive: true,
      newInfo: {},
      test: "测试",
      testShow: false,
      buyinfo: {},
      cartData: []
      //  info:{
      //   priceRange: this.skuInfo.priceRange,
      //   Stock: this.skuInfo.totalStock,
      //   style: this.skuInfo.styleKey,
      //   size: this.skuInfo.sizeKey
      // }
    };
  },
  props: {
    skuInfo: {
      type: Object,
    },
    shopName: {
      type: String,
    },
    shopTitle: {
      type: String,
    },
  },
  computed: {
    info() {
      return {
        img: this.skuInfo.skus[0].img,
        priceRange: this.skuInfo.priceRange,
        Stock: this.skuInfo.totalStock,
        // style: this.skuInfo.styleKey,
        // size: this.skuInfo.sizeKey,
      };
    },
    skulabelShow() {
      return (
        Object.keys(this.skuInfo.props).length ==
        Object.keys(this.showItemidx).length
      );
    },
    skulabel() {
      let _skulabel = "";
      if (!this.skulabelShow) {
        for (let i in this.skuInfo.props) {
          if (!this.showItemidx[i]) {
            let str = this.skuInfo.props[i].label.replace(":", "   ");
            _skulabel += str;
          }
        }
      } else {
        for (let i in this.showItem) {
          _skulabel += this.showItem[i].name + "   ";
        }
      }
      return _skulabel;
    },

    // label(){
    //   this.skuInfo.props.forEach( (v,i) => {
    //     if(this.showItemidx)
    //   });
    // }
  },
  methods: {
    btnReduce() {
      this.viewValue > 1 && (this.viewValue -= 1);
    },
    btnAdd() {
      this.viewValue < 10 && (this.viewValue += 1);
    },
    changeActive(index, itemId, itemName, item) {
      if (this.showItemidx[index] == itemId) {
        // this.showItemidx.splice(index, 1, 0);
        this.$delete(this.showItemidx, index);
        this.$delete(this.showItem, index);

        console.log(this.showItemidx);
      } else {
        this.$set(this.showItemidx, index, itemId);
        this.$set(this.showItem, index, item);
        console.log(this.showItemidx, this.showItem);
      }
      // let skus = this.skuInfo.skus;
      // console.log(item);
      // for (let value in this.showItemidx) {
      //   console.log(value, this.showItem[value]);
      //   let ii = this.showItem[value];
      //   let types = ii.type + "Id";
      //   console.log("item.type + id", types);
      //   skus = skus.filter((n) => {
      //     return n[types] == this.showItemidx[value];
      //   });
      // }
      // console.log("skus", skus);
      // let price
      // let counts = 0;
      // if (skus.length > 1) {
      //   counts = skus.reduce((p, n) => {
      //     return p + n.stock;
      //   }, 0);
      //   this.$set(this.info, "priceRange", this.skuInfo.priceRange);
      // } else {
      //   counts = skus[0].stock
      //   price = skus[0].currency + (skus[0].nowprice / 100).toFixed(2);
      //   this.$set(this.info, "priceRange", price);
      //   this.$set(this.info, "stockId", skus[0].stockId);
      //   this.$set(this.info, "allSkuName", this.skulabel);
      //   this.$set(this.info, "count", this.viewValue);

      //   console.log('this.info',this.info);
      //   // this.$set(this.info, "style", skus[0].);
      // }
      // let img = skus[0].img;
      // this.$set(this.info, "img", img);
      // console.log(counts);
      // this.$set(this.info, "Stock", counts);

      this._skuInfo();
    },
    _skuInfo() {
      let skus = this.skuInfo.skus;
      // console.log(item);
      for (let value in this.showItemidx) {
        console.log(value, this.showItem[value]);
        let ii = this.showItem[value];
        let types = ii.type + "Id";
        console.log("item.type + id", types);
        skus = skus.filter((n) => {
          return n[types] == this.showItemidx[value];
        });
      }
      console.log("skus", skus);
      let price;
      let counts = 0;
      if (skus.length > 1) {
        counts = skus.reduce((p, n) => {
          return p + n.stock;
        }, 0);
        this.$set(this.info, "priceRange", this.skuInfo.priceRange);
      } else {
        console.log('216this.cartData',this.cartData);
        counts = skus[0].stock;
        price = skus[0].currency + (skus[0].nowprice / 100).toFixed(2);
        this.$set(this.info, "priceRange", price);

        this.$set(this.info, "currency", skus[0].currency);
        this.$set(this.info, "selectPrice", skus[0].nowprice);
        this.$set(this.info, "selectImg", skus[0].img);
        this.info.selectImg = skus[0].img
        this.$set(this.info, "stockId", skus[0].stockId);
        this.$set(this.info, "allSkuName", this.skulabel);
        this.$set(this.info, "count", this.viewValue);

        console.log("this.info", this.info);
        // this.$set(this.info, "style", skus[0].);
      }
      let img = skus[0].img;
      this.$set(this.info, "img", img);
      console.log(counts);
      this.$set(this.info, "Stock", counts);
    },
    buyCart() {
      if (this.skulabelShow) {
        // console.log(this.shopTitle);
        // this.$set(this.info, "shopTitle", this.shopTitle);
        // this.$set(this.info, "shopsName", this.shopName);
        let obj = {};
        obj.selected = true
        obj.currency = this.info.currency
        obj.stockId = this.info.stockId
        obj.allSkuName = this.info.allSkuName
        obj.selectImg = this.info.selectImg
        obj.count = this.info.count
        obj.selectPrice = this.info.selectPrice
        obj.shopTitle = this.shopTitle
        obj.shopsName = this.shopName
        console.log("238this.info", this.info);
        
        console.log('241this.cartData',this.cartData);
        this.$store.commit("addCartInfo", obj
        );
        console.log(this.$store.state.cartInfo);
        this.showItemidx = {};
        this.showItem = {};
        this._skuInfo();
        
      } else {
        this.test = "请选择" + this.skulabel;
        this._tsetShow();
      }
    },
    _tsetShow() {
      this.testShow = true;
      let times = setTimeout(() => {
        this.testShow = false;
        clearTimeout(times);
      }, 1000);
    },
  },
};
</script>

<style scoped>
.main-info {
  position: relative;
  padding: 15px 7.5px;
}
.main-info img {
  width: 80px;
  margin-left: 5px;
  position: absolute;
  bottom: 15px;
}
.right-origin {
  margin-left: 100px;
  color: #333333;
}
.now-price {
  font-size: 28px;
}
.sku-text span {
  margin-left: 5px;
}
.scroll-view {
  max-height: 50vh;
  padding: 0 7.5px 15px 7.5px;
  overflow: scroll;
}
.label {
  padding: 5px 0;
}
.scroll-view li {
  display: inline-block;
  padding: 0 15px;
  border: 1px solid #bbb;
  margin: 0 10px 10px 0;
  line-height: 28px;
  border-radius: 5px;
  color: #5e5e5e;
}
.number-calculator {
  display: flex;
  width: 90px;
  height: 25px;
  border: 1px solid #bbb;
  border-radius: 5px;
}
.number-calculator span {
  flex: 1;
  text-align: center;
}
.view-value {
  border-left: 1px solid #bbb;
  border-right: 1px solid #bbb;
}
.btn-reduce,
.btn-add {
  color: #ed4566;
}
.disabled {
  color: #999 !important;
}
.buy-cart {
  position: relative;
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  color: #fff;
  background: -webkit-linear-gradient(left, #ff5777, #ff468f);
  background: linear-gradient(90deg, #ff5777, #ff468f);
}
.active {
  color: #ed4566 !important;
  border-color: #ed4566 !important;
}
</style>