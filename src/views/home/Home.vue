<template>
  <div ref="home">
    <nav-bar class="nav-bar-bgc" ref="back1">
      <template v-slot:center>
        <h2>蘑菇街</h2>
      </template>
    </nav-bar>
    <home-swiper :banners="banners" @swiperLoad="swiperLoad"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <div class="tabcontrolHeihgt">
      <tab-control
        class="home-tabcontrol"
        :class="{'tabcontrolActive':tabcontrolActive}"
        :titles="titles"
        @tab_click="tab_click"
        ref="tabcontrol"
      ></tab-control>
    </div>
    <back-top class="home-back-top"></back-top>
    <goods-list :goodsList="goodsList" :tabcontrolTop="tabcontrolTop"></goods-list>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/navbar";
import BackTop from "../../components/comtent/backTop/BackTop.vue";
import GoodsList from "../../components/comtent/goods/GoodsList";
import TabControl from "../../components/comtent/tabControl/TabControl.vue";

import { getHomeMultidata, getHomeGoodsdata } from "../../network/home";
import { throttle } from "@/common/utils";

import FeatureView from "./childComps/FeatureView.vue";
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";

export default {
  name: "Home",
  components: {
    NavBar,
    // homeSwiper
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ["流行", "新款", "精选"],
      goods: {
        pop: { type: 0, list: [] },
        new: { type: 0, list: [] },
        sell: { type: 0, list: [] },
      },
      // goodsList:[]
      currentIndex: 0,
      flg: true,
      tabcontrolTop: 0,
      tabcontrolActive: false,
      is_window_fn: false,
      home_scrollTop: 0,
      home_scrollTop2: 0,
    };
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoodsdata("pop");
    this.getHomeGoodsdata("new");
    this.getHomeGoodsdata("sell");
  },
  mounted() {
    this.tabcontrolActive = false;
    // console.log('mounted 状态',this.home_scrollTop2,this.tabcontrolActive);
    // window.addEventListener('scroll',debounce(this.getLoadMore,100))
    // window.addEventListener("scroll", throttle(this.getLoadMore, 40));
    window.addEventListener('scroll',this.getLoadMore);
    // console.log(this.is_window_fn);
  },
  destroyed() {
    // window.removeEventListener('scroll',debounce(this.getLoadMore,100))
    // window.removeEventListener("scroll", throttle(this.getLoadMore, 40));
    window.removeEventListener('scroll',this.getLoadMore);
    console.log(11111);
  },
  activated() {
    if (this.is_window_fn) {
      console.log("活跃的",this.home_scrollTop2);
      document.documentElement.scrollTop = this.home_scrollTop2;
      // window.addEventListener("scroll", throttle(this.getLoadMore, 40));
      window.addEventListener('scroll',this.getLoadMore);
    }
  },

  // deactivated(){
  //   this.is_window_fn = true;
  //   // this.home_scrollTop2 = document.documentElement.scrollTop;
  //   console.log('不活跃的home_scrollTop2高度:'+this.home_scrollTop2);
  //   // this.home_scrollTop = document.documentElement.scrollTop;
  //   // console.log(document.documentElement.scrollTop);
  //   // console.log(this.home_scrollTop);
  //   window.removeEventListener('scroll',throttle(this.getLoadMore,40));
  //   // window.removeEventListener('scroll',this.getLoadMore);
  //   document.documentElement.scrollTop = 0
  // },
  computed: {
    /*
    这是是点击导航栏,传入点击的index值,获取对应的googlist数据处理
    */
    goodsList() {
      let arr = Object.values(this.goods)[this.currentIndex].list;
      return arr.map((n) => {
        let obj = {};
        obj.img = n.show.img;
        obj.price = n.orgPrice;
        obj.title = n.title;
        obj.sale = n.sale;
        obj.iid = n.iid;
        return obj;
      });
    },
  },
  methods: {
    tab_click(index) {
      // console.log(Object.values(this.goods)[index]);
      // console.log(this.goods[index]);
      // this.goodsList = Object.values(this.goods)[index].list
      if (this.currentIndex !== index) {
        // console.log('home.currentIndex !== index');
        this.currentIndex = index;
        document.documentElement.scrollTop =
          document.documentElement.scrollTop > this.tabcontrolTop
            ? this.tabcontrolTop
            : document.documentElement.scrollTop;
      } else {
        // console.log('==');
      }
    },
    getLoadMore() {
      // console.log('this.flg',this.flg);
      this.home_scrollTop = document.documentElement.scrollTop;
      // console.log(this.home_scrollTop);
      if (!this.flg) return;
      // debounce(function(){
      // this.home_scrollTop = document.documentElement.scrollTop
      // },500)
      let domScrollHeight = document.documentElement.scrollHeight;

      //这个是tabcontrolTop栏 滚动到顶部,改变css吸顶的效果
      if (this.tabcontrolTop < this.home_scrollTop) {
        console.log("tabcontrolTop", this.tabcontrolTop);
        // console.log(121111);
        this.tabcontrolActive = true;
      } else {
        this.tabcontrolActive = false;
      }
      // console.log("this.tabcontrolActive", this.tabcontrolActive);

      //滚动到底部触发获取更多数据
      if (this.home_scrollTop + 1000 > domScrollHeight) {
        // console.log(this);
        this.getHomeGoodsdata(Object.keys(this.goods)[this.currentIndex]);
        this.flg = false;
      }
    },
    swiperLoad() {
      console.log("swiperload");
      console.log(
        "tabcontrolTop距离页面顶部的高度" + this.$refs.tabcontrol.$el.offsetTop
      );
      // this.tabcontrolTop = this.$refs.tabcontrol.$el.offsetTop;
      // console.log(this.tabcontrol);
      this.tabcontrolTop = this.$refs.tabcontrol.$el.offsetTop;
    },

    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res);
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
        // console.log(this.banners);
      });
    },
    getHomeGoodsdata(type) {
      const num = this.goods[type].type + 1;
      console.log(num);
      getHomeGoodsdata(type, num).then((res) => {
        // console.log(res);
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].type += 1;
        console.log(this.goods[type].list, this.goods[type].type);
        this.flg = true;
      });
    },
    homeRouteLeave() {
      this.is_window_fn = true;
      this.home_scrollTop2 = document.documentElement.scrollTop;
      // this.home_scrollTop = document.documentElement.scrollTop;
      // window.removeEventListener("scroll", throttle(this.getLoadMore, 40));
      window.removeEventListener('scroll',this.getLoadMore);
      // document.documentElement.scrollTop = 0;
      console.log('homeRouteLeave',this.home_scrollTop2);
    },
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    this.homeRouteLeave();
    // window.removeEventListener("scroll",);
    next();
  },
  // beforeRouteEnter(to, from, next) {
  //   // 在渲染该组件的对应路由被 confirm 前调用
  //   // 不！能！获取组件实例 `this`
  //   // 因为当守卫执行前，组件实例还没被创建
  //   next((vm) => {
  //     // 通过 `vm` 访问组件实例
  //     console.log(vm.home_scrollTop);
  //     console.log(vm);
  //     console.log(vm.home_scrollTop2);
  //   });
  // },
};
</script>

<style>
.nav-bar-bgc {
  background-color: #ff8198;
  color: #f2f2f2;
}
.home-tabcontrol {
  /* position:sticky;
    top: 0;
    z-index: 99;
    background-color: #fff; */
}
.home-back-top {
  width: 40px;
  position: fixed;
  bottom: 80px;
  right: 25px;
  z-index: 999;
}
.tabcontrolHeihgt {
  height: 40px;
}
.tabcontrolActive {
  position: fixed;
  top: 0;
  z-index: 99;
  background-color: #fff;
}
</style>