<template>
  <div class="detail">
    <div class="navbar-height">
      <detail-navbar class="detail-navbar" 
            :DlnavbarItemId="DlnavbarItemId" @navbarItemId="navbarItemId"></detail-navbar>
    </div>

    <detail-swiper :topImages="topImages"></detail-swiper>
    <detail-base-info class="detail-base-info" :Goods="Goods"></detail-base-info>
    <detail-comment-info class="detail-comment-info" ref="detailCommentInfo"
            :rate="rate" v-if="Object.keys(rate).length>0"></detail-comment-info>

    <detail-shop-info class="detail-shop-info"
                      :Shop="Shop">
    </detail-shop-info>

    <detail-goods-info :detailInfo="detailInfo"
          v-if="Object.keys(detailInfo).length>0"
          ></detail-goods-info>
    
    <detail-param-info :Params="Params" ref="paramInfo"
            v-if="Params.tables.length>0"></detail-param-info>

    <goods-list :goodsList="recommendsGoods" ref="goodsList"></goods-list> 

    <back-top class="detail-back"></back-top>
    <detail-dialog :skuInfo="skuInfo" :shopName="Shop.name"
      :shopTitle="Goods.title"
    ></detail-dialog>  
    <div class="footbar-height">
      <detail-footbar class="detail-footbar"></detail-footbar> 
    </div>
    
    
    
    <!-- <div class="ll"> {{Object.keys(rate).length}}</div> -->
  </div>
  
</template>

<script>
import {get_detail_data, Goods, Shop, Params, recommends} from "@/network/detail";
import { throttle } from "@/common/utils";
import DetailNavbar from './childComps/DetailNavbar';
import DetailSwiper from './childComps/DetailSwiper.vue';
import DetailBaseInfo from './childComps/DetailBaseInfo.vue';
import DetailShopInfo from './childComps/DetailShopInfo.vue';
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue';
import DetailParamInfo from './childComps/DetailParamInfo.vue';
import GoodsList from '../../components/comtent/goods/GoodsList.vue';
import DetailCommentInfo from './childComps/DetailCommentInfo.vue';
import BackTop from '../../components/comtent/backTop/BackTop.vue';
import DetailFootbar from './childComps/DetailFootbar.vue';
import DetailDialog from './childComps/DetailDialog.vue';




