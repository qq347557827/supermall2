<!-- 组件说明 -->
<template>
  <div class="item-bg">
    <div class="view">
      <ul class="goods-category">
        <li v-for="(item,index) in itemCategory" :key="index">
          <a :href="item.link">
            <div class="category-img">
              <img :src="item.image" />
            </div>
            <span>{{item.title}}</span>
          </a>
        </li>
      </ul>
      <div>
        <tab-control :titles="titles"></tab-control>
        <goods-list :goodsList="itemGoodsData"></goods-list>
      </div>
    </div>
  </div>
</template>

<script>
import GoodsList from '../../../components/comtent/goods/GoodsList.vue';
import TabControl from '../../../components/comtent/tabControl/TabControl.vue';
//import x from ''
export default {
  components: {TabControl, GoodsList},
  data() {
    return {
      titles:['综合', '新品', '销量'],
    };
  },
  props: {
    itemCategory: {
      type: Array,
    },
    itemGoodsData: {
      type: Array
    }
  },
  computed: {},
  methods: {},
};
</script>

<style scoped>
/* @import url() */
.item-bg {
  width: 100vw;
  height: 100vh;
  padding: 44px 0 49px 90px;
}
.view {
  width: 100%;
  height: 100%;
  overflow: scroll;
}
.goods-category {
  padding: 15px 10px;
}
.goods-category::after {
  content: "";
  display: block;
  height: 0;
  width: 100%;
  clear: both;
  font-size: 0;
  line-height: 0;
}
.goods-category li {
  float: left;
  width: 88px;
  padding: 10px 0;
  /* height: 95px; */
  text-align: center;
}
.category-img {
  margin: 0 10px 5px;
}
.goods-category img {
  width: 100%;
}
</style>