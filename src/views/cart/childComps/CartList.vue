<template>
  <div>
    <cart-list-item class="cart-list-item"
      v-for="(item,index) in $store.state.cartInfo" :key="index"
      :itemData="item" :itemIndex="index"
    >
    </cart-list-item>
    <cart-list-bar></cart-list-bar>
  </div>
</template>

<script>
import CartListBar from './CartListBar.vue'
import CartListItem from './CartListItem.vue'
export default {
  components: { CartListItem, CartListBar },
  
}
</script>

<style scoped>
  
</style>