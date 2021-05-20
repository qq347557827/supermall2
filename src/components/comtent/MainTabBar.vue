<template>
  <div>
    <!-- <h1>123</h1> -->
      <tab-bar>
        <tab-bar-item v-for="(item,index) in tabbarList" :path="item.name" :key="index" >
          <template v-slot:images>
            <!-- <img :src="item.url" alt=""> -->
            <i class="iconfont" v-html="item.url"></i>
          </template>
          <template v-slot:text>
            <div> {{item.text}} </div>
          </template>    
        </tab-bar-item>
      </tab-bar>
    </div>
</template>

<script>
// import TabBar from '../common/tabbar/TabBar';
import TabBar from '../common/tabbar/TabBar';
import TabBarItem from '../common/tabbar/TabBarItem';

export default {
  name:'MainTabBar',
   data(){
    return {
      tabbarList: [
        { name:'home',
          url:'&#xe611;',
          // url:require('./assets/img/tabbar/home.svg'),
          text: '首页'
        },
        {
          name:'sort',
          url:'&#xe7f9;',
          // url:require('./assets/img/tabbar/sort.svg'),
          text: '分类'
        },
        {
          name:'cart',
          url:'&#xe607;',
          // url:require('./assets/img/tabbar/cart.svg'),
          text: '购物车'
        },
        {
          name: 'profile',
          url:'&#xeaa8;',
          // url:require('./assets/img/tabbar/profile.svg'),
          text: '我的'
        }
      ]
    }
  },
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>
  
</style>