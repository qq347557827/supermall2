<template>
  <div class="base-info" v-if="Object.keys(Goods).length">
    <div class="info-title"> 
      <span>{{Goods.title}}</span>  
    </div>
    <div class="price">
      <span class="new-price"> {{Goods.newPrice}} </span>
      <span class="old-price" v-if="Goods.oldPrice"> {{Goods.oldPrice}} </span>
      <span class="discount" v-if="Goods.discount">  {{Goods.discount}} </span>
    </div>
    <div class="columns" v-if="Goods.columns">
      <div><span> {{Goods.columns[0]}} </span></div>
      <div class="favorites" ><span> {{Goods.columns[1]}} </span></div>
      <div><span class="delivery-time"> {{Goods.services[Goods.services.length-1].name}} </span></div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    Goods: {
      type: Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .base-info {
    width: 100%;
    padding: 10px;
  }
  .info-title span {
    line-height: 1.5rem;
  }
  .price {
    height: 26px;
    margin: 10px 0;
    line-height: 26px;
  }
  .new-price {
    font-size: 22px;
    color: var(--color-high-text);
  }
  .old-price {
    font-size: 12px;
    color: #999;
    text-decoration: line-through;
    margin-right: 5px;
  }
  .discount {
    /* display: inline-block; */
    color: #fff;
    height: 12px;
    /* line-height: 26px; */
    font-size: 12px;
    background-color: var(--color-high-text);
    padding: 2px 5px;
    border-radius: 9px;
    /* margin-top: -5px; */
    margin-bottom: 5px;
  }
  .columns {
    display: flex;
    padding: 5px 0;
  }
  .columns div {
    flex: 1;
    font-size: 12px;
  }
  .delivery-time {
    float: right;
  }
  .favorites {
    text-align: center;
  }
</style>