export default {
  components: { DetailNavbar,DetailSwiper, DetailBaseInfo, DetailShopInfo, DetailGoodsInfo, DetailParamInfo, GoodsList, DetailCommentInfo, BackTop, DetailFootbar, DetailDialog },
  data(){
    return {
      iid:null,
      topImages: [],
      Goods: {
        type: Object,
        default(){
          return {}
        }
      },
      Shop: {
        type: Object,
        default(){
          return {}
        }
      },
      Params: {
        tables: []
      },
      detailInfo: {
        type: Object,
        default(){
          return {}
        }
      },
      recommendsGoods:[],
      q : [],
      rate: {
      },
      DlnavbarItemId: 0,
      skuInfo: {},
    }
  },
  created(){
    this.iid = this.$route.params.iid;
    // console.log(this.iid);
    this.get_detail_data();
    this._recommends()   
  },
  mounted (){
    window.addEventListener('scroll',throttle(this.scrollGetNavbarId,40))
  },
  destroyed(){
    window.removeEventListener('scroll',throttle(this.scrollGetNavbarId,40))
  },
  methods:{
    /*
      获取详情页数据
    */
    get_detail_data(){
      get_detail_data(this.iid).then(res => {
        console.log(res);
        // console.log(res.data.result.itemInfo.topImages);
        const data = res.data.result;
        this.topImages = res.data.result.itemInfo.topImages;
        this.Goods = new Goods(data.itemInfo, data.columns, data.shopInfo)
        //获取店铺信息
        console.log('data.shopInfo:', res.data.result.shopInfo);
        this.Shop = new Shop(data.shopInfo)
        // console.log('Shop.name',this.Shop.name);

        this.$set(this.detailInfo, 'desc', data.detailInfo.desc)
        this.$set(this.detailInfo, 'detailImage', data.detailInfo.detailImage)
        // console.log('this.detailInfo',this.detailInfo.detailImage.length);
        this.Params = new Params(data.itemParams);
        // console.log('itemParams',this.Params);

        // 用户评价
        this.rate = data.rate
        window.console.log('this.rate',this.rate);

        this.skuInfo = data.skuInfo;
        console.log(this.skuInfo);
      })
    },

    /*
      获取推荐数据
    */
    _recommends(){
      recommends().then(res => {
        console.log('recommends',res);
        this.q = res.data.data.list;
        this.recommendsGoods = res.data.data.list.map( n => {
          let obj = {};
          obj.img = n.image;
          obj.price = n.discountPrice;
          obj.sale = n.itemSale;
          obj.title = n.title;
          return obj
        })
      })
    },

    /*
      滚动到对应位置,变换导航栏的
    */
    scrollGetNavbarId (){
      if(!this.$refs.paramInfo || !this.$refs.detailCommentInfo || !this.$refs.goodsList) return
      let domScroll = document.documentElement.scrollTop;
      // console.log(this);
      // console.log(this.$refs.paramInfo.$el.offsetTop);

      let prmIoMinY = this.$refs.paramInfo.$el.offsetTop;
      let prmIoMaxY = prmIoMinY + this.$refs.paramInfo.$el.clientHeight;
      // console.log('參數',prmIoMinY,prmIoMaxY);

      let CommentInfoMinY = this.$refs.detailCommentInfo.$el.offsetTop;
      let CommentInfoMaxY = CommentInfoMinY + this.$refs.detailCommentInfo.$el.clientHeight;
      // console.log('評價',CommentInfoMinY,CommentInfoMaxY);
      
      let goodsListMinY = this.$refs.goodsList.$el.offsetTop;
      let goodsListMaxY = prmIoMinY + this.$refs.goodsList.$el.clientHeight;
      // console.log('推薦',goodsListMinY,goodsListMaxY);

      if (domScroll >= prmIoMinY && domScroll < prmIoMaxY) {
        this.DlnavbarItemId = 1
        
      } else if (domScroll >= CommentInfoMinY && domScroll < CommentInfoMaxY) {
        this.DlnavbarItemId = 2
        
      } else if (domScroll >= goodsListMinY && domScroll < goodsListMaxY) {
        this.DlnavbarItemId = 3
        
      } else {
        this.DlnavbarItemId = 0
      }
      // console.log(this.DlnavbarItemId);
    },

    /* 
      点击导航栏,跳到对应滚动条位置
    */
    navbarItemId(index){
      // console.log(index);
      // console.log(this.$refs.goodsList.$el.offsetTop,this.$refs.goodsList.$el.clientHeight);
      this.DlnavbarItemId = index;
      let _scrollTop = 0
      switch (index) {
        case 0:
          _scrollTop = 0
          break;
        case 1:
          _scrollTop = this.$refs.paramInfo.$el.offsetTop;
          break;
        case 2:
          _scrollTop = this.$refs.detailCommentInfo.$el.offsetTop;
          break;
        case 3:
          _scrollTop = this.$refs.goodsList.$el.offsetTop;
          break;
        default:
          break; 
      }
      console.log(_scrollTop);
      document.documentElement.scrollTop = _scrollTop
    }
  },
}
</script>

<style scoped>
  .detail {
    position: relative;
    background-color: #eaeaea;
    z-index: 99;
  }
  .detail>div {
    background-color: #fff;
  }
  .navbar-height {
    height: 44px;
  }
  .detail-navbar {
    width: 100%;
    background-color: #fff;
    position: fixed;
    z-index: 100;
  }
  .detail-base-info {
    border-radius: 0 0 10px 10px
  }
  .detail-shop-info {
    margin: 10px 0;
    border-radius: 10px;
  }
  .goods-info {
    border-radius: 10px 10px 0  0;
  }
  .ll {
    width: 100%;
    height: 1000px;
  }
  .detail-comment-info {
    margin-top: 10px;
    border-radius: 10px;
  }
  .detail-back {
    width: 42px;
    /* height: 50px; */
    position: fixed;
    bottom: 100px;
    right: 25px;
    z-index: 99;
    background-color:transparent!important;
  }
  .footbar-height {
    height: 50px;
  }
  .detail .detail-footbar {
    width: 100%; 
    height: 50px;
    position: fixed;
    bottom: 0;
    background-color: #fff;
  }
</style>


