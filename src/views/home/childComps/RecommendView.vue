<template>
  <div class="recommend">
    <div v-for="(item,index) in recommends" :key='index'>
      <a :href="item.link">
        <img :src="item.image" alt="">
        <p> {{item.title}} </p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  props: {
    recommends:{
      type:Array
    }
  }

}
</script>

<style scoped>
  .recommend {
    width: 100%;
    display: flex;
    /* margin: 10px  0; */
    border-bottom: 10px solid #f2f2f2;
    /* justify-content: center; */
  }
  .recommend div {
    flex: 1;
    /* justify-content: center */
    margin: 15px 5px 20px;
    text-align: center;
  }
  .recommend div img {
    width: 100%;
    margin: 5px 0;
  }
</style>