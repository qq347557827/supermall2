<template>
  <div >
    <navbar>
      <template v-slot:left>
        <div @click="clickBack">
          <i class="iconfont iconfont-back">&#xe6b0;</i>
        </div>  
      </template>
      <template v-slot:center >
        <div class="dcenter">
          <div v-for="(item,index) in titles" 
                :key="index" @click="clickActive(index)"
                :class="{'detail-active':DlnavbarItemId==index}">
            <span>{{ item }}</span>
          </div>
        </div>
      </template>
      <template v-slot:right>
        <div @click="toCark">
          <i class="iconfont iconfont-cark">&#xe607;
            <span class="add-cart" v-show="$store.state.newCartCount > 0"> {{$store.state.newCartCount}}</span>
          </i>
        </div>
      </template>
    </navbar>
  </div>
</template>

<script>
import navbar from '../../../components/common/navbar/navbar'

export default {
  components: { navbar },
  data() {
    return {
      titles: ['商品','参数','评价','推荐'],
      // activeIndex: this.DlnavbarItemId,
    } 
  },
  props: {
    DlnavbarItemId: {
      type: Number,
      default(){
        return 0
      }
    }
  },
  methods: {
    clickActive(index){
      if(this.DlnavbarItemId !== index) {
        // this.activeIndex = index;
        console.log(index);
        this.$emit('navbarItemId',index)
      }
    },
    clickBack(){
      this.$router.back()
    },
    toCark(){
      this.$store.commit('updateNewCartCount')
      this.$router.push('/cart')
    }
  }
}
</script>

<style scoped>

  .dcenter {
    display: flex;
    justify-content:space-around;
    padding: 0 20px;
  }
  .dcenter>div {
    flex: 1;
    margin: 0 -5px;
    font-size: 14px;
  }
  .iconfont-back {
    font-size: 22px;
    margin-left: -10px;
  }
  .iconfont-cark {
    position: relative;
    font-size: 22px;
  }
  .add-cart {
    /* height: 12px; */
    line-height: 12px;
    border-radius: 50%;
    padding: 2px  5px;
    position: absolute;
    font-size: 10px;
    top: -6px;
    right: -10px;
    color: #fff;
    background-color: #ff5777;
    opacity: .8;
  }
  .detail-active {
    color:var(--color-tint);
  }
</style>