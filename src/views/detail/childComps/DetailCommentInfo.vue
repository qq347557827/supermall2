<template>
  <div class="comment-info">
    <div class="head">
      <span>用户评价</span>
      <span v-if="rate.list">{{rate.list.length}}</span>
      <i class="iconfont" v-if="rate.list&&rate.list.length>2">&#xe653;</i>
    </div>
    <div v-if="rate.list">
      <rate-item v-for="(item,index) in rate.list" :key="index" :item="item"></rate-item>
    </div>
    <div v-else class="not-rate">暂无评价</div>
  </div>
</template>

<script>
import RateItem from '../../../components/comtent/rateItem/RateItem.vue'
export default {
  components: { RateItem },
  props: {
    rate: {
      type: Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .comment-info {
    padding: 0 15px;
  }
  .head {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #eee;
  }
  .head i {
    float: right;
  }
  .not-rate {
    padding: 15px 0;
    font-size: 14px;
  }
</style>