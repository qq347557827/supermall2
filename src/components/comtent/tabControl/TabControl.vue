<template>
  <div class="tabcontrol">
    <div v-for="(item,index) in titles" :key="index"> 
      <span @click="changeCurrentIndex(index)" :class="{active:index==currentIndex}"> {{item}} </span> 
    </div>  
  </div>
</template>

<script>
export default {
  props:{
    titles:{
      type: Array,
      default(){
        return []
      }
    },
    
  },
  data(){
    return {
      currentIndex : 0,
    }
  },
  methods:{
    changeCurrentIndex(index){
      this.currentIndex = index;
      this.$emit('tab_click',index);
    }
  }
}
</script>

<style>
  .tabcontrol {
    display: flex;
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    /* background-color: pink; */
  }
  .tabcontrol div {
    flex: 1;
  }
  .tabcontrol span {
    padding: 5px;
    
  }
  .active {
    color: var(--color-tint);
    border-bottom: 3px solid #ff8198;
  }
</style>