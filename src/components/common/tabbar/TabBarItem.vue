<template>
    <div class="tab-bar-item">
      <!-- <h2>456</h2> -->
      <div :style="activeStyle" @click="clickView">
        <slot name="images"></slot>
        <slot name="text"></slot>
      </div>
      
    </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  data(){
    return {
      // isshow: false
    }
  },
  props: {
    path: String,
    activeColor:{
      type: String,
      default:'#903737'
    }
  },
  computed:{
    isshow() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isshow ? {color: this.activeColor} : {}
    }
  },
  methods:{
    clickView(){
      console.log(this.path);
      this.$router.push('/'+this.path);
      console.log(this.$route.path);
    }
  }
}
</script>

<style scoped>
  .isShow {
    color: #903737;
  }
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    /* line-height: 49px; */
    font-size: 14px;
  }
  .tab-bar-item i {
    display: block;
    margin-top: 3px;
  }
</style>